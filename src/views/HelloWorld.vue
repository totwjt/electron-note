<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <!-- Tailwind css -->
  <div class="h-screen flex items-center justify-center bg-gray-100">
    <h1 class="text-4xl font-bold text-blue-500">Hello, Tailwind CSS!</h1>
  </div>

  <!-- varlet -->
  <var-space :size="[10, 10]">
    <var-button>默认按钮</var-button>
    <var-button type="primary">主要按钮</var-button>
    <var-button type="info">信息按钮</var-button>
    <var-button type="success">成功按钮</var-button>
    <var-button type="warning">警告按钮</var-button>
    <var-button type="danger">危险按钮</var-button>
  </var-space>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
