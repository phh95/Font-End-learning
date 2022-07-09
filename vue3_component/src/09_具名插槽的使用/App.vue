<template>
    <div>
        <nav-bar :name="name">
            <!-- <button>左边的按钮</button>
            <input type="text" value="输入你想搜索的东西">
            <button>右边的按钮</button> -->

            <template v-slot:left>
                <button>左边的按钮</button>
            </template>
            <template v-slot:center>
                <input type="text" value="输入你想搜索的东西">
            </template>
            <template v-slot:right>
                <button>右边的按钮</button>
            </template>
            <!-- 下面的 [name] 表示的是，绑定 name 变量对应的值-->
            <template v-slot:[name]>
                <i>动态插槽名</i>
            </template>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from './NavBar.vue';
    export default {
        components: {
            NavBar
        },
        data() {
            return {
                name: "phh"
            }
        }
    }
</script>

<style scoped>
    
</style>