
interface IInfo<T1, T2> {
    name: T1
    age: T2
}

const info: IInfo<string, number> = {
    name: "phh",
    age: 28
}


// 我们还可以给接口的 类型参数 设置默认值

interface IPerson<T1 = string, T2 = number> {
    name: T1
    age: T2
}

const person: IPerson = {
    name: "coderwhy teacher",
    age: 18
}

