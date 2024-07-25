<script>
import { Heart, Volume2} from 'lucide-vue-next'
export default {
  name: "SingleAnswerHeader",
  emits:['liked','tts'],
  components:{Heart,Volume2},
  methods:{
    clickLike(){
      this.$emit('liked')
    },
    clickTTS(){
      this.$emit('tts')
    }
  },
  props:{
    supportStrength:{
      required: true
    },
    isLiked:{
      required: true
    }
  },
}
</script>

<template>
  <div class="answerHeader">
    <img src="@/assets/playAudio.svg" alt="Read" @click="clickTTS" class="speakerImg"/>
    <img v-if="supportStrength===0" src="@/assets/supportNone.svg" alt="Unlike" class="supportImg"/>
    <img v-else-if="supportStrength===1" src="@/assets/supportMid.svg" alt="Unlike" class="supportImg"/>
    <img v-else src="@/assets/supportFull.svg" alt="Unlike" class="supportImg"/>
    <Heart v-if="isLiked" color="red" fill="red" @click="clickLike" class="likeImg"/>
    <Heart v-else color="red" @click="clickLike" class="likeImg"/>
    <!--
    <img v-if="isLiked" src="@/assets/heartFilled.svg" alt="Unlike" @click="clickLike" class="likeImg"/>
    <img v-else src="@/assets/heartEmpty.svg" alt="Like" @click="clickLike" class="likeImg" />
    -->
  </div>

</template>

<style scoped>
.likeImg{
  width: 4rem;
  height: 4rem;
  cursor: pointer;
}
.speakerImg{
  width: 3rem;
  height: 3rem;
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