/**
 * @fileoverview bigpipe ssr big html file
 * @author liuduan
 * @Date 2020-06-26 17:57:30
 * @LastEditTime 2020-06-26 18:25:31
 */
import { Readable } from 'stream';


/**
 * @description 响应大文件html，分块输出给浏览器方式
 * @param {ctx} ctx
 * @param {string} html
 * @return {promise}
 */
export default function bigpipe(ctx, html: string): Promise<void | Error> {
    return new Promise((resolve, reject) => {
        const rs = new Readable();
        rs.push(html);
        rs.push(null);
        ctx.status = 200;
        ctx.type = 'text/html';
        rs.on('error', reject);
        rs.on('end', resolve);
        rs.pipe(ctx.res);
    });

}