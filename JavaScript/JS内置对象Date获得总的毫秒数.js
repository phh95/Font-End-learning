// 获得  现在距离1970年1月1日总的毫秒数

// 有4种方法实现

// 1.通过 valueOf()  getTime()

var date = new Date();
console.log(date.valueOf());
console.log(date.getTime());

// 2.最简单的写法
var date1 = +new Date(); // +new Date() 返回的就是总的毫秒数
console.log(date1);

// 3. H5 新增的方法 获得总的毫秒数
console.log(Date.now());