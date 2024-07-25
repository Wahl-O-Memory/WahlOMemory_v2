<template>
  <GenericHeader>
    <SingleElectionHeader :score="score" @continueButtonPressed="nextState" @backButtonPressed="prevState"/>
  </GenericHeader>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="electionData==null">Failed to load data</div>
    <div v-else-if="currentPage===-1"><SingleElectionStartPage
        :electionName="electionData.name"
        :election-description=electionData.description
        :parties="parties"
        :current-state-selection="state.currentPartySelection"
        :is-confirmed="state.currentPartySelectionConfirmed"
        @currentSelectionChanged="handleCurrentSelectionChanged"
    /></div>
    <div v-else-if="currentPage===-2"><SingleElectionResultPage
        :parties="filterParties()"
        :state="this.state"
        @reset="resetState"
    /></div>
    <div v-else><SingleElectionQuestionPage
        :question="filterQuestion(electionData.questions[currentPage])"
        :parties="filterParties()"
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
import {isMobile} from "@/api/detectMobile.js";

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
      //Currently highlighted Element for mobile gameplay|{isBottom,elementId,partyId}
      currentlyHighlightedElement:null,
      //Reactive Variable to show loading screen
      loading:true,
      //Loaded ElectionInfo
      electionData:null,
      //Loaded Parties
      parties:null,
      //Currently shown Page Enum
      currentPage:-1,
      //Current score
      score:0,
      //Current State|{currentPartySelection:[bool],currentPartySelectionConfirmed,currentState,score,questionList[solved,{order[int],answerArray[int],likeArray[bool]}]}
      state:null
    }
  },
  methods:{
    resetState(){
      this.state=null
      let temp={
        currentPartySelection:null,
        currentPartySelectionConfirmed:false,
        currentState:-1,
        score:0,
        questionList:[]
      }
      for (let i = 0; i < this.electionData.questions.length; i++) {
        temp.questionList.push(this.initializeQuestionSet(this.parties.parties.length))
      }
      setProgress(this.electionID,temp)
      console.log("Create election progress data for",this.electionID)
      this.state = loadProgress(this.electionID)
      this.currentlyHighlightedElement=null
      this.currentPage=-1
      this.score=0
    },
    filterParties(){
      let newParties=[]
      for (const party of this.parties.parties) {
        if (this.state.currentPartySelection[party.partyId]){
          newParties.push(party)
        }
      }
      return {parties:newParties}
    },
    filterQuestion(question){
      let ret={
        question:question.question,
        answers:[]
      }
      for (const answer of question.answers) {
        if (this.state.currentPartySelection[answer.party]){
          ret.answers.push(answer)
        }
      }
      return ret
    },
    remakeState(){
      let partyCount=0
      for (const useParty of this.state.currentPartySelection) {
        if (useParty){
          partyCount++
        }
      }
      let newQuestionList=[]
      for (const question of this.state.questionList) {
        newQuestionList.push(this.initializeQuestionSet(partyCount))
      }
      this.state.questionList=newQuestionList
    },
    handleCurrentSelectionChanged(newSelection){
      this.state.currentPartySelection=newSelection
      this.remakeState()
      setProgress(this.electionID,this.state)
    },
    handleElementClick(index/*{isBottom!,elementClick!,elementId}*/){
      console.log("Clicked at",index)
      if (this.currentlyHighlightedElement===null){
        this.currentlyHighlightedElement=index
        return
      }
      window.alert("Not Implemented yet")
    },

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
        return
      }
      this.state.currentPartySelectionConfirmed=true
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
    initializeQuestionSet(answerAmount){
      let orderArray = []
      for (let i = 0; i < answerAmount; i++) {
        orderArray.push(i)
      }
      for (let i = orderArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [orderArray[i], orderArray[j]] = [orderArray[j], orderArray[i]]; // Swap elements
      }
      let answerArray=[]
      let likeArray=[]
      for (let i = 0; i < answerAmount; i++) {
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
        currentPartySelection:null,
        currentPartySelectionConfirmed:false,
        currentState:-1,
        score:0,
        questionList:[]
      }
      for (let i = 0; i < this.electionData.questions.length; i++) {
        temp.questionList.push(this.initializeQuestionSet(this.parties.parties.length))
      }
      setProgress(this.electionID,temp)
      console.log("Create election progress data for",this.electionID)
      this.state = loadProgress(this.electionID)
    }
    this.currentPage=this.state.currentState
    this.loading = false;
  },
};
</script>
