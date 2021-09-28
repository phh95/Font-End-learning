function isRunyear(year) {
    // 是闰年的话返回 true，平年返回 false
    var flag = false;
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        flag = true;
    }
    return flag;
}

console.log(isRunyear(2021));
console.log(isRunyear(2022));