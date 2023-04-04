<script>
    export default {
        props: {
            label: {
                type: String,
                required: true,
            },
            kind: {
                type: Number,
                required: true,
            }
        }
    }
</script>

<template>
    <div class="Button">
        <img v-if="kind==1" class="Button__Background" src="../assets/Imagenes/Desktop/fondo_botones.png" alt="Background">
        <img v-else class="Button__Background" src="../assets/Imagenes/Desktop/fondo_btn_verde.png" alt="Background">
        <span class="Button__Span" >{{ label }}</span>
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/mixins";

.Button {
    width: 80%;
    height: 40px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 9;
    cursor: pointer;
    &__Span {
        color: #262156;
        font-size: 30px;
        z-index: 8;
    }
    &__Background {
        position: absolute;
        height: auto;
        width: 90%;
        z-index: 5;
    }
}

/*  structure
.Button {
    &__Span {
    }
    &__Background {
    }
}
*/
@include bwtValueWidth(1200px, 1400px) {
    .Button {
        width: 70%;
        &__Span {
            font-size: 20px;
        }
    }
}

@include mobile() {
    .Button {
        width: 100%;
        &__Span {
            font-size: 20px;
        }
    }
}

@include xs() {
    .Button {
        &__Span {
            font-size: 20px;
        }
    }
}

</style>