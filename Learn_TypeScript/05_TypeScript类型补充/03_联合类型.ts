function printID(id: number | string | boolean) {
    if(typeof id === "string") {
        // 把字符串的字母都变成大写
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

printID("abc")
printID(123)
printID(true)