<template>
    <div>
        <h2 class="title">{{message}}</h2>
        <button @click="btnClick">按钮</button>
        <h2>{{name}}</h2>
    </div>
</template>

<script>
    // import Cpn from './Cpn.vue'

    export default {
        name: "App",
        // components: {
        //     Cpn
        // },
        data() {
        return {
            message: 'Hello Vue + Webpack',
            name: 'phh'
        }
    },
    methods: {
        btnClick() {
            console.log('这是点击按钮之后打印的东西');
        }
    }
    }
</script>

<style scoped>
    .title {
        color: green;
    }
</style>