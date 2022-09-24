
// 可选类型 message?: string 其实相当于是 string 和 undefined 的联合类型 
function printMessageLength(message?: string) {
    // if(message) {
    //     console.log(message.length);
    // }

    // 在message后面加一个感叹号!   非空类型断言
    console.log(message!.length);
    
}

printMessageLength("哈哈哈哈哈")
printMessageLength("123")