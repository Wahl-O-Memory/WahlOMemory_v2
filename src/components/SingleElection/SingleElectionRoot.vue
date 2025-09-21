<template>
  <GenericHeader>
    <SingleElectionHeader :score="score" @continueButtonPressed="nextState" @backButtonPressed="prevState"/>
  </GenericHeader>
  <div class="fullPage">
    <div v-if="loading">Loading...</div>
    <div v-else-if="electionData==null">Failed to load data</div>
    <div v-else-if="currentPage===-1"><SingleElectionStartPage
        :electionName="electionData.name"
        :election-description=electionData.description
        :parties="parties"
        :sponsors="sponsors"
        :current-state-selection="state.currentPartySelection"
        :is-confirmed="state.currentPartySelectionConfirmed"
        @currentSelectionChanged="handleCurrentSelectionChanged"
        @resetPressed="resetState"
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
        :currently-selected-element="this.currentlyHighlightedElement"
        :current-number="currentPage+1"
        :max-number="electionData.questions.length"
        @liked="handleLike"
        @itemDropped="handleItemDrop"
        @checkClicked="handleCheckClicked"
        @onClick="handleElementClick"
        @reset="resetState"
    /></div>
  </div>
</template>

<script>
import {getElectionInfo, getElectionParties, getElectionSponsors} from "@/api/queryElectionInfo.js";
import {loadProgress,setProgress} from "@/api/accessInternalStorage.js"
import {VERSION} from "@/config.js";
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
      currentlyHighlightedElement:{isBottom:false,objectId:-1,party:-1},
      //ignore the next click on element to avoid dup
      ignoreNext:false,
      //Reactive Variable to show loading screen
      loading:true,
      //Loaded ElectionInfo
      electionData:null,
      //Loaded Parties
      parties:null,
      //sponsors
      sponsors:null,
      //Currently shown Page Enum
      currentPage:-1,
      //Current score
      score:0,
      //Current State|{currentPartySelection:[bool],currentPartySelectionConfirmed,currentState,score,questionList[solved,{order[int],answerArray[int],likeArray[bool]}]}
      state:null
    }
  },
  methods:{
    handleElementClick(index/*{isBottom,objectId,party}*/){
      if (this.ignoreNext){
        this.ignoreNext=false
        return;
      }
      if (index.party!==-1){
        this.ignoreNext=true
      }
      //Element exists
      if (this.currentlyHighlightedElement.party!==-1){
        //Bottom to top
        if (this.currentlyHighlightedElement.isBottom&&!index.isBottom){
          this.state.questionList[this.currentPage].answerArray[index.objectId]=this.currentlyHighlightedElement.party
          this.currentlyHighlightedElement={isBottom:false,objectId:-1,party:-1}
          setProgress(this.electionID,this.state)
          return;
        }
        //Bottom to bottom
        if (this.currentlyHighlightedElement.isBottom&&index.isBottom){
          if (this.currentlyHighlightedElement.party===index.party){
            this.currentlyHighlightedElement={isBottom:false,objectId:-1,party:-1}
            return;
          }
          this.currentlyHighlightedElement=index
          return;
        }
        //Top to top
        if (!this.currentlyHighlightedElement.isBottom&&!index.isBottom){
          if (this.currentlyHighlightedElement.objectId===index.objectId){
            this.currentlyHighlightedElement={isBottom:false,objectId:-1,party:-1}
            return;
          }
          let oldPos=this.currentlyHighlightedElement.objectId
          this.state.questionList[this.currentPage].answerArray[index.objectId]=this.currentlyHighlightedElement.party
          this.state.questionList[this.currentPage].answerArray[oldPos]=-1
          this.currentlyHighlightedElement={isBottom:false,objectId:-1,party:-1}
          setProgress(this.electionID,this.state)
          return;
        }
        //Top to bottom
        if (!this.currentlyHighlightedElement.isBottom&&index.isBottom){
          this.state.questionList[this.currentPage].answerArray[this.currentlyHighlightedElement.objectId]=-1
          this.currentlyHighlightedElement={isBottom:false,objectId:-1,party:-1}
          setProgress(this.electionID,this.state)
          return;
        }
      }
      //Element does not exist
      this.currentlyHighlightedElement=index
    },
    resetState(){
      let temp={
        version:VERSION,
        currentPartySelection:[],
        currentPartySelectionConfirmed:false,
        currentState:-1,
        score:0,
        questionList:[]
      }

      for (const party of this.parties.parties) {
        temp.currentPartySelection.push(party.hasAnswers)
      }

      for (let i = 0; i < this.electionData.questions.length; i++) {
        temp.questionList.push(this.initializeQuestionSet(this.filterParties().parties.length))
      }
      setProgress(this.electionID,temp)
      console.log("Create election progress data for",this.electionID)
      this.state = loadProgress(this.electionID)

      this.currentlyHighlightedElement={isBottom:false,objectId:-1,party:-1}
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
    handleLike(index){
      this.state.questionList[this.currentPage].likeArray[index]=!this.state.questionList[this.currentPage].likeArray[index]
      setProgress(this.electionID,this.state)
    },
    handleItemDrop(index,oldId, newId){
      if (!isNaN(parseFloat(newId)) && !isNaN(newId - 0)){
        this.currentlyHighlightedElement={isBottom:false,objectId:-1,party:-1}
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
    this.parties=await getElectionParties(this.electionData);
    this.sponsors=await getElectionSponsors(this.electionData);
    if (this.state==null||this.state.version==null||this.state.version!==VERSION){
      let temp={
        version:VERSION,
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

<style>
html, body{
  background-color: #fce9e6;
}
</style>
