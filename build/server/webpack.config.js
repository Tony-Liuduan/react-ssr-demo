/**
 * @fileoverview server webpack config
 * @author liuduan
 * @Date 2020-06-24 20:44:42
 * @LastEditTime 2020-06-26 15:34:12
 */
const path = require('path');
const nodeExternals = require('webpack-node-externals');


const cwdPath = process.cwd();


module.exports = {
    target: 'node',
    node: {
        __dirname: false // 否则__dirname就会被webpack处理为'/'
    },
    entry: {
        app: path.join(cwdPath, 'src/server/app.tsx'),
    },
    output: {
        filename: '[name].js',
        path: path.join(cwdPath, 'dist'),
    },
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    plugins: [
    ],
}