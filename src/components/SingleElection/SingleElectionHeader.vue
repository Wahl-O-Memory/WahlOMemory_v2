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
<div>
  <button @click="handlePrevClick">Zurück</button>
  Score: {{score}}
  <button @click="handleNextClick">Weiter</button>
</div>
</template>

<style scoped>

</style>