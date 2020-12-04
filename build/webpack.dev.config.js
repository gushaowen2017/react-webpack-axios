const path = require('path');
const baseWebpackConfig = require('./webpack.base.config');
const WebpackMerge = require('webpack-merge');
const webpack = require('webpack');

const devWebpackConfig = WebpackMerge.merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map', // 可在浏览器控制台调试源码,不过会减慢打包速度
    devServer: {
        contentBase: path.resolve(__dirname, "../dist"), // 告诉服务器文件资源在哪里
        host: 'localhost',
        port: 8000,
        hot: true,
        open: true,
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),  // 模块热更新插件
    ]
});
module.exports = devWebpackConfig;