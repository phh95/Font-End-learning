<template>
    <div>
        <h2>home: {{$store.state.counter}}</h2>
        <hr>
        <h2>Composition API中使用mapState home: {{counter}}</h2>
        <h2>Composition API中使用mapState home: {{name}}</h2>
        <h2>{{sCounter}}</h2>
        <h2>{{sName}}</h2>
        <hr>
    </div>
</template>

<script>
    import { useState } from '../hooks/useState'

    export default {
        setup() {
            const storeState = useState(["counter", "name", "age"])

            // 封装的函数 useState 还能传入对象
            const storeState2 = useState({
                sCounter: state => state.counter,
                sName: state => state.name
            })

            return {
                ...storeState,
                ...storeState2
            }
        }
    }
</script>

<style scoped>

</style>