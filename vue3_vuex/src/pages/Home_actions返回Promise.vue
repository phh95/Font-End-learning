<template>
    <div>
        <h2>Home组件</h2>
        <h2>当前计数: {{$store.state.counter}}</h2>
        <!-- <button @click="increment">+1</button>
        <button @click="decrement">-1</button> -->
        
        <button @click="incrementAction">+1</button>
        <button @click="decrementAction">-1</button>
        <hr>
    </div>
</template>

<script>
    import { onMounted } from 'vue';
    import { useStore, mapActions } from 'vuex';
    export default {
        setup() {
            const store = useStore();
            const storeActions = mapActions(["incrementAction", "decrementAction"])

            onMounted(() => {
                const promise = store.dispatch("addBannerDataAction")
                promise.then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                })
            })

            return {
                ...storeActions
            }
        }
    }
</script>

<style scoped>

</style>