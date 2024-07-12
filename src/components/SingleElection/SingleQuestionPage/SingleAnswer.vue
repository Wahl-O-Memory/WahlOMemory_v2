<script>
import {getElectionInfo} from "@/api/queryElectionInfo.js";
import SingleAnswerHeader from "@/components/SingleElection/SingleQuestionPage/SingleAnswerHeader.vue";

export default {
  name: 'SingleAnswer',
  components: {SingleAnswerHeader},
  props:{
    answer:{
      required:true
    }
  },
  methods:{
    onLike(){
    },
    onTTS(){
      if (window.speechSynthesis.speaking){
        speechSynthesis.cancel()
        return
      }
      let msg=new SpeechSynthesisUtterance(this.answer.answer)
      msg.lang="de-DE"
      speechSynthesis.speak(msg)
    }
  },
  emits:['liked'],
  async created() {
  },
}


</script>

<template>
  <div class="single-answer-container">
    <SingleAnswerHeader :support-strength="answer.support" @liked="onLike" @tts="onTTS"/>
    {{answer.answer}}
  </div>
</template>

<style scoped>
.single-answer-container{
  border-style: solid;
  border-width: 5px;
  border-color: black;
  text-align: left;
  //text-align:justify;
  padding: 1em;
}
</style>