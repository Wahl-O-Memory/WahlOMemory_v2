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
    },
    currentlySelectedElement:{
      required:true
    },
    correctLogoSVG:{
      required:true
    }
  },
  data(){
    return{
      borderColor:"black"
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
    },
    getBorderColor(){
      if(this.questionState.isSolved){
        if (this.index===this.questionState.userAnswer){
          return {"border-color":"green"}
        }
        return {"border-color":"red"}
      }
      return {"border-color":"black"}
    },
    svgBackgroundStyle() {
      // URL encode the SVG string
      const svgData = encodeURIComponent(this.correctLogoSVG.trim());
      const svgUrl = `linear-gradient(to top,#ffffff70,#ffffff70), url("data:image/svg+xml,${svgData}")`;
      return {
        backgroundImage: svgUrl,
        backgroundSize: 'contain', // Or other values like 'contain', 'auto', etc.
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom' // Center the background image
      };
    },
    onClickForward(isDrop){
      if (isDrop){
        this.$emit('onClick', {isBottom:false,objectId:this.index,party:this.party.id})
        return
      }
      this.$emit('onClick', {isBottom:false,objectId:this.index,party:-1})
    },
    isSelected(){
      if (this.currentlySelectedElement.party===-1){
        return false
      }
      return this.currentlySelectedElement.party===this.party.id
    },
  },
  emits:['liked','itemDropped','onClick'],
}


</script>

<template>
  <div class="single-answer-container" @drop="onDrop($event)" @dragover.prevent @dragenter.prevent :style="[getBorderColor(),svgBackgroundStyle()]" @click="()=>onClickForward(false)">
    <SingleAnswerHeader :support-strength="answer.support" @liked="onLike" @tts="onTTS" :is-liked="this.questionState.isLiked"/>
    {{answer.answer}}
    <div class="PartyLogoDrop">
      <SingleAnswerPartyDrop
          :svg-string="party.svgString"
          :partyId="this.questionState.userAnswer"
          :is-solved="questionState.isSolved"
          :is-highlighted="isSelected()"
          @dragAway="onDragAway"
          @onClick="()=>onClickForward(true)"
       />
    </div>
  </div>
</template>

<style scoped>
.PartyLogoDrop{
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: auto;
}
.single-answer-container{
  //font-weight: bold;
  font-size: large;
  border-style: solid;
  border-width: 5px;
  border-color: black;
  text-align: left;
  //text-align:justify;
  padding: 1em;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
}
</style>