<template>
    <div>
        <button @click="addNum">增加数字</button>
        <button @click="removeNum">删除数字</button>
        <button @click="shuffleNum">打乱数字的顺序</button>
        <transition-group tag="p" name="phh">
            <span v-for="item in number" :key="item" class="item">{{item}}</span>
        </transition-group>
    </div>
</template>

<script>
    // 导入要用到的 lodash 库  
    import _ from 'lodash';

    export default {
        data() {
            return {
                number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                numClick: 10
            }
        },
        methods: {
            addNum() {
                this.number.splice(this.randomIndex(), 0, this.numClick++)
            },
            removeNum() {
                this.number.splice(this.randomIndex(), 1)
            },
            shuffleNum() {
                this.number = _.shuffle(this.number)
            },
            // 在数组中随机插入或删除一个数字，需要用下方的函数，随机生成索引值
            randomIndex() {
                return Math.floor(Math.random() * this.number.length)
            }
        }
    }
</script>

<style scoped>
    .item {
        margin: 0 5px;
        display: inline-block;
    }

    .phh-enter-from, .phh-leave-to {
        opacity: 0;
        /* 位移动画 */
        transform: translateY(30px);
    }

    .phh-enter-active, .phh-leave-active {
        /* 有两个动画要同时执行的时候，用 all */
        transition: all 1s ease;
    }

    .phh-leave-active {
        position: absolute;
    }

    .phh-move {
        transition: transform 1s ease;
    }
</style>