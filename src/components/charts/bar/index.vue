<template>
  <div class="bar-chart-wrapper">
    <Chart :colors="colors" :labels="labels" :values="values"></Chart>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'
  import IBarChartData from './IBarChartData'
  import Chart from './Chart.vue'

  @Component({
    components: {
      Chart
    }
  })
  export default class BarChart extends Vue {
    @Prop() private chartData!: IBarChartData

    data() {
      return { ...this.chartData }
    }
  }
</script>

<style scoped lang="scss">
  .inner-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .bar-chart-wrapper {
    position: relative;
  }
</style>
