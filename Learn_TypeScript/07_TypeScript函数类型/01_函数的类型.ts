
// 函数作为参数传入

function foo() {}

function bar(fn: () => void) {
    fn()
}

bar(foo)

// 定义常量时，编写函数的类型
// const add: (num1: number, num2: number) => void = (num1: number, num2: number) => {
//     return num1 + num2
// }
// 上面的代码更简洁的写法
type addFnType = (num1: number, num2: number) => number

const add: addFnType = (num1, num2) => {
    return num1 + num2
}

export {}

