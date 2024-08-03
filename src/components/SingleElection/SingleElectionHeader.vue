<script>
export default {
  name: 'SingleElectionHeader',
  props:{
    score:{
      required:true
    }
  },
  methods:{
    handlePrevClick(){
      this.$emit('backButtonPressed')
    },
    handleNextClick(){
      this.$emit('continueButtonPressed')
    }
  },
  emits:['backButtonPressed','continueButtonPressed']
}

</script>

<template>
<div class="singleElectionHeader">
  <div @click="handlePrevClick" class="headerButton">Zurück</div>
  <div class="headerText">Score: {{score}}</div>
  <div @click="handleNextClick" class="headerButton">Weiter</div>
</div>
</template>

<style scoped>
.singleElectionHeader{
  display: flex;
  flex-direction: row;
  align-items: flex-start;

}
.headerText{
  font-size: 1.3rem;
  padding: 0.5rem;
  margin: 1rem 0rem;
}
.headerButton{
  cursor: pointer;
  border-color: #33537b;
  border-width: 2px;border-style: solid;
  border-radius: 1rem;
  margin: 1rem 2rem;
  padding: 0.5rem;
}
</style>