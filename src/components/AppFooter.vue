<script>
export default {
  name:"appFooter",
  methods: {
    navigateImprint(){
      alert("Impressum")
    },
    navigateHowToPlay(){
      alert("HowToPlay")
    },
    navigateDSGVO(){
      alert("DSGVO")
    }
  }
};

</script>

<template>
<div class="appFooter">
  <button @click="navigateImprint" class="footerButton">Impressum</button>
  <button @click="navigateHowToPlay" class="footerButton">HowToPlay</button>
  <button @click="navigateDSGVO" class="footerButton">DSGVO</button>
</div>
</template>

<style scoped>
.appFooter{
  padding: 1rem;
  background-color: red;
  position: -webkit-sticky; /* For Safari */
  position: relative;
  bottom: 0;
  align-items: flex-start;
  display: flex;
}
.footerButton{
  margin-left: 10px;
}
</style>