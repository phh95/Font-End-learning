<template>
    <div>
        <h2>HomeConnect: {{name}} - {{age}} - {{length.value}}</h2>
    </div>
</template>

<script>
    export default {
        // 注入
        inject: ["name","age","length"]
    }
</script>

<style scoped>

</style>