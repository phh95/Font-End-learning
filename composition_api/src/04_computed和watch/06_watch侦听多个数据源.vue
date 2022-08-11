<template>
    <div>
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
            const name = ref("phh")

            // watch侦听器
            watch([info, name], ([newInfo, newName], [oldInfo, oldName]) => {
                console.log(newInfo, newName, oldInfo, oldName);
            })

            // 对reactive对象 info 进行解构，打印得到的是普通对象
            watch([()=> {
                return {...info}
            }, name], ([newInfo, newName], [oldInfo, oldName]) => {
                console.log(newInfo, newName, oldInfo, oldName);
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