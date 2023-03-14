<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head wide-md">
      <BlockHeadContent>
        <BlockTitle tag="h1">Chart Js</BlockTitle>
        <BlockText><a href="https://www.chartjs.org/" target="_blank">ChartJs</a> is a very simple and flexible JavaScript charting for designers & developers. You can visualize your data in different ways. We present some of examples for you.</BlockText>
        <BlockText>For more info see the <a href="https://www.chartjs.org/" target="_blank">official site</a>.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead>
        <BlockTitle>Line & Bar Chart</BlockTitle>
      </BlockHead>
      <div class="row g-gs">
          <div class="col-lg-6">
              <Card>
                  <CardBody>
                    <div class="nk-chart-overview">
                      <ChartLine id="line-chart" :data="lineChartData" />
                    </div>
                  </CardBody>
              </Card>
          </div><!-- .col -->
          <div class="col-lg-6">
              <Card>
                  <CardBody>
                    <div class="nk-chart-overview">
                      <ChartBar id="bar-chart" :data="barChartData"/>
                    </div>
                  </CardBody>
              </Card>
          </div><!-- .col -->
        </div><!-- .row -->
    </Block>

    <Block>
      <BlockHead>
        <BlockTitle>Filled Line Chart</BlockTitle>
      </BlockHead>
      <div class="row g-gs">
          <div class="col-lg-6">
              <Card>
                  <CardBody>
                      <h6>Line Chart Rounded</h6>
                      <div class="nk-chart-overview">
                        <ChartLine id="line-chart-filled" :data="lineChartFilledRounded" />
                      </div>
                  </CardBody>
              </Card><!-- .card -->
          </div><!-- .col -->
          <div class="col-lg-6">
              <Card>
                  <CardBody>
                      <h6>Line Chart Straight</h6>
                      <div class="nk-chart-overview">
                        <ChartLine id="line-chart-filled-straight" :data="lineChartFilledStraight" />
                      </div>
                  </CardBody>
              </Card><!-- .card -->
          </div><!-- .col -->
      </div><!-- .row -->
    </Block>

    <Block>
      <BlockHead>
        <BlockTitle>Bar Chart - Multiple</BlockTitle>
      </BlockHead>
      <div class="row g-gs">
          <div class="col-lg-6">
              <Card>
                  <CardBody>
                      <h6>Multiple Bar</h6>
                      <div class="nk-chart-overview">
                        <ChartBar id="bar-chart-multiple" :data="barChartMultipleData"/>
                      </div>
                  </CardBody>
              </Card><!-- .card -->
          </div><!-- .col -->
          <div class="col-lg-6">
              <Card>
                  <CardBody>
                      <h6>Stacked Bar</h6>
                      <div class="nk-chart-overview">
                         <ChartBar id="bar-chart-multiple-stacked" :data="barChartMultipleStacked"/>
                      </div>
                  </CardBody>
              </Card><!-- .card -->
          </div><!-- .col -->
      </div><!-- .row -->
    </Block>

    <Block>
      <BlockHead>
        <BlockTitle>Pie & Donught Charts</BlockTitle>
      </BlockHead>
      <div class="row g-gs">
          <div class="col-lg-4">
              <Card>
                  <CardBody>
                      <h6 class="text-center mb-3">Pie Chart</h6>
                      <div class="nk-chart-overview w-75 mx-auto">
                        <ChartPie id="pie-chart" :data="pieChartData"/>
                      </div>
                  </CardBody>
              </Card><!-- .card -->
          </div><!-- .col -->
          <div class="col-lg-4">
              <Card>
                  <CardBody>
                      <h6 class="text-center mb-3">Doughnut Chart</h6>
                      <div class="nk-chart-overview w-75 mx-auto">
                        <ChartDoughnut id="doughnut-chart" :data="doughnutChartData" />
                      </div>
                  </CardBody>
              </Card><!-- .card -->
          </div><!-- .col -->
          <div class="col-lg-4">
              <Card>
                  <CardBody>
                      <h6 class="text-center mb-3">Polar Chart</h6>
                      <div class="nk-chart-overview w-75 mx-auto">
                        <ChartPolar id="polar-chart" :data="polarChartData"/>
                      </div>
                  </CardBody>
              </Card><!-- .card -->
          </div><!-- .col -->
      </div><!-- .row -->
    </Block>
  </Layout>
</template>

<script>
import Layout from '@/layout/Index.vue'
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockText} from '@/components/block/Block.vue';
import Card from '@/components/uielements/card/Card.vue';
import CardBody from '@/components/uielements/card/CardBody.vue';
import ChartBar from '@/components/chart/ChartBar.vue';
import ChartLine from '@/components/chart/ChartLine.vue';
import ChartPie from '@/components/chart/ChartPie.vue';
import ChartDoughnut from '@/components/chart/ChartDoughnut.vue';
import ChartPolar from '@/components/chart/ChartPolar.vue';

// utilities
import hexRGB from '@/utilities/hexRGB';

export default {
  name: 'ChartsPage', 
  components: {
      Layout,
      Block,
      BlockHead,
      BlockHeadContent,
      BlockTitle,
      BlockText,
      Card,
      CardBody,
      ChartBar,
      ChartLine,
      ChartPie,
      ChartDoughnut,
      ChartPolar
    },
    data() {
      return {
        lineChartData: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          legend: true,
          datasets: [
              {
                  label : "Total Received",
                  tension: 0.4,
                  borderWidth: 2,
                  borderColor: this.$Colors.primary,
                  pointBorderColor: this.$Colors.primary,
                  pointBackgroundColor: this.$Colors.white,
                  pointHoverBackgroundColor: this.$Colors.primary,
                  pointBorderWidth: 2,
                  pointHoverRadius: 4,
                  pointHoverBorderWidth: 2,
                  pointRadius: 4,
                  pointHitRadius: 4,
                  backgroundColor: "transparent",
                  data: [75, 90, 110, 80, 125, 55, 95]
              },
              {
                  label : "Total Send",
                  tension: 0.4,
                  borderWidth: 2,
                  borderColor: this.$Colors.yellow,
                  pointBorderColor: this.$Colors.yellow,
                  pointBackgroundColor: this.$Colors.white,
                  pointHoverBackgroundColor: this.$Colors.yellow,
                  pointBorderWidth: 2,
                  pointHoverRadius: 4,
                  pointHoverBorderWidth: 2,
                  pointRadius: 4,
                  pointHitRadius: 4,
                  backgroundColor: "transparent",
                  data: [80, 60, 80, 54, 105, 120, 82]
              }
          ]
        },
        lineChartFilledRounded: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          legend: true,
          datasets: [
              {
                  tension: .4,
                  label: "Total Received",
                  borderWidth: 2,
                  borderColor: this.$Colors.primary,
                  backgroundColor: hexRGB(this.$Colors.primary, .2),
                  pointBorderColor: this.$Colors.primary,
                  pointBackgroundColor: this.$Colors.white,
                  pointHoverBackgroundColor: this.$Colors.primary,
                  pointBorderWidth: 2,
                  pointHoverRadius: 4,
                  pointHoverBorderWidth: 2,
                  pointRadius: 4,
                  pointHitRadius: 4,
                  data: [110, 80, 125, 65, 95, 75, 90, 110, 80, 125, 70, 95]
              }
          ]
        },
        lineChartFilledStraight: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          legend: true,
          datasets: [
              {
                  tension: 0,
                  label: "Total Received",
                  borderWidth: 2,
                  borderColor: this.$Colors.primary,
                  backgroundColor: hexRGB(this.$Colors.primary, .2),
                  pointBorderColor: this.$Colors.primary,
                  pointBackgroundColor: this.$Colors.white,
                  pointHoverBackgroundColor: this.$Colors.primary,
                  pointBorderWidth: 2,
                  pointHoverRadius: 4,
                  pointHoverBorderWidth: 2,
                  pointRadius: 4,
                  pointHitRadius: 4,
                  data: [110, 80, 125, 65, 95, 75, 90, 110, 80, 125, 70, 95]
              }
          ]
        },
        barChartData: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          legend: true,
          datasets: [
              {
                  label: "Bar data",
                  borderColor: hexRGB(this.$Colors.primary, 0.6),
                  backgroundColor: hexRGB(this.$Colors.primary,.2),
                  hoverBackgroundColor: hexRGB(this.$Colors.primary,.6),
                  borderWidth: 1,
                  data: [60, 49, 72, 90, 100, 60, 70, 90, 50, 80, 90, 60]
              }
          ]
        },
        barChartMultipleData: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          legend: true,
          datasets: [
            {
              borderColor: this.$Colors.primary,
              backgroundColor: this.$Colors.primary,
              label: "Income",
              data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95]
            },
            {
              borderColor: this.$Colors.yellow,
              backgroundColor: this.$Colors.yellow,
              label: "Expense",
              data: [75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125]
            }
          ]
        },
        barChartMultipleStacked: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          legend: true,
          stacked: true,
          barThickness: 10,
          datasets: [
            {
              borderColor: this.$Colors.primary,
              backgroundColor: this.$Colors.primary,
              label: "Income",
              data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95]
            },
            {
              borderColor: this.$Colors.yellow,
              backgroundColor: this.$Colors.yellow,
              label: "Expense",
              data: [75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125]
            }
          ]
        },
        pieChartData: {
          labels : ["Send", "Receive", "Withdraw"],
          datasets : [{
              backgroundColor: [this.$Colors.orange, this.$Colors.info, this.$Colors.green],
              data: [110, 80, 125]
          }],
        },
        doughnutChartData: {
          labels : ["Send", "Receive", "Withdraw"],
          datasets : [{
              backgroundColor: [this.$Colors.orange, this.$Colors.info, this.$Colors.green],
              data: [110, 80, 125]
          }],
        },
        polarChartData: {
          labels : ["Send", "Receive", "Withdraw"],
          datasets : [{
              backgroundColor: [this.$Colors.orange, this.$Colors.info, this.$Colors.green],
              data: [110, 80, 125]
          }],
        }

      }
    },
}
</script>
