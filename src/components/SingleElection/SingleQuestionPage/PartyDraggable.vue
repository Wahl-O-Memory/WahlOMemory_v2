<script>
import {isMobile} from "@/api/detectMobile.js";

export default {
  name: "PartyDraggable",
  props:{
    partyId:{
      required:true
    },
    partyLogoSvg:{
      required: true
    },
    isSolved: {
      required:true
    },
    isHighlighted: {
      required:true
    }
  },
  methods:{
    startDrag(evt,partyId){
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('party', partyId)
    },
    getBorderColor(){
      if (this.isHighlighted){
        return {"border-color":"darkgoldenrod"}
      }
      return {"border-color":"black"}
    },
    getBounds(){
      if (isMobile()){
        return {
          width:"6rem",
        }
      }
      return {
        width: "8rem"
      }
    }
  },
  emits:['onClick']
}

</script>

<template>
  <div >
    <div v-if="isSolved" class="DragBoundaryNoDrag" v-html="partyLogoSvg"></div>
    <div v-else class="DragBoundary" v-html="partyLogoSvg" draggable="true" :style="[getBorderColor(),getBounds()]" @dragstart="startDrag($event,partyId)" @click="()=>this.$emit('onClick',{isBottom:true,objectId:this.partyId,party:this.partyId})"></div>
  </div>
</template>

<style scoped>
.DragBoundary{
  aspect-ratio: 2;
  border-color: black;
  border-style: solid;
  background-color: lightgray;
  margin: 5px;
  cursor: grab;
}
.DragBoundaryNoDrag{
  width: 8rem;
  height: 4rem;
  border-color: black;
  border-style: solid;
  background-color: lightgray;
  margin: 5px;
}
.DragBoundary :global(svg){
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.DragBoundaryNoDrag :global(svg){
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>