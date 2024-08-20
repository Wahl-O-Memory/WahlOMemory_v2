<script>
import ScoreComponent from "@/components/SingleElection/SingleElectionResultPage/ScoreComponent.vue";
import PartyField from "@/components/SingleElection/SingleElectionResultPage/ResultPartyLikeField.vue";

export default {
  name: "SingleElectionResultPage",
  components: {PartyField, ScoreComponent},
  props:{
    parties:{
      required:true
    },
    state:{
      required: true
    }
  },
  methods:{
    evalLikes(){
      let ret=[]
      for (const partyKey in this.parties.parties) {
        let likeCounter=0
        for (const questionKey in this.state.questionList) {
          if (this.state.questionList[questionKey].likeArray[partyKey]){
            likeCounter++
          }
        }
        ret.push({party:this.parties.parties[partyKey],likes:likeCounter})
      }
      ret.sort((a,b)=>b.likes-a.likes)
      return ret
    }
  },
  emits:['reset']
}
</script>

<template>
  <ScoreComponent :state="state" :parties="this.parties"/>
  <div  v-for="(party, index) in evalLikes()" :key="index">
    <PartyField :party-likes="party"/>
  </div>
  <!--<div @click="()=>this.$emit('reset')" class="resetButton">Nochmal spielen</div>-->
</template>

<style scoped>
.resetButton{
  background-color: #33537b;
  color: white;
  cursor: pointer;
  padding: 1rem 0.3rem;
  margin: 0.2rem 5rem;
  border-radius: 0.5rem;
}
</style>