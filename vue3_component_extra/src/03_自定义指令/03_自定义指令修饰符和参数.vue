<template>
    <div>
        <button @click="changeData" v-phh.aaa.bbb="'angola peng'">当前数字: {{counter}}</button>
    </div>
</template>

<script>
    import { ref } from 'vue';

    export default {
        directives: {
            phh: {
                created(el, bindings, vnode, preVnode) {
                    console.log("phh created");
                    console.log(bindings);
                }
            }
        },

        setup() {
            const counter = ref(0)
            const changeData = () => {
                counter.value++
            }

            return {
                counter,
                changeData
            }
        }
    }
</script>

<style scoped>

</style>