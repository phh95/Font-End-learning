// 导入 Node 的 path 模块
const path = require('path');


const HtmlWebpackPlugin = require('html-webpack-plugin');

// 导入 Webpack 内置的 DefinePlugin 插件
const { DefinePlugin } = require('webpack');

const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    target: "web",
    // watch: true,
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: "js/bundle.js",
    },
    resolve: {
        extensions: [".js", ".json", ".mjs", ".vue"],
        // alias 是别名的意思，为路径配置别名，简化路径的书写
        alias: {
            // 这里的 @ 可以代表 src 文件夹路径
            "@": path.resolve(__dirname, "../src"),
            "js": path.resolve(__dirname, "../src/js")
        }
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
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new DefinePlugin({
            BASE_URL: "'./'",
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false
        }),
        new VueLoaderPlugin()
    ]
}