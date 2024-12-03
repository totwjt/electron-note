<template>
    <div>
        <LottieAnimation
            animationPath="lottieAnimation/404.json"
            :loop="true"
            :autoplay="true"
            :style="{ width: '300px', height: '300px' }"
        />
    </div>
</template>

<script setup lang="ts">
import LottieAnimation from "ccc/LottieAnimation.vue";

</script>

<style scoped>

</style>