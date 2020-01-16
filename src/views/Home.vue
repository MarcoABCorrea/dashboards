<template>
  <div class="home">
    <Title text-title="Home Page" />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Title from '@/components/title/Title.vue'

  @Component({
    components: { Title }
  })
  export default class Home extends Vue {}
</script>
