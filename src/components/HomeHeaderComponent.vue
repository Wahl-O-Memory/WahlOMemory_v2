<template>
  <header class="sticky-header">
    <GenericHeader/>
  </header>
</template>

<script>
import GenericHeader from "@/components/Header/GenericHeader.vue";

export default {
  name: 'HomeHeader',
  components: {GenericHeader},
};
</script>
