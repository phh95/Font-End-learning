<template>
    <div>
        Home组件
        <h2>这是父组件传递过来的message: {{message}}</h2>
        <!-- <h2>当前计数：{{counter}}</h2> -->
        <!-- 当我们在模板中使用ref对象，它会自动进行解包，不需要写成 counter.value 的形式 -->
        <h2>当前计数：{{counter}}</h2>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
    // 导入 Vue 中的响应式模块
    import { ref } from 'vue';

    export default {
        props: {
            message: {
                type: String,
                required: true
            }
        },
        setup() {
            // let counter = 100;
            // 将数字100传入ref中，会变成一个ref的可响应的引用
            const counter = ref(100)

            // 局部函数
            const increment = () => {
                // counter++;
                counter.value++;
                console.log(counter.value);
            }

            return {
                increment,
                counter
            }
        }
    }
</script>

<style scoped>

</style>