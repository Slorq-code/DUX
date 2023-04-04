<script setup>
name: "HeaderMbl";
</script>

<template>
    <div class="BoxHeaderMbl" >
        <div class="BoxHeaderMbl__HeaderMbl">
            <img  class="BoxHeaderMbl__HeaderMbl__background" src="../assets/Imagenes/Mobile/fondo_header_respons.png" alt="background">
            <img  class="BoxHeaderMbl__HeaderMbl__menu" src="../assets/Imagenes/Mobile/icono_menu_header.png" alt="Menu">
        </div>
        <img class="BoxHeaderMbl__logo" src="../assets/Imagenes/Desktop/logo_muevete_patinetas.png" alt="DUX">
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/mixins";

.BoxHeaderMbl{
    display: none;
}

/*  structure
    .BoxHeaderMbl{
        &__logo {
        }
        &__HeaderMbl {
            &__background {
            }
        }
    }
*/

@include mobile() {
    .BoxHeaderMbl{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 140px;
        padding: 0 15px;
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9;
        &__logo {
            height: 80%;
        }
        &__HeaderMbl {
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
            &__menu {
                height: 60%;
                margin: 0 0 0 10%;
                cursor: pointer;
            }
        }
    }
}
@include xs() {
    .BoxHeaderMbl{
        &__logo {
            height: 65%;
        }
    }
}


</style>