<script>
import HeaderDsk from "./components/HeaderDsk.vue";
import HeaderMbl from "./components/HeaderMbl.vue";
import Footer from "./components/Footer.vue";
import ScrollPage from "./views/ScrollPage.vue";

export default {
    components: {
      HeaderDsk,
      HeaderMbl,
      Footer,
      ScrollPage
    }
}

</script>

<template>
  <div class="firstContainer" >
    <div class="all">
      <HeaderDsk/>
      <HeaderMbl/>
      <ScrollPage/>
      <Footer/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./src/assets/scss/mixins";

.firstContainer {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: auto;
}
.all {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url("./assets/Imagenes/Desktop/Fondo_web_Dux.jpg");
  width: 100%;
  height: auto;
}

</style>
