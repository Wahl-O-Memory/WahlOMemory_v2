<script>
import GenericHeader from "@/components/Header/GenericHeader.vue";
import HowToPlay from "@/components/HomePage/HowToPlay.vue";

export default {
  name: "GameConceptWrapper",
  components: {HowToPlay, GenericHeader}
}
</script>

<template>
  <generic-header/>
  <div style="padding: 0.5rem">
    <how-to-play/>
  </div>

</template>

<style scoped>
</style>