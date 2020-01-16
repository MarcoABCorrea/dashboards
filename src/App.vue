<template>
  <div id="app">
    <layout />
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import Layout from '@/layout/index.vue'

  @Component({
    components: { Layout }
  })
  export default class App extends Vue {}
</script>

<style lang="scss">
  html,
  body {
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    font-family: 'Lato', sans-serif;
    color: #0d0d0d;
  }
</style>
