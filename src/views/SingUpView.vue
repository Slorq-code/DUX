<script setup>
name: "SingUpView";
</script>
<template>
    <div class="SingUpView" >
        <img  class="SingUpView__title" src="../assets/Imagenes/Desktop/Titulo_registro.png" alt="Titulo de la pagina">
        <span class="SingUpView__text">Registrate para que puedas participar por los premios que tenemos para ti</span>
        <div class="SingUpView__formRow">
            <div class="SingUpView__formRow__formBox">
                                        <div class="FutureComponent" >
                                        aqui ira un componente
                                        </div>
            </div>
            <div class="SingUpView__formRow__formBox">
                                        <div class="FutureComponent" >
                                        aqui ira un componente
                                        </div>
            </div>
        </div>
        <div class="SingUpView__formRow">
            <div class="SingUpView__formRow__formBox">
                                        <div class="FutureComponent" >
                                        aqui ira un componente
                                        </div>
            </div>
            <div class="SingUpView__formRow__formBox">
                                        <div class="FutureComponent" >
                                        aqui ira un componente
                                        </div>
            </div>
        </div>
        <div class="SingUpView__formRow">
            <div class="SingUpView__formRow__formBox">
                                        <div class="FutureComponent" >
                                        aqui ira un componente
                                        </div>
            </div>
            <div class="SingUpView__formRow__formBox">
                                        <div class="FutureComponent" >
                                        aqui ira un componente
                                        </div>
            </div>
        </div>
        <div class="SingUpView__formRow">
            <div class="SingUpView__formRow__formBox">
                                        <div class="FutureComponent" >
                                        aqui ira un componente
                                        </div>
            </div>
            <div class="SingUpView__formRow__formBox">
                                        <div class="FutureComponent" >
                                        aqui ira un componente
                                        </div>
            </div>
        </div>
        <div class="SingUpView__formRow">
            <div class="SingUpView__formRow__formBox">
                                        <div class="FutureComponent" >
                                        aqui ira un componente
                                        </div>
            </div>
            <div class="SingUpView__formRow__formBox">
                                        <div class="FutureComponent" >
                                        aqui ira un componente
                                        </div>
            </div>
        </div>
        <div class="FutureComponent" >
            aqui ira un componente
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/mixins";
.SingUpView{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin: 60px 0 25px 0;
    width: 100%;
    height: auto;
    background-color: #26205670;
    box-shadow: 0px 6px 8px #00000029;
    border-radius: 15px;
    &__text {
        text-align: center;
    }
    &__title {
        width: 18%;
        margin: 3% 0 3% 0;
    }
    &__formRow {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 80%;
        margin: 15px 0;
        &__formBox {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80%;
            
        }
    }
}
.FutureComponent {
    background-color: white;
    border: 1px orange solid;
    width: 60%;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
}

/*     estructure
.SingUpView{
    &__formRow {
        &__formBox {
        }
    }
}
*/


/*
@include xlg() {
    .SingUpView{
        &__formRow {
            &__formBox {
            }
        }
    }
}
@include lg() {
    .SingUpView{
        &__formRow {
            &__formBox {
            }
        }
    }
}
@include tablet() {
    .SingUpView{
        &__formRow {
            &__formBox {
            }
        }
    }
}
*/
@include bwtValueWidth(1200px, 1400px) {
    .SingUpView{
        width: 77%;
    }
}
@include mobile() {
    .SingUpView{
        &__title {
            width: 50%;
        }
        &__formRow {
            flex-direction: column;
            gap: 30px;
            width: 90%;
        }
    }
}
/*
@include xs() {
    .SingUpView{
        &__formRow {
            &__formBox {
            }
        }
    }
}
*/




</style>