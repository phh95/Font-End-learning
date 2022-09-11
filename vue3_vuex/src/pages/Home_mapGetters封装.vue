<template>
    <div>
        <h2>Home组件</h2>
        <h2>{{sNameInfo}}</h2>
        <hr>
        <h2>{{nameInfo}}</h2>
        <h2>{{ageInfo}}</h2>
        <hr>
    </div>
</template>

<script>
    import { computed } from 'vue';
    import { useStore } from 'vuex';

    import { useGetters } from '../hooks/useGetters'

    export default {
        setup() {
            const store = useStore();
            const sNameInfo = computed( () => store.getters.nameInfo)

            // const storeGettersFns = mapGetters(["nameInfo", "ageInfo", "heightInfo"])
            // 返回的结果是函数，不是我们想要的，要像前面的 mapState 一样进行封装

            const storeGetters = useGetters(["nameInfo", "ageInfo"])

            return {
                sNameInfo,
                // ...storeGettersFns
                ...storeGetters
            }
        }
    }
</script>

<style scoped>

</style>