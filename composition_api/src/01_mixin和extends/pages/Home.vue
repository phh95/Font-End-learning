<template>
    <div>
        Home Page
        <h2>{{message}}</h2>
        <button @click="btnClick">按钮</button>
    </div>
</template>

<script>
    import BaseComponent from './BaseComponent.vue';

    export default { 
        // extends 选项可以继承 BasePage 组件对象中的数据或方法等
        extends: BaseComponent,
        data() {
            return {
                content: "Hello Home Page"
            }
        }
    }
</script>

<style scoped>

</style>