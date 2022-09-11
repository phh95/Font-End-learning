<template>
    <div>
        <h2>登录页面</h2>
        <button @click="btnClick">登录</button>
    </div>
</template>

<script>
    import { useRouter } from 'vue-router';

    export default {
        setup() {
            const router = useRouter();

            // 点击登录按钮，会跳转到首页
            const btnClick = () => {
                window.localStorage.setItem("token", "userid")

                router.push({
                    path: "/home"
                })
            }

            return {
                btnClick
            }
        }
    }
</script>

<style scoped>

</style>