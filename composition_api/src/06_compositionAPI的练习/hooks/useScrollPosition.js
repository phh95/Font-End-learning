import { ref } from 'vue';

export default function() {
    const scrollX = ref(0)
    const scrollY = ref(0)

    document.addEventListener("scroll", () => {
        scrollX.value = window.scrollX.toFixed(0)
        scrollY.value = window.scrollY.toFixed(0)
    })

    return {
        scrollX,
        scrollY
    }
}