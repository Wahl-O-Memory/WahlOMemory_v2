<script>
export default {
  name: "QuestionBar",
  props:{
    QuestionText:{
      required:true
    }
  },
  created() {
    console.log(this.QuestionText)
  }
}
</script>

<template>
<h1>{{QuestionText}}</h1>
</template>

<style scoped>

</style>