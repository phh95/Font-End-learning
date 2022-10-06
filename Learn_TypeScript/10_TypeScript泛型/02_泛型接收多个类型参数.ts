// 类型一样
function foo<T>(num1: T, num2: T) {
    
}


// 类型不一样
function sum<T, E>(num1: T, num2: E) {

}

// 剩余参数
function printNum<T, E, O>(arg1: T, arg2: E, arg3: O, ...args: T[]) {

}

sum<number, string>(12, "abc")

printNum<number, string, number>(10, "abc", 321)