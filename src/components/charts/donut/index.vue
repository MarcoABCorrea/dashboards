<template>
  <div class="donut-chart-wrapper">
    <Chart :colors="colors" :labels="labels" :values="values"></Chart>
    <InnerContent
      class="inner-content"
      :values="valuesWithUnit"
      :secondValues="secondValuesWithUnits"
      :colors="colors"
    ></InnerContent>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'
  import InnerContent from './InnerContent.vue'
  import IDonutChartData from './IDonutChartData'
  import Chart from './Chart.vue'

  @Component({
    components: {
      Chart,
      InnerContent
    }
  })
  export default class DonutChart extends Vue {
    @Prop() private chartData!: IDonutChartData

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

  .donut-chart-wrapper {
    position: relative;
  }
</style>
