<template>
  <div>
    <GenericHeader/>
    <div class="homeScreen">
      <div class="ListDiv">
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

export default {
  name: 'HomeListComponent',
  components: {SideBarComponent, ElectionList, AppFooter, GenericHeader},
  data() {
    return {
      items: [],
      loading: true,
    };
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
  flex-direction: row;
}
.ListDiv{
  width: 60%;
  margin-right: auto;
}
</style>