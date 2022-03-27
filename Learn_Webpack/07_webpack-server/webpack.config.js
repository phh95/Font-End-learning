// 导入 Node 的 path 模块
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 导入 Webpack 内置的 DefinePlugin 插件
const { DefinePlugin } = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    // mode设置模式，分为 开发模式和生产模式(准备打包上线的时候，才用这个)
    mode: "development",
    // 设置source-map，建立bundle.js映射文件，方便调试代码和错误 
    devtool: "source-map",
    // watch: true,
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "js/bundle.js",
    },
    module: {
        rules: [{
                test: /\.css$/, // 正则表达式
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
            }, {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: "asset",
                // 配置打包后的路径和文件名
                generator: {
                    filename: "img/[name]_[hash:6][ext]"
                },
                // 小于 maxSize 的图片，使用base64进行编码   
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024
                    }
                }
            },
            {
                test: /\.(eot|ttf|woff2?)$/,
                type: "asset/resource",
                generator: {
                    filename: "font/[name]_[hash:6][ext]"
                }
            },
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    // 使用Webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new DefinePlugin({
            BASE_URL: "'./'",
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false
        }),
        new CopyWebpackPlugin({
            // patterns 是匹配的意思
            patterns: [{
                // 从public文件夹复制到build文件夹
                from: "public",
                to: "./",
                globOptions: {
                    ignore: [
                        // 忽略文件夹下所有叫index.html的文件，不要对其进行复制
                        "**/index.html"
                    ]
                }
            }]
        }),
        new VueLoaderPlugin()
    ]
}