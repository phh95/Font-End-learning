function Star(uname, age, sex) {
    this.name = uname;
    this.age = age;
    this.sex = sex;
    this.sing = function(song) { // 对象的方法
        console.log(song);
    }
}

// 调用构造函数

new Star('刘德华', 18, '男');
var ldh = new Star('刘德华', 18, '男'); // 返回的 ldh 是一个对象 

// 构造函数不需要 return 就可以返回结果
// console.log(typeof ldh); // 验证返回的 ldh 是否是一个对象

// 返回对象的属性
console.log(ldh.name);
console.log(ldh.age);
console.log(ldh['sex']);

// 返回对象的方法
ldh.sing('《17岁》');

// 再次调用构造函数

var zxy = new Star('张学友', 20, '男')
console.log(zxy.name);
console.log(zxy.age);
zxy.sing('《遥远的她》');