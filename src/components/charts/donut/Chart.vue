<script lang="ts">
  import { Vue, Component, Prop, Mixins } from 'vue-property-decorator'
  import { Doughnut } from 'vue-chartjs'

  @Component
  export default class Chart extends Mixins(Doughnut) {
    @Prop() colors!: String[]
    @Prop() labels!: String[]
    @Prop() values!: String[]

    mounted(): void {
      let options = {
        legend: {
          display: false
        },
        cutoutPercentage: 80,
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2,
        animation: {
          duration: 1500
        }
      }

      let chartdata: any = {
        datasets: [
          {
            data: this.values,
            backgroundColor: this.colors,
            borderWidth: 0
          }
        ],
        labels: this.labels
      }
      this.renderChart(chartdata, options)
    }
  }
</script>
