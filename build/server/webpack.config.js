/**
 * @fileoverview server webpack config
 * @author liuduan
 * @Date 2020-06-24 20:44:42
 * @LastEditTime 2020-06-26 11:24:52
 */
const path = require('path');
const nodeExternals = require('webpack-node-externals');


const cwdPath = process.cwd();


module.exports = {
    target: 'node',
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