<template>
  <GenericHeader>
    <SingleElectionHeader :score="score" @continueButtonPressed="nextState" @backButtonPressed="prevState"/>
  </GenericHeader>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="electionData==null">Failed to load data</div>
    <div v-else-if="currentPage===-1"><SingleElectionStartPage :electionName="electionData.name"/></div>
    <div v-else-if="currentPage===-2"><SingleElectionResultPage/></div>
    <div v-else><SingleElectionQuestionPage
        :question="electionData.questions[currentPage]"
        :parties="parties"
        :questionState="state.questionList[currentPage]"
        @liked="handleLike"
        @itemDropped="handleItemDrop"
        @checkClicked="handleCheckClicked"
    /></div>
  </div>
</template>

<script>
import {getElectionInfo,getElectionParties} from "@/api/queryElectionInfo.js";
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
    GenericHeader,
    SingleElectionStartPage,
    SingleElectionResultPage,
    SingleElectionQuestionPage
  },
  props: {
    electionID: {
      required: true
    }
  },
  data(){
    return{
      loading:true,
      electionData:null,
      parties:null,
      currentPage:-1,
      score:0,
      state:null
    }
  },
  methods:{
    handleLike(index){
      this.state.questionList[this.currentPage].likeArray[index]=!this.state.questionList[this.currentPage].likeArray[index]
      setProgress(this.electionID,this.state)
    },
    handleItemDrop(index,oldId, newId){
      if (!isNaN(parseFloat(newId)) && !isNaN(newId - 0)){
        this.state.questionList[this.currentPage].answerArray[index]=newId
        setProgress(this.electionID,this.state)
      }
    },
    nextState(){
      if(this.electionData===null){
        return
      }
      if (this.currentPage===-2){
        return;
      }
      if (this.currentPage===this.electionData.questions.length-1){
        this.currentPage=-2
      }else {
        this.currentPage=this.currentPage+1
      }
      this.state.currentState=this.currentPage
      setProgress(this.electionID,this.state)
    },
    prevState(){
      if(this.electionData===null){
        return
      }
      if (this.currentPage===-1){
        return;
      }
      if (this.currentPage===-2){
        this.currentPage=this.electionData.questions.length
      }
      this.currentPage=this.currentPage-1

      this.state.currentState=this.currentPage
      setProgress(this.electionID,this.state)
    },
    changeScore(delta){
      this.state.score=this.state.score+1
      this.score=this.score+delta
    },
    handleCheckClicked(){
      if (!this.state.questionList[this.currentPage].solved){
        this.state.questionList[this.currentPage].solved=true
        for (const answerIndex in this.state.questionList[this.currentPage].answerArray) {
          if (this.state.questionList[this.currentPage].answerArray[answerIndex]===answerIndex){
            this.changeScore(1)
          }
        }
        setProgress(this.electionID,this.state)
        console.log("Checking")
      }
    },
    initializeQuestionSet(question){
      let orderArray = [...Array(question.answers.length).keys()];
      for (let i = orderArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [orderArray[i], orderArray[j]] = [orderArray[j], orderArray[i]]; // Swap elements
      }
      let answerArray=[]
      let likeArray=[]
      for (let i = 0; i < question.answers.length; i++) {
        answerArray.push(-1)
        likeArray.push(false)
      }

      return {
        order:orderArray,
        answerArray:answerArray,
        likeArray:likeArray,
        solved:false
      }
    }
  },
  async created() {
    this.state=loadProgress(this.electionID)
    if (this.state!=null){
      this.score=this.state.score
    }
    this.electionData = await getElectionInfo(this.electionID);
    this.parties=await getElectionParties(this.electionID);
    if (this.state==null){
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
      this.state = loadProgress(this.electionID)
    }
    this.currentPage=this.state.currentState
    this.loading = false;
  },
};
</script>
