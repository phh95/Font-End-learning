
type Method = "POST" | "GET"

function request(url: string, method: Method) {}


// 字面量推理
const options = {
    url: "https://penghh.fun",
    method: "POST"
} as const

// options.method = "123"

// 传入的第二个参数 options.method 的类型为字符串，不符合定义函数时的 Method 类型
request(options.url, options.method)

// 另一种解决方法，类型断言
request(options.url, options.method as Method)

