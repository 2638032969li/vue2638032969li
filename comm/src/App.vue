<template>
  <div id="app">
    <!--<img src="./assets/logo.png">
    <router-view/>-->
    <Header></Header>
    <router-view></router-view>
    <!--    <Index></Index>-->
    <!--<City></City>-->
    <!--<Kezhao></Kezhao>-->
    <Footer></Footer>
  </div>
</template>

<script>
  import Store from './store'
  import Header from './components/header'
  import Footer from './components/footer'
  /*import Index from './components/index'*/
  /*import City from './components/city'*/
  /*import Kezhao from './components/kezhao'*/

  export default {
    name: 'App',
    components: {Header, Footer},
    watch: {
      liItems: {
        handler: function (liItems) {
          Store.save(liItems)
        },
        deep: true // 只要属性发生变化都要进行监听
      }
    }
  }
</script>

<style>
  html, body {
    /*font-size: 0.1rem;*/
  }

  /*#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }*/
</style>
