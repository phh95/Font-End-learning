// 泛型：类型的参数化，传入函数的参数类型是不确定的，在调用的时候才确定
function sum<Type>(num: Type) {
    // return num
    console.log(num);
} 


// 调用方式一：明确传入的类型
sum<number>(50)
sum<any[]>(["abc", "123"])
sum<{name: string}>({name: "phh"})


// 调用方式二：类型推导
// 不明确指定数据类型，它会进行类型推导，字面量类型
sum(50)

export {}
