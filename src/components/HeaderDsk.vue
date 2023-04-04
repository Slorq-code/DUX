<script setup>
name: "HeaderDsk";
</script>

<template>
    <div class="BoxHeaderDsk" >
        <img class="BoxHeaderDsk__logo" src="../assets/Imagenes/Desktop/logo_muevete_patinetas.png" alt="DUX">
        <div class="BoxHeaderDsk__HeaderDsk">
            <img  class="BoxHeaderDsk__HeaderDsk__background" src="../assets/Imagenes/Desktop/fondo_header_web.png" alt="background">
            <span class="TemporalTestHeader TemporalTestHeader1">Iniciar Sesión</span>
            <span class="TemporalTestHeader">Premios</span>
            <span class="TemporalTestHeader">Cómo participar</span>
            <span class="TemporalTestHeader TemporalTestHeader2">Terminos y condiciones</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/mixins";

.BoxHeaderDsk{
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 100%;
    height: 180px;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    &__logo {
        height: 100%;
    }
    &__HeaderDsk {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        width: 80%;
        height: 60%;

        &__background {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: -1;
        }
    }
}


.TemporalTestHeader {
    cursor: pointer;
}
.TemporalTestHeader1 {
    margin: 0 0 0 5%;
}
.TemporalTestHeader2 {
    margin: 0 5% 0 0;
}

/*  structure
    .BoxHeaderDsk{
        &__logo {
        }
        &__HeaderDsk {
            &__background {
            }
        }
    }
*/


@include lg() {
    .BoxHeaderDsk{
        height: 150px;
    }
}
@include bwtValueWidth(1200px, 1400px) {
    .BoxHeaderDsk{
        height: 130px;
    }
}
@include mobile() {
    .BoxHeaderDsk{
        display: none;
}

}
</style>