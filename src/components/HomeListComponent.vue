<template>
  <div>
    <GenericHeader>
      <div class="aboutButton" @click="()=>this.$router.push({name: 'MakingOf'})">Über Wahl-O-Memory</div>
    </GenericHeader>
    <div class="homeScreen" :style="getMobileStyle()">
      <div class="ListDiv" :style="getMobileListStyle()">
        <div v-if="loading">Loading...</div>
        <div v-else>
          <ElectionList :items="this.items"/>
        </div>
      </div>
      <SideBarComponent/>
    </div>
  </div>
</template>

<script>
import { getElections } from '@/api/queryElections.js';
import GenericHeader from "@/components/Header/GenericHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import ElectionList from "@/components/HomePage/ElectionList.vue";
import SideBarComponent from "@/components/HomePage/SideBarComponent.vue";
import {isMobile} from "@/api/detectMobile.js";

export default {
  name: 'HomeListComponent',
  components: {SideBarComponent, ElectionList, AppFooter, GenericHeader},
  data() {
    return {
      items: [],
      loading: true,
    };
  },
  methods:{
    getMobileStyle(){
      if (isMobile()){
        return{
          "flex-direction": "column"
        }
      }
      return {
        "flex-direction": "row"
      }
    },
    getMobileListStyle(){
      if (isMobile()){
        return {
          "margin":"1rem"
        }
      }
      return {
        "width": "300vw"
      }
    }
  },
  async created() {
    this.items = await getElections();
    this.loading = false;
  },

};
</script>


<style scoped>
.homeScreen{
  display: flex;
}
.ListDiv{
  margin-right: auto;
}
.aboutButton{
  cursor: pointer;
  font-size: 1.3rem;
  margin: 0 3rem;
  text-decoration: underline dotted currentColor;
}
</style>