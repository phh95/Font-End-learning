class Point<T> {
    x: T
    y: T
    z: T

    constructor(x: T, y: T, z: T) {
        this.x = x
        this.y = y
        this.z = z
    }
}


const point1 = new Point<number>(1.22, 3.34, 4.46)

// 类型推导
const point2 = new Point("2.23", "2.33", "3.33")

// 声明变量的类型
const point3: Point<string> = new Point("x坐标", "y坐标", "z坐标")


// 最后一种声明变量类型的方式，与之前学习过的声明 数组 类型有些相似
const name1: string[] = ["abc", "cba", "cab"]
const name2: Array<string> = ["nba", "cba", "kfc"]  // 不推荐在声明数组类型时用这种写法 