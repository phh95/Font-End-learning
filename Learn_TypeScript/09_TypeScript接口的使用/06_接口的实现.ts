interface ISwim {
    swimming: () => void
}

interface IEat {
    eating: () => void
}

// const a: ISwim = {
//     swimming() {

//     }
// }

class Animal {

}

class Fish extends Animal implements ISwim, IEat {
    swimming() {
        console.log("Fish Swimming");
    }

    eating() {
        console.log("Fish Eating");
    }
}

class Person implements ISwim {
    swimming() {
        console.log("Person Swimming");
    }
}

// 编写一些公共的API：面向接口编程
// function swimAction(swimable: Fish) {
//     swimable.swimming()
// }

function swimAction(swimable: ISwim) {
    swimable.swimming()
}

swimAction(new Fish())
swimAction(new Person())

// 可以传入普通的对象字面量，因为它符合接口 ISwim 对应的类型
swimAction({swimming: function() {}})  

