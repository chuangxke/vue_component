<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="logo">
  <img src="../../assets/vue.svg"></img>
  <span class="title">学生信息管理系统</span>
  </div>
</template>

<style scoped>
.logo{background-color: #2b2f3a;
height: 50px;
border:none;
line-height: 50px;
display: flex;
align-items: center;
padding-left: 15px;
color:#fff;
flex-direction: row;
padding-right: 15px;
 
}

.logo img{
width: 32px;
height: 32px;
margin-right: 12px;
}

.logo span{font-weight: 600;
line-height:50px;
font-size:16px;
vertical-align: middle;
}
</style>
