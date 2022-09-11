<template>
    <div>
        <h2>Home组件</h2>
        <h2>{{$store.state.counter}}</h2>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
        <button @click="incrementN({ n: 10})">+10</button>
        <hr>
        <button @click="add">+1</button>
        <hr>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        methods: {
            // mapMutations 可以传入一个数组，也可以传入一个对象
            ...mapMutations(["increment", "decrement", "incrementN"]),
            
            ...mapMutations({
                add: "increment",
                sub: "decrement"
            })

        }
    }
</script>

<style scoped>

</style>