<template>
    <div>
        <!-- <button @click="btnClick">PhInput组件</button>
        <h2>phinput组件接受到的message:{{modelValue}}</h2> -->

        <!-- <input :value="modelValue" @input="inputWord"> -->

        <!-- 这样会绑定到 props，是不对的 -->
        <!-- <input v-model="modelValue"> -->

        <!-- 自定义组件中的双向绑定，需要用到计算属性 -->
        <input v-model="value">
        <input v-model="phh">
    </div>
</template>

<script>
    export default {
        props: {
            modelValue: String,
            title: String
        },
        emits: ["update:modelValue","update:title"],
        computed: {
            value: {
                set(value) {
                    this.$emit("update:modelValue", value);
                },
                get() {
                    return this.modelValue;
                }
            },
            phh: {
                set(phh) {
                    this.$emit("update:title", phh);
                },
                get() {
                    return this.title;
                }
            }
        },
        methods: {
            // btnClick() {
            //     this.$emit("update:modelValue","按钮发生了点击")
            // }
            inputWord(event) {
                this.$emit("update:modelValue", event.target.value)
            }
        }
    }
</script>

<style scoped>

</style>