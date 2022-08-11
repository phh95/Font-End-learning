<template>
    <div>
        Home组件
        <h2>这是父组件传递过来的message: {{message}}</h2>
        <h2>{{title}}</h2>
        <h2>当前计数：{{counter}}</h2>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
    export default {
        props: {
            message: {
                type: String,
                required: true
            }
        },
        setup() {
            let counter = 100;

            // 局部函数
            const increment = () => {
                counter++;
                console.log("点击了+1的按钮");
            }

            return {
                title: "这是来自setup函数的内容",
                counter,
                increment
            }
        }
    }
</script>

<style scoped>

</style>