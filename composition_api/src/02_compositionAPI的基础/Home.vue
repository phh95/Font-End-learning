<template>
    <div>
        Home组件
        <!-- <h2>这是父组件传递过来的message: {{Message}}</h2> -->
        <h2>{{info.name}}</h2>
        <!-- <button @click="increment">+1</button> -->
        <button @click="changeName">更换名字</button>
    </div>
</template>

<script>
    // 导入 Vue 中的响应式模块
    // import { ref } from 'vue';

    export default {
        props: {
            info: {
                type: Object,
                required: true
            }
        },
        setup(props) {
            const changeName = () => {
                console.log("点击了按钮");
                // 当父组件给传递过来的info对象设置了只读，子组件就无法修改父组件传递过来的数据
                props.info.name = "angola peng"
            }

            return {
                changeName
            }
        }
    }
</script>

<style scoped>

</style>