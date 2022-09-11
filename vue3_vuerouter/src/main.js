import { createApp } from 'vue'

import router from './router'

import App from './App.vue'

const app = createApp(App)

// 把导入的路由对象router当成一个插件来使用，调用app的use方法
// 对router对象进行安装
app.use(router)

app.mount('#app')