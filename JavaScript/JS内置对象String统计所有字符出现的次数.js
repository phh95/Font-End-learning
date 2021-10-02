// 实现思路：遍历字符串，将每个字符存入一个空对象中，字符作为属性名，出现的次数作为属性值

var str = 'abcoefoxyozzopp';
var obj = {};
for (var i = 0; i < str.length; i++) {
    var chars = str.charAt(i); // 遍历字符串，chars 是字符串中的每一个字符
    if (obj[chars]) { // 判断 obj 对象是否有 chars 属性，有的话属性值加 1，没有的话赋值为 1
        obj[chars]++;
    } else {
        obj[chars] = 1;
    }
}
console.log(obj);

// 遍历对象，返回最大的属性值
var max = 0;
var ch = '';
for (var k in obj) {
    // k 是属性名
    // obj[k] 得到的是属性值
    if (obj[k] > max) {
        max = obj[k];
        ch = k; // 返回 max 值对应的属性名
    }
}

console.log('字符串中出现次数最多的字符为：' + ch);
console.log('出现的次数为：' + max + ' 次');