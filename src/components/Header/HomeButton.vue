<script>
export default {
  methods: {
    navigateHome() {
      this.$router.push({name: 'List'});
    }
  }
};
</script>

<template>
  <div class="home-button" @click="navigateHome">
    <h1>Home</h1>
  </div>
</template>

<style scoped>
.home-button {
  cursor: pointer;
  margin-right: auto;
}
</style>