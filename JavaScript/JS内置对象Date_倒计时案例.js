function countDown(time) {
    var nowTime = +new Date(); // 不传入参数，返回的就是当前时间距离1970年总的毫秒数
    var inputTime = +new Date(time); // 输入的时间，距离1970年总的毫秒数
    var times = (inputTime - nowTime) / 1000; // 两个时间戳的差，将毫秒转换为秒
    var d = parseInt(times / 60 / 60 / 24); // 天，parseInt 确保输出的值是整数
    d = d < 10 ? '0' + d : d; // 三元运算符，如果返回的值小于 10，要在前面加多一个 0
    var h = parseInt(times / 60 / 60 % 24); // 小时
    h = h < 10 ? '0' + h : h;
    var m = parseInt(times / 60 % 60); // 分
    m = m < 10 ? '0' + m : m;
    var s = parseInt(times % 60); // 秒
    s = s < 10 ? '0' + s : s;
    return '距离国庆假期，仅有' + d + '天' + h + '时' + m + '分' + s + '秒'
}

console.log(countDown('2021-10-1 00:00:00'));