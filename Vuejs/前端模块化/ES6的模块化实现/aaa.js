var name = '小豪'
var age = 28
var flag = 'true'

function sum(num1, num2) {
    return num1 + num2
}

if (flag) {
    console.log(sum(20, 30));
}

// 导出方式 1，导出变量
export {
    flag,
    sum
}

// 导出方式 2，定义变量的同时导出

export var num1 = 1000;
export var height = 1.88;

// 导出方式 3，导出函数或者类

export function mul(num1, num2) {
    return num1 * num2
}

// 导出类
export class Person {
    run() {
        console.log('今晚收到了做饭的物资');
    }
}

// 导出方式 5，export default
// const address = '深圳市'
// export default address

export default function(argument) {
    console.log(argument);
}


// export default 导出的只能有一个



// 另外一种定义类的写法
// function Person() {

// }

// ES6 中定义类
// class Person {

// }