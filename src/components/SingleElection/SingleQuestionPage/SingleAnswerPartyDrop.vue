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
    }
  },
  emits:['dragAway'],
  methods:{
    startDrag(evt,partyId){
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('party', partyId)
    },
    endDrag(){
      this.$emit('dragAway')
    }
  }
}
</script>

<template>
  <div v-if="svgString==null" class="PartyDropZone">
    <img src="@/assets/SvgNotFound.svg" alt="No img" draggable="false"/>
  </div>
  <div v-else class="PartyDropZone" v-html="svgString"
       draggable="true"
       @dragstart="startDrag($event,partyId)"
       @dragend="endDrag"
  ></div>
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
.PartyDropZone :global(svg){
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>