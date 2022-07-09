<template>
    <div>
        NavBar子组件
        <br />
        <button @click="getParentAndRoot">获取父组件和根组件</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: "我是NavBar子组件中的message"
            }
        },
        methods: {
            sayHello() {
                console.log("你好啊，我是NavBar子组件");
            },
            getParentAndRoot() {
                console.log(this.$parent);
                console.log(this.$root);
            }
        }
    }
</script>

<style scoped>

</style>