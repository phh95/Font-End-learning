
// 函数传入的形参point，是一个对象类型
function printPoint(point: {x: number, y: number, z?: number}) {
    console.log(point.x);
    console.log(point.y);
}

// 在参数后面加一个问号？，它就变成可选的参数，可传可不传

printPoint({x: 123, y: 321})
printPoint({x: 123, y: 321, z: 12})

export {}