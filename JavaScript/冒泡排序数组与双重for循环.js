// 需求：将下面的数组元素重新排序，变成 [1,2,3,4,5]
// var arr = [5, 4, 3, 2, 1];
var arr = [4, 2, 3, 5, 1];
for (var i = 0; i < arr.length - 1; i++) { // 外层循环 躺数，5 个元素排序走 4 躺
    for (var j = 0; j <= arr.length - i - 1; j++) { // 内层循环 一趟中两个元素比较的次数
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j]; // 定义一个临时变量，来交换两个元素的值
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);