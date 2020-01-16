<template>
  <div class="outside">
    <toolbar />
    <app-main />
  </div>
</template>

<script lang="ts">
  import Toolbar from '@/layout/outside/toolbar/index.vue'
  import AppMain from '@/layout/outside/appMain/index.vue'
  import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component({
    components: { Toolbar, AppMain }
  })
  export default class Outside extends Vue {}
</script>

<style lang="scss" scoped>
  .outside {
    width: calc(100vw - 65px);
    display: flex;
    flex-direction: column;
    background-color: #f0f0f1;
  }
</style>
