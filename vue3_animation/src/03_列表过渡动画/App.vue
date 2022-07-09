<template>
    <div>
        <input type="text" v-model="keyword">
        <transition-group tag="ul" name="phh">
            <!-- <li v-for="item in names" :key="item"> -->
            <li v-for="item in showNames" :key="item">
                {{item}}
            </li>
        </transition-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                names: ["nba", "abc", "cba", "datouwawa", "lilei", "phh", "why", "kobe"],
                keyword: ""
            }
        },
        computed: {
            // 用计算属性实现过滤，下面的 filter 是高阶函数
            showNames() {
                return this.names.filter(item=> item.indexOf(this.keyword) !== -1)
            }
        }
    }
</script>

<style scoped>
    .phh-enter-from,
    .phh-leave-to {
        opacity: 0;
    }

    .phh-enter-active,
    .phh-leave-active {
        transition: opacity 1s ease;
    }
</style>