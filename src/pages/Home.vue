<template>
  <Layout>
    <Row utils="g-gs">
      <Col sm="6" xl="6" xxl="3">
        <Card full>
            <CardBody>
                <CardTitleGroup class="align-items-start">
                  <CardTitle tag="div">
                    <h4 class="title">Sessions</h4>
                  </CardTitle>
                  <Media middle size="sm" shape="circle" variant="primary-soft">
                    <Icon icon="user-alt-fill"></Icon>
                  </Media>
                </CardTitleGroup>
                <div class="mt-2 mb-4">
                    <div class="amount h1">2,765</div>
                    <div class="d-flex align-items-center smaller">
                        <div class="change up">
                            <Icon icon="upword-alt-fill"></Icon> 10.5%
                        </div>
                        <span class="text-light">From last 2 Weeks</span>
                    </div>
                </div>
                <div class="nk-chart-analytics-session">
                  <ChartBar id="session-chart" :data="sessionChart"/>
                </div>
                <ChartLabelGroup class="mt-1" justify="between">
                  <ChartLabel small> 1 May </ChartLabel>
                  <ChartLabel small> 8 May </ChartLabel>
                  <ChartLabel small> 15 May </ChartLabel>
                </ChartLabelGroup>
            </CardBody>
        </Card>
      </Col>

      <Col sm="6" xl="6" xxl="3">
        <Card full>
          <CardBody>
            <CardTitleGroup class="align-items-start">
              <CardTitle tag="div">
                <h4 class="title">Avg.Sessions</h4>
              </CardTitle>
              <Media middle size="sm" shape="circle" variant="success-soft">
                <Icon icon="bar-chart-fill"></Icon>
              </Media>
            </CardTitleGroup>
            <div class="mt-2 mb-4">
                <div class="amount h1">42:50</div>
                <div class="d-flex align-items-center smaller">
                    <div class="change up">
                        <Icon icon="upword-alt-fill"></Icon> 12%
                    </div>
                    <span class="text-light">From last month</span>
                </div>
            </div>
            <div class="nk-chart-analytics-session">
                <ChartLine id="session-chart-avg" :data="sessionChartAvg"/>
            </div>
            <ChartLabelGroup class="mt-1" justify="between">
              <ChartLabel small> 1 May </ChartLabel>
              <ChartLabel small> 15 May </ChartLabel>
              <ChartLabel small> 30 May </ChartLabel>
            </ChartLabelGroup>
          </CardBody>
        </Card>
      </Col>

      <Col sm="6" xl="6" xxl="3">
        <Card full>
          <CardBody>
            <CardTitleGroup class="align-items-start">
              <CardTitle tag="div">
                <h4 class="title">Bounce Rate</h4>
              </CardTitle>
              <Media middle size="sm" shape="circle" variant="warning-soft">
                <Icon icon="activity-round-fill"></Icon>
              </Media>
            </CardTitleGroup>
            <div class="mt-2 mb-4">
                <div class="amount h1">1,853</div>
                <div class="d-flex align-items-center smaller">
                  <div class="change up">
                      <Icon icon="upword-alt-fill"></Icon> 10%
                  </div>
                  <span class="text-light">From last week</span>
                </div>
            </div>
            <div class="nk-chart-analytics-session">
              <ChartLine id="bounce-rate-chart" :data="bounceRateChart" />
            </div>
            <ChartLabelGroup class="mt-1" justify="between">
              <ChartLabel small>1 May </ChartLabel>
              <ChartLabel small>7 May </ChartLabel>
            </ChartLabelGroup>
          </CardBody>
        </Card>
      </Col>

      <Col sm="6" xl="6" xxl="3">
        <Card full>
          <CardBody>
            <CardTitleGroup class="align-items-start">
              <CardTitle tag="div">
                <h4 class="title">Goal Completions</h4>
              </CardTitle>
              <Media middle size="sm" shape="circle" variant="info-soft">
                <Icon icon="tag-fill"></Icon>
              </Media>
            </CardTitleGroup>
            <div class="mt-2 mb-4">
                <div class="amount h1">2,153</div>
                <div class="d-flex align-items-center smaller">
                    <div class="change down">
                      <Icon icon="downward-alt-fill"></Icon> 12%
                    </div>
                    <span class="text-light">From last month</span>
                </div>
            </div>
            <div class="nk-chart-analytics-session">
              <ChartBar id="goal-completions" :data="goalCompletions"/>
            </div>
            <ChartLabelGroup class="mt-1" justify="between">
              <ChartLabel small>1 May </ChartLabel>
              <ChartLabel small>15 May </ChartLabel>
              <ChartLabel small>30 May </ChartLabel>
            </ChartLabelGroup>
          </CardBody>
        </Card>
      </Col>

      <Col xxl="6">
        <Card full>
            <CardBody>
              <CardTitleGroup class="flex-wrap">
                <CardTitle tag="div">
                    <h5 class="title">Audience Overview</h5>
                </CardTitle>
                <ChartLegendGroup class="gap gx-3 align-items-center">
                    <div class="gap-col">
                      <ChartLegend small dot="warning">
                        <div class="title">New visits</div>
                      </ChartLegend>
                    </div>
                    <div class="gap-col">
                      <ChartLegend small dot="info">
                        <div class="title">Unique visits</div>
                      </ChartLegend>
                    </div>
                    <div class="gap-col">
                      <Dropdown>
                        <Button href="#" zoom size="sm" class="btn-icon me-n1" data-bs-toggle="dropdown">
                          <Icon icon="more-v" />
                        </Button>
                        <DropdownMenu size="sm" alignment="end">
                          <DropdownItem>
                            <DropdownHeader class="pt-2 pb-0">
                              <h6 class="mb-0 fw-semibold">Options</h6>
                            </DropdownHeader>
                          </DropdownItem>
                          <DropdownItem divider></DropdownItem>
                          <DropdownItem>
                            <DropdownLink href="#">7 Days</DropdownLink>
                          </DropdownItem>
                          <DropdownItem>
                            <DropdownLink href="#">15 Days</DropdownLink>
                          </DropdownItem>
                          <DropdownItem>
                            <DropdownLink href="#">30 Days</DropdownLink>
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                </ChartLegendGroup>
              </CardTitleGroup>
              <div class="nk-chart-analytics-audience-overview mt-3">
                <ChartLine id="audience-overview-chart" :data="audienceOverviewChart"/>
              </div>
            </CardBody>
        </Card>
      </Col>
      
      <Col xxl="6">
        <Card full>
            <CardBody class="flex-grow-0 py-2">
              <CardTitleGroup>
                <CardTitle tag="div">
                  <h5 class="title">Top Referral Sources</h5>
                </CardTitle>
                <CardTools>
                  <Dropdown>
                    <Button href="#" zoom size="sm" class="btn-icon me-n1" data-bs-toggle="dropdown">
                      <Icon icon="more-v" />
                    </Button>
                    <DropdownMenu size="sm" alignment="end">
                      <DropdownItem>
                        <DropdownHeader class="pt-2 pb-0">
                          <h6 class="mb-0 fw-semibold">Options</h6>
                        </DropdownHeader>
                      </DropdownItem>
                      <DropdownItem divider></DropdownItem>
                      <DropdownItem>
                        <DropdownLink href="#">7 Days</DropdownLink>
                      </DropdownItem>
                      <DropdownItem>
                        <DropdownLink href="#">15 Days</DropdownLink>
                      </DropdownItem>
                      <DropdownItem>
                        <DropdownLink href="#">30 Days</DropdownLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </CardTools>
              </CardTitleGroup>
            </CardBody>
            <div class="table-responsive">
              <Table middle class="mb-0">
                <TableHead variant="light" small>
                  <tr>
                      <th class="tb-col">
                        <OverlineTitle tag="span">source</OverlineTitle>
                      </th>
                      <th class="tb-col tb-col-end">
                        <OverlineTitle tag="span">visitors</OverlineTitle>
                      </th>
                      <th class="tb-col tb-col-end">
                        <OverlineTitle tag="span">revenues</OverlineTitle>
                      </th>
                      <th class="tb-col tb-col-end">
                        <OverlineTitle tag="span">sales</OverlineTitle>
                      </th>
                      <th class="tb-col tb-col-end">
                        <OverlineTitle tag="span">conversion</OverlineTitle>
                      </th>
                  </tr>
                </TableHead>
                <TableBody>
                  <tr>
                    <td class="tb-col">
                        <MediaGroup>
                            <Media size="md" middle shape="circle" variant="dark" class="flex-shrink-0">
                                <Icon icon="github-circle" />
                            </Media>
                            <MediaText>
                                <span class="title">github.com</span>
                            </MediaText>
                        </MediaGroup>
                    </td>
                    <td class="tb-col tb-col-end">
                        <span class="small">2.4K</span>
                    </td>
                    <td class="tb-col tb-col-end">
                        <span class="change up small">$3.877</span>
                    </td>
                    <td class="tb-col tb-col-end">
                        <span class="small">267</span>
                    </td>
                    <td class="tb-col tb-col-end">
                        <span class="text-info small">4.7%</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="tb-col">
                        <MediaGroup>
                            <Media size="md" middle shape="circle" variant="info" class="flex-shrink-0">
                                <Icon icon="twitter" />
                            </Media>
                            <MediaText>
                                <span class="title">twitter.com</span>
                            </MediaText>
                        </MediaGroup>
                    </td>
                    <td class="tb-col tb-col-end">
                        <span class="small">2.2K</span>
                    </td>
                    <td class="tb-col tb-col-end">
                        <span class="change up small">$3.444</span>
                    </td>
                    <td class="tb-col tb-col-end">
                        <span class="small">265</span>
                    </td>
                    <td class="tb-col tb-col-end">
                        <span class="text-info small">4.5%</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="tb-col">
                        <MediaGroup>
                            <Media size="md" middle shape="circle" variant="danger" class="flex-shrink-0">
                                <Icon icon="google" />
                            </Media>
                            <MediaText>
                                <span class="title">google.com</span>
                            </MediaText>
                        </MediaGroup>
                    </td>
                    <td class="tb-col tb-col-end">
                        <span class="small">2.1K</span>
                    </td>
                    <td class="tb-col tb-col-end">
                        <span class="change up small">$3.232</span>
                    </td>
                    <td class="tb-col tb-col-end">
                        <span class="small">264</span>
                    </td>
                    <td class="tb-col tb-col-end">
                        <span class="text-info small">4.3%</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="tb-col">
                        <MediaGroup>
                            <Media size="md" middle shape="circle" variant="success" class="flex-shrink-0">
                                <Icon icon="vimeo" />
                            </Media>
                            <MediaText>
                                <span class="title">vimeo.com</span>
                            </MediaText>
                        </MediaGroup>
                    </td>
                    <td class="tb-col tb-col-end">
                        <span class="small">2.0K</span>
                    </td>
                    <td class="tb-col tb-col-end">
                        <span class="change up small">$3.212</span>
                    </td>
                    <td class="tb-col tb-col-end">
                        <span class="small">261</span>
                    </td>
                    <td class="tb-col tb-col-end">
                        <span class="text-info small">4.1%</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="tb-col">
                        <MediaGroup>
                            <Media size="md" middle shape="circle" variant="warning" class="flex-shrink-0">
                                <Icon icon="digital-ocean" />
                            </Media>
                            <MediaText>
                                <span class="title">digital-ocean.com</span>
                            </MediaText>
                        </MediaGroup>
                    </td>
                    <td class="tb-col tb-col-end">
                        <span class="small">1.8K</span>
                    </td>
                    <td class="tb-col tb-col-end">
                        <span class="change up small">$3.105</span>
                    </td>
                    <td class="tb-col tb-col-end">
                        <span class="small">260</span>
                    </td>
                    <td class="tb-col tb-col-end">
                        <span class="text-info small">3.1%</span>
                    </td>
                  </tr>
                </TableBody>
              </Table>
            </div>
        </Card>
      </Col>

      <Col md="6" xxl="4">
        <Card full>
          <CardBody>
            <CardTitleGroup>
              <CardTitle tag="div">
                <h5 class="title">Sessions Device</h5>
              </CardTitle>
              <CardTools>
                <Icon hint icon="help-fill" v-nk-tooltip:left="'Sessions from device'" />
              </CardTools>
            </CardTitleGroup>
              <div class="nk-chart-analytics-session-device mt-4">
                <ChartDoughnut id="sessions-device" :data="sessionsDevice" />
              </div>
              <ChartLegendGroup class="justify-content-around pt-4 flex-wrap gap g-2">
                <ChartLegend dot="info">
                  <div class="title">Mobile</div>
                </ChartLegend>
                <ChartLegend dot="warning">
                  <div class="title">Tablet</div>
                </ChartLegend>
                <ChartLegend dot="success">
                  <div class="title">Desktop</div>
                </ChartLegend>
                <ChartLegend dot="purple">
                  <div class="title">Others</div>
                </ChartLegend>
              </ChartLegendGroup>
          </CardBody>
        </Card>
      </Col>

      <Col md="6" xxl="4">
        <Card full>
            <CardBody>
              <CardTitleGroup>
                <CardTitle tag="div">
                  <h5 class="title">Recent Activity</h5>
                </CardTitle>
              </CardTitleGroup>
              <Timeline center class="mt-4">
                <TimelineGroup>
                  <TimelineHeading>today</TimelineHeading>
                  <TimelineList>
                    <TimelineItem symbol="user" variant="info">
                      <p class="small"><strong>Nick Mark</strong> mentioned <strong>Sara Smith</strong> in a new post</p>
                    </TimelineItem>
                    <TimelineItem symbol="signout" variant="warning">
                      <p class="small">The post <strong>Post Name</strong> was removed by <strong>Nick Mark</strong></p>
                    </TimelineItem>
                    <TimelineItem symbol="file-text" variant="success">
                      <p class="small"><strong>Patrick Sullivan</strong> published a new <strong>post</strong> </p>
                    </TimelineItem>
                  </TimelineList>
                </TimelineGroup>
                <TimelineGroup>
                  <TimelineHeading>yesterday</TimelineHeading>
                  <TimelineList>
                    <TimelineItem symbol="shuffle" variant="info">
                      <p class="small"><strong>240+</strong> users have subscribed to Newsletter #1 </p>
                    </TimelineItem>
                    <TimelineItem symbol="signout" variant="success">
                      <p class="small">The post <strong>Post Name</strong> was suspended by <strong>Nick Mark</strong></p>
                    </TimelineItem>
                  </TimelineList>
                </TimelineGroup>
              </Timeline>
            </CardBody>
        </Card>
      </Col>

      <Col xxl="4">
        <Card full>
          <CardBody>
            <CardTitleGroup>
                <CardTitle tag="div">
                  <h5 class="title">Web Sessions by Region</h5>
                </CardTitle>
                <CardTools>
                  <Icon hint icon="help-fill" v-nk-tooltip:left="'Web Sessions from region'" />
                </CardTools>
            </CardTitleGroup>
            <div class="nk-chart-analytics-session-region-map mt-3 mx-auto">
              <WorldMap id="svg-world-map" zoomOff :data="svgWorldMap"/>
            </div><!-- .world-map -->
            <ListGroupHeading class="d-flex align-items-center justify-content-between">
              <h6 class="title">Top Region</h6>
              <h6 class="title">Sessions</h6>
            </ListGroupHeading>
            <ListGroup borderless small>
              <ListGroupItem class="d-flex justify-content-between align-items-center smaller">
                    <span class="title">United States</span>
                    <span class="text">8,465</span>
                </ListGroupItem>
                <ListGroupItem class="d-flex justify-content-between align-items-center smaller">
                    <span class="title">United Kingdom</span>
                    <span class="text">6,423</span>
                </ListGroupItem>
                <ListGroupItem class="d-flex justify-content-between align-items-center smaller">
                    <span class="title">Canada</span>
                    <span class="text">5,764</span>
                </ListGroupItem>
                <ListGroupItem class="d-flex justify-content-between align-items-center smaller">
                    <span class="title">Germany</span>
                    <span class="text">1,374</span>
                </ListGroupItem>
                <ListGroupItem class="d-flex justify-content-between align-items-center smaller">
                    <span class="title">Bangladesh</span>
                    <span class="text">890</span>
                </ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Layout>
</template>

<script>
// @ is an alias to /src
import Layout from '@/layout/Index.vue';
import Row from '@/components/layout/Row.vue';
import Col from '@/components/layout/Col.vue';
import Card from '@/components/uielements/card/Card.vue';
import CardBody from '@/components/uielements/card/CardBody.vue';
import CardTitleGroup from '@/components/uielements/card/CardTitleGroup.vue';
import CardTitle from '@/components/uielements/card/CardTitle.vue';
import Icon from '@/components/icon/Icon.vue';
import ChartBar from '@/components/chart/ChartBar.vue';
import Media from '@/components/media/Media.vue';
import ChartLine from '@/components/chart/ChartLine.vue';
import ChartLabelGroup from '@/components/chart/ChartLabelGroup.vue';
import ChartLabel from '@/components/chart/ChartLabel.vue';
import ChartLegendGroup from '@/components/chart/ChartLegendGroup.vue'
import ChartLegend from '@/components/chart/ChartLegend.vue'
import Dropdown from '@/components/uielements/dropdown/Dropdown.vue';
import DropdownMenu from '@/components/uielements/dropdown/DropdownMenu.vue';
import DropdownItem from '@/components/uielements/dropdown/DropdownItem.vue';
import DropdownLink from '@/components/uielements/dropdown/DropdownLink.vue';
import DropdownHeader from '@/components/uielements/dropdown/DropdownHeader.vue';
import Button from '@/components/uielements/button/Button.vue';
import CardTools from '@/components/uielements/card/CardTools.vue';
import Table from '@/components/utilities/table/Table.vue';
import TableHead from '@/components/utilities/table/TableHead.vue';
import TableBody from '@/components/utilities/table/TableBody.vue';
import OverlineTitle from '@/components/misc/OverlineTitle.vue';
import MediaGroup from '@/components/media/MediaGroup.vue';
import MediaText from '@/components/media/MediaText.vue';
import ChartDoughnut from '@/components/chart/ChartDoughnut.vue';
import Timeline from '@/components/timeline/Timeline.vue';
import TimelineGroup from '@/components/timeline/TimelineGroup.vue';
import TimelineList from '@/components/timeline/TimelineList.vue';
import TimelineItem from '@/components/timeline/TimelineItem.vue';
import TimelineHeading from '@/components/timeline/TimelineHeading.vue';
import WorldMap from '@/components/world-map/WorldMap.vue';
import ListGroupHeading from '@/components/uielements/list/ListGroupHeading.vue';
import ListGroup from '@/components/uielements/list/ListGroup.vue';
import ListGroupItem from '@/components/uielements/list/ListGroupItem.vue';

export default {
  name: 'HomePage',
  components: {
    Layout,
    Row,
    Col,
    Card,
    CardBody,
    CardTitleGroup,
    CardTitle,
    Icon,
    ChartBar,
    Media,
    ChartLine,
    ChartLabelGroup,
    ChartLabel,
    ChartLegendGroup,
    ChartLegend,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    DropdownLink,
    DropdownHeader,
    Button,
    CardTools,
    Table,
    TableHead,
    TableBody,
    OverlineTitle,
    MediaGroup,
    MediaText,
    ChartDoughnut,
    Timeline,
    TimelineGroup,
    TimelineList,
    TimelineItem,
    TimelineHeading,
    WorldMap,
    ListGroupHeading,
    ListGroup,
    ListGroupItem
},
  data(){
    return {
      sessionChart: {
        labels: ["1st May","2nd May","3rd May","4th May","5th May","6th May","7th May","8th May","9th May","10th May","11th May","12th May","13th May","14th May","15th May"],
        xAxis:  false,
        barThickness: 6,
        borderDash: [8, 4],
        datasets: [
            {
              borderRadius: 2,
              borderWidth: 1,
              borderColor: this.$Colors.primary,
              backgroundColor: this.$Colors.primary,
              label: "Session",
              data: [25, 35, 55, 20, 30, 17, 12, 35, 23, 52, 45, 30, 10, 50, 45]
            },
        ]
      },
      sessionChartAvg: {
        labels: ["1st May","2nd May","3rd May","4th May","5th May","6th May","7th May","8th May","9th May","10th May","11th May","12th May","13th May","14th May","15th May","16th May","17th May","18th May","19th May","20th May","21th May","22th May","23th May","24th May","25th May","26th May","27th May","28th May","29th May","30th May"],
        yAxis: false,
        xAxis: false,
        datasets: [
            {
              tension: .4,
              label: "Avg.Sessions",
              borderColor: this.$Colors.success,
              borderWidth: 2,
              backgroundGradient: this.$Colors.success,
              pointBorderColor: 'transparent',
              pointBackgroundColor: 'transparent',
              pointHoverBackgroundColor: this.$Colors.success,
              data: [120, 140, 140, 130, 128, 130, 145, 140, 132, 135, 145, 155, 165, 180, 185, 178, 166, 160, 165, 160, 155, 170, 190, 205, 220, 236, 250, 240, 235, 240]
          }
        ]
      },
      bounceRateChart: {
        labels: ["1st May","2nd May","3rd May","4th May","5th May","6th May","7th May"],
        yAxis: false,
        xAxis: false,
        maxTicksLimit: 4,
        datasets: [
            {
              tension: 0,
              label: "This Month",
              borderWidth: 2,
              borderColor: this.$Colors.primary,
              backgroundGradient: this.$Colors.primary,
              pointBackgroundColor: this.$Colors.primary,
              pointBorderColor: this.$Colors.white,
              fill: true,
              data: [120, 130, 110, 105, 115, 108, 118]
            }
        ]
      },
      goalCompletions: {
        labels : ["1st May","2nd May","3rd May","4th May","5th May","6th May","7th May","8th May","9th May","10th May","11th May","12th May","13th May","14th May","15th May","16th May","17th May","18th May","19th May","20th May","21th May","22th May","23th May","24th May","25th May","26th May","27th May","28th May","29th May","30th May"],
        yAxis: false,
        xAxis: false,
        barThickness: 4,
        barPercentage : .7,
        datasets: [
          {
            borderRadius: 2,
            borderWidth: 1,
            borderColor: this.$Colors.info,
            backgroundColor: this.$Colors.info,
            label: "data",
            data: [36, 41, 49, 72, 39, 49, 39, 38, 59, 80, 62, 33, 62, 60, 114, 98, 54, 39,72, 39, 49, 39, 38, 59, 80, 62, 33, 62, 60, 114]
          }
        ]
      },
      audienceOverviewChart: {
        labels : ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        ticksValue: 'k',
        borderDash: [8, 4],
        datasets: [
            {
              tension: .4,
              borderWidth: 2,
              borderColor: this.$Colors.warning,
              pointBorderColor: 'transparent',
              pointBackgroundColor: 'transparent',
              pointHoverBackgroundColor: this.$Colors.warning,
              label: "New visits",
              data: [28, 60, 30, 65, 60, 95, 90, 100, 96, 120, 105, 134]
            },
            {
              tension: .4,
              borderWidth: 2,
              pointBorderColor: 'transparent',
              pointBackgroundColor: 'transparent',
              borderColor: this.$Colors.info,
              pointHoverBackgroundColor: this.$Colors.info,
              label: "Unique visits",
              data: [70, 44, 49, 78, 39, 49, 39, 38, 59, 80, 56, 44]
            }
        ]
      },
      sessionsDevice: {
        labels: ["Mobile", "Tablet", "Desktop", "Others"],
        datasets : [{
            backgroundColor: [this.$Colors.info, this.$Colors.yellow, this.$Colors.green, this.$Colors.purple],
            data: [140, 70, 110, 120],
            hoverOffset: 4
        }],
      },
      svgWorldMap: {
        colorMax: '#B1C7EF',
        colorMin: '#D4DEEF',
        colorNoData: '#F3F4F6',
        data: {
            data: {
              visitor: {
                name: 'Total Sessions',
                format: '{0}',
                thousandSeparator: ',',
                thresholdMax: 50000,
                thresholdMin: 1000,
              },
              change: {
                name: 'Changes This Week',
                format: '{0} %'
              }
            },
            applyData: 'visitor',
            values: {
                AF: {
                  visitor: 587,
                  change: 4.73,
                },
                AL: {
                  visitor: 4583,
                  change: 11.09,
                },
                DZ: {
                  visitor: 4293,
                  change: 10.01,
                },
                AO: {
                  visitor: 4408,
                  change: 26.49,
                },
                AG: {
                  visitor: 16702,
                  change: 3.26,
                },
                AR: {
                  visitor: 14467,
                  change: 13.83,
                },
                AM: {
                  visitor: 3861,
                  change: 9.22,
                },
                AU: {
                  visitor: 55707,
                  change: 7.39,
                },
                AT: {
                  visitor: 47290,
                  change: 5.72,
                },
                AZ: {
                  visitor: 4141,
                  change: 6.29,
                },
                BS: {
                  visitor: 31255,
                  change: 2.21,
                },
                BH: {
                  visitor: 24029,
                  change: 6.32,
                },
                BD: {
                  visitor: 1602,
                  change: 9.79,
                },
                BB: {
                  visitor: 17859,
                  change: 7.83,
                },
                BY: {
                  visitor: 5760,
                  change: 14.69,
                },
                BE: {
                  visitor: 43582,
                  change: 5.3,
                },
                BZ: {
                  visitor: 4806,
                  change: -0.64,
                },
                BJ: {
                  visitor: 830,
                  change: 4.92,
                },
                BT: {
                  visitor: 2903,
                  change: 8.01,
                },
                BO: {
                  visitor: 3353,
                  change: 7.3,
                },
                BA: {
                  visitor: 5149,
                  change: 7.04,
                },
                BW: {
                  visitor: 7877,
                  change: 8.34,
                },
                BR: {
                  visitor: 9895,
                  change: 13.74,
                },
                BN: {
                  visitor: 29712,
                  change: 10.31,
                },
                BG: {
                  visitor: 8064,
                  change: 7.58,
                },
                BF: {
                  visitor: 664,
                  change: 8.11,
                },
                BI: {
                  visitor: 312,
                  change: 4.85,
                },
                KH: {
                  visitor: 1389,
                  change: 8.76,
                },
                CM: {
                  visitor: 1401,
                  change: 2.94,
                },
                CA: {
                  visitor: 45077,
                  change: 6.27,
                },
                XK: {
                  visitor: 3880,
                  change: 6.23,
                },
                CV: {
                  visitor: 3237,
                  change: 4.91,
                },
                CF: {
                  visitor: 387,
                  change: 7.65,
                },
                TD: {
                  visitor: 810,
                  change: -0.71,
                },
                CL: {
                  visitor: 15070,
                  change: 9.66,
                },
                CN: {
                  visitor: 8643,
                  change: 6.5,
                },
                CO: {
                  visitor: 6273,
                  change: 9.21,
                },
                KM: {
                  visitor: 788,
                  change: 3.09,
                },
                CG: {
                  visitor: 1958,
                  change: 6.66,
                },
                CR: {
                  visitor: 11685,
                  change: -0.77,
                },
                HR: {
                  visitor: 13138,
                  change: 6.7,
                },
                CY: {
                  visitor: 24976,
                  change: 5.65,
                },
                CZ: {
                  visitor: 20152,
                  change: 8.9,
                },
                CD: {
                  visitor: 478,
                  change: 2.32,
                },
                DK: {
                  visitor: 56444,
                  change: 4.97,
                },
                DJ: {
                  visitor: 1989,
                  change: 4.52,
                },
                DM: {
                  visitor: 7921,
                  change: -3.63,
                },
                DO: {
                  visitor: 7375,
                  change: 3.67,
                },
                EC: {
                  visitor: 6098,
                  change: 2.21,
                },
                EG: {
                  visitor: 2501,
                  change: -32.17,
                },
                SV: {
                  visitor: 4400,
                  change: 4.06,
                },
                GQ: {
                  visitor: 12727,
                  change: 2.65,
                },
                ER: {
                  visitor: 980,
                  change: 13.88,
                },
                EE: {
                  visitor: 19840,
                  change: 11.47,
                },
                ET: {
                  visitor: 873,
                  change: 8.82,
                },
                FM: {
                  visitor: 3200,
                  change: 1.45,
                },
                FJ: {
                  visitor: 5740,
                  change: 7.44,
                },
                FI: {
                  visitor: 46017,
                  change: 5.75,
                },
                FR: {
                  visitor: 39869,
                  change: 4.35,
                },
                GA: {
                  visitor: 7972,
                  change: 6.96,
                },
                GM: {
                  visitor: 480,
                  change: 1.45,
                },
                GE: {
                  visitor: 4099,
                  change: 5.86,
                },
                DE: {
                  visitor: 44550,
                  change: 5.44,
                },
                GH: {
                  visitor: 1663,
                  change: 7.18,
                },
                GR: {
                  visitor: 18637,
                  change: 4.26,
                },
                GD: {
                  visitor: 10360,
                  change: 5.1,
                },
                GT: {
                  visitor: 4472,
                  change: 7.84,
                },
                GN: {
                  visitor: 749,
                  change: 11.88,
                },
                GW: {
                  visitor: 794,
                  change: 13.43,
                },
                GY: {
                  visitor: 4710,
                  change: 3.24,
                },
                HT: {
                  visitor: 784,
                  change: 3.96,
                },
                HN: {
                  visitor: 2766,
                  change: 4.66,
                },
                HK: {
                  visitor: 46109,
                  change: 6.01,
                },
                HU: {
                  visitor: 15531,
                  change: 3.16,
                },
                IS: {
                  visitor: 70332,
                  change: 16.46,
                },
                IN: {
                  visitor: 1983,
                  change: 13.35,
                },
                ID: {
                  visitor: 3876,
                  change: 7.53,
                },
                IR: {
                  visitor: 5305,
                  change: 5.53,
                },
                IQ: {
                  visitor: 5088,
                  change: 12.24,
                },
                IE: {
                  visitor: 70638,
                  change: 9.02,
                },
                IL: {
                  visitor: 40258,
                  change: 8.24,
                },
                IT: {
                  visitor: 31984,
                  change: 4.31,
                },
                CI: {
                  visitor: 1617,
                  change: 8.14,
                },
                JM: {
                  visitor: 5048,
                  change: 2.0,
                },
                JP: {
                  visitor: 38440,
                  change: -1.4,
                },
                JO: {
                  visitor: 5678,
                  change: 2.31,
                },
                KZ: {
                  visitor: 8841,
                  change: 18.57,
                },
                KE: {
                  visitor: 1702,
                  change: 9.66,
                },
                KI: {
                  visitor: 1721,
                  change: 6.42,
                },
                KW: {
                  visitor: 26005,
                  change: 5.6,
                },
                KG: {
                  visitor: 1144,
                  change: 7.19,
                },
                LA: {
                  visitor: 2543,
                  change: 5.2,
                },
                LV: {
                  visitor: 15547,
                  change: 10.98,
                },
                LB: {
                  visitor: 11408,
                  change: 2.73,
                },
                LS: {
                  visitor: 1425,
                  change: 12.94,
                },
                LR: {
                  visitor: 729,
                  change: -2.12,
                },
                LY: {
                  visitor: 4859,
                  change: 67.32,
                },
                LT: {
                  visitor: 16730,
                  change: 12.14,
                },
                LU: {
                  visitor: 105803,
                  change: 3.94,
                },
                MO: {
                  visitor: 77451,
                  change: 10.1,
                },
                MK: {
                  visitor: 5474,
                  change: 5.51,
                },
                MG: {
                  visitor: 448,
                  change: 11.5,
                },
                MW: {
                  visitor: 324,
                  change: 10.17,
                },
                MY: {
                  visitor: 9813,
                  change: 4.68,
                },
                MV: {
                  visitor: 12527,
                  change: 5.17,
                },
                ML: {
                  visitor: 811,
                  change: 5.62,
                },
                MT: {
                  visitor: 27250,
                  change: 8.83,
                },
                MH: {
                  visitor: 3625,
                  change: 8.21,
                },
                MR: {
                  visitor: 1318,
                  change: 5.15,
                },
                MU: {
                  visitor: 9794,
                  change: 1.88,
                },
                MX: {
                  visitor: 9304,
                  change: 5.64,
                },
                MD: {
                  visitor: 2280,
                  change: 19.51,
                },
                MN: {
                  visitor: 3640,
                  change: -0.75,
                },
                ME: {
                  visitor: 7647,
                  change: 8.8,
                },
                MA: {
                  visitor: 3151,
                  change: 4.89,
                },
                MZ: {
                  visitor: 429,
                  change: 9.5,
                },
                MM: {
                  visitor: 1264,
                  change: 4.41,
                },
                NA: {
                  visitor: 5413,
                  change: 14.96,
                },
                NR: {
                  visitor: 8575,
                  change: 9.6,
                },
                NP: {
                  visitor: 834,
                  change: 14.45,
                },
                NL: {
                  visitor: 48346,
                  change: 5.89,
                },
                NZ: {
                  visitor: 41593,
                  change: 6.51,
                },
                NI: {
                  visitor: 2207,
                  change: 2.57,
                },
                NE: {
                  visitor: 440,
                  change: 6.29,
                },
                NG: {
                  visitor: 1994,
                  change: -9.68,
                },
                NO: {
                  visitor: 74941,
                  change: 6.07,
                },
                OM: {
                  visitor: 17973,
                  change: 0.64,
                },
                PK: {
                  visitor: 1541,
                  change: 6.95,
                },
                PW: {
                  visitor: 17096,
                  change: 0.27,
                },
                PA: {
                  visitor: 15089,
                  change: 5.35,
                },
                PG: {
                  visitor: 2861,
                  change: 2.51,
                },
                PY: {
                  visitor: 4260,
                  change: 6.47,
                },
                PE: {
                  visitor: 6199,
                  change: 8.93,
                },
                PH: {
                  visitor: 2976,
                  change: 0.78,
                },
                PL: {
                  visitor: 13822,
                  change: 11.37,
                },
                PT: {
                  visitor: 21161,
                  change: 3.68,
                },
                PR: {
                  visitor: 30488,
                  change: -0.98,
                },
                QA: {
                  visitor: 60804,
                  change: 4.39,
                },
                RO: {
                  visitor: 10757,
                  change: 13.18,
                },
                RU: {
                  visitor: 10608,
                  change: 19.19,
                },
                RW: {
                  visitor: 772,
                  change: 5.2,
                },
                KN: {
                  visitor: 16296,
                  change: 1.9,
                },
                LC: {
                  visitor: 9607,
                  change: 1.99,
                },
                VC: {
                  visitor: 7270,
                  change: 3.99,
                },
                WS: {
                  visitor: 4253,
                  change: 5.93,
                },
                SM: {
                  visitor: 47406,
                  change: 3.8,
                },
                ST: {
                  visitor: 1785,
                  change: 5.7,
                },
                SA: {
                  visitor: 21120,
                  change: 3.95,
                },
                SN: {
                  visitor: 1038,
                  change: 8.73,
                },
                RS: {
                  visitor: 5899,
                  change: 8.71,
                },
                SC: {
                  visitor: 15686,
                  change: 2.97,
                },
                SL: {
                  visitor: 492,
                  change: -5.88,
                },
                SG: {
                  visitor: 57713,
                  change: 4.48,
                },
                SK: {
                  visitor: 17664,
                  change: 6.73,
                },
                SI: {
                  visitor: 23654,
                  change: 9.17,
                },
                SB: {
                  visitor: 2081,
                  change: 1.18,
                },
                SO: {
                  visitor: 486,
                  change: 6.38,
                },
                ZA: {
                  visitor: 6180,
                  change: 16.25,
                },
                KR: {
                  visitor: 29891,
                  change: 8.56,
                },
                SS: {
                  visitor: 228,
                  change: -18.73,
                },
                ES: {
                  visitor: 28359,
                  change: 6.31,
                },
                LK: {
                  visitor: 4085,
                  change: 6.95,
                },
                SD: {
                  visitor: 1428,
                  change: -1.91,
                },
                SR: {
                  visitor: 5746,
                  change: 0.76,
                },
                SZ: {
                  visitor: 3915,
                  change: 15.19,
                },
                SE: {
                  visitor: 53218,
                  change: 3.39,
                },
                CH: {
                  visitor: 80591,
                  change: 0.35,
                },
                TW: {
                  visitor: 24577,
                  change: 9.03,
                },
                TJ: {
                  visitor: 824,
                  change: 2.54,
                },
                TZ: {
                  visitor: 1034,
                  change: 5.58,
                },
                TH: {
                  visitor: 6591,
                  change: 10.39,
                },
                TL: {
                  visitor: 2104,
                  change: 1.19,
                },
                TG: {
                  visitor: 611,
                  change: 4.24,
                },
                TO: {
                  visitor: 4177,
                  change: 5.56,
                },
                TT: {
                  visitor: 15769,
                  change: -3.46,
                },
                TN: {
                  visitor: 3496,
                  change: -5.24,
                },
                TR: {
                  visitor: 10512,
                  change: -2.82,
                },
                TM: {
                  visitor: 6643,
                  change: 3.59,
                },
                TV: {
                  visitor: 3638,
                  change: 2.24,
                },
                UG: {
                  visitor: 699,
                  change: 1.04,
                },
                UA: {
                  visitor: 2583,
                  change: 17.46,
                },
                AE: {
                  visitor: 37226,
                  change: 5.21,
                },
                GB: {
                  visitor: 39735,
                  change: -1.96,
                },
                US: {
                  visitor: 59501,
                  change: 3.37,
                },
                UY: {
                  visitor: 16722,
                  change: 11.02,
                },
                UZ: {
                  visitor: 1491,
                  change: -28.81,
                },
                VU: {
                  visitor: 3094,
                  change: 6.51,
                },
                VE: {
                  visitor: 6684,
                  change: -12.16,
                },
                VN: {
                  visitor: 2354,
                  change: 8.37,
                },
                YE: {
                  visitor: 551,
                  change: -23.23,
                },
                ZM: {
                  visitor: 1480,
                  change: 18.11,
                },
                ZW: {
                  visitor: 1176,
                  change: 5.78,
                }
            }
        },
      },
    }
  }
}
</script>
