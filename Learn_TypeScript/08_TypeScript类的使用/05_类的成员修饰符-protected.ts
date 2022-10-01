
class Info {
    protected name: string = "phh"
}

class Student extends Info {
    getName() {
        // protected 修饰符，子类可以通过 this 调用父类中的属性 name
        return this.name
    }
}

const stu = new Student()
console.log(stu.getName());







