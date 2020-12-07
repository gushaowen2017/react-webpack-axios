const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//推荐只用于生产环境，因为该插件在开发环境下会导致HMR功能缺失，所以日常开发中，还是用style-loader。

console.log('welcome', process.env.PROD_NAME);
// 根据环境做不同的配置，这里需要在npm scripts里结合cross-env使用
const devMode = process.env.PROD_NAME !== 'production';// 不是生产就是开发

module.exports = {
    entry: {
        app: './src/main.js'//用这句打出来的包名就是app
    },
    // entry: path.resolve(__dirname, '../src/main.js'),//用这句打出来的包名就是main
    output: {
        path: path.resolve(__dirname, '../dist'), //打包后的文件资源在dist文件下
        filename: 'js/[name].[hash:8].js' // 打包后文件名为mian.js
    },
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: [
                    {
                        // 开发环境不提取css，打包更快
                        loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    },
                    // {
                    //     loader: 'style-loader'
                    // },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            // },
            {
                // src目录下面以.js结尾的文件都要使用babel解析
                // cacheDirectory是用来缓存的，下次编译加速
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, '../src')
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 1024,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'img/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(mp4|webm|ogg|wav)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 1024,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'media/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
        ]
    },
    //为了方便我们开发者，比如文件的别名、文件的扩展名等
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            pages: path.join(__dirname, '../src/*/**.js'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'GSW', // <title>标签的内容
            template: './index.html', // 以哪一个html为模版
        }),
        new webpack.DefinePlugin({
            'process.env.PROD_NAME': JSON.stringify(process.env.PROD_NAME), // 此插件用于定义一些源文件可以拿到的变量
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: "css/[id].css"
        }),
    ],
    // 生成的包的配置
    performance: {
        hints: "warning", // 枚举
        maxAssetSize: 30000000, // 整数类型（以字节为单位）
        maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
        assetFilter: function(assetFilename) {
            // 提供资源文件名的断言函数
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        }
    },
    //
    optimization: {
        splitChunks: {//来进行公共部分的代码提取
            cacheGroups: {
                //打包公共模块
                commons: {
                    chunks: 'initial', //initial表示提取入口文件的公共部分
                    minChunks: 2, //表示提取公共部分最少的文件数
                    minSize: 0, //表示提取公共部分最小的大小
                    name: 'commons' //提取出来的文件命名
                }
            }
        }
    }
}