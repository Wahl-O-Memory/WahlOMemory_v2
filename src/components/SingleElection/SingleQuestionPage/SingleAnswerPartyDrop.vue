<script>
import errString from "@/assets/SvgNotFound.svg";
export default {
  name: "SingleAnswerPartyDrop",
  props: {
    partyId:{
      required: true
    },
    svgString:{
      required:true
    },
    isSolved:{
      required:true
    },
    isHighlighted:{
      required:true
    }
  },
  emits:['dragAway','onClick'],
  methods:{
    startDrag(evt,partyId){
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('party', partyId)
    },
    endDrag(){
      this.$emit('dragAway')
    },
    onClick(){
      this.$emit('onClick')
    },
    getBorderColor(){
      if (this.isHighlighted){
        return {"border-color":"darkgoldenrod"}
      }
      return {"border-color":"black"}
    }
  }
}
</script>

<template>
  <div v-if="svgString==null" class="PartyDropZoneNoDrag">
    <img src="@/assets/Empty.svg" alt="No img" draggable="false"/>
  </div>
  <div v-else-if="!isSolved" class="PartyDropZone" v-html="svgString" draggable="true" :style="getBorderColor()" @dragstart="startDrag($event,partyId)" @dragend="endDrag" @click="onClick"></div>
  <div v-else class="PartyDropZoneNoDrag" v-html="svgString"></div>
</template>

<style scoped>
.PartyDropZone{
  width: 8rem;
  height: 4rem;
  border-color: black;
  border-style: solid;
  background-color: lightgrey;
  margin: 5px;
  cursor: grab;
}
.PartyDropZoneNoDrag{
  width: 8rem;
  height: 4rem;
  border-color: black;
  border-style: solid;
  background-color: lightgrey;
  margin: 5px;
}
.PartyDropZone :global(svg){
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.PartyDropZoneNoDrag :global(svg){
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>