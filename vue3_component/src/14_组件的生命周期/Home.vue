<template>
    <div>
        <h2>这是Home组件</h2>
    </div>
</template>

<script>
    export default {
        beforeCreate() {
            console.log("Home组件 beforeCreate");
        },
        created() {
            console.log("Home组件 created");
        },
        beforeMount() {
            console.log("Home组件 beforeMount");
        },
        mounted() {
            console.log("Home组件 mounted");
        },
        beforeUnmount() {
            console.log("Home组件 beforeUnmount");
        },
        unmounted() {
            console.log("Home组件 unmounted");
        }
    }
</script>

<style scoped>

</style>