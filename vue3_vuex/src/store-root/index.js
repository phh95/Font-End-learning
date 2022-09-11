import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state() {
        return {
            counter: 0,
            name: "phh",
            age: 28,
            height: 172,
            books: [
                { name: "深入Vuejs", price: 50, counter: 3 },
                { name: "深入小程序开发", price: 60, counter: 2 },
                { name: "深入Python", price: 70, counter: 1 },
                { name: "深入Node", price: 40, counter: 5 },
            ],
            discount: 0.8,
            banner: []
        }
    },
    getters: {
        // getters里面的函数totalPrice()，既可以传一个参数 state，也可以传两个参数——state和getters
        totalPrice(state, getters) {
            let totalPrice = 0
            for (const book of state.books) {
                totalPrice += book.price * book.counter
            }
            // return totalPrice
            return (totalPrice * getters.currentDiscount).toFixed(1)
        },
        currentDiscount(state) {
            return state.discount * 0.9
        },
        totalPriceCounterGreaterN(state, getters) {
            // 里面嵌套另外一个函数 function(){}
            return function(n) {
                let totalPrice = 0
                for (const book of state.books) {
                    if (book.counter > n) {
                        totalPrice += book.price * book.counter
                    }
                }
                return (totalPrice * getters.currentDiscount).toFixed(1)
            }
        },
        nameInfo(state) {
            return `name: ${state.name}`
        },
        ageInfo(state) {
            return `age: ${state.age}`
        },
        heightInfo(state) {
            return `height: ${state.height}`
        }
    },
    mutations: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        incrementN(state, payload) {
            // 传入的 payloade 为一个数字，例如 10
            // state.counter += payload

            // 传入的 payload 为一个对象 {n: 10, name: "phh", age: 18}
            state.counter += payload.n
        },
        addBannerData(state, payload) {
            state.banner = payload
        }
    },
    actions: {
        incrementAction(context, payload) {
            // 打印 dispatch 传递过来的第二个对象参数
            // console.log(payload);
            setTimeout(() => {
                context.commit("increment")
            }, 1000)
        },
        decrementAction(context) {
            // context 对象还有其他很多的属性/方法
            // console.log(context);
            context.commit("decrement")
        },
        addBannerDataAction(context) {
            // axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
            //     console.log(res.data.data.banner.list);
            //     context.commit("addBannerData", res.data.data.banner.list)
            // })
            return new Promise((resolve, reject) => {
                axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
                    console.log(res.data.data.banner.list);
                    context.commit("addBannerData", res.data.data.banner.list)
                    resolve("发起网络请求～")
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }
});

export default store;