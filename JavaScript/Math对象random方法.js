// 返回两个数之间的随机整数，并且包含这两个临界值 

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandom(1, 10));

//随机点名，随机抽出一个学生的名称

var arr = ['张三', '茜茜', '小五', '博人', '巳月', '阿豪']
    // console.log(arr[0]);
console.log(arr[getRandom(0, arr.length - 1)]);