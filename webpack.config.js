/**
 * @fileoverview 
 * @author liuduan
 * @Date 2020-06-26 10:25:09
 * @LastEditTime 2020-06-26 14:59:28
 */
const path = require('path');
const argv = require('yargs-parser')(process.argv.slice(2));
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');


const merge = require('webpack-merge');
const mode = argv.mode || 'development';
const env = argv.env || 'client';
const webpackEnvConfig = require(`./build/${env}/webpack.config.js`);
const webpackModeConfig = require(`./build/${env}/webpack.${mode}.js`);


require('node-bash-title')(`${env}-${mode} 🦏🦏`);


const webpackBaseConfig = {
    mode,
    watch: mode === 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                include: path.resolve('src'),
                use: [
                    {
                        loader: 'thread-loader', // 开启多线程，适用于dist-js 20+多入口项目, 慎用，小项目反而会慢
                    },
                    {
                        loader: 'cache-loader',
                    },
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
            '@': path.resolve('src'),
            '@dist': path.resolve('dist'),
        },
    },
    plugins: [
        // 显示打包进度
        new ProgressBarPlugin(),

        // 编译出错退出进程
        function webpackBuildEnd() {
            this.hooks.done.tap('done', (stats) => {
                if (
                    mode !== 'development'
                    && stats.compilation.errors
                    && stats.compilation.errors.length
                    && process.argv.indexOf('--watch') === -1
                ) {
                    console.log(' 👻👻👻👻👻 Webpack编译出错', stats.compilation.errors);
                    process.exit(1); // 错误退出，0是正常退出，jenkins看到1就会邮件通知你了
                }
            });
        },
    ],
}


const smp = new SpeedMeasurePlugin();
module.exports = smp.wrap(merge(webpackBaseConfig, webpackEnvConfig, webpackModeConfig));