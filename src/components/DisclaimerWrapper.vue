<script>
import GenericHeader from "@/components/Header/GenericHeader.vue";
import Disclaimer from "@/components/SingleElection/SingleElectionStartPage/Disclaimer.vue";
import HowToPlay from "@/components/HomePage/HowToPlay.vue";

export default {
  name: "DisclaimerWrapper",
  components: {HowToPlay, Disclaimer, GenericHeader}
}
</script>

<template>
  <GenericHeader/>
  <div style="padding: 0.5rem">
    <Disclaimer/>
  </div>

</template>

<style scoped>

</style>