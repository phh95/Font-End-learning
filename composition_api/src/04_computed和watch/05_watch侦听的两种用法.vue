<template>
    <div>
        <h2>{{info.name}}</h2>
        <h2>{{name}}</h2>
        <button @click="changeData">修改名字</button>
    </div>
</template>

<script>
    import { ref, reactive, watch } from 'vue';

    export default {
        setup() {
            const info = reactive({
                name: "phh",
                age: 18
            })

            // 1.传入 getter 函数： ()=>info.name
            // watch(() => info.name, (newValue, oldValue) => {
            //     console.log("newValue:", newValue, "oldValue:", oldValue);
            // })

            // 2.传入 reactive 或 ref 对象
            // 方式一：直接传入 reacive 对象，得到的 newValue 和 oldValue 都是 reactive 对象
            // watch(info, (newValue, oldValue) => {
            //     console.log("newValue:", newValue, "oldValue:", oldValue);
            // })

            // 方式二：传入解构后的 reactive 对象，得到的就是普通对象
            // watch(() => {
            //     // 对 info 对象进行解构
            //     return {...info}
            // }, (newValue, oldValue) => {
            //     console.log("newValue:", newValue, "oldValue:", oldValue);
            // })

            // 传入ref对象
            const name = ref("phh")
            watch(name, (newValue, oldValue) => {
                console.log("newValue:", newValue, "oldValue:", oldValue);
            })

            const changeData = () => {
                // info.name = "angola peng"
                name.value = "angola peng"

            }

            return {
                info,
                name,
                changeData
            }
        }
    }
</script>

<style scoped>

</style>