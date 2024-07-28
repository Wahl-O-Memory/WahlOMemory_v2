<script>

import PartyDraggable from "@/components/SingleElection/SingleQuestionPage/PartyDraggable.vue";

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
    }
  }
}

</script>

<template>
  <div class="PartyCollectionBackground" @drop="onDrop($event)" @dragover.prevent @dragenter.prevent @click="()=>onClick({isBottom:true,objectId:-1,party:-1})">
    <div class="PartyCollection">
      <div v-for="(party,index) in parties.parties" >
        <PartyDraggable :party-logo-svg="party.logo" :party-id="parties.indexes[index]" :is-solved="isSolved" :is-highlighted="isSelected(parties.indexes[index])" @onClick="onClick"/>
      </div>
    </div>
    <div>
      <div @click="onClickCheck" class="checkButton">
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
  flex-direction: row;
  justify-content: space-between;
}
.PartyCollection{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.checkButton{
  background-color: #f2968a;
  cursor: pointer;
  margin: 0.5rem;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
}
</style>