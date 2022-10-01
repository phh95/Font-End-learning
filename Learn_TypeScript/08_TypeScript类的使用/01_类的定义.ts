class Person {
    name: string
    age: number

    // 要对属性进行初始化，否则在 TS 默认的严格模式下会报错
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    // 类中定义的方法
    eating() {
        console.log(this.name + " is eating");
    }
}

const p = new Person("phh", 28)
console.log(p.name);
console.log(p.age);
p.eating()



