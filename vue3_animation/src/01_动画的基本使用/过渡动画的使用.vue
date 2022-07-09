<template>
    <div>
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
    .phh-enter-from, 
    .phh-leave-to {
        opacity: 0;
    }

    .phh-enter-to,
    .phh-leave-from {
        opacity: 1;
    }

    .phh-enter-active,
    .phh-leave-active {
        transition: opacity 2s ease;
    }
</style>