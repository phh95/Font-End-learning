// 双重 for 循环
function sort(arr) {
    for (var i = 0; i <= arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) { // 里层的循环，是两个数两两比较的次数
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

var arr1 = [1, 4, 2, 9];
console.log(sort(arr1));

var arr2 = [199, 10, 19, 2];
console.log(sort(arr2));