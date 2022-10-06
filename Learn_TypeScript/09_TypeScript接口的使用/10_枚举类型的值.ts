// 枚举类型的关键字 enum，里面的文本通常为大写
enum Direction {
    EAST = 100,  // EAST = 0
    SOUTH,  // SOUTH = 1
    WEST,   // WEST = 2
    NORTH,   // NORTH = 3

    // 枚举类型，也可以把默认的 数字常量 重新定义为 字符串类型
    MIDDLE = "MIDDLE"
}

function turnDirection(direction: Direction) {
    console.log(direction);
    switch(direction) {
        case Direction.EAST:
            console.log("向东走");
            break;
        case Direction.SOUTH:
            console.log("向南走");
            break;
        case Direction.WEST:
            console.log("向西走");
            break;
        case Direction.NORTH:
            console.log("向北走");
            break;
        case Direction.MIDDLE:
            console.log("向中间走");
            break;
        default: 
            const foo: never = direction
            break;
    }
}

turnDirection(Direction.EAST)
turnDirection(Direction.SOUTH)
turnDirection(Direction.MIDDLE)