export default {
    template: `
    <div>
        <h2>{{message}}</h2>
        <button @click="btnClick">按钮</button>
        <h2>{{name}}</h2>
    </div>
`,
    data() {
        return {
            message: 'Hello Vue + Webpack',
            name: 'phh'
        }
    },
    methods: {
        btnClick() {
            console.log('这是点击按钮之后打印的东西');
        }
    }
}