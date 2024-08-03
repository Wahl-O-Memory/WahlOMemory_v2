<script>

import PartyDraggable from "@/components/SingleElection/SingleQuestionPage/PartyDraggable.vue";
import {isMobile} from "@/api/detectMobile.js";

export default {
  name: "PartyCollection",
  components:{PartyDraggable},
  props:{
    parties:{
      required:true
    },
    isSolved:{
      required: true
    },
    currentlySelectedElement:{
      required:true
    }
  },
  emits:['clickCheck','onClick'],
  methods:{
    onDrop(event){
      let id=event.dataTransfer.getData("party")
    },
    onClickCheck(){
      this.$emit("clickCheck")
    },
    onClick(msg){
      this.$emit('onClick',msg)
    },
    isSelected(index){
      return this.currentlySelectedElement.party===index
    },
    getStyleIfMobile(){
      if(isMobile()){
        return {"flex-direction": "column"}
      }
      return {"flex-direction": "row"}
    },
    getStyleIfMobileButton(){
      if(isMobile()){
        return {"font-size": "0.7rem"}
      }
      return {}
    }
  }
}

</script>

<template>
  <div class="PartyCollectionBackground" @drop="onDrop($event)" :style="getStyleIfMobile()" @dragover.prevent @dragenter.prevent @click="()=>onClick({isBottom:true,objectId:-1,party:-1})">
    <div class="PartyCollection">
      <div v-for="(party,index) in parties.parties" >
        <PartyDraggable :party-logo-svg="party.logo" :party-id="parties.indexes[index]" :is-solved="isSolved" :is-highlighted="isSelected(parties.indexes[index])"  @onClick="onClick"/>
      </div>
    </div>
    <div>
      <div @click="onClickCheck" class="checkButton" :style="getStyleIfMobileButton()">
        <h2>Überprüfen</h2>
      </div>
    </div>
  </div>

</template>

<style scoped>
.PartyCollectionBackground{
  background-color: #33537b;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
}
.PartyCollection{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
}
.checkButton{
  background-color: #f2968a;
  cursor: pointer;
  margin: 0.2rem 1rem;
  padding: 1px 0.5rem;
  border-radius: 0.5rem;
}
</style>