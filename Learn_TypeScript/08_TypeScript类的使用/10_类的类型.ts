class Person {
    name: string = "哈哈哈"
    
    eating() {
        console.log("准备吃饭饭");
        
    }
}


const p = new Person()

// 类作为一种类型
const p1: Person = {
    name: "phh",
    eating() {

    }
}


// 应用场景
function printName(p: Person) {
    console.log(p.name);
}

printName(new Person())
printName({ name: "你好啊，李银河", eating() {} })
