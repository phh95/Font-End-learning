// <img id="phh" />

// 这里的关键字 as 就是类型断言，可以将不确定类型的范围缩小


// const el1 = document.getElementById("phh")
// el1.src = "url地址"


const el2 = document.getElementById("phh") as HTMLImageElement
el2.src = "url地址"


// 另外一个案例

class Person {

}

// Student 继承自 Person，即 Person 是 Student 的父类
class Student extends Person {
    studying() {

    }
}

function sayHello(p: Person) {
    // p.studying
    (p as Student).studying()
}

const stu = new Student()
sayHello(stu)