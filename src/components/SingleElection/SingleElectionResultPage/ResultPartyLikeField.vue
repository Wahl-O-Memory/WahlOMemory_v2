<script>
import {Heart} from "lucide-vue-next";
export default {
  name: "PartyField",
  components:{Heart},
  props:{
    partyLikes:{
      required:true
    }
  },
  methods:{
    likeHelper(){
      let ret=[]
      for (let i = 0; i < this.partyLikes.likes; i++) {
        ret.push(i)
      }
      return ret
    }
  }
}
</script>

<template>
<div class="partyLikeLine">
  <div v-html="partyLikes.party.logo" class="resultImg"/>
  <div class="additional-images">
    <Heart v-for="i in likeHelper()" :key="i" class="resultImg" color="red" fill="red"/>
  </div>
</div>
</template>

<style scoped>
.partyLikeLine {
  display: flex;
  flex-direction: row;
  align-items: center; /* Align items in the center to ensure vertical alignment */
   /* Space between instances */
  border-style: dotted;
  border-color: lightgrey;
  border-width: 2px;
  margin: 2rem;
}
.resultImg {
  width: 12rem; /* Adjust width as needed */
  height:6rem;
  margin-left:2rem; /* Space between logo and hearts */
}
.additional-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center the heart images */
}

.additional-images img {
  width: 4rem; /* Adjust size of the hearts as needed */
  margin: 0.4rem; /* Space between hearts */
}
</style>