import { ref } from 'vue';

export default function() {
    const mouseX = ref(0)
    const mouseY = ref(0)

    window.addEventListener("mousemove", (event) => {
        // 监听鼠标移动的事件
        mouseX.value = event.pageX
        mouseY.value = event.pageY
    })

    return {
        mouseX,
        mouseY
    }
}