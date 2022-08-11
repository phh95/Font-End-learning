class Dep {
    constructor() {
        this.subscribers = new Set();
    }

    // 副作用
    // addEffect(effect) {
    //     // 集合set() 不能用 push 方法，只能用 add
    //     // 这里的 effect 是副作用
    //     this.subscribers.add(effect);
    // }

    depend() {
        if (activeEffect) {
            this.subscribers.add(activeEffect);
        }
    }

    notify() {
        this.subscribers.forEach(effect => {
            effect();
        })
    }
}


let activeEffect = null;

function watchEffect(effect) {
    // dep.addEffect(effect);
    activeEffect = effect;
    dep.depend();
    activeEffect = null;
}


const info = { counter: 100 };

const dep = new Dep();

// function doubleCounter() {
//     console.log(info.counter * 2);
// }

watchEffect(function() {
    console.log(info.counter * 2);
})

// function powerCounter() {
//     console.log(info.counter * info.counter);
// }

watchEffect(function() {
    console.log(info.counter * info.counter);
})

// dep.addEffect(doubleCounter);
// dep.addEffect(powerCounter);

info.counter++;
// 当函数依赖的counter的值发生变化时，就调用类中定义的notify()
dep.notify();