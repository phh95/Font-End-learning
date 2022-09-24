
// 重载函数
function add(num1: number, num2: number): number  // 没有函数体
function add(num1: string, num2: string): string

// 下面再写函数体具体的实现
function add(num1: any, num2: any): any {
    return num1 + num2
}

const result1 = add(20, 30)
console.log(result1);

const result2 = add("你好啊，", "李银河")
console.log(result2);



