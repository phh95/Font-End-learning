<template>
    <div>
        <!-- 绑定到一个元素上 -->
        <h2 ref="title">哈哈哈哈哈</h2>

        <!-- 绑定到一个组件实例上 -->
        <nav-bar ref="navBar"></nav-bar>
        <button @click="btnClick">获取元素</button>
    </div>
</template>

<script>
    import NavBar from './NavBar.vue';
    export default {
        components: {
            NavBar
        },
        methods: {
            btnClick() {
                console.log(this.$refs.title);
                // 绑定组件实例，打印得到的是一个代理proxy
                console.log(this.$refs.navBar);
                console.log(this.$refs.navBar.message);
                this.$refs.navBar.sayHello();
            }
        }
    }
</script>

<style scoped>

</style>