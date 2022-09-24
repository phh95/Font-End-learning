type Person = {
    name: string,
    friend?: {
        name: string,
        age?: number
    }
}

const info: Person = {
    name: "phh",
    friend: {
        name: "lizhiming"
    }
}

// 可选链
console.log(info.friend?.name);
console.log(info.friend?.age);



// 编译阶段会报错的写法
// console.log(info.friend.name);

// 其中的一种解决方法
if(info.friend) {
    console.log(info.friend.name);
}


// console.log(info.friend!.name);
// console.log(info.friend!.age);



