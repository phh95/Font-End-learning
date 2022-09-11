<template>
    <div>
        <h2>home: {{$store.state.counter}}</h2>
        <hr>
        <!-- <h2>书籍的总价格: {{$store.getters.totalPrice}}</h2> -->
        <h2>数据打折后的价格: {{$store.getters.totalPrice}}</h2>
        <!-- <h2>Option API 显示的 Getters: {{nameInfo}}</h2> -->
        <!-- <h2>{{$store.getters.nameInfo}}</h2>
        <h2>{{$store.getters.ageInfo}}</h2> -->

        <hr>
        <h2>mapGetters 显示的 Getters: {{nameInfo}}</h2>
        <h2>mapGetters 显示的 Getters: {{ageInfo}}</h2>
        <hr>
        <h2>{{sNameInfo}}</h2>
        <h2>{{sAgeInfo}}</h2>
        <hr>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            // nameInfo() {
            //     return this.$store.getters.nameInfo
            // },
            // ageInfo() {
            //     return this.$store.getters.ageInfo
            // },

            ...mapGetters(["nameInfo", "ageInfo", "heightInfo"]),
            ...mapGetters({
                sNameInfo: "nameInfo",
                sAgeInfo: "ageInfo"
            })
        }
    }
</script>

<style scoped>

</style>