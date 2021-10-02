var str = 'andy';
console.log(str.replace('a', 'b')); // bndy

var str1 = 'andyandy';
console.log(str1.replace('a', 'b')); // bndyandy

//要替换字符串的所有字符，需要使用正则表达式或者循环

// 需求：将 str2 中所有的 o 替换成星号 *
var str2 = 'abcoefoxyozzopp';
while (str2.indexOf('o') != -1) {
    str2 = str2.replace('o', '*');
}
console.log(str2);


// 将字符串转换为数组
var str3 = 'holiday,play,enjoy';
console.log(str3.split(','));

var str4 = 'holiday&play&enjoy';
console.log(str4.split('&'));