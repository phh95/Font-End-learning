<template>
    <div>
        <template v-for="(name,index) in names" :key="name">
            <!-- <span>{{name}}</span> -->
            <!-- 这里的 slot 绑定的自定义属性，不要用 name 作为属性名，否则无法渲染，会和具名插槽的 name 冲突 -->
            <slot :mz="name" :number="index"></slot>
        </template>
    </div>
</template>

<script>
    export default {
        props: {
            names: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style scoped>

</style>