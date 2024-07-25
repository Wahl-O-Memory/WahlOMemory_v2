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
    }
  },
  emits:['clickCheck'],
  methods:{
    onDrop(event){
      let id=event.dataTransfer.getData("party")
    },
    onClickCheck(){
      this.$emit("clickCheck")
    }
  }
}

</script>

<template>
  <div class="PartyCollectionBackground" @drop="onDrop($event)" @dragover.prevent @dragenter.prevent @click="()=>console.log('BG clicked')">
    <div class="PartyCollection">
      <div v-for="(party,index) in parties.parties" >
        <PartyDraggable :party-logo-svg="party.logo" :party-id="parties.indexes[index]" :is-solved="isSolved"/>
      </div>
    </div>
    <div>
      <button @click="onClickCheck">
        Überprüfen
      </button>
    </div>
  </div>

</template>

<style scoped>
.PartyCollectionBackground{
  background-color: deepskyblue;
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
</style>