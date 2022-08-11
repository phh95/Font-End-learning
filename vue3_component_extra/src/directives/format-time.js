import dayjs from 'dayjs';

export default function(app) {
    // 传入 app 对象，调用 app 的 directive 方法
    app.directive("format-time", {
        mounted(el, bindings) {
            let formatString = bindings.value

            // 如果 v-format-time 指令没有传入参数，就采用默认的时间格式
            if (!formatString) {
                formatString = "YYYY-MM-DD HH-mm-ss"
            }

            // console.log(el);
            const textContent = el.textContent
                // 打印得到标签中的时间戳
                // console.log(textContent);

            // 将字符串类型转换为数字
            const timestamp = parseInt(textContent)
            if (textContent.length === 10) {
                // 如果时间戳的数字长度为 10，那么它的单位是秒，要转换为毫秒
                timestamp = timestamp * 1000
            }

            // 使用第三方库 dayjs 来完成时间戳的转换
            // dayjs 传入的时间戳单位必须是毫秒
            // el.textContent = dayjs(timestamp).format("YYYY-MM-DD HH-mm-ss")

            el.textContent = dayjs(timestamp).format(formatString)

        }
    })
}