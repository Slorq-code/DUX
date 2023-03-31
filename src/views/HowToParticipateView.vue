<script setup>
name: "HowToParticipateView";
</script>
<template>
    <div class="HowToParticipateView" >
        <h1>
            Hola desde HowToParticipateView
        </h1>
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/mixins";
.HowToParticipateView{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60px 0;
    width: 100%;
    height: 70vh;
    background: #262056 0% 0% no-repeat padding-box;
    box-shadow: 0px 6px 8px #00000029;
    border-radius: 15px;
    opacity: 0.45;
}
@include mobile() {
    .HowToParticipateView {
        background-color: green;
    }
}
</style>