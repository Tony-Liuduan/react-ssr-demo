/**
 * @fileoverview 
 * @author liuduan
 * @Date 2020-06-24 20:45:39
 * @LastEditTime 2020-06-25 09:37:37
 */
import * as Koa from 'koa';
import * as favicon from 'koa-favicon';
import * as serve from 'koa-static';

const app = new Koa();
app.use(ctx => {
    ctx.body = `<p>test server<p>`;
});
app.listen('6025', () => {
    console.log(`🍻 server is running at http://localhost:6025`);
});