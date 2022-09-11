<template>
  <div id="app">
    <!-- <router-link to="/home">首页</router-link> -->

    <router-link to="/category">目录</router-link>
    <br>

    <router-link to="/home" v-slot="props" custom>
      <button @click="props.navigate">{{props.href}}</button>
      <!-- <p>{{props.route}}</p> -->
      <button @click="props.navigate">哈哈哈哈</button>
      <!-- <button>{{props.isActive}}</button> -->
      <!-- <button>{{props.isExactActive}}</button> -->
    </router-link>

    <br>
    <router-link to="/about">关于</router-link>
    <br>
    <router-link to="/user/phh">用户</router-link>

    <br>
    <button @click="jumpToAbout">关于</button>


    <router-view v-slot="props">
      <transition name="phh" mode="out-in">
        <component :is="props.Component"></component>
      </transition>
    </router-view>
    
  </div>
</template>

<script>

import { useRouter } from 'vue-router';

export default {
  name: 'App',
  components: {
    
  },
  methods: {
    // jumpToAbout() {
    //   this.$router.push("/about")
    // }
  },
  setup() {
    const router = useRouter();

    const jumpToAbout = () => {
      // router.push("/about")
      // push() 还可以传入一个对象
      router.push({
        path: "/about",
        query: {
          name: "phh",
          age: 28
        }
      })
    }

    return {
      jumpToAbout
    }
  }
}
</script>

<style>
  .phh-enter-from,
  .phh-leave-to {
    opacity: 0;
  }

  .phh-enter-active,
  .phh-leave-active {
    transition: opacity 1s ease;
  }
</style>



