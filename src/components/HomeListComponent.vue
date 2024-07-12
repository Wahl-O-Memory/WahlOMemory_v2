<template>
  <div>
    <GenericHeader>
      <h1>ListView</h1>
    </GenericHeader>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="item in items" :key="item" @click="navigate(item.electionUId)" class="list-component">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { getElections } from '@/api/queryElections.js';
import GenericHeader from "@/components/Header/GenericHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: 'HomeListComponent',
  components: {AppFooter, GenericHeader},
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
  methods: {
    navigate(item) {
      this.$router.push({ name: 'Detail', params: { item } });
    }
  }
};
</script>


<style scoped>
.list-component {
  background-color: gray;
  padding: 0.5rem;
  margin: 10px;
  cursor: pointer;
}
</style>