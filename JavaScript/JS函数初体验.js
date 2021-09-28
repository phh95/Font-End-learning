// 定义函数
function getSum(num1, num2) {
    var sum = 0;
    for (var i = num1; i <= num2; i++) {
        sum += i;
    }
    console.log(sum);
}

// 调用函数

// 计算从1-100的整数之和
getSum(1, 100);

getSum(20, 2000);

// 函数其实就是封装了一段可以重复执行调用的代码块，目的，提高代码的复用