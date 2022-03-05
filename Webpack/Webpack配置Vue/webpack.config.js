const path = require('path') // 依赖 node 包

const { VueLoaderPlugin } = require('vue-loader/lib/plugin')

// 通过 commonJS 的方式导出  
module.exports = {
    entry: './src/main.js',
    output: {
        // 这里的路径需要动态获取，且必须是绝对路径
        // 动态获取路径，需要用到 node 环境——npm init，
        // 生成一个 package.json 文件
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [{
            test: /\.css$/, // 正则表达式，匹配所有 CSS 文件   
            // css-loader 只负责将 css 文件进行加载
            // style-loader 负责将样式添加到 DOM 中
            // webpack 使用多个loader时，是从右向左读取的
            // 先读取 css-loader，再读取 style-loader
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.less$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "less-loader" // 把less转换为css
            }]
        }, {
            test: /\.(png|jpg|gif|jpeg)$/,
            use: [{
                loader: "url-loader",
                options: {
                    // 当加载的图片小于 limit 时，会将图片编译成base64字符串形式
                    // 当图片大于 limit 时，需要使用 file-loader 模块进行加载
                    limit: 15000,
                    // 这里的 name 字段，是为了规范打包后的图片名称，ext 是图片扩展名变量
                    // hash:8 哈希值默认 32 位，这里只截取 8 位
                    name: 'img/[name].[hash:8].[ext]'
                }
            }]
        }, {
            test: /\.vue$/,
            use: ['vue-loader', 'vue-']
        }]
    },
    resolve: {
        // alias 是别名的意思
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}