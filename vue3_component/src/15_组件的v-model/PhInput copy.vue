<template>
    <div>
        <!-- <button @click="btnClick">PhInput组件</button>
        <h2>phinput组件接受到的message:{{modelValue}}</h2> -->

        <!-- <input :value="modelValue" @input="inputWord"> -->

        <!-- 这样会绑定到 props，是不对的 -->
        <!-- <input v-model="modelValue"> -->

        <!-- 自定义组件中的双向绑定，需要用到计算属性 -->
        <input v-model="value">
    </div>
</template>

<script>
    export default {
        props: {
            modelValue: String
        },
        emits: ["update:modelValue"],
        methods: {
            // btnClick() {
            //     this.$emit("update:modelValue","按钮发生了点击")
            // }
            inputWord(event) {
                this.$emit("update:modelValue", event.target.value)
            }
        },
        computed: {
            value: {
                set(value) {
                    this.$emit("update:modelValue", value);
                },
                get() {
                    return this.modelValue;
                }
            }
        }
    }
</script>

<style scoped>

</style>