<template>
    <div>
        <h2>{{message}}</h2>
        <h2>{{title}}</h2>
        <!-- <ph-input v-model="message"></ph-input> -->
        <!-- 自定义组件绑定的v-model等价于下面的两步 -->
        <!-- <ph-input :modelValue="message" @update:model-value="message = $event"></ph-input> -->


        <!-- 绑定两个v-model -->
        <ph-input v-model="message" v-model:title="title"></ph-input>
    </div>
</template>

<script>
    import PhInput from './PhInput.vue';
    export default {
        components: {
            PhInput
        },
        data() {
            return {
                message: "Hello world",
                title: "哈哈哈哈"
            }
        }
    }
</script>

<style scoped>

</style>