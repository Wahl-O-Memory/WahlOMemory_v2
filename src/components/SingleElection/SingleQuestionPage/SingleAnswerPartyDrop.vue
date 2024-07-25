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
    }
  },
  emits:['dragAway','clickOn'],
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
      return {
        id:this.partyId,
        answerID:-1
      }
    }
  }
}
</script>

<template>
  <div v-if="svgString==null" class="PartyDropZoneNoDrag">
    <img src="@/assets/Empty.svg" alt="No img" draggable="false"/>
  </div>
  <div v-else-if="!isSolved" class="PartyDropZone" v-html="svgString" draggable="true" @dragstart="startDrag($event,partyId)" @dragend="endDrag"></div>
  <div v-else class="PartyDropZoneNoDrag" v-html="svgString"></div>
</template>

<style scoped>
.PartyDropZone{
  width: 8rem;
  height: 4rem;
  border-color: black;
  border-style: solid;
  background-color: lightgray;
  margin: 5px;
  cursor: grab;
}
.PartyDropZoneNoDrag{
  width: 8rem;
  height: 4rem;
  border-color: black;
  border-style: solid;
  background-color: lightgray;
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