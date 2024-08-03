<script>
import {isMobile} from "@/api/detectMobile.js";

export default {
  name: "QuestionBar",
  props:{
    QuestionText:{
      required:true
    },
    currentNumber:{
      required: true
    },
    maxNumber:{
      required: true
    }
  },
  methods:{
    getMobileStyle(){
      if (isMobile()){
        return {"font-size": "1rem"}
      }
    }
  }
}
</script>

<template>
<h1 class="questionText" :style="getMobileStyle()">({{currentNumber}}/{{maxNumber}}) {{QuestionText}}</h1>
</template>

<style scoped>
.questionText{

}
</style>