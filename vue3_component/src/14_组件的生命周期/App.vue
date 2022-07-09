<template>
    <div>
        <button @click="btnClick">切换</button>
        <template v-if= "isShow">
            <home></home>
        </template>
    </div>
</template>

<script>
    import Home from './Home.vue';
    export default {
        components: {
            Home          
        },
        data() {
            return {
                isShow: true
            }
        },
        methods: {
            btnClick() {
                this.isShow = !this.isShow
            }
        }
    }
</script>

<style scoped>

</style>