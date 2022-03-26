// 导入 Node 的 path 模块
const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "bundle.js",
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
            // {
            //     test: /\.(png|jpg|gif|svg|jpeg)$/,
            //     use: [{
            //         loader: "url-loader",
            //         options: {
            //             esModule: false,
            //             // outputPath: "img",
            //             // name: "[name]_[hash:6].[ext]",

            //             // vue脚手架中可以把outputPath字段去掉
            //             name: "img/[name]_[hash:6].[ext]",
            //             // 小于 100 kb 的图片会以 base64 进行编码
            //             limit: 100 * 1024
            //         }
            //     }],
            //     type: 'javascript/auto'
            // }
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
                        maxSize: 100 * 1024
                    }
                }
            },
            // 使用 file-loader 加载字体文件
            // {
            //     test: /\.(eot|ttf|woff2?)$/,
            //     use: {
            //         loader: "file-loader",
            //         options: {
            //             esModule: false,
            //             name: "font/[name]_[hash:6].[ext]"
            //         },
            //     },
            //     type: 'javascript/auto'
            // }
            {
                test: /\.(eot|ttf|woff2?)$/,
                type: "asset/resource",
                generator: {
                    filename: "font/[name]_[hash:6][ext]"
                }
            }
        ]
    }
}