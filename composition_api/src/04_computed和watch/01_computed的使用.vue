<template>
    <div>
        <h2>{{fullname}}</h2>
        <button @click="changeName">更换</button>
    </div>
</template>

<script>
    import { ref, computed } from 'vue';

    export default {
        setup() {
            const firstname = ref("angola")
            const lastname = ref("peng")

            // computed 用法一：传入一个getter函数
            // const fullname = computed(()=> firstname.value + " " + lastname.value)

            // 用法二：传入一个对象，对象包含 getter和setter函数
            const fullname = computed({
                get: () => firstname.value + " " + lastname.value,
                set(newValue) {
                    const names = newValue.split(" ")
                    firstname.value = names[0]
                    lastname.value = names[1]
                }
            })

            const changeName = ()=> {
                fullname.value = "Honghao Peng"
            }

            return {
                fullname,
                changeName
            }
            
        }
    }
</script>

<style scoped>

</style>