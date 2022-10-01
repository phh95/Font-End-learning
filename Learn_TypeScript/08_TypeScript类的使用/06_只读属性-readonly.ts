class Person {
    readonly name: string
    readonly friend?: Person
    age?: number

    // 只读属性可以通过构造器重新赋值，但赋值之后就不可以修改
    constructor(name: string, friend?: Person) {
        this.name = name
        this.friend = friend
    }
}

const p = new Person("phh", new Person("why"))

console.log(p.name);
console.log(p.friend); // 打印得到一个 Person 对象 {name: "why", friend: undefined}

// 属性本身不能进行修改，但是如果它是对象类型，例如这里的 p.friend 是一个对象，对象中的属性是可以修改的
if(p.friend) {
    p.friend.age = 18
}


