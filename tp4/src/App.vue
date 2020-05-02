<template>
  <div id="app" class="container">
    <navbar />
    <router-view></router-view>
  </div>
</template>

<script>
 import navbar from './components/navbar.vue'

export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
