/**
 * @fileoverview client production webpack config
 * @author liuduan
 * @Date 2020-06-26 10:31:52
 * @LastEditTime 2020-06-26 11:21:49
 */
const TerserPlugin = require('terser-webpack-plugin'); // js 压缩

module.exports = {
    output: {
        publicPath: '/',
        filename: 'scripts/[name].[contenthash:8].bundle.js', 
    },
    module: {
    },
    optimization: {
        minimize: true, // 是否开启压缩，production环境默认true
        minimizer: [ // 使用压缩用具
            new TerserPlugin({
                test: /\.js(\?.*)?$/i, // 仅仅压缩js文件
                cache: true, // Default: true
                parallel: true, // 默认：os.cpus().length - 1.
                terserOptions: {
                    // 在删除没有用到的代码时不输出警告
                    warnings: false,
                    compress: {
                        // 删除所有的 `console` 语句
                        // 还可以兼容ie浏览器
                        drop_console: true,
                        // 内嵌定义了但是只用到一次的变量
                        collapse_vars: true,
                        // 提取出出现多次但是没有定义成变量去引用的静态值
                        reduce_vars: true,
                    },
                    output: {
                        // 删除所有的注释 false-删除，true-保留
                        comments: false,
                        // 最紧凑的输出 false-紧凑，true-不紧凑
                        beautify: false,
                    },
                },

            }),
        ],
    },
    plugins: [
    ],
}