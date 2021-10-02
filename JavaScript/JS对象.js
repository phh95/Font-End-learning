var obj = {
    uname: '张三',
    sex: '男',
    age: '128',
    sayHi: function() {
        console.log('Hello');
    }
}

// 调用对象的属性
console.log(obj.uname);
console.log(obj['age']);

// 调用对象的方法
obj.sayHi();