<script>
import GenericHeader from "@/components/Header/GenericHeader.vue";
import Disclaimer from "@/components/SingleElection/SingleElectionStartPage/Disclaimer.vue";

export default {
  name: "DisclaimerWrapper",
  components: {Disclaimer, GenericHeader}
}
</script>

<template>
  <GenericHeader/>
  <Disclaimer/>
</template>

<style scoped>

</style>