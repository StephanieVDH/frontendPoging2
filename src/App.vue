<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */
import HomePage from './components/HomePage.vue';
import ExploreSpots from './components/ExploreSpots.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    ExploreSpots
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
