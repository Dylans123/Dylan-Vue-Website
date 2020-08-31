<template>
  <Root />
</template>

<script>
import Root from './components/Root.vue'
export default {
  name: 'App',
  components: {
    Root
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Material+Icons");
@import url("https://fonts.googleapis.com/css?family=Archivo&display=swap");

body {
  font-family: 'Archivo', sans-serif !important;
  background: linear-gradient(to right, #84fab0, #8fd3f4) !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
