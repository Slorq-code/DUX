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
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 60px 0 40px 0;
    width: 100%;
    height: 80vh;
    background-color: #26205670;
    box-shadow: 0px 6px 8px #00000029;
    border-radius: 15px;
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

.FutureComponen {
    background-color: white;
    border: 1px orange solid;
    width: 60%;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
}


</style>