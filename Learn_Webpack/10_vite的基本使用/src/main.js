import { sum } from './js/math.js';
import { createApp } from 'vue';

import "./css/style.css";
import "./css/title.less";
// 导入ts文件
import mul from './ts/mul';

import App from './vue/App.vue';


console.log("Hello Vite");
console.log(sum(20, 30));
console.log(mul(20, 30));

const titleEl = document.createElement('div');
titleEl.className = "title";
titleEl.innerHTML = "Hello Vite";
document.body.appendChild(titleEl);

// vue
createApp(App).mount("#app");