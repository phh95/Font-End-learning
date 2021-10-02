// 需求：求 str 字符串中字母 o 出现的位置和次数

var str = 'oabcoefoxyozzopp';

// console.log(str.length); // 字符串的字符数为 16
// for (var i = 0; i < str.length; i++) {
//     var index = str.indexOf('o', i);
//     console.log(index);    // 用for循环会返回重复的index
// }

var index = str.indexOf('o');
var num = 0;
while (index != -1) {
    console.log(index);
    index = str.indexOf('o', index + 1); // 从 index + 1 的位置开始往后查找，效率更高
    num++;
}

console.log('字母 o 出现的总次数是：' + num);