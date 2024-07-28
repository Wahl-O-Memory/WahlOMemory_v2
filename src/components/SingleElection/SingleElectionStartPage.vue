<script>
import Description from "@/components/SingleElection/SingleElectionStartPage/Description.vue";
import PartySelection from "@/components/SingleElection/SingleElectionStartPage/PartySelection.vue";
import Disclaimer from "@/components/SingleElection/SingleElectionStartPage/Disclaimer.vue";

export default {
  name: "SingleElectionStartPage",
  components: {Disclaimer, PartySelection, Description},
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
  emits:['currentSelectionChanged']
}
</script>

<template>
  <div class="startPage">
    <Description :description-text="electionDescription" />
    <PartySelection :parties="parties" :current-state-selection="currentStateSelection" :is-confirmed="isConfirmed" @selectionChanged="(newSelection)=>this.$emit('currentSelectionChanged',newSelection)"/>
    <Disclaimer/>
  </div>

</template>

<style scoped>
.startPage{
  padding: 1rem;
}
</style>