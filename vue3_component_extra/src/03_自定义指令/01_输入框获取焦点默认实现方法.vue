<template>
    <div>
        <input type="text" ref="input">
    </div>
</template>

<script>
    import { ref, onMounted } from 'vue';

    export default {
        setup() {
            const input = ref(null)
            
            onMounted(() => {
                // console.log(input.value);
                input.value.focus();
            })

            return {
                input
            }
        }
    }
</script>

<style scoped>

</style>