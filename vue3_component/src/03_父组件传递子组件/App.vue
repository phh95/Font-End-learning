<template>
    <!-- 直接给自定义的属性赋值 -->
    <show-message class="phh" title="哈哈哈哈" content="我是哈哈哈哈"></show-message>
    <show-message title="呵呵呵" content="我是呵呵呵"></show-message>

    <!-- 把data中的数据放到属性里，需要用到v-bind -->
    <show-message :title="title" :content="content"></show-message>

    <!-- 把data中的message对象放到属性里，有两种写法 -->
    <show-message :title="message.title" :content="message.content"></show-message>
    <show-message v-bind="message"></show-message>
</template>

<script>
    import ShowMessage from './ShowMessage.vue';
    export default {
        components: {
            ShowMessage
        },
        data() {
            return {
                title: "嘻嘻嘻",
                content: "我是嘻嘻嘻",
                message: {
                    title: "嘿嘿嘿",
                    content: "我是嘿嘿嘿"
                }
            }
        }  
    }
</script>

<style scoped>

</style>