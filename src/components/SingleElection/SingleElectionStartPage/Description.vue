<script>
export default {
  name: "Description",
  props:{
    descriptionText:{
      required:true
    }
  }
}
</script>

<template>
  <div>
    {{descriptionText}}
  </div>
</template>

<style scoped>

</style>