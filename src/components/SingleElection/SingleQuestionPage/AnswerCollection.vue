<script>
import SingleAnswer from "@/components/SingleElection/SingleQuestionPage/SingleAnswer.vue";

export default {
  name: 'AnswerCollection',
  components: {SingleAnswer},
  props:{
    answers:{
      required:true
    }
  }
}
</script>

<template>
  <div class="grid-container">
    <div class="grid-item" v-for="(answer, index) in answers" :key="index">
      <SingleAnswer :answer="answer"/>
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); /* Adjust as needed */
  gap: 20px;
  padding: 10px;
}
</style>