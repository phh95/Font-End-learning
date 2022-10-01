// Person 是一个父类
class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    eating() {
        console.log("eating");
    }
}

class Student extends Person {
    snum: number 

    // 创建类的时候初始化
    constructor(name: string, age: number, snum: number) {
        // 关键字 super，可以去调用父类的构造器
        super(name, age)
        this.snum = snum
    }

    // overwrite: 子类对继承自父类的方法不满意，可以重写
    eating() {
        // 调用父类中定义的 eating() 方法
        super.eating()
        console.log(this.name + " is eating");
    }
    
    studying() {
        console.log("studying");
    }
}


const stu = new Student("phh", 28, 111)
console.log(stu.name);
console.log(stu.age);
console.log(stu.snum);

stu.eating()


export {}
