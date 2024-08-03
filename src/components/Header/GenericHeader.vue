<template>
  <header class="sticky-header" :style="getMobileStyle()">
    <HomeButton/>
    <div class="additional-component">
      <slot></slot>
    </div>
  </header>
</template>

<script>
import HomeButton from "@/components/Header/HomeButton.vue";
import {isMobile} from "@/api/detectMobile.js";

export default {
  name: 'GenericHeader',
  components: {HomeButton},
  methods: {
    navigateHome() {
      this.$router.push({name: 'List'});
    },
    getMobileStyle(){
      if (isMobile()){
        return {"flex-direction":"row"}
      }
      return {"flex-direction":"row"}
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
