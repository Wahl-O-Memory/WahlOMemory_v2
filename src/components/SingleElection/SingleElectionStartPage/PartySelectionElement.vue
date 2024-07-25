<script>
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
    }
  }
}
</script>

<template>
<div v-html="svgString" class="PartySelectionElement" :style="getBorderColor()" @click="onClick"/>
</template>

<style scoped>
.PartySelectionElement{
  width: 12rem;
  height: 6rem;
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