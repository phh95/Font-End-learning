<template>
    <div>
        Home组件
        <h2>这是父组件传递过来的message: {{message}}</h2>
        <!-- <h2>当前计数：{{counter}}</h2> -->
        <h2>当前计数：{{state.counter}}</h2>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
    // 导入 Vue 中的响应式模块
    import { reactive } from 'vue';

    export default {
        props: {
            message: {
                type: String,
                required: true
            }
        },
        setup() {
            // let counter = 100;
            const state = reactive({
                counter: 100
            })

            // 局部函数
            const increment = () => {
                // counter++;
                state.counter++;
                console.log("点击了+1的按钮");
            }

            return {
                increment,
                // counter,
                state
            }
        }
    }
</script>

<style scoped>

</style>