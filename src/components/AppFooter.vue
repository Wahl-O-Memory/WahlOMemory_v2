<script>
import {isMobile} from "@/api/detectMobile.js";

export default {
  name:"appFooter",
  methods: {
    navigateImprint(){
      this.$router.push({name: 'Impressum'});
    },
    navigateDSGVO(){
      this.$router.push({name: 'Datenschutz'});
    },
    navigateMaking(){
      this.$router.push({name: 'MakingOf'});
    },
    navigatePosition(){
      this.$router.push({name: 'Position'});
    },
    isMobileLocal(){
      return isMobile()
    }
  }
};

</script>

<template>
<div v-if="!isMobileLocal()" class="appFooter">
  <div @click="navigateImprint" class="footerButton">Impressum</div>
  <div @click="navigateDSGVO" class="footerButton">Datenschutz</div>
  <div @click="navigateMaking" class="footerButton">Über Wahl-O-Memory</div>
  <div @click="navigatePosition" class="footerButton">Position von Arbeit und Leben</div>
</div>
<div v-else class="appFooter">
  <div>
    <div @click="navigateImprint" class="footerButton">Impressum</div><br>
    <div @click="navigateDSGVO" class="footerButton">Datenschutz</div>
  </div>
  <div @click="navigateMaking" class="footerButton">Über Wahl-O-Memory</div>
  <div @click="navigatePosition" class="footerButton">Position von Arbeit und Leben</div>
</div>
</template>

<style scoped>
.appFooter{
  padding: 0.5rem;
  background-color: #ed6a58;
  position: -webkit-sticky; /* For Safari */
  position: relative;
  bottom: 0;
  align-items: flex-start;
  display: flex;
}
.footerButton{
  background-color: transparent;
  color: inherit;
  font: inherit;
  border: none;
  padding: 0;
  margin: 0 1rem;
  cursor: pointer;
  text-decoration: underline dotted currentColor;
}
</style>