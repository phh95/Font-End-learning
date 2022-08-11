<template>
    <div>
        <h2>{{counter}}</h2>
        <button @click="changeData">+1</button>

        <hello-world message="子组件" @increment="getContent"></hello-world>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    // 使用组件的方式，通过 import 导入
    import HelloWorld from './HelloWord.vue'

    const counter = ref(0)
    const changeData = () => {
        counter.value++;
    }

    const getContent = (payload) => {
        // 打印发射事件传递过来的内容
        console.log(payload);
    }
    
</script>

<style scoped>

</style>