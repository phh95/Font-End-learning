<template>
    <div>
        <h2>Home组件</h2>
        <h2>当前计数: {{$store.state.rootCounter}}</h2>
        <h2>home模块: {{$store.state.home.homeCounter}}</h2>
        <h2>home模块的getters: {{$store.getters.doubleHomeCounter}}</h2>
        <h2>home模块的getters: {{$store.getters["home/doubleHomeCounter"]}}</h2>
        <h2>user模块: {{$store.state.user.userCounter}}</h2>
        <button @click="btnClick">home模块的数字+1</button>
        <br>
        <button @click="homeIncrementAction">home模块的数字+1</button>
        <hr>
    </div>
</template>

<script>
    export default {
        methods: {
            btnClick() {
                // this.$store.commit("increment")
                this.$store.commit("home/increment")
            },
            homeIncrementAction() {
                this.$store.dispatch("home/incrementAction")
            }
        }
    }
</script>

<style scoped>

</style>