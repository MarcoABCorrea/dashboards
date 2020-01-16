<template>
  <div class="header">
    <h2 class="page-title">{{ textTitle }}</h2>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component
  export default class Title extends Vue {
    @Prop() private textTitle!: string
  }
</script>

<style scoped lang="scss">
</style>
