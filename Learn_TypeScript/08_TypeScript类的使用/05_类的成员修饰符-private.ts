
class Info {
    // 默认修饰符为 public
    // public name: string = "phh"
    private name: string = "phh"

    getName() {
        // 修饰符更改为 private，只能在类内部访问
        return this.name
    }

    setName(newName: string) {
        this.name = newName
    }
}

const p = new Info()
// console.log(p.name);
// 添加了 private 修饰符，就不能直接访问了，而需要通过调用类内部定义的方法来访问
console.log(p.getName());

export {}

