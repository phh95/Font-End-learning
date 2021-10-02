function fn() {
    var num1 = 10; // 局部变量
    num2 = 20; // 未使用var声明，直接赋值的变量，属于全局变量
}

fn();
// console.log(num1);  // 外部调用局部变量会报错
console.log(num2);