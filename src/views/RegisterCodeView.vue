<script>
import Input from "../components/Input.vue";
import Button from "../components/BottonComponent.vue";

export default {
name: "RegisterCodesView",
    components: {
        Input,
        Button
    }
}
</script>

<template>
    <div class="RegisterCodesView" >
        <img class="RegisterCodesView__title" src="../assets/Imagenes/Desktop/titulo_ingreso_codigos.png" alt="Titulo">
        <div class="RegisterCodesView__Container">
            <div class="RegisterCodesView__Container__FirstColumn">
                <span class="RegisterCodesView__Container__FirstColumn__Text">ESCRIBE AQUÍ EL <strong class="RegisterCodesView__Container__FirstColumn__StrongText">CÓDIGO</strong> QUE ENCONTRATE EN EL <strong class="RegisterCodesView__Container__FirstColumn__StrongText">STICKER</strong> DENTRO DE LAS PORCIONES INDIVIDUALES DE DUX MARCADOS CON LA PROMO</span>
                <div class="RegisterCodesView__Container__FirstColumn__InputContain" >
                    <Input placeHolder="Ingrésar codigo"></Input>
                </div>
                <Button class="RegisterCodesView__Container__FirstColumn__Button" label="Registrar codigo" kind="1"></Button>
            </div>
            <div class="RegisterCodesView__Container__SecondColumn">
                <img class="RegisterCodesView__Container__SecondColumn__imageDskt" src="../assets/Imagenes/Desktop/IntroduceCodigos.png" alt="Introduce tus codigos aquí!">
                <img class="RegisterCodesView__Container__SecondColumn__imageMbl" src="../assets/Imagenes/Mobile/stickers.png" alt="Introduce tus codigos aquí!">
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import "../assets/scss/mixins";

.RegisterCodesView{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
    aspect-ratio: 2.2/1;
    position: relative;
    margin: 0px 0 60px 0;
    width: 100%;
    background-color: #26205670;
    box-shadow: 0px 6px 8px #00000029;
    border-radius: 20px;
    &__title {
        width: 25%;
        margin: 3% 0 3% 0;
    }
    &__Container {
        width: 80%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        &__FirstColumn {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            position: relative;
            gap: 10%;
            height: 100%;
            width: 50%;
            &__Text {
                max-width: 100%;
                font-size: 30px;
                color: white;
                text-align: center;
            }
            &__StrongText {
                color: #F7D756;
            }
            &__InputContain {
                height: auto;
                width: 80%;
            }
        }
        &__SecondColumn {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            height: 100%;
            width: 50%;
            &__imageDskt {
                position: absolute;
                height: auto;
                width: 130%;
                left: -10%;
                top: -13%;
            }
            &__imageMbl {
                display: none;
            }
        }
    }
}

/*      Estructura
.RegisterCodesView{
    &__title {
    }
    &__Container {
        &__FirstColumn {
            &__Text {
            }
            &__StrongText {
            }
            &__InputContain {
            }
        }
        &__SecondColumn {
            &__image {
            }
        }
    }
}
*/

@include xlg() {
    /*
    .RegisterCodesView{
        &__title {
        }
        &__Container {
            &__FirstColumn {
                &__Text {
                }
                &__StrongText {
                }
                &__InputContain {
                }
            }
            &__SecondColumn {
                &__image {
                }
            }
        }
    }
    */
}
@include lg() {
    /*
    .RegisterCodesView{
        &__title {
        }
        &__Container {
            &__FirstColumn {
                &__Text {
                }
                &__StrongText {
                }
                &__InputContain {
                }
            }
            &__SecondColumn {
                &__image {
                }
            }
        }
    }
    */
    
}
@include bwtValueWidth(1200px, 1400px) {
    .RegisterCodesView{
        width: 70%;
        &__Container {
            &__FirstColumn {
                width: 50%;
                &__Text {
                    font-size: 16px;
                }
                &__InputContain {
                    width: 84%;
                }
                &__Button {
                    width: 85%;
                }
            }
            &__SecondColumn {
                width: 50%;
                &__image {
                    width: 125%;
                    left: -7%;
                    top: -5%;
                }
            }
        }
    }

}
@include tablet() {
    /*
    .RegisterCodesView{
        &__title {
        }
        &__Container {
            &__FirstColumn {
                &__Text {
                }
                &__StrongText {
                }
                &__InputContain {
                }
            }
            &__SecondColumn {
                &__image {
                }
            }
        }
    }
    */
    
}
@include mobile() {
    .RegisterCodesView{
        &__title {
        }
        &__Container {
            flex-direction: column-reverse;
            width: 90%;
            height: 90%;
            &__FirstColumn {
                width: 100%;
                height: 35%;
                gap: 6%;
                &__Text {
                    font-size: 15px;
                }
                &__StrongText {
                }
                &__InputContain {
                }
                &__Button {
                    width: 80%;
                }
            }
            &__SecondColumn {
                width: 100%;
                height: 45%;
                &__imageDskt {
                    display: none;
                }
                &__imageMbl {
                    display: unset;
                    height: 70%;
                    width: auto;
                }
            }
        }
    }
    
}
@include xs() {
    /*
    .RegisterCodesView{
        &__title {
        }
        &__Container {
            &__FirstColumn {
                &__Text {
                }
                &__StrongText {
                }
                &__InputContain {
                }
            }
            &__SecondColumn {
                &__image {
                }
            }
        }
    }
    */

}





</style>