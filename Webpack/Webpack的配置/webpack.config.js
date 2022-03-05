const path = require('path') // 依赖 node 包

// 通过 commonJS 的方式导出  
module.exports = {
    entry: './src/main.js',
    output: {
        // 这里的路径需要动态获取，且必须是绝对路径
        // 动态获取路径，需要用到 node 环境——npm init，
        // 生成一个 package.json 文件
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
}