/**
 * @fileoverview node server entry
 * @author liuduan
 * @Date 2020-06-26 11:57:12
 * @LastEditTime 2020-06-26 14:20:38
 */
import config from 'config';

import Koa from 'koa';
import favicon from 'koa-favicon';
import staticServe from 'koa-static';
import Router from 'koa-router';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { createServerStore } from '@/shared/store';
import App from '@/shared/App';
import routes from '@/shared/routes';



const PORT = config.get('port');
const app = new Koa();
const router = new Router();


app.use(favicon('favicon.ico'));
app.use(staticServe('dist/assets'));


router
    .get('/api/about', (ctx, next) => {
        ctx.body = {
            code: 0,
            msg: 'success',
            data: '我是api接口后端返回的about数据内容'
        }
    })
    .get(['/', '/about'], async (ctx, next) => {
        const store = createServerStore();
        const branch = matchRoutes(routes, ctx.req.url);
        const promises = branch.map(({ route, match }) => {
            return route.loadData ? route.loadData(store) : Promise.resolve(null);
        });
        await Promise.all(promises);
        const markup = ReactDOMServer.renderToString(
            <Provider store={store}>
                <StaticRouter
                    location={ctx.req.url}
                    context={ctx}
                >
                    <App />
                </StaticRouter>
            </Provider>
        );

        ctx.body = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>react-ssr-demo</title>
</head>
<body>
    <div id="root">${markup}</div>
    <script>window.__SSR_REDUX_STOR__=${JSON.stringify(store.getState())};</script>
    <script src="/scripts/runtime.bundle.js"></script><script src="/scripts/vendor.bundle.js"></script><script src="/scripts/index.bundle.js"></script></body>
</body>
</html>
`;
    });
app.use(router.routes()).use(router.allowedMethods());


app.listen(PORT, () => {
    console.log(`🍻🍻 node server is running on http://localhost/${PORT}`);
})