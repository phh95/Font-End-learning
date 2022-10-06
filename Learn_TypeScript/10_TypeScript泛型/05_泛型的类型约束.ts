interface ILength {
    length: number
}

function getLength<T extends ILength>(arg: T) {
    console.log(arg.length);
}

// getLength(123)
getLength("abc")
getLength(["abc", "cba", "bca"])
getLength({length: 100})


// 泛型可以让开发者在调用时才确定参数的类型，让程序变得更灵活的同时，某种程度上也增加了代码的风险
// 因此我们可以通过继承，给泛型添加一些类型上的约束，让代码更安全