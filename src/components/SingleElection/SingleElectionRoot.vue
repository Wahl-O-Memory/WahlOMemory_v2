<template>
  <GenericHeader>
    <SingleElectionHeader :score="score" @continueButtonPressed="nextState" @backButtonPressed="prevState"/>
  </GenericHeader>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="electionData==null">Failed to load data</div>
    <div v-else-if="state===-1"><SingleElectionStartPage :electionName="electionData.name"/></div>
    <div v-else-if="state===-2"><SingleElectionResultPage/></div>
    <div v-else><SingleElectionQuestionPage :question="electionData.questions[state]" :parties="electionData.parties"/></div>
  </div>
</template>

<script>
import {getElectionInfo} from "@/api/queryElectionInfo.js";
import {loadProgress,setProgress} from "@/api/accessInternalStorage.js"
import SingleElectionStartPage from "@/components/SingleElection/SingleElectionStartPage.vue";
import SingleElectionResultPage from "@/components/SingleElection/SingleElectionResultPage.vue";
import SingleElectionQuestionPage from "@/components/SingleElection/SingleElectionQuestionPage.vue";
import GenericHeader from "@/components/Header/GenericHeader.vue";
import SingleElectionHeader from "@/components/SingleElection/SingleElectionHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: 'SingleElectionRoot',
  components: {
    AppFooter,
    SingleElectionHeader,
    GenericHeader, SingleElectionStartPage, SingleElectionResultPage, SingleElectionQuestionPage},
  props: {
    electionID: {
      required: true
    }
  },
  data(){
    return{
      loading:true,
      electionData:null,
      state:-1,
      score:0,
      progress:null
    }
  },
  methods:{
    nextState(){
      if(this.electionData===null){
        return
      }
      if (this.state===-2){
        return;
      }
      if (this.state===this.electionData.questions.length-1){
        this.state=-2
      }else {
        this.state=this.state+1
      }
      this.progress.currentState=this.state
      setProgress(this.electionID,this.progress)
    },
    prevState(){
      if(this.electionData===null){
        return
      }
      if (this.state===-1){
        return;
      }
      if (this.state===-2){
        this.state=this.electionData.questions.length
      }
      this.state=this.state-1

      this.progress.currentState=this.state
      setProgress(this.electionID,this.progress)
    },
    changeScore(delta){
      this.score=this.score+delta
    },
    initializeQuestionSet(question){
      let orderArray = [...Array(question.answers.length).keys()];
      for (let i = orderArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [orderArray[i], orderArray[j]] = [orderArray[j], orderArray[i]]; // Swap elements
      }
      let answerArray=[]
      for (let i = 0; i < question.answers.length; i++) {
        answerArray.push(-1)
      }

      console.log(orderArray)
      return {
        order:orderArray,
        answerArray:answerArray,
        likeArray:[],
        solved:false
      }
    }
  },
  async created() {
    this.progress=loadProgress(this.electionID)
    this.electionData = await getElectionInfo(this.electionID);
    if (this.progress==null){
      let temp={
        currentState:-1,
        score:0,
        questionList:[]
      }
      for (let i = 0; i < this.electionData.questions.length; i++) {
        temp.questionList.push(this.initializeQuestionSet(this.electionData.questions[i]))
      }
      setProgress(this.electionID,temp)
      console.log("Create election progress data")
      this.progress = loadProgress(this.electionID)
    }
    this.state=this.progress.currentState
    this.loading = false;
  },
};
</script>
