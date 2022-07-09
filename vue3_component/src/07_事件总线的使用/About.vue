<template>
    <div>
        <button @click="btnClick">按钮点击</button>
    </div>
</template>

<script>
    import emitter from './utils/eventbus';
    export default {
        methods: {
            btnClick() {
                console.log("按钮发生点击");
                emitter.emit("event_name", {name: "phh", age:18});
                // 发射多个事件
                emitter.emit("event_name2",{name: "kobe", age:30})
            }
        }
    }
</script>

<style scoped>

</style>