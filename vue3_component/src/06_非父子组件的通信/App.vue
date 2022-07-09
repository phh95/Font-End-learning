<template>
    <div>
        <home></home>
        <button @click="addName">增加数组长度</button>
    </div>
</template>

<script>
    import Home from './Home.vue';
    // 从 Vue 导入 computed 函数
    import { computed } from 'vue';
    export default {
        components: {
            Home
        },
        // provide: {
        //     name: "phh",
        //     age: 18
        // },

       // 引用data中的数据，需要把provide改成一个函数
        provide() {
            return {
                name: "phh",
                age: 18,
                // length: this.names.length
                // length 是一次性赋值，如果要变成响应式，需要用到
                // computed 函数
                length:  computed(() => this.names.length)
            }
        },
        data() {
            return {
                names: ["abc","cba","cab"]
            }
        },
        methods: {
            addName() {
                this.names.push("phh");
                console.log(this.names);
            }
        }
    }
</script>

<style scoped>

</style>