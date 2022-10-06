interface IPerson {
    name: string
    age: number
    height: number
}

const info = {
    name: "phh",
    age: 28,
    height: 172,
    address: "shenzhen"
}

// 把对象info的引用，赋值给类型为 IPerson 的 p，会进行一个 擦除 的操作
// 将 info 中多余的 address 属性擦除，让它可以通过 TS 的类型检测，因此不会报错
const p: IPerson = info

function printPerson(person: IPerson) {
    console.log(person);
}

printPerson(p)

// 直接将对象传入 printPerson 函数中，因为多出来了一个 address 属性，代码会报错
// printPerson({
//     name: "phh",
//     age: 28,
//     height: 172,
//     address: "guangzhou"
// })

export {}


// const p: IPerson = {
//     name: "phh",
//     age: 28,
//     height: 172,
//     address: "shenzhen"
// }