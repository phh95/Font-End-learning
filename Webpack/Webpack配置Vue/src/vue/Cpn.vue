<template>
    <div>
        <h2>今天是被封的第N天</h2>
        <p>啥时候才能解封呢？</p>
        <h2>{{message}}</h2>
    </div>
</template>

<script>
export default {
    name: "Cpn",
    data() {
        return {
            message: '快好起来啊'
        }
    }
}
</script>