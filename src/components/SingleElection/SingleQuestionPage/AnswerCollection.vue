<script>
import SingleAnswer from "@/components/SingleElection/SingleQuestionPage/SingleAnswer.vue";

export default {
  name: 'AnswerCollection',
  components: {SingleAnswer},
  props:{
    answers:{
      required:true
    },
    questionState:{
      required: true
    },
    parties:{
      required:true
    },
    currentlySelectedElement: {
      required:true
    }
  },
  methods: {
    questionDataFromIndex(index){
      return{
        userAnswer:Number(this.questionState.answerArray[index]),
        expectedAnswer:Number(this.questionState.order[index]),
        isLiked: this.questionState.likeArray[index],
        isSolved:this.questionState.solved
      }
    },
    onLike(index){
     this.$emit('liked',index)
    },
    onItemDropped(index,oldID,newID){
      this.$emit('itemDropped',index,oldID,newID)
    },
    getParty(index){
      if (this.questionState.answerArray[index]===-1){
        return {
          id:-1,
          svgString:null
        }
      }
      return {
        id: this.questionState.answerArray[index],
        svgString:this.parties.parties[this.questionState.answerArray[index]].logo
      }
    }
  },
  emits:['liked','itemDropped','onClick']
}
</script>

<template>
  <div class="grid-container">
    <div class="grid-item" v-for="(pos, index) in questionState.order" :key="index">
      <SingleAnswer
          :index=pos :answer="answers[pos]"
          :questionState="questionDataFromIndex(pos)"
          :party=getParty(pos) @liked="onLike"
          :currently-selected-element="this.currentlySelectedElement"
          :correctLogoSVG="this.parties.parties[pos].logo"
          @itemDropped="onItemDropped"
          @onClick="(msg)=>this.$emit('onClick',msg)"
      />
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Adjust as needed */
  gap: 20px;
  padding: 10px;
}

</style>