<script>
import AnswerCollection from "@/components/SingleElection/SingleQuestionPage/AnswerCollection.vue";
import PartyCollection from "@/components/SingleElection/SingleQuestionPage/PartyCollection.vue";
import QuestionBar from "@/components/SingleElection/SingleQuestionPage/QuestionBar.vue";

export default {
  name: 'SingleElectionQuestionPage',
  components: {QuestionBar, PartyCollection, AnswerCollection},
  props:{
    parties:{
      required:true
    },
    questionState:{
      required:true
    },
    question:{
      required:true
    }
  },
  methods: {
    onLike(index){
      console.log(JSON.stringify(this.question))
      this.$emit("liked",index)
    },
    onItemDropped(index,oldID,newID){
      this.$emit('itemDropped',index,oldID,newID)
    },
    onCheckClicked(){
      this.$emit('checkClicked')
    },
    filterParties(){
      let isLogoSet=new Array(this.parties.parties.length).fill(false)
      for (const setAnswer in this.questionState.answerArray) {
        if (this.questionState.answerArray[setAnswer]!==-1){
          isLogoSet[this.questionState.answerArray[setAnswer]]=true
        }
      }
      let filteredList={
        parties:[],
        indexes:[]
      }
      for (const isSet in isLogoSet) {
        if (!isLogoSet[isSet]){
          filteredList.parties.push(this.parties.parties[isSet])
          filteredList.indexes.push(isSet)
        }
      }
      return filteredList
    }
  },
  emits:['liked','itemDropped','checkClicked']
}
</script>
<template>
  <div class="questionBar">
    <QuestionBar :QuestionText="this.question.question"/>
  </div>
  <div>
    <AnswerCollection :answers="question.answers" :question-state="questionState" :parties="parties" @liked="onLike" @itemDropped="onItemDropped"/>
  </div>
  <div class="partyCollection">
    <PartyCollection :parties="filterParties()" :is-solved="questionState.solved" @clickCheck="onCheckClicked"/>
  </div>
</template>

<style scoped>
.partyCollection{
  position: sticky;
  bottom: 0;
}
.questionBar{
  position: sticky;
  top: 0;
}
</style>