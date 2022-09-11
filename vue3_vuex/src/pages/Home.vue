<template>
    <div>
        <!-- <h2>home模块: {{$store.state.home.homeCounter}}</h2>
        <h2>home模块的getters: {{$store.getters.doubleHomeCounter}}</h2>
        <h2>home模块的getters: {{$store.getters["home/doubleHomeCounter"]}}</h2> -->


        <h2>Home组件</h2>
        <h2>home模块: {{homeCounter}}</h2>
        <h2>home模块的getters: {{doubleHomeCounter}}</h2>
        <button @click="increment">home模块的数字+1</button>
        <br>
        <button @click="incrementAction">home模块的数字+1</button>
        <hr>
    </div>
</template>

<script>
    // import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

    import { useState } from '../hooks/useState';
    import { useGetters } from '../hooks/useGetters';

    import { createNamespacedHelpers } from 'vuex';
    const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers("home")

    export default {
        computed: {
            // 写法一
            // ...mapState("home", ["homeCounter"]),
            // ...mapGetters("home", ["doubleHomeCounter"])

            // 写法二
            ...mapState(["homeCounter"]),
            ...mapGetters(["doubleHomeCounter"])
        },
        methods: {
            // 写法一
            // ...mapMutations("home", ["increment"]),
            // ...mapActions("home", ["incrementAction"])

            // 写法二
            ...mapMutations(["increment"]),
            ...mapActions(["incrementAction"])
        },
        setup(){
            
            const state = useState("home", ["homeCounter"])
            const getters = useGetters("home", ["doubleHomeCounter"])

            const mutations = mapMutations(["increment"])
            const actions = mapActions(["incrementAction"])

            return {
                ...state,
                ...getters,
                ...mutations,
                ...actions
            }
        }
    }
</script>

<style scoped>

</style>