const webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); // 压缩css代码

console.log('welcome', process.env.PROD_NAME);
 
const prodWebpackConfig = WebpackMerge.merge(baseWebpackConfig, {
    mode: 'production',
    devtool: 'source-map', // 生产环境可在浏览器上调试源码，不建议，这样会暴露源码。可设置为none
    optimization: {
      minimizer: [
        new OptimizeCSSAssetsPlugin({})   // 压缩css代码，去掉空格这些，在安装在生产环境下
      ]
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env.PROD_NAME': JSON.stringify(process.env.PROD_NAME), // 此插件用于定义一些源文件可以拿到的变量
        })
    ]
  });
module.exports = prodWebpackConfig;