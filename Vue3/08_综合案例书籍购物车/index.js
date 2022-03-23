Vue.createApp({
    template: '#my-app',
    data() {
        return {
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
        }
    },
    computed: {
        totalPrice() {
            let finalPrice = 0;
            for (let book of this.books) {
                finalPrice += book.price * book.count
            }
            return finalPrice
        },
        // Vue3 去掉了 Vue2 中的过滤器，不支持过滤器了，在 Vue3 采用另外两种方法：计算属性/使用全局的方法
        // 给每一行的价格前面添加人民币符号 ¥
        filterBooks() {
            // 使用map方法，对books数组中的每一个元素进行转换
            return this.books.map(item => {
                // assign 将数组 books 数组进行拷贝，拷贝出同样的一份数组
                const newItem = Object.assign({}, item);
                newItem.price = '¥' + item.price;
                return newItem;
            })
        }
    },
    methods: {
        increment(index) {
            this.books[index].count++;
        },
        decrement(index) {
            this.books[index].count--;
        },
        removeBook(index) {
            // 移除数组books中的某个元素
            this.books.splice(index, 1)
        },
        formatPrice(price) {
            return '¥' + price;
        }
    }
}).mount('#app')