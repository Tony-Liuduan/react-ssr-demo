/**
 * @fileoverview node server entry
 * @author liuduan
 * @Date 2020-06-26 11:57:12
 * @LastEditTime 2020-06-27 10:17:42
 */
import path from 'path';
import fs from 'fs';
import config from 'config';

import Koa from 'koa';
import favicon from 'koa-favicon';
import staticServe from 'koa-static';
import Router from 'koa-router';
import swigRender from 'koa-swig';
import co from 'co';
import bigpipe from '@/server/utils/bigpipe';

import 'isomorphic-unfetch';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { createServerStore } from '@/shared/store';
import App from '@/shared/App';
import routes from '@/shared/routes';
import manifest from '@dist/assets/manifest.json';



// 抓取全局异常
process.on('uncaughtException', err => {
    console.log(err, 'caught_by_uncaughtException');
    throw err;
});

// 抓取异步异常
process.on('unhandledRejection', function (err, p) {
    console.log(err, 'caught_by_unhandledRejection');
});


const PORT = config.get('port');
const app = new Koa();
const router = new Router();


app.use(favicon('favicon.ico'));
app.use(staticServe('dist/assets'));
app.context.render = co.wrap(new swigRender({
    root: path.resolve('dist/templates'),
    autoescape: false,
    cache: process.env.NODE_ENV === 'development' ? false : 'memory',
    ext: 'html',
    writeBody: false,
}));


function getScriptsAssets(pagename: string) {
    if (!manifest) {
        return [];
    }

    const fileList = [
        'runtime',
        'vendor',
        'commons',
        pagename,
    ]

    const scripts = [];

    for (const filename of fileList) {
        let filePath;
        if (filePath = manifest[`${filename}.js`]) {
            scripts.push(filePath);
        }
    }

    return scripts;
}

function outputScripts(scripts: string[]) {
    return scripts.map(src => `<script type="text/javascript" src="${src}"></script>`).join('\n');
}

async function updateReduxStore(ctx, store: Store) {
    const branch = matchRoutes(routes, ctx.url);
    const promises = branch.map(({ route, match }) => {
        return route.loadData ? route.loadData(store) : Promise.resolve(null);
    });

    await Promise.all(promises);

    return `<script type="text/javascript">window.__SSR_REDUX_STOR__=${JSON.stringify(store.getState())};</script>`
}

async function outputMarkup(ctx, store: Store) {
    return ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter
                location={ctx.url}
                context={ctx}
            >
                <App />
            </StaticRouter>
        </Provider>
    );
}

async function getTemplatePathByPagename(pagename: string): Promise<string> {
    return new Promise((resolve, reject) => {
        let templatePath = path.resolve(`src/client/template/${pagename}.html`);
        fs.stat(templatePath, (err, stat) => {
            if (stat && stat.isFile()) {
                resolve(templatePath)
            } else {
                resolve(path.resolve('src/client/template/index.html'));
            }
        });
    });
}

async function renderTemplate(templatePath: string, options) {

}

app.use(async (ctx, next) => {
    try {
        await next();
    } catch (error) {
        ctx.body = error;
    }
})

router
    .get('/api/about', (ctx, next) => {
        ctx.body = {
            code: 0,
            msg: 'success',
            data: '我是api接口后端返回的about数据内容'
        }
    })
    .get(['/', '/about'], async (ctx, next) => {
        const pagename = 'index';
        const store = createServerStore();

        const scripts = getScriptsAssets(pagename);
        await updateReduxStore(ctx, store);
        // 注意：这里需要先处理完store在markup
        const markup = await outputMarkup(ctx, store);

        const html = await ctx.render(pagename, {
            title: 'react-ssr-demo',
            markup,
            reduxStore: JSON.stringify(store.getState()),
            scripts
        });
        await bigpipe(ctx, html);
    });


app.use(router.routes()).use(router.allowedMethods());


app.listen(PORT, () => {
    console.log(`🍻🍻 node server is running on http://localhost/${PORT}`);
}).on('clientError', (err, socket) => {
    // handleErr(err, 'caught_by_koa_on_client_error');
    socket.end('HTTP/1.1 400 Bad Request Request invalid\r\n\r\n');
});