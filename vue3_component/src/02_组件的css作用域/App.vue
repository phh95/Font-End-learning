<template>
    <h2>App</h2>
    <hello-world></hello-world>
</template>

<script>
    import HelloWorld from './HelloWorld.vue';
    export default {
        components: {
            HelloWorld
        }
    }
</script>

<style scoped>
    h2 {
        color: red;
    }
</style>