<template>
    <div>
        <h2>这是Home主页</h2>
        <ul>
            <li>哈哈哈哈哈哈</li>
            <li>哈哈哈哈哈哈</li>
            <li>哈哈哈哈哈哈</li>
        </ul>

        <router-link to="/home/message">消息</router-link>
        <br>
        <router-link to="/home/good">商品</router-link>
        <br>
        <router-link to="/home/goodcart">购物车</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>