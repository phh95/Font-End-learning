
// React 中的一个 hook: useState

// 使用泛型对前面的代码进行优化


function useState<T>(state: T) {
    let currentState = state
    const changeState = (newState: T) => {
        currentState = newState
    }

    // 元组 tuple 第一个元素是 any 类型，第二个元素是函数类型
    const tuple: [T, (newState: T) => void] = [currentState, changeState]
    return tuple
}

// 直接对 useState() 得到的元组进行解构
const [counter, setCounter] = useState(10);  // 泛型会将我们传入的数字 10 的类型传递到函数体的 T 中
setCounter(1000)


const [title, setTitle] = useState("你好啊");
setTitle("很高兴认识你")

const [flag, setFlag] = useState(true)

export {}