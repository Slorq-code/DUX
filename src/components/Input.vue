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
    align-content: center;
    flex-direction: column;
    width: 70%;
    height: auto;
    &__Span{}
    &__field{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 70px;
        background: #FFFAE5 0% 0% no-repeat padding-box;
        border: 1px solid #F7D756;
    }

}

</style>