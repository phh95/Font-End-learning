// 导入 Node 的 path 模块
const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "bundle.js"
    }
}