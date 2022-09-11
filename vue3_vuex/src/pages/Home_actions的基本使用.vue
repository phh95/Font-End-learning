<template>
    <div>
        <h2>Home组件</h2>
        <h2>当前计数: {{$store.state.counter}}</h2>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
        <hr>
    </div>
</template>

<script>
    export default {
        methods: {
            increment() {
                // this.$store.dispatch("incrementAction")
                // dispatch 可以传入第二个参数
                this.$store.dispatch("incrementAction", { count: 100 })
            },
            // decrement() {
            //     this.$store.dispatch("decrementAction")
            // }

            // 传入的参数为对象类型时，另外一种代码书写方式
            decrement() {
                this.$store.dispatch({
                    type: "decrementAction"
                })
            }
        },
        mounted() {
            this.$store.dispatch("addBannerDataAction")
        }
    }
</script>

<style scoped>

</style>