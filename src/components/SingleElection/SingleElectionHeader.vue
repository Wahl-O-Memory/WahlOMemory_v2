<script>
import {isMobile} from "@/api/detectMobile.js";

export default {
  name: 'SingleElectionHeader',
  props:{
    score:{
      required:true
    }
  },
  methods:{
    isMobileLocal(){
      return isMobile()
    }
  },
  emits:['backButtonPressed','continueButtonPressed','resetPressed']
}

</script>

<template>
<div v-if="!isMobileLocal()" class="singleElectionHeader">
  <div @click="()=>this.$emit('backButtonPressed')" class="headerButton">Zurück</div>
  <div class="headerText">Score: {{score}}</div>
  <div @click="()=>this.$emit('continueButtonPressed')" class="headerButton">Weiter</div>
  <!--<div @click="()=>this.$emit('resetPressed')" class="headerButton">Reset</div>-->
</div>
<div v-else class="mobileSingleElectionHeader">
  <div class="mobileSingleElectionHeaderElement">
    <div @click="()=>this.$emit('backButtonPressed')" class="mobileHeaderButton">Zurück</div>
    <div @click="()=>this.$emit('continueButtonPressed')" class="mobileHeaderButton">Weiter</div>
  </div>
  <div class="mobileSingleElectionHeaderElement">
    <div class="mobileHeaderText">Score: {{score}}</div>
    <!--<div @click="()=>this.$emit('resetPressed')" class="mobileHeaderButton">Reset</div>-->
  </div>
</div>
</template>

<style scoped>
.singleElectionHeader{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.mobileSingleElectionHeader{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.mobileSingleElectionHeaderElement{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.mobileHeaderText{
  font-size: 1.3rem;
  padding: 0.5rem;
  margin: 0rem 1rem;
}
.mobileHeaderButton{
  cursor: pointer;
  border-color: #33537b;
  border-width: 2px;border-style: solid;
  border-radius: 1rem;
  margin: 0rem 1rem;
  padding: 0.5rem;
}
.headerText{
  font-size: 1.3rem;
  padding: 0.5rem;
  margin: 1rem 0rem;
}
.headerButton{
  cursor: pointer;
  border-color: #33537b;
  border-width: 2px;border-style: solid;
  border-radius: 1rem;
  margin: 1rem 2rem;
  padding: 0.5rem;
}
</style>