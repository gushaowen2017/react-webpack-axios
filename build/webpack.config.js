const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//为html文件中引入的外部资源如script、link动态添加每次compile后的hash，防止引用缓存的外部文件问题, 可以生成创建html入口文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//在生产模式下，webpack自动将JS进行压缩。MiniCssExtractPlugin 推荐只用于生产环境，因为该插件在开发环境下会导致HMR功能缺失，所以日常开发中，还是用style-loader。
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const glob = require("glob-all");
const PurifyCssPlugin = require('purifycss-webpack');//消除未使用的css

module.exports = {
    mode: 'development',
    entry: {
        app: path.join(__dirname, '../src/index.js')
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    devServer: {
        hot: true,
        open: true,
        host: 'localhost',
        port: 8000,
        contentBase: path.resolve(__dirname, '../dist')// 日常开发时用的是dist里的资源，（每次热更新就会更新dist）
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, '../src')
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,//"style-loader"
                    },
                    {loader: "css-loader"},
                    // {
                    //     loader: "postcss-loader",
                    //     options: {
                    //         postcssOptions: (loader) =>[
                    //             require('autoprefixer')(),
                    //         ]
                    //     }
                    // },
                    {loader: "less-loader"},
                ],
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
                test: /\.(mp4|webm|ogg|mp3|wav)(\?.*)?$/,
                use: [
                    {
                        loader: "url-loader",//url-loader封装了file-loader,它的工作原理：1.文件大小小于limit参数，url-loader将会把文件转为Base64；2.文件大小大于limit，url-loader会调用file-loader进行处理，参数也会直接传给file-loader
                        options: {
                            limit: 1024,
                            fallback: {
                                loader: 'file-loader',//file-loader可以用来帮助webpack打包处理一系列的图片文件；比如：.png 、 .jpg 、.jepg等格式的图片。打包的图片会给每张图片都生成一个随机的hash值作为图片的名字
                                options: {
                                    name: 'media/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'gsw', // <title>标签的内容
            template: path.resolve(__dirname, '../index.html')
        }),
        // new CleanWebpackPlugin(),//每次只需打包时都会删除前一次的打包记录
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[id].[contenthash].css'
        }),
        /*new OptimizeCssAssetsPlugin(),// 普通压缩
        new PurifyCssPlugin({
            paths: glob.sync([
                path.join(__dirname, '/.html'),
                path.join(__dirname, '../index.html'),
                path.join(__dirname, '../src/!*!/!*.jsx')
            ])
        }),// 清理无用的css*/
    ],
    optimization: {// 核心配置
        splitChunks: {
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
    },
    resolve: {//该选项只是为了方便我们开发者，比如文件的别名、文件的扩展名等
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            pages: path.join(__dirname, '../src/pages'),
            // components: path.join(__dirname, '../src/components'),
            // actions: path.join(__dirname, '../src/redux/actions'),
            // reducers: path.join(__dirname, '../src/redux/reducers'),
            // images: path.join(__dirname, '../src/images')
        }
    }
}