const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
	mode: 'development',
  	entry: {
    	app: './src/main.js'
  	},
   	output: {
   	 	filename: 'js/[name].js', // 打包后文件名为mian.js
    	path: path.resolve(__dirname, '../dist') //打包后的文件资源在dist文件下
  	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [{loader: MiniCssExtractPlugin.loader,}, 'css-loader']
			},
		]
	},

	plugins: [
		new MiniCssExtractPlugin({
          	filename: 'css/[name].[contenthash].css',
			chunkFilename: "css/[id].css"
		}),
	  	new HtmlWebpackPlugin({
	  		title: 'GSW', // <title>标签的内容
	  		template: './index.html', // 以哪一个html为模版
	  	}),
	]
}