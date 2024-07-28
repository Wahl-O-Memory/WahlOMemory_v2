<script>
import ElectionListEntry from "@/components/HomePage/ElectionListEntry.vue";

export default {
  name: "ElectionList",
  components: {ElectionListEntry},
  props:{
    items:{
      required: true
    }
  },
  methods: {
    navigate(item) {
      this.$router.push({ name: 'Detail', params: { item } });
    }
  }
}
</script>

<template>
  <div v-for="item in items" :key="item" @click="navigate(item.electionUId)">
    <ElectionListEntry :election-name="item.name"/>

  </div>
</template>

<style scoped>

</style>