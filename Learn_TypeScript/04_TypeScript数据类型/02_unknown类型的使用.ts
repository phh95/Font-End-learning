function foo() {
    return "abc"
}

function bar() {
    return 123
}

let flag: boolean = true
// result返回的值的类型是不确定的，我们可以用 any 也可以用 unknown 
// 最好使用 unknown，因为 any 太灵活了
// unknown 类型只能赋值给 any 和 unknown 类型
// any 类型可以赋值给任意类型

let result: unknown
// let result: any

if(flag) {
    result = foo()
} else {
    result = bar()
}

// let message1: string = result
// let message2: number = result
