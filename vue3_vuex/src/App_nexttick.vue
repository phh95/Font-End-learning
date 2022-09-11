<template>
    <div>
        <h2 class="title" ref="titleRef">{{message}}</h2>
        <button @click="addContent">增加内容</button>
    </div>
</template>

<script>
    import { ref, nextTick } from 'vue';

    export default {
        setup() {
            const message = ref("哈哈哈哈哈哈")
            const titleRef = ref(null)

            const addContent = ()=> {
                message.value += "你好啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"
                
                // 更新 DOM 之后，再执行 打印操作
                nextTick(() => {
                    console.log(titleRef.value.offsetHeight);
                })
            }

            return {
                message,
                titleRef,
                addContent
            }
        }
    }
</script>

<style scoped>
    .title {
        width: 120px;
    }
</style>