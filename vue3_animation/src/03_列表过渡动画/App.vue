<template>
    <div>
        <input type="text" v-model="keyword">
        <transition-group tag="ul" name="phh" :css="false"
                          @before-enter="beforeEnter"
                          @enter="enter"
                          @leave="leave">
            <!-- <li v-for="item in names" :key="item"> -->
            <li v-for="(item,index) in showNames" :key="item" :data-index="index">
                {{item}}
            </li>
        </transition-group>
    </div>
</template>

<script>
    import gsap from 'gsap';

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
        },
        methods: {
            beforeEnter(el) {
                el.style.opacity = 0
                el.style.height = 0
            },
            enter(el, done) {
                gsap.to(el, {
                    opacity: 1,
                    height: "1.5em",
                    // 进入的元素之间存在着延迟，延迟时间取决于元素在数组中的位置（索引值）
                    delay: el.dataset.index * 0.5,
                    onComplete: done
                })
            },
            leave(el, done) {
                gsap.to(el, {
                    opacity: 0,
                    height: 0,
                    delay: el.dataset.index * 0.5,
                    onComplete: done
                })
            }
        }
    }
</script>

<style scoped>
    /* .phh-enter-from,
    .phh-leave-to {
        opacity: 0;
    }

    .phh-enter-active,
    .phh-leave-active {
        transition: opacity 1s ease;
    } */
</style>