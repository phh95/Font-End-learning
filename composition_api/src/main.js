import { createApp } from 'vue'
import App from './07_setup顶层编写方式/App.vue'

// createApp(App).mount('#app')

const app = createApp(App);

// 全局混入
// app.mixin({
//     data() {
//         return {

//         }
//     },
//     created() {
//         console.log("全局的created生命周期_全局混入");
//     }
// });

app.mount("#app");