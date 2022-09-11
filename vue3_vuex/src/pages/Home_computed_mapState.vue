<template>
    <div>
        <!-- <h2>home: {{$store.state.counter}}</h2>
        <h2>home: {{$store.state.name}}</h2>
        <h2>home: {{$store.state.age}}</h2>

        <h2>通过计算属性的方式来展示: {{ sCounter }}</h2>
        <h2>通过计算属性的方法来展示: {{ sName }}</h2>
        <h2>通过计算属性的方法来展示: {{ sAge }}</h2> -->

        <h2>home: {{counter}}</h2>
        <h2>home: {{name}}</h2>
        <h2>home: {{age}}</h2>

        <h2>mapState另外一种写法home: {{sCounter}}</h2>
    </div>
</template>

<script>
    // 导入辅助函数 mapState
    import { mapState } from 'vuex';

    export default {
        computed: {
            ...mapState(["counter", "name", "age"]),

            ...mapState({
                sCounter: state => state.counter,
                sName: state => state.name
            })

            // sCounter() {
            //     return this.$store.state.counter
            // },
            // sName() {
            //     return this.$store.state.name
            // },
            // sAge() {
            //     return this.$store.state.age
            // }
        }
    }
</script>

<style scoped>

</style>