<template>
    <div>
        <h2 v-format-time="'YYYY/MM/DD HH-mm-ss'">{{timestamp}}</h2>
        <h2 v-format-time>{{timestamp}}</h2>
    </div>
</template>

<script>
    export default {
        setup() {
            const timestamp = 1658654280000

            return {
                timestamp
            }
        }
    }
</script>

<style scoped>

</style>