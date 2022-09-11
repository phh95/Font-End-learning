import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';


// 通过 import from 导入的模块，它的依赖是同步的，打包的时候会打包到 app.js 中
// import Home from '../pages/Home.vue';
// import About from '../pages/About.vue';

// 配置映射关系
const routes = [
    { path: "/", redirect: "/home" },

    // { path: "/home", component: Home },
    // { path: "/about", component: About }

    // { path: "/home", component: () => {
    //     // 函数里面要返回一个 Promise，import() 函数返回的就是一个 Promise
    //     return import("../pages/Home.vue")
    // } },

    {
        path: "/home",
        name: "home",
        component: () =>
            import ( /* webpackChunkName: "home-chunk" */ "../pages/Home.vue"),
        children: [{
                path: "message",
                component: () =>
                    import ("../pages/HomeMessage.vue")
            },
            {
                path: "good",
                component: () =>
                    import ("../pages/HomeGood.vue")
            }
        ]
    },
    {
        path: "/about",
        component: () =>
            import ( /* webpackChunkName: "about-chunk" */ "../pages/About.vue")
    },
    {
        path: "/user/:username",
        component: () =>
            import ("../pages/User.vue")
    },
    {
        path: "/login",
        component: () =>
            import ("../pages/Login.vue")
    },
    {
        // 当路径与前面的路径都不匹配的情况下，显示 NotFound 组件
        path: "/:pathMatch(.*)",
        component: () =>
            import ("../pages/NotFound.vue")
    }
];

// 创建一个路由对象 router
const router = createRouter({
    routes,
    // history 需要指定我们使用的是哪种模式的路由——hash还是history
    // history: createWebHashHistory()
    history: createWebHistory()
})


// 动态添加路由
const categoryRotue = {
    path: "/category",
    component: () =>
        import ("../pages/Category.vue")
}

// 添加顶级路由对象
router.addRoute(categoryRotue);

// 添加二级路由对象
// addRoute 可以传入 2 个参数
// router.addRoute("路由的名称", {注册的路由对象})
router.addRoute("home", {
    path: "goodcart",
    component: () =>
        import ("../pages/HomeGoodCart.vue")
})


// 路由导航守卫
// let counter = 1;
// 这里的 to 和 from 都是一个 route 对象
router.beforeEach((to, from) => {
    // console.log(`进行了${counter++}次路由跳转`);

    if (to.path !== "/login") {
        const token = window.localStorage.getItem("token")
        if (!token) {
            return "/login"
        }
    }
})

// 导出路由对象
export default router