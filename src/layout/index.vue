<template>
  <div id="layout">
    <sidebar />
    <outside />
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import Sidebar from '@/layout/sidebar/index.vue'
  import Outside from '@/layout/outside/index.vue'

  @Component({
    components: { Sidebar, Outside }
  })
  export default class Layout extends Vue {}
</script>

<style lang="scss" scoped>
  #layout {
    display: flex;
    height: 100vh;
    width: 100vw;
  }
</style>
