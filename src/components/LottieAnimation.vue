<template>
    <div :style="style" ref="lottieContainer"></div>
  </template>

  <script lang="ts">
  import { defineComponent, onMounted, ref, onUnmounted, watch } from 'vue';
  import lottie from 'lottie-web';

  export default defineComponent({
    name: 'LottieAnimation',
    props: {
      animationPath: {
        type: String,
        required: true, // 动画文件的路径
      },
      loop: {
        type: Boolean,
        default: true, // 是否循环播放
      },
      autoplay: {
        type: Boolean,
        default: true, // 是否自动播放
      },
      style: {
        type: Object,
        default: () => ({
          width: '100%',
          height: '100%',
        }),
      },
    },
    setup(props) {
      const lottieContainer = ref<HTMLElement | null>(null);
      let animationInstance: any = null;

      onMounted(() => {
        if (lottieContainer.value) {
          animationInstance = lottie.loadAnimation({
            container: lottieContainer.value, // 渲染容器
            renderer: 'svg', // 渲染方式，支持 'svg', 'canvas', 'html'
            loop: props.loop,
            autoplay: props.autoplay,
            path: props.animationPath, // Lottie 动画 JSON 文件的路径
          });
        }
      });

      // 当路径发生变化时重新加载动画
      watch(() => props.animationPath, (newPath) => {
        if (animationInstance) {
          animationInstance.destroy();
          animationInstance = lottie.loadAnimation({
            container: lottieContainer.value!,
            renderer: 'svg',
            loop: props.loop,
            autoplay: props.autoplay,
            path: newPath,
          });
        }
      });

      onUnmounted(() => {
        if (animationInstance) {
          animationInstance.destroy();
        }
      });

      return {
        lottieContainer,
      };
    },
  });
  </script>