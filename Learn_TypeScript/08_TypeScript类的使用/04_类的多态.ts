class Animal {
    moving() {
        console.log("Animal moving");
    }
}

class Dog extends Animal {
    moving() {
        console.log("Dog running");
    }
}

class Fish extends Animal {
    moving() {
        console.log("Fish swimming");
    }
}

// 多态的目的是为了写出更加具备通用性的代码
function makeMoving(animals: Animal[]) {
    animals.forEach(animal => {
        animal.moving()
    })
}

makeMoving([new Dog(), new Fish()])