// 去除数组中重复的元素，只保留其中一个

var arr = ['c', 'a', 'z', 'a', 'x', 'a', 'x', 'c', 'b'];
// var newArr = [];

// for (var i = 0; i < arr.length; i++) {
//     if (newArr.indexOf(arr[i]) == -1) {
//         // 将旧数组元素传入新数组中，如果数组元素不存在，则返回 -1
//         newArr.push(arr[i]); // 将数组元素追加到新数组中
//     }
// }

// console.log(newArr);

// 封装成一个函数的写法
function unique(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

var demo = unique(['blue', 'red', 'blue']);
console.log(demo);