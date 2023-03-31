<script setup>
import ScrollPage from "./views/ScrollPage.vue";
</script>

<template>
  <div class="all">
    <div class="explameHeader" ></div>
    <ScrollPage/>
    <div class="explameFooter" ></div>
  </div>
</template>

<style scoped>
.all {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url("./assets/Imagenes/Desktop/Fondo_web_Dux.jpg");
  width: 100%;
}
.explameHeader {
  width: 90%;
  height: 80px;
  background-color: #f7d755;
  position:fixed;
  top: 0;
  left: 5%;
  z-index: 9;
}
.explameFooter {
  width: 100%;
  height: 60px;
  background-color: #262156;
  position:fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
</style>
