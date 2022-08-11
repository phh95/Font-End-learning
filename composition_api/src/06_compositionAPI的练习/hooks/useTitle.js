import { ref, watch } from 'vue';

export default function(title = "新标签页") {
    const titleRef = ref(title)

    watch(titleRef, (newValue) => {
        document.title = newValue
    }, {
        immediate: true
    })

    return titleRef
}