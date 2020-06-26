/**
 * @fileoverview client webpack config
 * @author liuduan
 * @Date 2020-06-24 20:44:42
 * @LastEditTime 2020-06-26 19:12:37
 */

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { minify } = require('html-minifier'); // html压缩
const ManifestPlugin = require('webpack-manifest-plugin');


const cwdPath = process.cwd();


module.exports = {
    entry: {
        index: path.join(cwdPath, 'src/client/pages/index.tsx'),
    },
    output: {
        path: path.join(cwdPath, 'dist/assets'),
    },
    module: {
    },
    optimization: {
        runtimeChunk: {
            name: 'runtime',
        },
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/, // 匹配node_modules中的模块
                    chunks: 'initial',
                    name: 'vendor',
                    priority: -10, // 优先级，当模块同时命中多个缓存组的规则时，分配到优先级高的缓存组
                    enforce: true,
                },
                // TODO: config async
                commons: {
                    chunks: 'all', // 加入按需加载后，设为all将所有模块包括在优化范围
                    name: 'commons',
                    minChunks: 2,
                    minSize: 0,
                    priority: -20,
                    maxInitialRequests: 5, // 默认为3，无法满足我们的分包数量，注意这里数量是指除page.js外的chunk包数量，包括vender，runtime
                    reuseExistingChunk: true, // 是否复用已经从原代码块中分割出来的模块
                },
            },
        },
    },
    plugins: [
        new CleanWebpackPlugin(),

        new ManifestPlugin(),

        // 把templates复制到dist文件，这些是不需要打包的html模板文件
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/client/templates',
                    to: '../templates',
                    transform(content) {
                        // 压缩html
                        const result = minify(content.toString('utf-8'), {
                            collapseWhitespace: true, // 空格换行去掉
                            removeAttributeQuotes: true, // 属性引号去掉
                            removeEmptyAttributes: true, // 空属性去掉
                            removeComments: true, // 注释去掉
                        });
                        return result;
                    }
                },
            ],
        }),
    ],
}