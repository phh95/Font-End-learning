class Dep {
    constructor() {
        this.subscribers = new Set();
    }

    // 副作用
    addEffect(effect) {
        // 集合set() 不能用 push 方法，只能用 add
        // 这里的 effect 是副作用
        this.subscribers.add(effect);
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
    effect();
    activeEffect = null;
}


const targetMap = new WeakMap();

function getDep(target, key) {
    // 根据 target 对象取出对应的 Map 对象
    let depsMap = targetMap.get(target);
    if (!depsMap) {
        depsMap = new Map();
        targetMap.set(target, depsMap);
    }
}



function reactive(raw) {
    Object.keys(raw).forEach(key => {
        Object.defineProperty(raw, key, {
            get() {

            },
            set(newValue) {

            }
        })
    })
    return raw;
}


const info = reactive({ counter: 100 });




function doubleCounter() {
    console.log(info.counter * 2);
}

function powerCounter() {
    console.log(info.counter * info.counter);
}

dep.addEffect(doubleCounter);
dep.addEffect(powerCounter);

info.counter++;
// 当函数依赖的counter的值发生变化时，就调用类中定义的notify()
// dep.notify();