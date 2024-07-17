<script>

import PartyDraggable from "@/components/SingleElection/SingleQuestionPage/PartyDraggable.vue";

export default {
  name: "PartyCollection",
  components:{PartyDraggable},
  props:{
    parties:{
      required:true
    }
  },
  methods:{
    onDrop(event){
      let id=event.dataTransfer.getData("party")
    }
  }
}

</script>

<template>
  <div class="PartyCollectionBackground"
       @drop="onDrop($event)"
       @dragover.prevent
       @dragenter.prevent
  >
    <div class="PartyCollection">
      <div v-for="(party,index) in parties.parties" >
        <PartyDraggable :party-logo-svg="party.logo" :party-id="parties.indexes[index]"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.PartyCollectionBackground{
  background-color: deepskyblue;
  padding: 0.5rem;
}
.PartyCollection{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
</style>