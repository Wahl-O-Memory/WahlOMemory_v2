<script>
import {isMobile} from "@/api/detectMobile.js";

export default {
  name: "PartySelectionElement",
  props:{
    svgString:{
      required:true
    },
    partyId:{
      required: true
    },
    isSelected:{
      required:true
    },
    isConfirmed:{
      required:true
    }
  },
  emits:['onClick'],
  methods:{
    getBorderColor(){
      if (this.isSelected){
        return {"border-color":"green"}
      }
      return {"border-color":"red"}
    },
    onClick(){
      if (!this.isConfirmed){
        this.$emit("onClick",this.partyId)
      }
    },
    getMobileStyle(){
      if (isMobile()){
        return {
          "width":"8rem"
        }
      }
      return {
        "width":"8rem"
      }
    }
  }
}
</script>

<template>
<div v-html="svgString" class="PartySelectionElement" :style="[getBorderColor(),getMobileStyle()]" @click="onClick"/>
</template>

<style scoped>
.PartySelectionElement{
  cursor: pointer;
  aspect-ratio: 2;
  border-color: black;
  border-style: solid;
  background-color: lightgray;
  margin: 5px;
}

.PartySelectionElement :global(svg){
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>