var arr = [1, 2, 3];
var obj = {};

// 有两种方法判断，传入的参数是否为数组

// 一种是使用 instanceof 运算符
console.log(arr instanceof Array);
console.log(obj instanceof Array);

// 第二种方法，使用 Array 对象的 isArray() 方法

console.log(Array.isArray(arr));
console.log(Array.isArray(obj));