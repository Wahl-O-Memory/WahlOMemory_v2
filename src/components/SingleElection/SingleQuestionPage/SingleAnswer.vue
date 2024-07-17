<script>
import {getElectionInfo} from "@/api/queryElectionInfo.js";
import SingleAnswerHeader from "@/components/SingleElection/SingleQuestionPage/SingleAnswerHeader.vue";
import SingleAnswerPartyDrop from "@/components/SingleElection/SingleQuestionPage/SingleAnswerPartyDrop.vue";

export default {
  name: 'SingleAnswer',
  components: {SingleAnswerPartyDrop, SingleAnswerHeader},
  props:{
    index:{
      required:true
    },
    answer:{
      required:true
    },
    questionState:{
      required: true
    },
    party:{
      required:true
    }
  },
  methods:{
    onLike(){
      this.$emit('liked',this.index)
    },
    onTTS(){
      if (window.speechSynthesis.speaking){
        speechSynthesis.cancel()
        return
      }
      let msg=new SpeechSynthesisUtterance(this.answer.answer)
      msg.lang="de-DE"
      speechSynthesis.speak(msg)
    },
    onDrop(event){
      let id=event.dataTransfer.getData("party")
      this.$emit('itemDropped',this.index,this.answer.userAnswer,id)
    },
    onDragAway(){
      this.$emit("itemDropped",this.index,this.answer.userAnswer,-1)
    }
  },
  emits:['liked','itemDropped'],
  async created() {
  },
}


</script>

<template>
  <div class="single-answer-container"
       @drop="onDrop($event)"
       @dragover.prevent
       @dragenter.prevent
  >
    <SingleAnswerHeader :support-strength="answer.support" @liked="onLike" @tts="onTTS" :is-liked="this.questionState.isLiked"/>
    {{answer.answer}}
    <div class="footerTest">
      <SingleAnswerPartyDrop :svg-string="party.svgString" :partyId="this.questionState.userAnswer" @dragAway="onDragAway"/>
    </div>

  </div>
</template>

<style scoped>
.footerTest{
  width: 100%;
  display: flex;
  justify-content: center;
}
.single-answer-container{
  border-style: solid;
  border-width: 5px;
  border-color: black;
  text-align: left;
  //text-align:justify;
  padding: 1em;
}
</style>