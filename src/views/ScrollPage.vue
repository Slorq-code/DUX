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


<style scoped>
.pageContainer {
    z-index: 8;
    margin: 90px 0 70px 0 ;
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
</style>

