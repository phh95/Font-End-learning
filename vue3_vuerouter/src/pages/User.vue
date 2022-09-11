<template>
    <div>
        <!-- 拿到路径中的用户名 -->
        <h2>用户名: {{$route.params.username}}</h2>
    </div>
</template>

<script>
    import { useRoute } from 'vue-router';
 
    export default {
        created() {
            // console.log(this.$route);
            console.log("生命周期获取到的用户名", this.$route.params.username);
        },
        setup() {
            const route = useRoute();
            console.log("setup获取到的用户名", route.params.username);
        }
    }
</script>

<style scoped>

</style>