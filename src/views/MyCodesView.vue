<script>
export default {
name: "MyCodesView",
}
</script>

<template>
<div class="MyCodesView" >
    <img class="MyCodesView__title" src="../assets/Imagenes/Desktop/titulo_mis_codigos.png" alt="Titulo">
        <div class="MyCodesView__Container">
            <div class="MyCodesView__Container__FirstColumn"></div>
            <div class="MyCodesView__Container__SecondColumn"></div>
        </div>
</div>
</template>


<style lang="scss" scoped>
@import "../assets/scss/mixins";

.MyCodesView{
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
        width: 25%;
        margin: 3% 0 3% 0;
    }
}

</style>