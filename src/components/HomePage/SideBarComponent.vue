<script>
import HowToPlay from "@/components/HomePage/HowToPlay.vue";
import Sponsors from "@/components/HomePage/Sponsors.vue";

export default {
  name: "SideBarComponent",
  components: {Sponsors, HowToPlay}
}
</script>

<template>
<div class="sideBar">
  <HowToPlay/>
  <Sponsors/>
</div>
</template>

<style scoped>
.sideBar{
  background-color: white;
  width: 30%;
  padding: 1rem;
}
</style>