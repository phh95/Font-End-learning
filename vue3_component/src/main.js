import { createApp } from 'vue'
import App from './15_组件的v-model/App.vue'

// import { sum } from './12_异步组组件的使用/utils/math';

// 通过 import 函数导入的模块，后续 webpack 对其进行打包的时候就会进行分包的操作
// import ('./12_异步组组件的使用/utils/math').then((res) => {
//     console.log(res.sum(20, 30));
// })

// console.log(sum(20, 30));

createApp(App).mount('#app')