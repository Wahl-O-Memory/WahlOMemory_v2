<script>
export default {
  name:"appFooter",
  methods: {
    navigateImprint(){
      this.$router.push({name: 'Impressum'});
    },
    navigateDSGVO(){
      this.$router.push({name: 'Datenschutz'});
    },
    navigateMaking(){
      this.$router.push({name: 'MakingOf'});
    }
  }
};

</script>

<template>
<div class="appFooter">
  <div @click="navigateImprint" class="footerButton">Impressum</div>
  <div @click="navigateDSGVO" class="footerButton">Datenschutz</div>
  <div @click="navigateMaking" class="footerButton">MakingOf</div>
</div>
</template>

<style scoped>
.appFooter{
  padding: 1rem;
  background-color: #ed6a58;
  position: -webkit-sticky; /* For Safari */
  position: relative;
  bottom: 0;
  align-items: flex-start;
  display: flex;
}
.footerButton{
  background-color: transparent;
  color: inherit;
  font: inherit;
  border: none;
  padding: 0;
  margin: 0 1rem;
  cursor: pointer;
  text-decoration: underline dotted currentColor;
}
</style>