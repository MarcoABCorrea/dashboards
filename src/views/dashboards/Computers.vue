<template>
  <div class="pc-usage-dashboard">
    <Title text-title="Computers Dashboard" />
    <el-row type="flex" justify="center">
      <el-col :span="6">
        <h4>Current Power Usage</h4>
        <DonutChart id="usage-chart" :chartData="donutChartData" />
      </el-col>
      <el-col :span="6" :offset="6">
        <h4>PC video card usage by MFG</h4>
        <BarChart :chartData="barChartData" />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Title from '@/components/title/Title.vue'
  import DonutChart from '@/components/charts/donut/index.vue'
  import BarChart from '@/components/charts/bar/index.vue'
  import IDonutChartData from '@/components/charts/donut/IDonutChartData'
  import IBarChartData from '@/components/charts/bar/IBarChartData'

  @Component({
    components: { DonutChart, Title, BarChart }
  })
  export default class Dashboards extends Vue {
    private donutChartData: IDonutChartData = {
      colors: ['#3E8DDD', '#6AC346', '#912593'],
      labels: ['CPU', 'Memory', 'Other'],
      values: [51.4, 7.5, 41.1],
      valuesWithUnit: ['51.40% CPU', '7.50% Memory', '41.10% Other'],
      secondValues: [51.4, 7.5, 41.1],
      secondValuesWithUnits: ['65.37kWh', '11.92kWh', '81.74kWh']
    }

    private barChartData: IBarChartData = {
      colors: ['#3E8DDD', '#6AC346', '#912593', '#e6c005'],
      labels: ['NVidia', 'Intel', 'AMD', 'Other'],
      values: [35.51, 27.47, 30.13, 21.89]
    }
  }
</script>

<style scoped lang="scss">
  h4 {
    display: flex;
    justify-content: center;
  }
</style>
