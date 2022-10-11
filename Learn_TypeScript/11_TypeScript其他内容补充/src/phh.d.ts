// 手写声明 lodash 模块
declare module 'lodash' {
    export function join(arr: any[]) {

    }
}


// 声明变量/函数/类

// 声明变量，声明之后，就可以在 ts 中使用
declare let phhName: string
declare let phhAge: number
declare let phhHeight: number

// 声明函数
declare function phhFoo(): void

// 声明一个类
declare class Person {
    name: string
    age: number
    constructor(name: string, age: number)
}

// 声明文件
// 把 以.jpeg结尾的文件当成一个模块
declare module '*.jpeg'

// 声明命名空间
declare namespace $ {
    export function ajax(settings: any): any
}