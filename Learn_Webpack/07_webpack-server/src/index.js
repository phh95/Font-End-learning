import { sum } from './js/math';
// 导入Vue模块
// import { createApp } from 'vue/dist/vue.esm-bundler';
import { createApp } from 'vue';

const { priceFormat } = require('./js/format');

import App from './vue/App.vue';

import './js/element';

console.log(sum(20, 30));
console.log(priceFormat());

const app = createApp(App);
app.mount("#app");

console.log("123");
console.log("你在吗");
console.log("是可以自动打印了吗");