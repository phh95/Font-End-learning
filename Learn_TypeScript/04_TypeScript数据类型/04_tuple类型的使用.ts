// tuple元组：多种元素的组合
// 声明的时候确定每个元素的类型

const info: [string, number, number] = ["phh", 28, 172]

const name = info[0]
console.log(name.length);

const age = info[1]
// 数字类型没有 length 属性，这里就会报错
// console.log(age.length);  



export {}