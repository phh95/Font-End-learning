<template>
    <div>
        Home组件
        <h2>这是父组件传递过来的message: {{message}}</h2>
    </div>
</template>

<script>
    export default {
        props: {
            message: {
                type: String,
                required: true
            }
        },
        setup(props, context) {
            // console.log(props);
            // console.log(props.message);
            console.log(context.attrs);
            console.log(context.attrs.id, context.attrs.class);
            console.log(context.slots);
            console.log(context.emit);
        },
        // 对传入的上下文对象 context 直接进行解构
        setup(props, {attrs, slots, emit}) {
            console.log(attrs.id, attrs.class);
            console.log(slots);
            console.log(emit);
        }
    }
</script>

<style scoped>

</style>