import { createApp } from 'vue'
// import App from './04_vue插件的使用/App.vue'
import App from './03_自定义指令/App.vue'  

// 导入指令文件夹中的指令
import registerDirectives from './directives';

// 导入插件
import pluginsObject from './plugins/plugins_object';

// 导入插件
import pluginsFunction from './plugins/plugins_function';

// createApp(App).mount('#app')

const app = createApp(App);


// 使用全局指令
registerDirectives(app);


// 使用插件
app.use(pluginsObject);

app.use(pluginsFunction);


// 全局自定义指令
// app.directive("focus", {
//     mounted(el, bindings, vnode, preVnode) {
//         console.log("全局focus mounted");
//         el.focus();
//     }
// })

app.mount('#app')