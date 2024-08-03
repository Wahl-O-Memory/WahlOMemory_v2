<script>
import {isMobile} from "@/api/detectMobile.js";

export default {
  name: "Sponsors",
  methods:{
    getMobileStyle(){
      if (isMobile()){
        return {
          "width": "100%"
        }
      }
      return {
        "width": "45%"
      }
    },
    getMobileStyleContainer(){
      if (isMobile()){
        return {
          "display": "flex",
          "flex-direction": "column"
        }
      }
    }
  }
}
</script>

<template>
<div class="logoContainer" :style="getMobileStyleContainer()">
  <img :style="getMobileStyle()" alt="Arbeit und Leben Thüringen" src="@/assets/Logos/Logo_Deine%20Vision.png" class="logoImg"/>
  <img :style="getMobileStyle()" alt="Deine Vision 2030" src="@/assets/Logos/U18%20Logo%20klassisch.png" class="logoImg"/>
  <img :style="getMobileStyle()" alt="U18 Wahl" src="@/assets/Logos/AL_LOGO_TH_RGB.svg" class="logoImg"/>
  <img :style="getMobileStyle()" alt="Gefördert vom Bundesministerium für Familie, Senioren, Frauen und Jugend" src="@/assets/Logos/BMFSFJ%20gefördert%20vom.jpg" class="logoImg">
  <img :style="getMobileStyle()" alt="Gefördert vom Thüringer Ministerium für Bildung, Jugend und Sport" src="@/assets/Logos/TMBJS_Förderhinweis.png" class="logoImg">
</div>
</template>

<style scoped>
.logoContainer{
  width: 100%;
  //background-color: deepskyblue;
}
.logoImg{
  height: auto;
}
</style>