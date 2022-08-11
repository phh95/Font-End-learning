<template>
    <div>
        <!-- <h2>{{info.name}} - {{info.age}}</h2> -->
        <!-- Vue会对ref对象自动解包，在使用的时候，不需要写成 name.value 的形式 -->
        <h2>{{name}} - {{age}}</h2>
        <button @click="addAge">+1</button>
    </div>
</template>

<script>
    import { reactive, toRefs, toRef } from 'vue';
    export default {
        setup() {
            const info = reactive({
                name: "phh",
                age: 18
            })
            
            // 如果我们想要对 reactive 对象进行解构，而且想让数据保持响应式，需要用到 toRefs
            // let { name, age } = info

            // 1. toRefs：将 reactive 对象中的所有属性都转换为 ref 对象
            // let { name, age } = toRefs(info)

            // 2. toRef 只把 reactive 对象中的一个属性转换为 ref 对象
            let { name } = info
            let age = toRef(info, "age")

            // 将 info 对象传入 toRefs 中，得到的 name 和 age 都是 ref 对象，具有响应式的特点

            const addAge = ()=> {
                // info.age++;
                age.value++;
                // info.age++;
            }

            return {
                info,
                addAge,
                name,
                age
            }
        }
    }
</script>

<style scoped>

</style>