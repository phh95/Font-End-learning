
// React 中的一个 hook: useState

function useState(state: any) {
    let currentState = state
    const changeState = (newState: any) => {
        currentState = newState
    }

    // 元组 tuple 第一个元素是 any 类型，第二个元素是函数类型
    const tuple: [any, (newState: any) => void] = [currentState, changeState]
    return tuple
}

// 直接对 useState() 得到的元组进行解构
const [counter, setCounter] = useState(10);
setCounter(1000)

