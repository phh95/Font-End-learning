const path = require('path')

module.exports = {
  // 配置方式一：VUE 脚手架提供的属性
  // 将默认打包的 dist 文件夹更改为 build 文件夹
  outputDir: './build',
  // 配置方式二：和 Webpack 属性完全一致，最后会合并到脚手架的 Webpack 设置中
  // configureWebpack: {
  //   resolve: {
  //     // 为路径设置别名
  //     alias: {
  //       components: '@/components'
  //     }
  //   }
  // }

  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }

  // 配置方式三：链式配置
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', '@/components')
  }
}
