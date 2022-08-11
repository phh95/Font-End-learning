<template>
    <div>
        <h2>测试一下这个会不会继承呢？</h2>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: "这是通过extends继承的BaseComponent内容"
            }
        },
        methods: {
            btnClick() {
                console.log("点击了按钮");
            }
        }
    }
</script>

<style scoped>

</style>