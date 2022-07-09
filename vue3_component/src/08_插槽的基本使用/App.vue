<template>
    <div>
        <my-slot-cpn>
            <button>这是插入插槽的按钮</button>
        </my-slot-cpn>

        <my-slot-cpn>
            这是普通的文本内容
        </my-slot-cpn>

        <my-slot-cpn>
            <!-- 插槽里面可以放入新的组件 -->
            <my-button></my-button>
        </my-slot-cpn>

        <my-slot-cpn></my-slot-cpn>

        <my-slot-cpn>
            <h2>哈哈哈哈</h2>
            <button>我是按钮</button>
            <div>我是一个div盒子</div>
        </my-slot-cpn>

    </div>
</template>

<script>
    import MySlotCpn from './MySlotCpn.vue';
    import MyButton from './MyButton.vue';
    export default {
        components: {
            MySlotCpn,
            MyButton
        }
    }
</script>

<style scoped>

</style>