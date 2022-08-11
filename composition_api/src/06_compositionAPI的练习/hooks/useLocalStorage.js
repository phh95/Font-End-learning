import { ref, watch } from 'vue';

export default function(key, value) {
    const data = ref(value);

    if (value) {
        // 传入两个参数时，设置值
        window.localStorage.setItem(key, JSON.stringify(value));
    } else {
        // 只传入一个参数 key 时，读取 value 值，要对序列化的 value 进行解析
        data.value = JSON.parse(window.localStorage.getItem(key));
    }

    // 监听当 data 发生变化时，重新设置 value 值
    watch(data, (newValue) => {
        window.localStorage.setItem(key, JSON.stringify(newValue));
    })

    return data;
}