<template>
    <div class="app">
        <div class="btn">
            <button @click="isShow = !isShow">显示/隐藏</button>
        </div>

        <transition enter-active-class="animate__animated animate__bounceInDown"
                    leave-active-class="animate__animated animate__backOutRight"
                    class="content">
            <h2 class="title" v-if="isShow">第三方动画库</h2>
        </transition>   
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isShow: true
            }
        }
    }
</script>

<style scoped>
    .btn, .content {
        margin: 10px 40px;
    }

    .title {
        display: inline-block;
    }
</style>