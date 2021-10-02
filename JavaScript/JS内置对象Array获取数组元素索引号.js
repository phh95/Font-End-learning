var arr = ['red', 'blue', 'green', 'pink', 'blue'];
console.log(arr.indexOf('green'));
console.log(arr.indexOf('blue')); // 返回的索引号为 1
console.log(arr.indexOf('purple')); // -1
// 如果传入的元素在数组中不存在，则返回 -1，

console.log(arr.lastIndexOf('blue')); // 返回的索引号为 4