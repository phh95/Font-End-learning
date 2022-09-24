const message1: string | null = null
const content1 = message1 ?? "你好啊，李银河"
// 这里的 ?? 被称作 空值合并操作符

const message2: string | null = "Hello World"
const content2 = message2 ?? "你好啊，李银河"

console.log(content1);
console.log(content2);
