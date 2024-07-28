<template>
  <header class="sticky-header">
    <HomeButton/>
    <div class="additional-component">
      <slot></slot>
    </div>
  </header>
</template>

<script>
import HomeButton from "@/components/Header/HomeButton.vue";

export default {
  name: 'GenericHeader',
  components: {HomeButton},
  methods: {
    navigateHome() {
      this.$router.push({name: 'List'});
    }
  }
};
</script>

<style scoped>
.sticky-header {
  position: -webkit-sticky; /* For Safari */
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  background-color: #f2968a;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  z-index: 1000; /* Ensure it is on top */
}

.additional-component {
  margin-left: auto; /* Pushes additional component to the right */
}

</style>
