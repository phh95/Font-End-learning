const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
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
})