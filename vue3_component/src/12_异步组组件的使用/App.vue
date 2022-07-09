<template>
    <div>
        这是App组件
        <home></home>

        <!-- 3. 使用异步组件 -->
        <suspense>
            <template #default>
                <async-contact></async-contact>
            </template>
            <template #fallback>
                <loading></loading>
            </template>
        </suspense>
        
    </div>
</template>

<script>
    // 1. 从 Vue 中导入一个定义异步组件的函数
    import { defineAsyncComponent } from 'vue';

    import Home from './Home.vue';
    import Loading from './Loading.vue';
    // import AsyncContact from './AsyncContact.vue';
    
    // 2. defineAsyncComponent 传入一个工厂函数
    const AsyncContact = defineAsyncComponent(() => import('./AsyncContact.vue'))

    // defineAsyncComponent 可以传入一个对象
    // const AsyncContact = defineAsyncComponent({
    //     loader: () => import('./AsyncContact.vue'),
    //     loadingComponent: Loading,
    //     delay: 2000
    // })

    export default {
        components: {
            Home,
            // 注册一个异步组件
            AsyncContact,
            Loading
        }
    }
</script>

<style scoped>

</style>