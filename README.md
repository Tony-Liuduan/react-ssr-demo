## 开发关键帧

1. koa server start
2. client webpack环境配置
3. renderToString
4. npm-run-all ？？ 和 watch 冲突，不好用
5. react-router 客户端用BrowserRouter,服务端用StaticRouter
6. isomorphic-unfetch node server fetch  Data Loading
    https://reacttraining.com/react-router/web/guides/server-rendering

    ```js
    function r(m){return m && m.default || m;}
    // 这里global === window
    module.exports = global.fetch = global.fetch || (
	    typeof process == 'undefined' ? r(require('unfetch')) : (function(url, opts) {
		    return r(require('node-fetch'))(url.replace(/^\/\//g, 'https://'), opts);
	    });
    );
    ```
7. 服务端，客户端创建2个store，维护状态


TODO: 
0. 同构-再过一遍，异步模块，css解析
1. 实现并发5个请求
2. 水果、苹果题
3. react hooks 实现 redux
4. react diff
5. 闭包、执行上文复习
6. css复习
7. git rebase & git merge
8. 算法题 3 + 复习