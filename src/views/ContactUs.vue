<script>
export default {
name: "ContactUs",
}
</script>

<template>
    <div class="ContactUs">
        <v-responsive
        class="mx-auto"
        max-width="344"
        >
            <div class="ContactUs__TestContainer" >
                <v-textarea class="ContactUs__TextArea" clearable label="hola" variant="solo"></v-textarea>
            </div>
        </v-responsive>
    </div>
</template>


<style lang="scss" scoped>
@import "../assets/scss/mixins";


.ContactUs{
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
    &__TestContainer {
        height: 40px;
        width: 70%;
    }
}

</style>