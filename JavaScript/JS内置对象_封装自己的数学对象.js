// 利用对象封装自己的数学对象 里面有 PI 最大值和最小值

var myMath = {
    PI: 3.141592653,
    max: function() {
        var max = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            if (arguments[i] > max) {
                max = arguments[i];
            }
        }
        return max;
    }, // 两个方法之间不要忘了用 逗号 进行分隔，否则会报错
    min: function() {
        var min = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            if (arguments[i] < min) {
                min = arguments[i];
            }
        }
        return min;
    }
}

console.log(myMath.PI);
console.log(myMath.max(1, 2, 6));