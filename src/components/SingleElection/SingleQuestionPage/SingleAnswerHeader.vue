<script>
import { Heart, ThumbsUp, ThumbsDown, SquareMinus} from 'lucide-vue-next'
export default {
  name: "SingleAnswerHeader",
  emits:['liked','tts'],
  components:{Heart,ThumbsUp, ThumbsDown,SquareMinus},
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
    <ThumbsDown v-if="supportStrength===0" color="black" fill="red" class="supportImg"/>
    <SquareMinus v-else-if="supportStrength===1" color="black" fill="yellow" class="supportImg"/>
    <ThumbsUp v-else-if="supportStrength===2" color="black" fill="green" class="supportImg"/>
    <Heart v-if="isLiked" color="red" fill="red" @click="clickLike" class="likeImg"/>
    <Heart v-else color="red" @click="clickLike" class="likeImg"/>
  </div>

</template>

<style scoped>
.likeImg{
  width: 3rem;
  height: 3rem;
  cursor: pointer;
}
.speakerImg{
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