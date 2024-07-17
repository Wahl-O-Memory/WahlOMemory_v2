<script>
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
    }
  },
  methods:{
    startDrag(evt,partyId){
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('party', partyId)
    }
  }
}

</script>

<template>
  <div >
    <div v-if="isSolved" class="DragBoundaryNoDrag" v-html="partyLogoSvg"></div>
    <div v-else class="DragBoundary" v-html="partyLogoSvg" draggable="true" @dragstart="startDrag($event,partyId)"></div>
  </div>
</template>

<style scoped>
.DragBoundary{
  width: 8rem;
  height: 4rem;
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