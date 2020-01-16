<template>
  <el-menu id="sidebar-menu" :collapse="isCollapse">
    <el-menu-item index="1" @click="isCollapse = !isCollapse">
      <img src="@/assets/logo.svg" alt="" />
    </el-menu-item>
    <router-link :to="'/'">
      <el-menu-item index="2">
        <i class="el-icon-s-home"></i>
        <span slot="title">Home</span>
      </el-menu-item>
    </router-link>
    <router-link :to="'/dashboards'">
      <el-menu-item index="3">
        <i class="el-icon-s-data"></i>
        <span slot="title">Dashboards</span>
      </el-menu-item>
    </router-link>
  </el-menu>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class Sidebar extends Vue {
    private isCollapse = true
  }
</script>

<style lang="scss" scoped>
  #sidebar-menu {
    border: 0;
    img {
      width: 24px;
      height: 20px;
    }
  }
</style>
