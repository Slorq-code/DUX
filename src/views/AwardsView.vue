<script setup>
name: "AwardsView";
</script>
<template>
    <div class="AwardsView" >
        <h1>
            Hola desde AwardsView
        </h1>
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/mixins";
.AwardsView{
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
    .AwardsView {
        background-color: green;
    }
}
</style>