
function makeArea(shape: Shape) {
    return shape.getArea()
}

// 抽象类
abstract class Shape {
    abstract getArea(): void
}

class Rectangle extends Shape {
    width: number
    height: number

    constructor(width: number, height: number) {
        super()
        this.width = width
        this.height = height
    }

    getArea() {
        return this.width * this.height
    }
}

class Circle extends Shape {
    r: number
    
    constructor(r: number) {
        super()
        this.r = r
    }

    getArea() {
        return 3.14 * this.r * this.r
    }
}

const rectangle = new Rectangle(20, 30)
const circle = new Circle(10)

console.log(makeArea(rectangle));
console.log(makeArea(circle));

// makeArea("123")

// 抽象类不能被实例化 
// makeArea(new Shape())






