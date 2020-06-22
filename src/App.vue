<template>
  <div id="app">
    <div>
      <a href="#" @click="setLocale('en')">English</a>
      <a href="#" @click="setLocale('zh-TW')">中文</a>
    </div >
    <img src="./assets/logo.png">
    <ul class="nav justify-content-center">
      <li><router-link to="/">{{ $t("nav.home") }}</router-link></li>
      <li><router-link to="/earthquakes">{{ $t("nav.earthquakes") }}</router-link></li>
      <li><router-link to="/calculator">{{ $t("nav.calculator") }}</router-link></li>
      <li><router-link to="/todolist">{{ $t("nav.TodoList") }}</router-link></li>
      <li data-toggle="modal" data-target="#exampleModal"><router-link to="/login">{{ $t("nav.Login") }}</router-link></li>
      <li><router-link to="/draw">{{ $t("nav.draw") }}</router-link></li>
      <li><router-link to="/swiper">{{ $t("nav.swiper") }}</router-link></li>
       <li><router-link to="/slide">{{ $t("nav.slide") }}</router-link></li>
       <li><router-link to="/mailto">{{ $t("nav.mailto") }}</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    setLocale (locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li{
  list-style: none;
  display: inline-block;
  margin: 0px 15px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 18px;
}
.navbar{
  width: 100%;
  height: 50px;
  background-color: gray;
  display: flex;
  margin-bottom: 10px;
}
a{
  text-decoration: none;
  color: cadetblue;
}
</style>
