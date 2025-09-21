<script>
import HowToPlay from "@/components/HomePage/HowToPlay.vue";
import Sponsors from "@/components/HomePage/Sponsors.vue";
import {isMobile} from "@/api/detectMobile.js";

export default {
  name: "SideBarComponent",
  components: {Sponsors, HowToPlay},
  methods:{
    getMobileStyle(){
      if (isMobile()){
        return{
          "width": "100%"
        }
      }
      return {
        "width":"30%"
      }
    }
  }
}
</script>

<template>
<div class="sideBar">
  <HowToPlay/>
</div>
</template>

<style scoped>
.sideBar{
  background-color: white;
  padding: 1rem;
}
</style>