function getMax() { // arguments = [1,2,3]
    var max = arguments[0];
    for (i = 1; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}


// 调用函数时，实参的个数是不固定的，可以使用 arguments
console.log(getMax(1, 2, 3));
console.log(getMax(11, 33, 444, 5678));
console.log(getMax(1, 222, 33, 44, 444, 10086));