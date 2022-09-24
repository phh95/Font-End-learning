function foo(x: number, y: number = 10) {
    console.log(x, y);
}

// y的默认值为10，在调用的时候可以不传，也可以传入一个 undefined
foo(30)
foo(20, undefined)

function foo1(x: number = 10, y: number) {
    console.log(x, y);
}

foo1(undefined, 20)


// 参数书写顺序的建议：必传参数 - 有默认值的参数 - 可选参数