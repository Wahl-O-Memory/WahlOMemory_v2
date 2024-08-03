<script>
import {isMobile} from "@/api/detectMobile.js";

export default {
  methods: {
    navigateHome() {
      this.$router.push({name: 'List'});
    },
    getMobileStyle(){
      if (isMobile()){
        return {
          "font-size":"0.7rem",
          "padding-left": "1rem",
          "padding-right": "1rem",
          "border-radius": "1rem"
        }
      }
      return {
        "padding-left": "2rem",
        "padding-right": "2rem",
        "border-radius": "2rem"
      }
    }
  }
};
</script>

<template>
  <div class="home-button" @click="navigateHome" :style="getMobileStyle()">
    <h1>Home</h1>
  </div>
</template>

<style scoped>
.home-button {

  color: white;
  cursor: pointer;
  margin-right: auto;
  background-color: #33537b;
}
</style>