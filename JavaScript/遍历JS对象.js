var obj = {
    name: 'pink老师',
    age: 18,
    sex: '男'
}

// 遍历对象

for (var k in obj) {
    // console.log(k); // 直接用 k，得到的是  属性名
    console.log(obj[k]); // obj[k]  得到的是  属性值
}