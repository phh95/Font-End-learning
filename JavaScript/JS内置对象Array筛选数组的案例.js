// 剔除数组[1500,1200,2000,2100,1800]中大于等于 2000 的元素，将剩下的元素
// 组成一个新的数组

var arr = [1500, 1200, 2000, 2100, 1800];
var newArr = [];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 2000) {
        // newArr[newArr.length] = arr[i];
        // 上面是之前的做法，现在可以用一个更简洁的方法，追加数组
        newArr.push(arr[i]);
    }
}
console.log(newArr);