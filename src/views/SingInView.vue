<script setup>
name: "SingInView";
</script>
<template>
    <div class="SingInView">
        <div class="SingInView__Image">
            <img class="SingInView__Image__Logo" src="../assets/Imagenes/Desktop/logo_login.png"
                alt="La buena actitud te pone a ganar" />
        </div>
        <div class="SingInView__OptionsForLogin">
            <img class="SingInView__OptionsForLogin__details1" src="../assets/Imagenes/Desktop/mano_like.png"
                alt="En la buena" />
            <img class="SingInView__OptionsForLogin__details2" src="../assets/Imagenes/Desktop/mano_ok.png"
                alt="La buena honda" />
            <div class="SingInView__OptionsForLogin__Login">
                <h2 class="SingInView__OptionsForLogin__Login__title">
                    INICIAR SESIÓN
                </h2>
                <div class="futuroComponente">aqui va un futuro componente</div>
                <div class="futuroComponente">aqui va un futuro componente</div>
                <hr class="SingInView__OptionsForLogin__Login__separation" />
                <span class="SingInView__OptionsForLogin__Login__text">
                    ¿Aún no estás registrado? Regístrate y podrás participal por los
                    premios
                </span>
                <div class="futuroComponente">aqui va un futuro componente</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/mixins";

.SingInView {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;
    margin: 60px 0;
    width: 100%;
    height: 70vh;
    border-radius: 15px;

    &__Image {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45%;
        height: 100%;

        // background-color: paleturquoise;
        &__Logo {
            width: 100%;
        }
    }

    &__OptionsForLogin {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 45%;
        height: 100%;

        // background-color: paleturquoise;
        &__details1 {
            position: absolute;

            bottom: 0;
            right: 0;
        }

        &__details2 {
            position: absolute;
            top: 0;
            left: 0;
        }

        &__Login {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 5%;
            width: 85%;
            height: 85%;
            background-color: #26205670;
            border-radius: 20px;

            // background-color: red
            &__title {
                font-size: 30px;
                color: white;
                margin: 0;
            }

            &__separation {
                background-color: #f7d755;
                height: 6px;
                width: 10%;
                border: 1px solid #ffcd00;
            }

            &__text {
                max-width: 70%;
                font-size: 30px;
                text-align: center;
                color: white;
            }
        }
    }
}

.futuroComponente {
    width: 80%;
    height: 40px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.291);
    display: flex;
    justify-content: center;
    align-items: center;
}

@include xlg() {
    .SingInView {
        &__OptionsForLogin {
            &__details1 {
                width: 16%;
                bottom: 0 !important;
                right: 0 !important;
            }
            &__details2 {
                width: 14%;
            }
            &__Login {
                &__title {
                    font-size: 40px;
                }
                &__text {
                    font-size: 30px;
                }
            }
        }
    }
}

@include lg() {
    .SingInView {
        &__OptionsForLogin {
            &__details1 {
                bottom: -5%;
                right: -5%;
            }
            &__details2 {
                top: -1%;
            }
            &__Login {
                &__text {
                    font-size: 25px;
                }
            }
        }
    }
}


@include bwtValueWidth(1200px, 1400px) {
    .SingInView {
        margin: 40px 0 60px 0;
        &__Image {
            &__Logo {
                width: 80%;
            }
        }
        &__OptionsForLogin {
            &__details1 {
                bottom: -3%;
                right: -3%;
                width: 20%;
            }
            &__details2 {
                top: -1%;
                width: 16%;
            }
            &__Login {
                height: 90%;
                &__title {
                    font-size: 25px;
                }
                &__text {
                    font-size: 20px;
                }
            }
        }
    }
}

@include tablet() {
    .SingInView {
        margin: 40px 0 60px 0;
        gap: 0;
        &__Image {
            &__Logo {
                width: 75%;
            }
        }
        &__OptionsForLogin {
            width: 50%;
            &__details1 {
                bottom: -3%;
                right: -3%;
                width: 20%;
            }
            &__details2 {
                top: -1%;
                width: 16%;
            }
            &__Login {
                &__title {
                    font-size: 23px;
                }
                &__text {
                    font-size: 18px;
                }
            }
        }
    }
}
@include mobile() {
    .SingInView {
        flex-direction: column;

        &__Image {
            width: 100%;

            &__Logo {
                max-width: 380px;
            }
        }

        &__OptionsForLogin {
            width: 100% !important;

            &__details1 {
                height: 25%;
                bottom: unset;
                top: 0;
                right: -10%;
            }

            &__details2 {
                height: 25%;
                left: -6%;
            }

            &__Login {
                gap: 2%;
                height: 100%;
                width: 100%;

                &__title {
                    font-size: 20px;
                }

                &__text {
                    font-size: 18px;
                    max-width: 90%;
                }
            }
        }
    }
}



@include xs() {
    .SingInView {
        &__Image {
            &__Logo {
                width: 60%;
            }
        }
        // &__OptionsForLogin {
        //     &__details1 {}
        //     &__details2 {}
        //     &__Login {
        //         &__title {}
        //         &__text {}
        //     }
        // }
    }
}



</style>
