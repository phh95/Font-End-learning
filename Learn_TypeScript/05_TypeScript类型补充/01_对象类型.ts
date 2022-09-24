
// 函数传入的形参point，是一个对象类型
function printPoint(point: {x: number, y: number}) {
    console.log(point.x);
    console.log(point.y);
}

printPoint({x: 123, y: 321})

