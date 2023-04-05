<script>
import Button from "../components/BottonComponent.vue";
import Input from "../components/Input.vue";
import Select from "../components/Select.vue";
name: "SingUpView";

export default {
    components: {
        Button,
        Input,
        Select,
    }
}
</script>
<template>
    <div class="SingUpView" >
        <img  class="SingUpView__title" src="../assets/Imagenes/Desktop/Titulo_registro.png" alt="Titulo de la pagina">
        <span class="SingUpView__text">Registrate para que puedas participar por los premios que tenemos para ti</span>
        <div class="SingUpView__formRow">
            <div class="SingUpView__formRow__formBox">
                <Input placeHolder="Ingresa tus nombre" label="Nombres"/>
            </div>
            <div class="SingUpView__formRow__formBox">
                <Input placeHolder="Ingresa tus apellidos" label="Apellidos"/>
            </div>
        </div>
        <div class="SingUpView__formRow">
            <div class="SingUpView__formRow__formBox">
                <Input placeHolder="ESTO DEBE SER SELECT" label="Tipo de documento"/>
            </div>
            <div class="SingUpView__formRow__formBox">
                <Input placeHolder="Ingresa tu Núm. de identificación" label="# de identificación"/>
            </div>
        </div>
        <div class="SingUpView__formRow">
            <div class="SingUpView__formRow__formBox">
                <Input placeHolder="Ingresa tu Núm. Celular" label="Celular"/>
            </div>
            <div class="SingUpView__formRow__formBox">
                <Input placeHolder="Ingresa tu correo" label="Correo electronico"/>
            </div>
        </div>
        <div class="SingUpView__formRow">
            <div class="SingUpView__formRow__formBox">
                <Select label1="Departamento" label2="ciudad" type="departamento"/>
            </div>
        </div>
        <div class="SingUpView__formRow">
            <div class="SingUpView__formRow__formBox">
                <Input placeHolder="ESTO DEBE SER SELECT" label="Operador"/>
            </div>
            <div class="SingUpView__formRow__formBox">
                <Input placeHolder="ESTO DEBE SER CHECKBOX" label="aceptar terms and con"/>
            </div>
        </div>
        <div class="SingUpView__Send">
            <Button kind="1"  label="Registrarme"/>
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
        font-size: 28px;
        color: white;
        font-family: MyriadPro;
    }
    &__title {
        width: 18%;
        margin: 3% 0 3% 0;
    }
    &__formRow {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        margin: 15px 0;
        &__formBox {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 45%;
            
        }
    }
    &__Send {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        margin: 40px 0 80px 0;
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
    &__text {
    }
    &__title {
    }
    &__formRow {
        &__formBox {
        }
    }
    &__Send {
    }
}
*/


@include xlg() {
    .SingUpView{
        &__formRow {
            &__formBox {
                width: 35%;
            }
        }
    }
}
/*
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
        &__text {
            max-width: 60%;
            font-size: 18px;
        }
        &__formRow {
            &__formBox {
                width: 37%;
            }
        }
    }
}
@include mobile() {
    .SingUpView{
        &__title {
            width: 50%;
        }
        &__text {
            font-size: 18px;
            max-width: 80%;
            margin: 10px 0 0 0;
        }
        &__formRow {
            flex-direction: column;
            gap: 30px;
            width: 100%;
            &__formBox {
                width: 85%;
            }
        }
        &__Send {
            width: 100%;
        }
    }
}

@include xs() {
    .SingUpView{
        &__text {
            font-size: 15px;
            max-width: 70%;
        }
    }
}





</style>