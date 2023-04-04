<script>
    export default {
        props: {
            label: {
                type: String,
                required: true,
            },
            placeHolder: {
                type: String,
                required: true,
            },
            onlyNumbers: {
                type: Boolean,
                required: false,
                default: false,
            },
            type: {
                type: String,
                default: "text",
            },
        }
    }
</script>

<template>
    <div class="Input">
        <span  class="Input__Span" v-if="label">{{ label }}</span>
        <input  
        class="Input__field" 
        type="text"
        :placeholder=placeHolder
        >
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/mixins";

.Input {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    height: auto;
    &__Span{
        color: white;
        font-family: MyriadPro;
        font-size: 25px;
    }
    &__field{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 70px;
        background: #FFFAE5 0% 0% no-repeat padding-box;
        border: 1px solid #F7D756;
        text-align: center;
    }
    &__field::placeholder{
        color: #D3C68A;
        font-family: MyriadPro;
        font-size: 25px;
    }
}


/* estructure
    .Input {
        &__Span{
        }
        &__field{
        }
        &__field::placeholder{
        }
    }
*/

@include bwtValueWidth(1200px, 1400px) { 
    .Input {
        &__Span{
            font-size: 18px;
        }
        &__field{
            height: 45px;
        }
        &__field::placeholder{
            font-size: 18px;
        }
    }
}

@include mobile() { 
    .Input {
        &__Span{
            font-size: 18px;
        }
        &__field{
            height: 40px;
        }
        &__field::placeholder{
            font-size: 18px;
        }
    }
}

@include xs() { 
    .Input {
        &__Span{
            font-size: 15px;
        }
        &__field{
            height: 35px;
        }
        &__field::placeholder{
            font-size: 15px;
        }
    }
}



</style>