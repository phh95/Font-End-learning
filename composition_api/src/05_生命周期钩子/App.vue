<template>
    <div>
        <h2>{{counter}}</h2>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
    import {ref, onMounted, onUpdated, onUnmounted} from 'vue';

    export default {
        setup() {
            const counter = ref(0)


            const increment = () => {
                counter.value++
            }

            onMounted(() => {
                console.log("App onMounted");
            })

            onUpdated(() => {
                console.log("App onUpdated");
            })

            return {
                counter,
                increment
            }
        }
    }
</script>

<style scoped>

</style>