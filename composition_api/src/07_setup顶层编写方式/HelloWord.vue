<template>
    <div>
        <h2>{{title}}</h2>
        <h2>{{message}}</h2>
        <button @click="emitEvent">发射事件</button>
    </div>
</template>

<script setup>
    import { defineProps, defineEmits } from 'vue';

    const title = "Hello World"

    const props = defineProps({
        message: {
            type: String,
            default: "哈哈哈哈哈哈"
        }
    })

    // 发射事件
    const emit = defineEmits(["increment", "decrement"]);
    // emit("increment", "发射事件携带的内容")

    const emitEvent = () => {
        emit("increment", "发射事件携带的内容")
    }
</script>

<style scoped>

</style>