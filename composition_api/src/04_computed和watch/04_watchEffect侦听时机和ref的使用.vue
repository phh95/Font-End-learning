<template>
    <div>
        <h2 ref="title">哈哈哈哈哈</h2>
    </div>
</template>

<script>
    import { ref, watchEffect } from 'vue';

    export default {
        setup() {
            const title = ref(null);

            watchEffect(() => {
                console.log(title.value);
            }, {
                // 默认值是 pre
                // flush: "pre"
                flush: "post"
            })

            return {
                title
            }
        }
        
        // 之前学习 Options API 的时候，要拿到模板中的 <h2>哈哈哈哈哈</h2>，可以绑定ref，
        // 接着用 this.$refs.title 就能拿到
        // methods: {
        //     foo() {
        //         this.$refs.title
        //     }
        // }
    }
</script>

<style scoped>

</style>