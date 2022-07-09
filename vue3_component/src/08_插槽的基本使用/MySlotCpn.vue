<template>
    <div>
        <h2>组件开头</h2>
        <slot>
            <i>我是插槽中默认的内容</i>
        </slot>
        <h2>组件结尾</h2>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>