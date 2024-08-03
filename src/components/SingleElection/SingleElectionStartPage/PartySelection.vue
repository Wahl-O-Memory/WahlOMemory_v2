<script>
import PartyDraggable from "@/components/SingleElection/SingleQuestionPage/PartyDraggable.vue";
import PartySelectionElement from "@/components/SingleElection/SingleElectionStartPage/PartySelectionElement.vue";

export default {
  name: "PartySelection",
  components: {PartySelectionElement, PartyDraggable},
  props:{
    parties:{
      required:true
    },
    isConfirmed:{
      required: true
    },
    currentStateSelection:{
      required:true
    }
  },
  data(){
    return{
      currentSelection:[]
    }
  },
  methods:{
    selectAll(){
      if (!this.isConfirmed){
        for (const i in this.currentSelection) {
          if (this.parties.parties[i].hasAnswers){
            this.currentSelection[i]=true
          }
        }
        this.$emit("selectionChanged",this.currentSelection)
      }
    },
    selectNone(){
      if (!this.isConfirmed){
        for (const i in this.currentSelection) {
          this.currentSelection[i]=false
        }
        this.$emit("selectionChanged",this.currentSelection)
      }
    },
    selectCurrent(){
      if (!this.isConfirmed){
        for (const i in this.parties.parties) {
          this.currentSelection[i] =false
          if (this.parties.parties[i].isGoverning && this.parties.parties[i].hasAnswers){
            this.currentSelection[i] =true
          }
        }
        this.$emit("selectionChanged",this.currentSelection)
      }

    },
    filterParties(){
      let ret=[]
      for (const party of this.parties.parties) {
        if (party.hasAnswers){
          ret.push(party)
        }
      }
      return ret
    },
    handleClick(partyId){
      this.currentSelection[partyId]=!this.currentSelection[partyId]
      this.$emit("selectionChanged",this.currentSelection)
    }
  },
  emits:['selectionChanged','confirm'],
  created() {
    if (this.currentStateSelection!=null){
      this.currentSelection=this.currentStateSelection
      return
    }
    console.log(this.parties.parties)
    for (const party of this.parties.parties) {
      this.currentSelection.push(party.hasAnswers)
    }
    this.$emit("selectionChanged",this.currentSelection)
  }
}
</script>

<template>
<div class="PartySelection">
  <h3>Die Aussagen welcher Parteien sollen angezeigt werden?</h3>
  Klicke eine Partei an um sie an- oder abzuwählen.
  <div class="PartySelectionHeadBar">
    <div @click="selectAll" class="PartySelectionButton">Alle</div>
    <div @click="selectCurrent" class="PartySelectionButton">Aktuell im Landtag</div>
    <div @click="selectNone" class="PartySelectionButton">Keine</div>
  </div>
  <div class="PartySelectionCollection">
    <div v-for="(party,index) in parties.parties" >
      <div v-if="party.hasAnswers">
        <PartySelectionElement  :is-selected="this.currentSelection[index]" :party-id="party.partyId"  :svg-string="party.logo" @onClick="handleClick" :is-confirmed="this.isConfirmed"/>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.PartySelection{
  //background-color: chartreuse;
  padding: 0.5rem;
}
.PartySelectionHeadBar{
  align-items: center;
  display: flex;
  flex-direction: row;
}
.PartySelectionButton{
  border-color: #33537b;
  border-style: solid;
  border-radius: 1rem;
  margin: 1rem;
  padding: 0.5rem;
  cursor: pointer;
}
.PartySelectionCollection{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
</style>