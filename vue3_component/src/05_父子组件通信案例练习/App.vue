<template>
    <div>
        <tab-control :titles="titles" @itemClick="itemClick"></tab-control>
        <h2>{{contents[currentIndex]}}</h2>
    </div>
</template>

<script>
    import TabControl from './TabControl.vue';
    export default {
        components: {
            TabControl
        },
        data() {
            return {
                titles: ["首页","详情","评价"],
                contents: ["商品首页","商品详情页","商品评价页"],
                currentIndex: 0
            }
        },
        methods: {
            itemClick(index) {
                this.currentIndex = index;
            }
        }
    }
</script>

<style scoped>

</style>