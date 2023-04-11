<script setup>
import AwardsView from "../AwardsView.vue";
import HowToParticipateView from "../HowToParticipateView.vue";
import ContactUs from "../ContactUs.vue";
import MyCodesView from "../MyCodesView.vue";
import RegisterCodesView from "../RegisterCodeView.vue";
name: "ScrollPage";
</script>


<template>
    <div class="pageContainer" >
        <RegisterCodesView/>
        <MyCodesView/>
        <AwardsView/>
        <HowToParticipateView/>
        <ContactUs/>
    </div>
</template>


<style lang="scss" scoped>
@import "../../assets/scss/mixins";

.pageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 8;
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
@include tablet() {
    .pageContainer {
        margin: 55px 0 70px 0 ;
    }
}
@include mobile() {
    .pageContainer {
        width: 90%;
        margin: -15px 0 25px 0 ;
    }
}

</style>

