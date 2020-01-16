<template>
  <div id="toolbar">
    <div id="sidebar-activator" @click="isCollapse = !isCollapse" v-if="false">
      <i class="el-icon-s-fold" v-if="isCollapse"></i>
      <i class="el-icon-s-unfold" v-else></i>
    </div>
    <div class="spacer"></div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  @Component({})
  export default class Toolbar extends Vue {
    private isCollapse = false
  }
</script>

<style lang="scss" scoped>
  #toolbar {
    background: lightblue;
    height: 56px;
    display: inline-flex;
    flex-wrap: nowrap;

    #sidebar-activator {
      align-self: center;
      font-size: 1.5rem;
    }

    .spacer {
      flex: 1;
    }
  }
</style>
