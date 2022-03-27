import { sum } from './js/math';
// 导入Vue模块
// import { createApp } from 'vue/dist/vue.esm-bundler';
import { createApp } from 'vue';

const { priceFormat } = require('./js/format');

import App from './vue/App.vue';

import './js/element';

console.log(sum(20, 30));
console.log(priceFormat());

// Vue代码
// const app = createApp({
//     template: `<h2>我是Vue渲染出来的</h2>`,
//     data() {
//         return {
//             message: '有人在呼喊'
//         }
//     }
// })

const app = createApp(App);
app.mount("#app");