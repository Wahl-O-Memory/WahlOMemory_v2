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
  color: white;
  cursor: pointer;
  margin-right: auto;
  background-color: #33537b;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 2rem;
}
</style>