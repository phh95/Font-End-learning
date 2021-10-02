// var date = new Date();

// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// 封装一个函数，返回我们最终想要的时间格式是 08:08:08

function getTime() {
    var time = new Date();
    var hour = time.getHours();
    hour = hour < 10 ? '0' + hour : hour; // 三元运算符，数字小于10的话，在前面加一个 0
    var minute = time.getMinutes();
    minute = minute < 10 ? '0' + minute : minute;
    var second = time.getSeconds();
    second = second < 10 ? '0' + second : second;
    return hour + ':' + minute + ':' + second;
}

console.log(getTime());