function getArrMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

var re = getArrMax([5, 2, 99, 101, 67, 77]); // 定义一个变量来接收函数返回的结果
console.log(re);