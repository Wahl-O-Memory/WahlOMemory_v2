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
    navigateGameConcept(){
      this.$router.push({name: 'GameConcept'});
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
  <div @click="navigateGameConcept" class="footerButton">Spielprinzip</div>
</div>
  <div v-else class="appFooter">
    <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 0.3rem; width: 100%;">
      <div style="display: flex; flex-direction: row; gap: 0.1rem; width: 100%;">
        <div @click="navigateImprint" class="footerButton" style="flex: 1; text-align: center;">Impressum</div>
        <div @click="navigateDSGVO" class="footerButton" style="flex: 1; text-align: center;">Datenschutz</div>
        <div @click="navigateGameConcept" class="footerButton" style="flex: 1; text-align: center;">Spielprinzip</div>
      </div>
      <div style="display: flex; flex-direction: row; gap: 0.1rem; width: 100%;">
        <div @click="navigateMaking" class="footerButton" style="flex: 1; text-align: center;">Über Wahl-O-Memory</div>
        <div @click="navigatePosition" class="footerButton" style="flex: 1; text-align: center;">Position von Arbeit und Leben</div>
      </div>
    </div>
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