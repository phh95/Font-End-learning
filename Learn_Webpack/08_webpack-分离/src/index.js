import { sum } from './js/math';
// 导入Vue模块
// import { createApp } from 'vue/dist/vue.esm-bundler';
import { createApp } from 'vue';

const { priceFormat } = require('./js/format');

// import App from './vue/App.vue';
// 在webpack的resolve.extension中配置了 vue，在引用vue文件时就不需要加后缀了
// import App from './vue/App';

// 为路径起别名
import App from '@/vue/App';

import './js/element';

if (module.hot) {
    module.hot.accept("./js/element.js", () => {
        console.log("element模块发生更新了");
    })
}

console.log(sum(20, 30));
console.log(priceFormat());

const app = createApp(App);
app.mount("#app");

console.log("123");
console.log("你在吗");
console.log("是可以自动打印了吗");