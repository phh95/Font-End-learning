<template>
    <div class="app">
        <div><button @click="isShow = !isShow">显示/隐藏</button></div>
        <transition name="phh">
            <h2 class="title" v-if="isShow">Hello World</h2>
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
    .title {
        display: inline-block;
    }

    .phh-enter-active {
        animation: bounceInUp 1s ease;
    }

    .phh-leave-active {
        animation: bounceInUp 1s ease reverse;
    }
</style>