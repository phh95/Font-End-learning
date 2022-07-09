<template>
    <div>
        <button v-for="item in tabs" @click="itemClick(item)" :class="{active: currentTab == item}">
            {{item}}
        </button>

        <!-- 2. 动态组件 -->

        <keep-alive include="home,about">
            <component :is="currentTab" name="phh" :age="27" @pageClick="pageClick">
            </component>
        </keep-alive>
        

        <!-- 1. 条件判断实现组件间的切换 -->
        <!-- 判断条件，home必须带有单引号 -->
        <!-- <template v-if="currentTab == 'Home'">
            <home></home>
        </template>
        <template v-else-if="currentTab == 'About'">
            <about></about>
        </template>
        <template v-else>
            <category></category>
        </template> -->

    </div>
</template>

<script>
    import Home from './page/Home.vue';
    import About from './page/About.vue';
    import Category from './page/Category.vue'
    export default {
        components: {
            Home,
            About,
            Category
        },
        data(){
            return {
                tabs: ["Home","About","Category"],
                currentTab: "Home"
            }
        },
        methods: {
            itemClick(item) {
                this.currentTab = item;
            },
            pageClick() {
                console.log("page内部发生了点击");
            }
        }
    }
</script>

<style scoped>
    .active {
        color: red;
    }
</style>