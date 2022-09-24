
// 字面量类型，文本或数字也可以作为类型的，叫做字面量类型
const message: "你好啊，李银河" = "你好啊，李银河"
let num: 123 = 123

// 字面量类型的意义，结合联合类型使用

let direction: 'left' | 'right' | 'top' | 'bottom' = "left"
// 之后就可以对 direction 重新赋值
direction = "right"
direction = "top"