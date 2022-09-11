<template>
    <div>
        <h2>Home组件</h2>
        <h2>当前计数: {{$store.state.rootCounter}}</h2>
        <h2>home模块: {{$store.state.home.homeCounter}}</h2>
        <h2>user模块: {{$store.state.user.userCounter}}</h2>
        <hr>
    </div>
</template>

<script>
    export default {
        setup() {
            
        }
    }
</script>

<style scoped>

</style>