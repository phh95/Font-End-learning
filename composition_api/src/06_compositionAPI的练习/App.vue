<template>
    <div>
        <h2>当前计数: {{counter}}</h2>
        <h2>当前计数*2: {{doubleCounter}}</h2>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>

        <h2>data数据: {{data}}</h2>
        <button @click="changeData">修改data数据</button>

        <p class="content"></p>
        <div class="scroll">
            <div class="scroll-x">scrollX: {{scrollX}}</div>
            <div class="scroll-y">scrollY: {{scrollY}}</div>
        </div>

        <div class="mouse">
            <div class="mouse-x">mouseX: {{mouseX}}</div>
            <div class="mouse-y">mouseY: {{mouseY}}</div>
        </div>
    </div>
</template>

<script>
    // import { ref, computed } from 'vue';

    // import useCounter from './hooks/useCounter';

    // // 第二个案例 useTitle，修改标签页的名称
    // import useTitle from './hooks/useTitle';

    // // 第三个案例，滚动位置
    // import useScrollPosition from './hooks/useScrollPosition';

    // // 第四个案例，鼠标位置
    // import useMousePosition from './hooks/useMousePosition';

    // // 第五个案例，存取数据
    // import useLocalStorage from './hooks/useLocalStorage';


    import {
        useCounter,
        useTitle,
        useScrollPosition,
        useMousePosition,
        useLocalStorage
    } from './hooks';


    export default {
        setup() {
            const { counter, doubleCounter, increment, decrement } = useCounter()

            const titleRef = useTitle("哈哈哈哈的标签页")
            setTimeout(()=> {
                titleRef.value = "我的个人主页"
            }, 3000)

            const { scrollX, scrollY } = useScrollPosition()

            const { mouseX, mouseY } = useMousePosition()


            const data = useLocalStorage("info", {name: "phh", age: 18});

            const changeData = () => {
                data.value = "我是哈哈哈哈哈"
            }


            return {
                counter,
                doubleCounter,
                increment,
                decrement,

                scrollX,
                scrollY,

                mouseX,
                mouseY,

                data,
                changeData
            }

        }
    }
</script>

<style scoped>
    .content {
        width: 3000px;
        height: 5000px;
    }

    .scroll {
        position: fixed;
        right: 100px;
        bottom: 100px;
    }

    .mouse {
        position: fixed;
        right: 100px;
        bottom: 150px;
    }
</style>