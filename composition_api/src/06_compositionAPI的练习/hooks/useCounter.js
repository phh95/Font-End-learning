import { ref, computed } from 'vue';

export default function() {
    const counter = ref(0)

    // const doubleCounter = computed({
    //     get: () => counter.value * 2
    // })
    // computed() 只传入一个 getter，简易写法
    const doubleCounter = computed(() => counter.value * 2)

    const increment = () => {
        counter.value++
    }
    const decrement = () => {
        counter.value--
    }

    return {
        counter,
        doubleCounter,
        increment,
        decrement
    }
}