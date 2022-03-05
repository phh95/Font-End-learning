function add(num1, num2) {
    return num1 + num2
}

function mul(num1, num2) {
    return num1 * num2
}

// 以 CommonJS 模块化方式导出
module.exports = {
    add,
    mul
}