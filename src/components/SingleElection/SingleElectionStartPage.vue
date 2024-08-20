<script>
import Description from "@/components/SingleElection/SingleElectionStartPage/Description.vue";
import PartySelection from "@/components/SingleElection/SingleElectionStartPage/PartySelection.vue";
import Disclaimer from "@/components/SingleElection/SingleElectionStartPage/Disclaimer.vue";
import {RotateCcw} from 'lucide-vue-next'

export default {
  name: "SingleElectionStartPage",
  components: {Disclaimer, PartySelection, Description, RotateCcw},
  props:{
    electionName:{
      required:true
    },
    electionDescription:{
      required:true
    },
    parties:{
      required:true
    },
    currentStateSelection: {
      required:true
    },
    isConfirmed:{
      required:true
    }
  },
  emits:['currentSelectionChanged', 'resetPressed']
}
</script>

<template>
  <div class="startPage">
    <Description :description-text="electionDescription" />
    <PartySelection :parties="parties" :current-state-selection="currentStateSelection" :is-confirmed="isConfirmed" @selectionChanged="(newSelection)=>this.$emit('currentSelectionChanged',newSelection)"/>
    <Disclaimer/>
    <!--<div @click="this.$emit('resetPressed')" class="resetButton">
      Score zurücksetzen
      <RotateCcw color="black" class="lucidSymbol"/>
    </div>-->

  </div>

</template>

<style scoped>
.resetButton{
  margin: 0.5rem 45%;
  border-width: 2px;
  border-style: solid;
  border-color: #33537b;
  padding: 0.3rem 0;
  border-radius: 0.7em;
  cursor: pointer;
}
.startPage{
  padding: 1rem;
}
.lucidSymbol{
  height: 1rem;
  width: 1rem;
}
</style>