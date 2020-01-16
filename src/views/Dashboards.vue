<template>
  <div class="dashboards">
    <h1>This is an Dashboards page</h1>
    <DonutChart :chartData="donutChartData" />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  import DonutChart from '@/components/donutChart/index.vue'

  @Component({
    components: { DonutChart }
  })
  export default class Dashboards extends Vue {
    private donutChartData = [
      {
        value: 51.4,
        valueUnit: '%',
        color: '#3E8DDD',
        label: 'CPU',
        secondaryValue: 65.37,
        secondaryValueUnit: 'kWh'
      },
      {
        value: 7.5,
        valueUnit: '%',
        color: '#6AC346',
        label: 'Memory',
        secondaryValue: 11.92,
        secondaryValueUnit: 'kWh'
      },
      {
        value: 41.1,
        valueUnit: '%',
        color: '#912593',
        label: 'Other',
        secondaryValue: 81.74,
        secondaryValueUnit: 'kWh'
      }
    ]
  }
</script>
