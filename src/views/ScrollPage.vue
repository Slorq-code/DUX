<script setup>
import SingInView from "../views/SingInView.vue";
import SingUpView from "../views/SingUpView.vue";
import AwardsView from "../views/AwardsView.vue";
import HowToParticipateView from "../views/HowToParticipateView.vue";
name: "ScrollPage";
</script>


<template>
    <div class="pageContainer" >
        <SingInView/>
        <AwardsView/>
        <HowToParticipateView/>
        <SingUpView/>
    </div>
</template>


<style lang="scss" scoped>
@import "../assets/scss/mixins";

.pageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 8;
    margin: 90px 0 0 0 ;
    width: 80%;
}
.exampleOtherViews {
    margin: 60px 0;
    width: 100%;
    height: 70vh;
    background: #262056 0% 0% no-repeat padding-box;
    box-shadow: 0px 6px 8px #00000029;
    border-radius: 15px;
    opacity: 0.45;
}

@include xlg() {
}
@include lg() {
}
@include bwtValueWidth(1200px, 1400px) {
    .pageContainer {
        margin: 60px 0 70px 0 ;
    }
}
@include tablet() {
    .pageContainer {
        margin: 55px 0 70px 0 ;
    }
}
@include mobile() {
    .pageContainer {
        width: 90%;
        margin: 0px 0 70px 0 ;
    }
}
@include xs() {
}

</style>

