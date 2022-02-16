const app = new Vue({
    el: '#app',
    data: {
        books: [{
                id: 1,
                name: '《算法学导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《unix编程艺术》',
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《读库MOOK》',
                date: '2022-1',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《画中有猫》',
                date: '2018-1',
                price: 49.00,
                count: 1
            }
        ]
    },
    methods: {
        // getFinalPrice(price) {
        //     // toFixed(2)  数字小数点后保留两位小数
        //     return '¥' + price.toFixed(2)
        // }
        decrement(index) {
            this.books[index].count--;
        },
        increment(index) {
            this.books[index].count++;
        },
        removeHandle(index) {
            // splice() 删除元素
            this.books.splice(index, 1)
        }
    },
    computed: {
        // totalPrice() {
        //     let totalPrice = 0
        //     for (let i = 0; i < this.books.length; i++) {
        //         totalPrice += this.books[i].price * this.books[i].count
        //     }
        //     return totalPrice
        // }
        // 使用高阶函数 reduce 计算最后的总价
        totalPrice() {
            return this.books.reduce(function(preValue, book) {
                return preValue + book.price * book.count
            }, 0)
        }
    },
    // 过滤器 filters 保留两位小数
    filters: {
        showPrice(price) {
            return '¥' + price.toFixed(2)
        }
    }
})

// 编程范式：面向对象编程/函数式编程（第一公民：函数）
const nums = [10, 20, 111, 222, 233, 40, 50];

// 函数式编程，链式编程，节省代码量
let total2 = nums.filter(function(n) {
    return n < 100
}).map(function(n) {
    return n * 2
}).reduce(function(preValue, n) {
    return preValue + n
}, 0)
console.log(total2);

// 还有更简单的写法，使用箭头函数
let total3 = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
console.log(total3);


// 需求：取出数组中所有小于 100 的数字
// 方法：高阶函数 filter
// let newNums = nums.filter(function(n) {
//     return n < 100
// })
// console.log(newNums);

// // 第二个需求：将所有小于 100 的数字分别乘以 2
// // 方法：map
// let new2Nums = newNums.map(function(n) {
//     return n * 2
// })
// console.log(new2Nums);

// // 第三个需求：将 new2Nums 数组中的所有数字相加
// // 方法：reduce
// let total = new2Nums.reduce(function(preValue, n) {
//     return preValue + n
// }, 0)
// console.log(total);