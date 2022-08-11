<template>
    <div>
        <h2>{{info.name}}</h2>
        <button @click="changeData">修改名字</button>
    </div>
</template>

<script>
    import { ref, reactive, watch } from 'vue';

    export default {
        setup() {
            const info = reactive({
                name: "phh",
                age: 18,
                friend: {
                    name: "lzm"
                }
            })

            // watch侦听器
            // 传入 reactive 对象，默认是深度侦听
            // watch(info, (newInfo, oldInfo) => {
            //     console.log(newInfo, oldInfo);
            // })


            // 对传入的 reactive 对象进行解构，就无法深度侦听了
            watch(()=> ({...info}), (newInfo, oldInfo) => {
                console.log(newInfo, oldInfo);
            }, {
                deep: true,
                immediate: true
            })

            const changeData = () => {
                info.friend.name = "angola peng"
            }

            return {
                info,
                changeData
            }
        }
    }
</script>

<style scoped>

</style>