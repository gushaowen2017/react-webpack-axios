const baseWebpackConfig = require('./webpack.base.config');
const WebpackMerge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

console.log('welcome', process.env.PROD_NAME);
const devWebpackConfig = WebpackMerge.merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map', // 可在浏览器控制台调试源码,不过会减慢打包速度
    devServer: {
      contentBase: path.resolve(__dirname, "../dist"), // 告诉服务器文件资源在哪里
      host: 'localhost',
      port: 8000,
      hot: true,
  		open: true,
  		hot: true,
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),  // 模块热更新插件
        new webpack.DefinePlugin({
          'process.env.PROD_NAME': JSON.stringify(process.env.PROD_NAME), // 此插件用于定义一些源文件可以拿到的变量
        })
    ]
  });
module.exports = devWebpackConfig