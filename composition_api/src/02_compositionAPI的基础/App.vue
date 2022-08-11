<template>
    <div>
        <!-- <home :info="info" id="aaa" class="bbb"></home> -->
        <!-- 让子组件只读，不能修改父组件传递过去的 info 对象 -->
        <home :info="readonlyInfo"></home>
    </div>
</template>

<script>
    import Home from './Home.vue'
    import { ref, readonly, reactive } from 'vue'

    export default {
        components: {
            Home
        },

        setup() {
            const info = reactive({
                name: "phh"
            })

            const readonlyInfo = readonly(info)

            return {
                readonlyInfo,
                info
            }
        }
    }
</script>

<style scoped>

</style>