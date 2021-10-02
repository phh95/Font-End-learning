var date = new Date();
// console.log(date.getFullYear()); //返回年份
// console.log(date.getMonth() + 1); // 返回的月份会少 1，要加上 1
// console.log(date.getDate()); // 返回的是几号
// console.log(date.getDay()); // 返回的是周几，要注意周日返回的是 0

// 格式化日期，得到我们想要的日期格式： 2021年9月30日 星期四

var year = date.getFullYear();
var month = date.getMonth() + 1;
var dates = date.getDate();
var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
var day = date.getDay(); // 今天是周几，返回的是一个阿拉伯数字
console.log('亲，今天是：' + year + '年' + month + '月' + dates + '日 ' + arr[day]);