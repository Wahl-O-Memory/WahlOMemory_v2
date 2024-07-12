<template>
  <div id="app">
    <div class="main">
      <router-view></router-view>
    </div>
    <AppFooter/>
  </div>
</template>

<script>

import AppFooter from "@/components/AppFooter.vue";

export default {
  name: 'App',
  components: {AppFooter}
};
</script>

<style>
*{
  box-sizing: border-box;/*Magic Line*/
}
html, body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  >*{
    flex-shrink: 0;
  }
  min-height: 100vh;
  .main{
    flex-grow: 1;
  }
}
</style>
