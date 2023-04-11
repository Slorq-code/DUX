<script setup>
name: "AwardsView";
</script>
<template>
    <div class="AwardsView" >
            <img  class="AwardsView__title" src="../assets/Imagenes/Desktop/titulo_premios.png" alt="Titulo">
        <div class="AwardsView__awardsContainer" >
            <img  class="AwardsView__awardsContainer__premiosDesktop" src="../assets/Imagenes/Desktop/Premios.png" alt="Premios">
            <img  class="AwardsView__awardsContainer__premiosMobile" src="../assets/Imagenes/Mobile/Premios.png" alt="Premios">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/mixins";
.AwardsView{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
    aspect-ratio: 2/1;
    position: relative;
    margin: 60px 0;
    width: 100%;
    background-color: #26205670;
    box-shadow: 0px 6px 8px #00000029;
    border-radius: 20px;
        &__title {
            position: absolute;
            top: 3%;
            width: 18%;
        }
    &__awardsContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 75%;
        &__premiosDesktop {
            width: 100%;
        }
        &__premiosMobile {
            display: none;
        }
    }
}


//   ---------------- estructure -----------------------
// .AwardsView{
//     &__title {
//     }
//     &__awardsContainer {
//         &__premiosDesktop {
//         }
//         &__premiosMobile {
//         }
//     }
// }
//   --------------------------------------------------



@include xlg() {
    .AwardsView{
        &__awardsContainer {
            &__premiosDesktop {
                width: 95%;
            }
        }
    }
}

@include bwtValueWidth(1200px, 1400px) {
    .AwardsView{
        width: 70%;
        &__title {
            width: 17%;
        }
        &__awardsContainer {
            &__premiosDesktop {
                width: 92%;
            }
        }
    }
}

@include tablet() {
    .AwardsView{
        width: 77%;
        &__title {
        top: 3%;
        width: 50%;
        }
        &__awardsContainer {
            &__premiosDesktop {
                display: none;
            }
            &__premiosMobile {
                display: initial;
                width: 67%;
                margin: 18% 0 4% 0;
            }
        }
    }
}

@include mobile() {
    .AwardsView{
        width: 100%;
        &__awardsContainer {
            &__premiosMobile {
                width: 80%;
            }
        }
    }
}

@include xs() {
    .AwardsView{
        &__awardsContainer {
            &__premiosMobile {
                width: 80%;
            }
        }
    }
}



</style>