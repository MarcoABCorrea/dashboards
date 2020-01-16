<template>
  <div>
    <div id="donut-chart-wrapper">
      <Chart :colors="colors" :labels="labels" :values="values"></Chart>
      <InnerContent
        id="inner-content"
        :values="valuesWithUnit"
        :secondValues="secondValuesWithUnits"
        :colors="colors"
      ></InnerContent>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'
  import InnerContent from '@/components/donutChart/InnerContent.vue'
  import Chart from '@/components/donutChart/Chart.vue'
  import { IDonutChartData } from './IDonutChartData'

  @Component({
    components: {
      Chart,
      InnerContent
    }
  })
  export default class DonutChart extends Vue {
    @Prop() private chartData!: IDonutChartData[]

    data() {
      return {
        colors: this.chartData.map(elem => elem.color),
        labels: this.chartData.map(elem => elem.label),
        values: this.chartData.map(elem => elem.value),
        valuesWithUnit: this.chartData.map(
          elem => elem.value.toFixed(2) + elem.valueUnit + ' ' + elem.label
        ),
        secondValues: this.chartData.map(elem => elem.value),
        secondValuesWithUnits: this.chartData.map(
          elem => elem.secondaryValue.toFixed(2) + elem.secondaryValueUnit
        )
      }
    }
  }
</script>

<style scoped lang="scss">
  #inner-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  #donut-chart-wrapper {
    position: relative;
  }
</style>
