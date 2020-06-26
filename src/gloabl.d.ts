/**
 * @fileoverview 声明全局ts类型
 * @author liuduan
 * @Date 2020-06-26 13:58:36
 * @LastEditTime 2020-06-26 17:42:24
 */
interface Window {
    __SSR_REDUX_STORE__: object;
    [propname: string]: any;
}


// 运行导入json文件
declare module '*.json' {
    const value: any;
    export default value;
}

declare module 'koa-swig' {
    const swigRender: any;
    export default swigRender;
}