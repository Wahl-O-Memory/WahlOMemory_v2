<script>
export default {
  name: "ScoreComponent",
  props:{
    parties:{
      required: true
    },
    state:{
      required:true
    }
  },
  methods:{
    countQuestionsUnsolved(){
      let count=0
      for (const question of this.state.questionList) {
        if (!question.solved){
          count++
        }
      }
      return count
    }
  }
}
</script>

<template>
  <div v-if="countQuestionsUnsolved()===0">
    <h2>Glückwunsch, du hast <h1>{{ state.score }}/{{parties.parties.length*state.questionList.length}}</h1> Punkte erreicht</h2>
  </div>
  <div v-else>
    <h2>Du hast {{countQuestionsUnsolved()}}/{{state.questionList.length}} noch nicht bestätigt</h2>
  </div>

</template>

<style scoped>

</style>