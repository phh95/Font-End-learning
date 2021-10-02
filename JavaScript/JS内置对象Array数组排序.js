// 1.翻转数组

// var arr = ['holiday', 'play', 'work'];
// arr.reverse();
// console.log(arr); // ['work','play','holiday']

// 2. 数组排序，其实就是我们之前写过的冒泡排序

var arr1 = [13, 4, 77, 99, 1, 10]; // 数组元素是偶数个
var arr2 = [2, 4, 5, 1, 3]; // 数组元素是奇数个

//arr1.sort([比较函数]);  // 传入一个比较函数，才能保证排序的结果是正确的

arr1.sort(function(a, b) {
    // return a - b;  // a-b 是升序排列
    return b - a; // b-a 是降序排列
});
arr2.sort();

console.log(arr1);
console.log(arr2);