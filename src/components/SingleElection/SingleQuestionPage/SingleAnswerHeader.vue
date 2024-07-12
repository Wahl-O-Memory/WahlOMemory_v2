<script>
export default {
  name: "SingleAnswerHeader",
  emits:['liked','tts'],
  methods:{
    clickLike(){
      this.isLiked=!this.isLiked
      this.$emit('liked')
    },
    clickTTS(){
      this.$emit('tts')
    }
  },
  props:{
    supportStrength:{
      required: true
    }
  },
  data(){
    return{
      isLiked:false
    }
  }
}
</script>

<template>
  <div class="answerHeader">
    <img src="@/assets/playAudio.svg" alt="Read" @click="clickTTS" class="likeImg"/>
    <img v-if="supportStrength===0" src="@/assets/supportNone.svg" alt="Unlike" class="supportImg"/>
    <img v-else-if="supportStrength===1" src="@/assets/supportMid.svg" alt="Unlike" class="supportImg"/>
    <img v-else src="@/assets/supportFull.svg" alt="Unlike" class="supportImg"/>
    <img v-if="isLiked" src="@/assets/heartFilled.svg" alt="Unlike" @click="clickLike" class="likeImg"/>
    <img v-else src="@/assets/heartEmpty.svg" alt="Like" @click="clickLike" class="likeImg" />
  </div>

</template>

<style scoped>
.likeImg{
  width: 2rem;
  height: 2rem;
  cursor: pointer;
}
.supportImg{
  width: 16rem;
  height: 2rem;

}
.answerHeader{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>