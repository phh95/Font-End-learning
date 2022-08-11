<template>
    <div>
        <h2>{{message}}</h2>
        <button @click="btnClick">按钮</button>
    </div>
</template>

<script>
    import { demoMixin } from './mixins/demoMixin'

    export default {
        mixins: [demoMixin],
        data() {
            return {
                title: "这是标题"
            }
        }
    }
</script>

<style scoped>

</style>