<template>
    <div>
        <h2>{{name}} - {{age}}</h2>
        <button @click="changeName">修改name</button>
        <button @click="changeAge">修改age</button>
    </div>
</template>

<script>
    import { ref, watchEffect } from 'vue';

    export default {
        setup() {
            const name = ref("phh")
            const age = ref(19)
            
            const stop = watchEffect(() => {
                console.log("name: ", name.value ,"age: ", age.value);
            })

            const changeName = () => {
                name.value = "哈哈哈哈"
            }

            const changeAge = () => {
                age.value++;
                // 当 age 大于 25 时，就停止侦听
                if (age.value > 25) {
                    stop()
                }
            }

            return {
                name,
                age,
                changeName,
                changeAge
            }



        }

    }
</script>

<style scoped>

</style>