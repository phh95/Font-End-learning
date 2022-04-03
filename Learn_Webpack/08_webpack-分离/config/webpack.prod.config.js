const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.comm.config');

module.exports = merge(commonConfig, {
    mode: "production",
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            // patterns 是匹配的意思
            patterns: [{
                // 从public文件夹复制到build文件夹
                from: "./public",
                to: "./",
                globOptions: {
                    ignore: [
                        // 忽略文件夹下所有叫index.html的文件，不要对其进行复制
                        "**/index.html"
                    ]
                }
            }]
        }),
    ]
})