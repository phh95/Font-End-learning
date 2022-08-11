<template>
    <div>
        <h2>通过插件获取到的全局属性 $name: {{$name}}</h2>
    </div>
</template>

<script>
    import { getCurrentInstance } from 'vue';

    export default {
        setup() {
            // setup 没有绑定 this，想要拿到 $name 比较麻烦
            const instance = getCurrentInstance();
            console.log("这是在setup中拿到的全局属性$name", instance.appContext.config.globalProperties.$name);
        },

        mounted() {
            console.log("这是在生命周期拿到的", this.$name);
        }
    }
</script>

<style scoped>

</style>