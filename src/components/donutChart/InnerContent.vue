<template>
  <div>
    <p v-for="(item, index) in values" :key="index">
      <span class="main" :style="fontColor(index)">{{ item }}</span>
      <br />
      <span>{{ secondValues[index] }}</span>
    </p>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'

  @Component
  export default class InnerContent extends Vue {
    @Prop() private values!: String[]
    @Prop() private secondValues!: String[]
    @Prop() private colors!: String[]

    fontColor(index: number) {
      return 'color:' + this.colors[index]
    }
  }
</script>

<style scoped lang="scss">
  p {
    margin: 16px 0;
    color: #0d0d0d;
    font-family: Lato;
    font-size: 16px;
    letter-spacing: 1.17px;
    line-height: 19px;
    text-align: center;
  }

  .main {
    font-size: 19px;
  }
</style>
