// type 用于定义类型别名(type alias)
type UnionType = string | number | boolean

type PointType = {
    x: number,
    y: number,
    z?: number
}

function printId(id: UnionType) {
    if(typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}


function printPoint(point: PointType) {

}

