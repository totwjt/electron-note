<template>
    <div class="layout">

      <!-- 顶部导航 -->
      <header class="text-center layout-header">
        <Topbar />
      </header>

      <div class="flex flex-row layout-content">
        <!-- 左侧导航 -->
        <aside class="layout-sidebar">
          <Sidebar />
        </aside>

        <!-- 主内容区域 -->
        <main class="layout-main">
          <router-view /> <!-- 嵌套路由渲染子页面 -->
        </main>
      </div>
    </div>
  </template>

  <script setup>
  import Sidebar from './Sidebar.vue'; // 左侧导航组件
  import Topbar from './Topbar.vue';   // 顶部导航组件
  </script>

  <style scoped>
  </style>