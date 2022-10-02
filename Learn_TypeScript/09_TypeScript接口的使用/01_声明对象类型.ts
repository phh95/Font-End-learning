
// 01 类型别名 type
// type InfoType = {name: string, age: number}


// const info: {name: string, age: number} = {
//     name: "phh",
//     age: 28
// } 

// const info: InfoType = {
//     name: "phh",
//     age: 28
// }

// 02 另外一种声明对象类型的方式
// 接口 interface，一个规范：我们通常会在接口名称前面加多一个英文字母 I
interface IInfoType {
    name: string,
    age: number,
    friend?: {
        name: string
    } 
}

const info: IInfoType = {
    name: "phh",
    age: 28
}
