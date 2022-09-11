<template>
    <div>
        <h2>home: {{$store.state.counter}}</h2>
        <hr>
        <h2>Compostion API中使用computed home: {{sCounter}}</h2>
        <hr>
        <h2>Composition API中使用mapState home: {{counter}}</h2>
        <h2>Composition API中使用mapState home: {{name}}</h2>
        <hr>
    </div>
</template>

<script>
    // 导入辅助函数 mapState
    import { mapState, useStore } from 'vuex';
    import { computed } from 'vue';

    export default {
        // 在 Composition API 使用 mapState
        setup() {
            const store = useStore();
            const sCounter = computed(()=> store.state.counter)
            const sName = computed(()=> store.state.name)
            const sAge = computed(()=> store.state.age)
            

            // Compositon API 中使用计算函数，也是要写多次代码，有点冗余，可以怎么处理呢？
            // 还是使用 mapState 

            const storeStateFns = mapState(["counter", "name", "age"])
            // 返回的是一个个的函数  {counter: function, name: function, age: function}
            // 如果我们要想得到一个个的 ref 对象，需要再把函数传入 computed() 中
            // {counter: ref, name: ref, age: ref}

            const storeState = {}
            Object.keys(storeStateFns).forEach( fnKey => {
                const fn = storeStateFns[fnKey].bind({$store: store});
                storeState[fnKey] = computed(fn)
            })

            return {
                sCounter,
                ...storeState
            }
        }
    }
</script>

<style scoped>

</style>