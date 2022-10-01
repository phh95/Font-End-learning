class Person {
    // 私有属性，有个规范，一般会在最前面加个下划线 _
    private _name: string
    constructor(name: string) {
        this._name = name
    }

    // 访问器 setter和getter
    set name(newName) {
        this._name = newName
    }

    get name() {
        return this._name
    }

}

const p = new Person("phh")

// 访问私有属性 _name 的时候，用 p.name 就可以了
p.name = "哈哈哈哈哈"
console.log(p.name);


export {}