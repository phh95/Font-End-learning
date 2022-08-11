export const demoMixin = {
    data() {
        return {
            message: "Hello demoMixin"
        }
    },
    methods: {
        btnClick() {
            console.log("点击了按钮");
        }
    }
}