<script>
import Description from "@/components/SingleElection/SingleElectionStartPage/Description.vue";
import PartySelection from "@/components/SingleElection/SingleElectionStartPage/PartySelection.vue";
import Disclaimer from "@/components/SingleElection/SingleElectionStartPage/Disclaimer.vue";
import {RotateCcw} from 'lucide-vue-next'
import Sponsors from "@/components/SingleElection/SingleElectionStartPage/Sponsors.vue";

export default {
  name: "SingleElectionStartPage",
  components: {Sponsors, Disclaimer, PartySelection, Description, RotateCcw},
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
    sponsors:{
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
    <div @click="this.$emit('resetPressed')" class="resetButton">
      Score zurücksetzen
      <RotateCcw color="black" class="lucidSymbol"/>
    </div>
    <Sponsors :logos="sponsors"/>
  </div>

</template>

<style scoped>
.resetButton{
  display: inline-block;  /* Allows button to size based on content */
  width: auto;  /* Ensures the width adapts to text */
  margin: 0.5rem auto;  /* Centers button horizontally */
  border-width: 2px;
  border-style: solid;
  border-color: #33537b;
  padding: 0.3rem 1rem;  /* Adds horizontal padding for a better look */
  border-radius: 0.7em;
  cursor: pointer;
  text-align: center;  /* Centers text inside button */
  white-space: nowrap;  /* Prevents text from breaking into multiple lines */
}
.startPage{
  padding: 1rem;
}
.lucidSymbol{
  height: 1rem;
  width: 1rem;
}
</style>