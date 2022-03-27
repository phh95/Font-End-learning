<template>
    <h2>我是Vue渲染出来的</h2>
    <h2>{{message}}</h2>
    <hello-world></hello-world>
</template>

<script>
    import HelloWorld from './HelloWorld.vue';
    export default {
        components: {
            HelloWorld
        },
        data() {
            return {
                message: "哈哈哈哈哈"
            }
        }
    }
</script>

<style>
    h2 {
        color: red;
    }
</style>
