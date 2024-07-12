<script setup>
import AnswerCollection from "@/components/SingleElection/SingleQuestionPage/AnswerCollection.vue";
import PartyCollection from "@/components/SingleElection/SingleQuestionPage/PartyCollection.vue";

const props=defineProps({
  parties:{
    required:true
  },
  question:{
    required:true
  }
})
</script>

<template>
  <div>
    <AnswerCollection :answers="question.answers"/>
  </div>
  <div class="foo">
    <PartyCollection/>
  </div>
</template>

<style scoped>
.foo{
  position: sticky;
  bottom: 0;
}
</style>