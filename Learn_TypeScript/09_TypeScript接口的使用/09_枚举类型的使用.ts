// 枚举类型的关键字 enum，里面的文本通常为大写
enum Direction {
    EAST,
    SOUTH,
    WEST,
    NORTH
}


function turnDirection(direction: Direction) {
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
        default: 
            const foo: never = direction
            break;
    }
}

turnDirection(Direction.EAST)
turnDirection(Direction.SOUTH)

export {}