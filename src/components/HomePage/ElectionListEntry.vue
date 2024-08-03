<script>
export default {
  name: "ElectionListEntry",
  props:{
    electionName:{
      required:true
    }
  }
}
</script>

<template>
<div class="electionListEntry">
  <h1>{{electionName}}</h1>
</div>
</template>

<style scoped>
.electionListEntry{
  border-radius: 2rem;
  border-color: #667e9c;
  border-width: 5px;
  border-style: solid;
  background-color: white;
  cursor: pointer;
  margin: 0.5rem;
}
</style>