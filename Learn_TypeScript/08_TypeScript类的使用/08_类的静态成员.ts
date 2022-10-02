class Student {
    static time: string = "20:00"

    static getTime() {
        console.log("该上课了");
    }
}

// const stu = new Student()
// console.log(stu.time);


console.log(Student.time);
Student.getTime()


