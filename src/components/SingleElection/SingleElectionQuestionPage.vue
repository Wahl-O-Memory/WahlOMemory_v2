<script>
import AnswerCollection from "@/components/SingleElection/SingleQuestionPage/AnswerCollection.vue";
import PartyCollection from "@/components/SingleElection/SingleQuestionPage/PartyCollection.vue";
import QuestionBar from "@/components/SingleElection/SingleQuestionPage/QuestionBar.vue";
import SingleAnswer from "@/components/SingleElection/SingleQuestionPage/SingleAnswer.vue";
import {isMobile} from "@/api/detectMobile.js";
import {RotateCcw} from "lucide-vue-next";

export default {
  name: 'SingleElectionQuestionPage',
  components: {RotateCcw, SingleAnswer, QuestionBar, PartyCollection, AnswerCollection},
  props:{
    parties:{
      required:true
    },
    questionState:{
      required:true
    },
    question:{
      required:true
    },
    currentlySelectedElement:{
      required:true
    },
    currentNumber:{
      required: true
    },
    maxNumber:{
      required: true
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
    },
    getMobileStyle(){
      if (isMobile()){
        return {top:"100px"}
      }
      return {top:"100px"}
    },
  },

  emits:['liked','itemDropped','checkClicked','onClick','reset']
}
</script>
<template>
  <div class="questionBar" :style="getMobileStyle()">
    <QuestionBar :QuestionText="this.question.question" :current-number="currentNumber" :max-number="maxNumber"/>
  </div>
  <div>
    <AnswerCollection
        :answers="question.answers"
        :question-state="questionState"
        :parties="parties"
        :currently-selected-element="this.currentlySelectedElement"
        @liked="onLike"
        @itemDropped="onItemDropped"
        @onClick="(msg)=>this.$emit('onClick',msg)"
    />
  </div>
  <div @click="this.$emit('reset')" class="resetButton">
    Neu starten
    <RotateCcw color="black" class="lucidSymbol"/>
  </div>
  <div v-if="!questionState.solved" class="partyCollection">
    <PartyCollection
        :parties="filterParties()"
        :is-solved="questionState.solved"
        :currently-selected-element="this.currentlySelectedElement"
        @clickCheck="onCheckClicked"
        @onClick="(msg)=>this.$emit('onClick',msg)"
    />
  </div>
</template>

<style scoped>
.resetButton{
  margin: 0.5rem 45%;
  border-width: 2px;
  border-style: solid;
  border-color: #33537b;
  padding: 0.3rem 0;
  border-radius: 0.7em;
  cursor: pointer;
}
.lucidSymbol{
  height: 1rem;
  width: 1rem;
}
.partyCollection{
  position: sticky;
  bottom: 0;
}
.questionBar{
  position: sticky;
  background-color: #fce9e6;
  padding: 0.2rem;
}
</style>