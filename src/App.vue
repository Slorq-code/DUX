<script setup>
import ScrollPage from "./views/ScrollPage.vue";
</script>

<template>
  <div class="firstContainer" >
    <div class="all">
      <div class="explameHeader" ></div>
      <ScrollPage/>
      <div class="explameFooter" ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./src/assets/scss/mixins";

.firstContainer {
  position: relative;
  width: 100%;
}
.all {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url("./assets/Imagenes/Desktop/Fondo_web_Dux.jpg");
  width: 100%;
}
.explameHeader {
  width: 90vw;
  height: 80px;
  background-color: #f7d755;
  position:sticky;
  top: 0;
  left: 5vw;
  z-index: 9;
}
.explameFooter {
  width: 100%;
  height: 60px;
  background-color: #262156;
  position:sticky;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
}

</style>
