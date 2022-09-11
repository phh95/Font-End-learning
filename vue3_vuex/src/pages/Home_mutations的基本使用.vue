<template>
    <div>
        <h2>Home组件</h2>
        <h2>{{$store.state.counter}}</h2>
        <button @click="$store.commit('increment')">+1</button>
        <button @click="$store.commit('decrement')">-1</button>
        <button @click="addTen">+10</button>
        <hr>
    </div>
</template>

<script>
    export default {
        methods: {
            addTen() {
                // commit 第二个参数传入一个数字 10
                // this.$store.commit("incrementN", 10)

                // commit 第二个参数传入一个对象 
                // this.$store.commit("incrementN", {
                //     n: 10,
                //     name: "phh",
                //     age: 18
                // })

                // 另外一种提交风格
                this.$store.commit({
                    type: "incrementN",
                    n: 10,
                    name: "phh",
                    age: 18
                })
            }
        }
    }
</script>

<style scoped>

</style>