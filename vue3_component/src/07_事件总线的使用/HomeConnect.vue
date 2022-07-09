<template>
    <div>
    </div>
</template>

<script>
    import emitter from './utils/eventbus'; 
    export default {
        created() {
            emitter.on("event_name", (info) => {
                console.log("event_name:",info);
            }),
            // emitter.on("event_name2",(info)=>{
            //     console.log("event_name2:",info);
            // }),
            // 监听所有事件，使用通配符
            emitter.on("*",(type,info) => {
                console.log("* listener:", type, info);
            })
        }
    }
</script>

<style scoped>

</style>