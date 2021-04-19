<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import home from "./components/home.vue"

export default {
  name: "App",
  components: {
    HelloWorld,
    home
  },
};
</script>

<style lang = "scss" src= "./assets/styles/index.scss">

</style>
