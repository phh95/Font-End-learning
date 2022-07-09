<template>
    <div class="app">
        <input type="number" step="100" v-model="counter">
        <h2>当前计数：{{showCounter}}</h2>
        <h2>当前计数：{{showNumber.toFixed(0)}}</h2>
    </div>
</template>

<script>
    import gsap from 'gsap';
    export default {
        data() {
            return {
                counter: 0,
                showNumber: 0
            }
        },
        // 使用计算属性 showCounter
        computed: {
            showCounter() {
                return this.showNumber.toFixed(0)
            }
        },
        watch: {
            // 监听器，监听counter的变化
            counter(newValue) {
                // gsap 给 this 中的某一个属性赋值，后面是给 showNumber 赋值
                gsap.to(this, {duration: 2, showNumber: newValue})
            }
        }
    }
</script>

<style scoped>
    
</style>