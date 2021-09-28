// 求两个数的返回值

// 之前的函数写法
// function getSum(num1, num2) {
//     sum = num1 + num2;
//     console.log(sum); // 打印语句写在函数体里面   
// }

// getSum(1, 2);

function getSum(num1, num2) {
    return num1 + num2;
}

console.log(getSum(1, 2));

// 比较两个数的大小，并输出最大值

function getMax(num1, num2) {
    // if (num1 > num2) {
    //     return num1;
    // } else {
    //     return num2;
    // }
    // if 语句写起来比较啰嗦，可以使用 三元表达式 简化代码
    return num1 > num2 ? num1 : num2;
}

console.log(getMax(1, 3));
console.log(getMax(11, 3));