<template>
    <div>
        <h2>当前计数：{{counter}}</h2>
        <counter-button @add="addOne" @sub="subOne" @addN="addNNumber"></counter-button>
    </div>
</template>

<script>
    import CounterButton from './CounterButton.vue'
    export default {
        components: {
            CounterButton
        },
        data() {
            return {
                counter: 0
            }
        },
        methods: {
            addOne() {
                this.counter++
            },
            subOne() {
                this.counter--
            },
            addNNumber(num) {
                this.counter += num
            }
        }
    }
</script>

<style scoped>

</style>