<template>
    <h2 :class="$attrs.class">{{title}}</h2>
    <p>{{content}}</p>
</template>

<script>
    export default {
        // props 传入的值有两种，一种是字符串数组，另一种是对象类型
        // props: [
        //     // 自定义的两个 attribute
        //     "title",
        //     "content"
        // ]

        // props 传入对象类型
        props: {
            // title 属性的值必须是一个字符串类型
            title: String,
            content: {
                type: String,
                // required 为true，表示这个属性值是必传的
                required: true
            },
            counter: {
                type: Number,
                default: 123
            },
            info: {
                type: Object,
                // type类型为对象时，默认值default必须是一个函数
                default() {
                    return {name: "phh"}
                }
            }
        }
    }
</script>

<style scoped>

</style>