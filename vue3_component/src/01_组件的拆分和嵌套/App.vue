<template>
    <div id="app">
        <!-- H5里面也有header标签，为了区别，这里的自定义组件Header用大写 -->
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './Header.vue';
    import Main from './Main.vue';
    import Footer from './Footer.vue';

    export default {
        components: {
            Header,
            Main,
            Footer
        }
    }
</script>

<style scoped>

</style>