<script setup>
import Header from "./layout/header/Header.vue";
import Menu from "./layout/menu/Menu.vue";
</script>

<template>
  <el-container class="layout">
    <el-aside class="aside" width="auto"><Menu /></el-aside>
    <el-container>
      <el-header class="header"><Header /></el-header>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.layout {
  height: 100%;
}
.aside {
  background-color: lightgrey;
}

.header {
}

.main {
}
</style>
