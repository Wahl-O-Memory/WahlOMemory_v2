<script>
import {isMobile} from "@/api/detectMobile.js";

export default {
  name: "Sponsors",
  props:{
    logos:{
      required:true,
    }
  },
  methods:{
    getMobileStyle(){
      if (isMobile()){
        return { // Take half width on mobile
          "width": "90%"
        }
      }
      return { // Take 20% width on desktop
        "width": "45%"
      }
    },
  }
}
</script>

<template>
  <div class="logoContainer">
    <div v-for="logo in logos.sponsors" :key="logo.id" class="logo-item"  :style="getMobileStyle()" v-html="logo"/>
  </div>

</template>

<style scoped>

.logoContainer{
  width: 100%;
  display: flex;
  flex-direction: row; /* Changed from column to row */
  flex-wrap: wrap; /* Allows items to wrap to next line */
  justify-content: center; /* Centers items horizontally */
  align-items: center; /* Centers items vertically */
  background: skyblue;
  gap: 20px; /* Adds spacing between items */
}

.logo-item {
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
}
</style>