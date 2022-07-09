<template>
    <div class="nav-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
        <div class="addition">
            <!-- 动态插槽名 -->
            <slot :name="name"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            name: String
        }
    }
</script>

<style scoped>
    .nav-bar {
        display: flex;
    }
    .left, .center, .right {
        height: 50px;
    }
    .left, .right {
        width: 40px;
        background-color: pink;
    }
    .center {
        flex: 1;
        background-color: blue;
    }
</style>