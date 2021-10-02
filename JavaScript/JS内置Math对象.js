console.log(Math.PI); // Math 对象的一个属性   返回圆周率

console.log(Math.max(1, 99, 61)); // 一个方法，返回最大值

console.log(Math.max(1, 99, '内置对象')); // 传入字符串型，返回 NaN

console.log(Math.abs(-1)); // 取绝对值，1
console.log(Math.abs('-1')); // 传入字符串型，会隐式转换，返回的结果为 1

// 3 个取整的 Math 方法

console.log(Math.floor(1.1)); //  向下取整
console.log(Math.ceil(1.9)); // ceil 是天花板，向上取整 

console.log(Math.round(4.6)); // 四舍五入，就近取整
console.log(Math.round(-1.5)); // 这个需要注意，结果是 -1，而不是 -2