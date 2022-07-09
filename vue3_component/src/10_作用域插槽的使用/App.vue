<template>
    <div>
        <!-- 编译作用域 -->
        <!-- button虽然最终会替换掉插槽中的slot元素，
        但它是在 App.vue 中编译的，不能调用子组件
        data 中的 title -->
        <!-- <child-cpn>
            <button>显示{{title}}</button>
        </child-cpn> -->

        <!-- 作用域插槽 -->
        <show-name :names="names">
            <!-- <button></button> -->
            <template v-slot="slotProps">
                <button>{{slotProps.mz}}-{{slotProps.number}}</button>
            </template>
        </show-name>

        <show-name :names="names">
            <template v-slot="slotProps">
                <strong>{{slotProps.mz}}-{{slotProps.number}}</strong>
            </template>
        </show-name>

        <!-- 独占默认插槽的缩写，可以去掉子组件中的 template 标签-->
        <!-- 默认插槽，即 slot 的 name 属性值为默认的 default -->
        <show-name :names="names" v-slot="slotProps">
            <strong>{{slotProps.mz}}-{{slotProps.number}}</strong>
        </show-name>

    </div>
</template>

<script>
    import ChildCpn from './ChildCpn.vue';
    import ShowName from './ShowName.vue';
    export default {
        components: {
            ChildCpn,
            ShowName
        },
        data() {
            return {
                names: ["phh","kobe","c","Fenng"]
            }
        }
    }
</script>

<style scoped>

</style>