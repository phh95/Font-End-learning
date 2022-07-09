<template>
    <div class="app">
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition name="phh">
            <h2 v-if="isShow">我是哈哈哈哈</h2>
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
    .app {
        width: 200px;
        margin: 0 auto;
    }

    h2 {
        display: inline-block;
    }

    .phh-enter-active {
        animation: bounce 1s ease;
    }
    .phh-leave-active {
        animation: bounce 1s ease reverse;
    }
     /* 定义帧动画 */
    @keyframes bounce {
        0% {
            transform: scale(0)
        }

        50% {
            transform: scale(1.2)
        }

        100% {
            transform: scale(1)
        }
    }
   
</style>