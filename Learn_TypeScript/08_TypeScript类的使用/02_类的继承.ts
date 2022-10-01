// Person 是一个父类
class Person {
    name: string = "请输入你的名字"
    age: number = 0
}

// class Student {
//     name: string = ""
//     age: number = 0
//     snum: number = 0 // 学号

//     studying() {
//         console.log("studying");
//     }
// }

class Student extends Person {
    snum: number = 0
    
    studying() {
        console.log("studying");
    }
}

class Teacher extends Person {
    // name: string = ""
    // age: number = 0
    title: string = "" // 老师的职称

    teaching() {
        console.log("teaching");
    }
}

const stu = new Student()
console.log(stu.name);
console.log(stu.age);


export {}
