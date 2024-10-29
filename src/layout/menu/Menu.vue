<script setup>
import { ref } from "vue";
import MenuLogo from "./MenuLogo.vue";
</script>

<template>
  <MenuLogo class="layout-logo" />

  <el-menu
    activate-text-color="ffd04b"
    class="el-menu-vertical"
    background-color="#304156"
    text-color="#fff"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>基础数据</span>
      </template>

      <el-menu-item index="1-1">专业管理</el-menu-item>
      <el-menu-item index="1-2">教师管理</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><location /></el-icon>
        <span>学生管理</span>
      </template>

      <el-menu-item index="2-1">学生信息</el-menu-item>
      <el-menu-item index="2-2">学生成绩</el-menu-item>
      <el-menu-item index="2-3">学生照片</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <el-icon><location /></el-icon>
        <span>用户角色</span>
      </template>

      <el-menu-item index="3-1">登录账号</el-menu-item>
      <el-menu-item index="3-2">用户角色</el-menu-item>
      <el-menu-item index="3-3">菜单管理</el-menu-item>
      <el-menu-item index="3-4">权限信息</el-menu-item>
    </el-sub-menu>
  </el-menu>
  <el-container class="menu"> </el-container>
</template>

<style scoped>
.el-menu {
  width: 100%;
  border-right: none;
}

.el-menu-vertical {
  width: auto;
}
.el-menu-item {
  display: block;
  text-align: center;
}

@keyframes logoAnimation {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0);
  }
  1000% {
    transform: scale(0);
  }
}

.layout-logo {
  animation: logoAnimation 1s ease-out;
}
</style>
