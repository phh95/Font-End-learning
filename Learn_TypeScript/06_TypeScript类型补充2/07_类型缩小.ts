
// 1. typeof 的类型缩小

type IDType = number | string

function printID(id: IDType) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
        
    }
}

// 2. 平等的类型缩小 ===

type Direction = "left" | "right" | "top" | "bottom"

function printDirection(direction: Direction) {
    // if判断
    // if (direction === "left") {
    //     console.log(direction);
    // } else if (direction === "right") {
    //     console.log(direction);
    // } else if (direction === "top") {
    //     console.log(direction);
    // } else {
    //     console.log(direction);
        
    // }

    // switch…case
    switch(direction) {
        case "left":
            console.log(direction);
            break;
        case "right":
            console.log(direction);
            break;
    }
}

// 3. instanceof
function printTime(time: string | Date) {
    if (time instanceof Date) {
        console.log(time.toUTCString())
    } else {
        console.log(time);
    }
}

// 定义类
class Student {
    studying() {}
}

class Teacher {
    teaching() {}
}

function work(p: Student | Teacher) {
    if (p instanceof Student) {
        p.studying()
    } else {
        p.teaching()
    }
}

const stu = new Student()
work(stu)

// 4. in
type Fish = { 
    swimming: () => void 
}

type Dog = {
    running: () => void
}

function walk(animal: Fish | Dog) {
    if ('swimming' in animal) {
        animal.swimming()
    } else {
        animal.running()
    }
}

const fish: Fish = {
    swimming() {
        console.log("swimming");
    }
}

walk(fish)