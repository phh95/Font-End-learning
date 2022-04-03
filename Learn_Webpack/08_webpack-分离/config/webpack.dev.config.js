const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.comm.config');

module.exports = merge(commonConfig, {
    // mode设置模式，分为 开发模式和生产模式(准备打包上线的时候，才用这个)
    mode: "development",
    // 设置source-map，建立bundle.js映射文件，方便调试代码和错误 
    devtool: "source-map",
    devServer: {
        static: {
            directory: "./public"
        },
        // 开启模块热替换
        hot: true
    },
})