
<script>
name: "HowToParticipateView";
</script>


<template>
    <div class="HowToParticipateView" >
            <img  class="HowToParticipateView__title" src="../assets/Imagenes/Desktop/titulo_como_participar.png" alt="Titulo">
        <div class="HowToParticipateView__howContainer" >
            <img  class="HowToParticipateView__howContainer__premiosDesktop" src="../assets/Imagenes/Desktop/como_participar(1).png" alt="Premios">
            <img  class="HowToParticipateView__howContainer__premiosMobile" src="../assets/Imagenes/Mobile/Como_participar.png" alt="Premios">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/mixins";
.HowToParticipateView{
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
            width: 25%;
        }
    &__howContainer {
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
// .HowToParticipateView{
//     &__title {
//     }
//     &__howContainer {
//         &__premiosDesktop {
//         }
//         &__premiosMobile {
//         }
//     }
// }
//   --------------------------------------------------



@include xlg() {
    .HowToParticipateView{
        &__howContainer {
            &__premiosDesktop {
                width: 95%;
                margin: 7% 0 0 0;
            }
        }
    }
}

@include bwtValueWidth(1200px, 1400px) {
    .HowToParticipateView{
        width: 70%;
        &__howContainer {
            &__premiosDesktop {
                width: 92%;
                margin: 7% 0 0 0;
            }
        }
    }
}

@include tablet() {
    .HowToParticipateView{
        width: 77%;
        &__title {
        top: 3%;
        width: 80%;
        }
        &__howContainer {
            &__premiosDesktop {
                display: none;
            }
            &__premiosMobile {
                display: initial;
                width: 67%;
                margin: 25% 0 5% 0;
            }
        }
    }
}

@include mobile() {
    .HowToParticipateView{
        width: 100%;
        &__howContainer {
            &__premiosMobile {
                width: 80%;
            }
        }
    }
}

@include xs() {
    .HowToParticipateView{
        &__howContainer {
            &__premiosMobile {
                width: 80%;
            }
        }
    }
}



</style>