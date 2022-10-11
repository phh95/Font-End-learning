// 命名空间
export namespace time {
    export function format(time: string) { 
        return "今天是2022年10月6日"
    }

    export function foo() {}
}

export namespace price {
    export function format(price: number) {
        return "今天的价格上涨了"
    }
}

time.format("当前的时间")
time.foo()


