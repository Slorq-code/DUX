<script setup>
name: "Footer";
</script>

<template>
    <div class="Footer">
        <div class="Footer__group1">
            <img class="Footer__group1__logo" src="../assets/Imagenes/Desktop/logo_coljuegos.png" alt="ColJuegos">
        </div>
        <div class="Footer__group2">
            <img class="Footer__group2__Facebook" src="../assets/Imagenes/Desktop/ico_facebook.png" alt="Facebook">
            <img class="Footer__group2__Instagram" src="../assets/Imagenes/Desktop/ico_insta.png" alt="Instagram">
            <img class="Footer__group2__Youtube" src="../assets/Imagenes/Desktop/ico_youtube.png" alt="Youtube">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/mixins";
.Footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    padding: 0 8%;
    width: 100%;
    height: 57px;
    background-color: #262156;
    position:sticky;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;
    &__group1 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        height: 100%;
        &__logo {
            height: 99%;
        }
    }
    &__group2 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        height: 100%;
        &__Facebook,
        &__Instagram,
        &__Youtube {
            margin: 0 20%;
            height: 45%;
        }
    }
}

@include mobile() {
    .Footer {
        display: none;
    }
}

</style>