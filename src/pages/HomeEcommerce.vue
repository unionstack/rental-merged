<template>
  <Layout>
    <Row utils="g-gs">
        <Col xl="4">
            <Card full>
                <CardBody>
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <CardTitle tag="div">
                                <h4 class="title mb-1">Congratulations Smith!</h4>
                                <p class="small">Best seller of the month</p>
                            </CardTitle>
                            <div class="my-3">
                                <div class="amount h2 text-primary">$42.5k</div>
                                <div class="smaller">You have done 69.5% more sales today.</div>
                            </div>
                            <Button href="#" size="sm" variant="primary">View Sales</Button>
                        </div>
                        <div class="d-none d-sm-block d-xl-none d-xxl-block me-md-5 me-xxl-0">
                            <Img src="/images/award/a.png" alt="" />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>

        <Col sm="6" xl="4">
            <Card full>
                <CardBody>
                    <CardTitle tag="div">
                        <h4 class="title">New Visitors</h4>
                    </CardTitle>
                    <div class="d-flex justify-content-between align-items-end gap g-2">
                        <div class="flex-grow-1">
                            <div class="smaller">
                                <strong class="text-base">48%</strong> new visitors 
                                <span class="d-block">this week.</span>
                            </div>
                            <div class="d-flex align-items-center mt-1">
                                <div class="amount h2 mb-0 fw-bold">16,328</div>
                                <div class="change up smaller ms-1">
                                    <Icon icon="trend-up"></Icon> 48
                                </div>
                            </div>
                        </div>
                        <div class="nk-chart-ecommerce-visitor">
                            <ChartBar id="visitorChart" :data="visitorChart"/>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>

        <Col sm="6" xl="4">
            <Card full>
                <CardBody>
                    <CardTitle tag="div">
                        <h4 class="title">Activity</h4>
                    </CardTitle>
                    <div class="d-flex justify-content-between align-items-end gap g-2">
                        <div class="flex-grow-1">
                            <div class="smaller">
                                <strong class="text-base">70%</strong> new activity
                                <span class="d-block">this week.</span>
                            </div>
                            <div class="d-flex align-items-center mt-1">
                                <div class="amount h2 mb-0">89,720</div>
                                <div class="change up smaller ms-1">
                                    <Icon icon="trend-up" /> 38
                                </div>
                            </div>
                        </div>
                        <div class="nk-chart-ecommerce-activity">
                            <ChartLine id="activity-chart" :data="activityChart"/>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>

        <Col xxl="8">
            <Card full>
                <Row utils="g-0 col-sep col-sep-md">
                    <Col md="8">
                        <CardBody>
                            <CardTitleGroup class="mb-4">
                                <CardTitle tag="div">
                                    <h4 class="title">Total Profit</h4>
                                </CardTitle>
                            </CardTitleGroup>
                            <div class="nk-chart-ecommerce-total-profit">
                                <ChartBar id="total-profit-chart" :data="totalProfitChart" />
                            </div>
                        </CardBody>
                    </Col>
                    <Col md="4">
                        <CardBody>
                            <div class="total-profit-data">
                                <div class="amount-wrap pb-4">
                                    <div class="amount h2 mb-0">$842.50k</div>
                                    <span class="smaller">Last month balance $428.20k</span>
                                </div>
                                <ul class="nk-data-list-group d-flex flex-column flex-sm-row flex-md-column gap g-4">
                                    <li class="nk-data-list-item">
                                        <Media middle shape="circle" variant="primary-soft">
                                            <Icon icon="coins" />
                                        </Media>
                                        <div class="amount-wrap">
                                            <div class="amount h3 mb-0">$68,740</div>
                                            <span class="smaller">Total Income</span>
                                        </div>
                                    </li>
                                    <li class="nk-data-list-item">
                                        <Media middle shape="circle" variant="success-soft">
                                            <Icon icon="trend-up" />
                                        </Media>
                                        <div class="amount-wrap">
                                            <div class="amount h3 mb-0">$38,643</div>
                                            <span class="smaller">Total Profit</span>
                                        </div>
                                    </li>
                                    <li class="nk-data-list-item">
                                        <Media middle shape="circle" variant="secondary-soft">
                                            <Icon icon="coin-alt" />
                                        </Media>
                                        <div class="amount-wrap">
                                            <div class="amount h3 mb-0">$12,836</div>
                                            <span class="smaller">Total Expense</span>
                                        </div>
                                    </li>
                                </ul>
                                <div class="pt-5">
                                    <Button href="#" variant="primary">View Report</Button>
                                </div>
                            </div>
                        </CardBody>
                    </Col>
                </Row>
            </Card>
        </Col>

        <Col xxl="4">
            <Row utils="g-gs">
                <Col sm="6" xl="3" xxl="6">
                    <Card full>
                        <CardBody>
                            <Media middle shape="circle" variant="warning" class="mb-3">
                                <Icon icon="trend-up" />
                            </Media>
                            <h5>Transactions</h5>
                            <div class="d-flex align-items-center mb-3">
                                <div class="amount h4 mb-0">$14.3k</div>
                                <div class="change up smaller ms-1">
                                    <Icon icon="plus" /> 12%
                                </div>
                            </div>
                            <p class="small">Daily Transactions</p>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="6" xl="3" xxl="6">
                    <Card full>
                        <CardBody>
                            <Media middle shape="circle" variant="success" class="mb-3">
                                <Icon icon="sign-mxn" />
                            </Media>
                            <h5>Revenue</h5>
                            <div class="d-flex align-items-center mb-3">
                                <div class="amount h4 mb-0">$37.2k</div>
                                <div class="change up smaller ms-1">
                                    <Icon icon="plus" /> 18%
                                </div>
                            </div>
                            <p class="small">Revenue Increase</p>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="6" xl="3" xxl="6">
                    <Card full>
                        <CardBody class="text-center">
                            <div class="amount h4 mb-3">185k</div>
                            <Pureknob id="total-sales" class="nk-chart-ecommerce-knob" :data="totalSales"/>
                            <p class="small mt-3">Total Sales</p>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="6" xl="3" xxl="6">
                    <Card full>
                        <CardBody class="text-center">
                            <div class="amount h4 mb-0">$64.35k</div>
                            <div class="nk-chart-ecommerce-total-revenue">
                                <ChartLine id="total-revenue-chart" :data="totalRevenueChart" />
                            </div>
                            <p class="small mt-3">Total Revenue</p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Col>

        <Col xxl="6">
            <Card full>
                <CardBody class="flex-grow-0 py-2">
                    <CardTitleGroup>
                        <CardTitle tag="div">
                            <h4 class="title">Top Selling Products</h4>
                        </CardTitle>
                        <CardTools>
                            <Dropdown>
                                <Button zoom size="sm" class="btn-icon me-n1" data-bs-toggle="dropdown">
                                    <Icon icon="more-v" />
                                </Button>
                                <DropdownMenu size="sm" alignment="end">
                                    <DropdownItem>
                                        <DropdownHeader class="pt-2 pb-0">
                                            <h6 class="mb-0">Options</h6>
                                        </DropdownHeader>
                                    </DropdownItem>
                                    <DropdownItem divider></DropdownItem>
                                    <DropdownItem>
                                        <DropdownLink href="#">Low to high</DropdownLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <DropdownLink href="#">High to low</DropdownLink>
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
                                    <OverlineTitle tag="span">products</OverlineTitle>
                                </th>
                                <th class="tb-col tb-col-end tb-col-sm">
                                    <OverlineTitle tag="span">price</OverlineTitle>
                                </th>
                                <th class="tb-col tb-col-end tb-col-sm">
                                    <OverlineTitle tag="span">orders</OverlineTitle>
                                </th>
                                <th class="tb-col tb-col-end tb-col-sm">
                                    <OverlineTitle tag="span">stock</OverlineTitle>
                                </th>
                                <th class="tb-col tb-col-end">
                                    <OverlineTitle tag="span">amount</OverlineTitle>
                                </th>
                            </tr>
                        </TableHead>
                        <TableBody>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle size="md" shape="circle" class="flex-shrink-0">
                                            <Img src="/images/product/a.jpg" alt=""/>
                                        </Media>
                                        <MediaText>
                                            <span class="title">Nike v22 Running</span>
                                            <span class="text smaller">28 Jul 2022</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end tb-col-sm">
                                    <span class="small">$130.20</span>
                                </td>
                                <td class="tb-col tb-col-end tb-col-sm">
                                    <span class="small">38</span>
                                </td>
                                <td class="tb-col tb-col-end tb-col-sm">
                                    <span class="small">436</span>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">$14,945</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle size="md" shape="circle" class="flex-shrink-0">
                                            <Img src="/images/product/b.jpg" alt=""/>
                                        </Media>
                                        <MediaText>
                                            <span class="title">Business Kit (Mug)</span>
                                            <span class="text smaller">16 Oct 2022</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end tb-col-sm">
                                    <span class="small">$18.35</span>
                                </td>
                                <td class="tb-col tb-col-end tb-col-sm">
                                    <span class="small">12</span>
                                </td>
                                <td class="tb-col tb-col-end tb-col-sm">
                                    <Badge variant="danger-soft">Out of Stock</Badge>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">$7,458</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle size="md" shape="circle" class="flex-shrink-0">
                                            <Img src="/images/product/c.jpg" alt=""/>
                                        </Media>
                                        <MediaText>
                                            <span class="title">Borosil Paper Cup</span>
                                            <span class="text smaller">21 Feb 2022</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end tb-col-sm">
                                    <span class="small">$328.00</span>
                                </td>
                                <td class="tb-col tb-col-end tb-col-sm">
                                    <span class="small">120</span>
                                </td>
                                <td class="tb-col tb-col-end tb-col-sm">
                                    <span class="small">867</span>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">$7,806</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle size="md" shape="circle" class="flex-shrink-0">
                                            <Img src="/images/product/d.jpg" alt=""/>
                                        </Media>
                                        <MediaText>
                                            <span class="title">Mountain Trip Kit</span>
                                            <span class="text smaller">14 Jun 2022</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end tb-col-sm">
                                    <span class="small">$130.20</span>
                                </td>
                                <td class="tb-col tb-col-end tb-col-sm">
                                    <span class="small">184</span>
                                </td>
                                <td class="tb-col tb-col-end tb-col-sm">
                                    <span class="small">226</span>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">$17,945</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle size="md" shape="circle" class="flex-shrink-0">
                                            <Img src="/images/product/e.jpg" alt=""/>
                                        </Media>
                                        <MediaText>
                                            <span class="title">One Seater Sofa</span>
                                            <span class="text smaller">28 Jul 2022</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end tb-col-sm">
                                    <span class="small">$130.20</span>
                                </td>
                                <td class="tb-col tb-col-end tb-col-sm">
                                    <span class="small">50</span>
                                </td>
                                <td class="tb-col tb-col-end tb-col-sm">
                                    <Badge variant="warning-soft">Low Stock</Badge>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">$14,945</span>
                                </td>
                            </tr>
                        </TableBody>
                    </Table>
                </div>
            </Card>
        </Col>

        <Col xxl="6">
            <Card full>
                <CardBody>
                    <CardTitleGroup>
                        <CardTitle tag="div">
                            <h4 class="title">Sales Analytics</h4>
                        </CardTitle>
                        <CardTools>
                            <Dropdown>
                                <Button zoom size="sm" class="btn-icon me-n1" data-bs-toggle="dropdown">
                                    <Icon icon="more-v" />
                                </Button>
                                <DropdownMenu size="sm" alignment="end">
                                    <DropdownItem>
                                        <DropdownHeader class="pt-2 pb-0">
                                            <h6 class="mb-0">Options</h6>
                                        </DropdownHeader>
                                    </DropdownItem>
                                    <DropdownItem divider></DropdownItem>
                                    <DropdownItem>
                                        <DropdownLink href="#">7 days</DropdownLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <DropdownLink href="#">15 days</DropdownLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <DropdownLink href="#">30 days</DropdownLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </CardTools>
                    </CardTitleGroup>
                    <div class="nk-chart-ecommerce-sales-analytics mt-3">
                        <ChartLine id="sales-analytics-chart" :data="salesAnalyticsChart"></ChartLine>
                    </div>
                    <ChartLegendGroup class="justify-content-center gap gx-4 pt-3">
                        <div class="gap-col">
                            <ChartLegend small dot="warning">
                                <div class="title">Total Sales</div>
                            </ChartLegend>
                        </div>
                        <div class="gap-col">
                            <ChartLegend small dot="danger">
                                <div class="title">Total Orders</div>
                            </ChartLegend>
                        </div>  
                    </ChartLegendGroup>
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
import Button from '@/components/uielements/button/Button.vue';
import Img from '@/components/img/Img.vue';
import ChartBar from '@/components/chart/ChartBar.vue';
import ChartLine from '@/components/chart/ChartLine.vue';
import Icon from '@/components/icon/Icon.vue';
import hexRGB from '@/utilities/hexRGB';
import Media from '@/components/media/Media.vue';
import Pureknob from '@/components/knob/Pureknob.vue';
import CardTools from '@/components/uielements/card/CardTools.vue';
import Dropdown from '@/components/uielements/dropdown/Dropdown.vue';
import DropdownMenu from '@/components/uielements/dropdown/DropdownMenu.vue';
import DropdownItem from '@/components/uielements/dropdown/DropdownItem.vue';
import DropdownLink from '@/components/uielements/dropdown/DropdownLink.vue';
import DropdownHeader from '@/components/uielements/dropdown/DropdownHeader.vue';
import Table from '@/components/utilities/table/Table.vue';
import TableHead from '@/components/utilities/table/TableHead.vue';
import TableBody from '@/components/utilities/table/TableBody.vue';
import OverlineTitle from '@/components/misc/OverlineTitle.vue';
import MediaGroup from '@/components/media/MediaGroup.vue';
import MediaText from '@/components/media/MediaText.vue';
import Badge from '@/components/uielements/badge/Badge.vue';
import ChartLegendGroup from '@/components/chart/ChartLegendGroup.vue';
import ChartLegend from '@/components/chart/ChartLegend.vue';

export default {
  name: 'HomePageEcommerce',
  components: {
        Layout,
        Row,
        Col,
        Card,
        CardBody,
        CardTitleGroup,
        CardTitle,
        Button,
        Img,
        ChartBar,
        ChartLine,
        Icon,
        Media,
        Pureknob,
        CardTools,
        Dropdown,
        DropdownMenu,
        DropdownItem,
        DropdownLink,
        DropdownHeader,
        Table,
        TableHead,
        TableBody,
        OverlineTitle,
        MediaGroup,
        MediaText,
        Badge,
        ChartLegendGroup,
        ChartLegend
    },
  data(){
    return {
        visitorChart: {
            labels : ["M", "T", "W", "T", "F", "S", "S"],
            yAxis: false,
            xGridColor: this.$Colors.white,
            xGridBorderColor: this.$Colors.white,
            barThickness: 10,
            datasets: [
                {
                    label: "Visitors",
                    borderColor: 'transparent',
                    backgroundColor: hexRGB(this.$Colors.info,.3),
                    hoverBackgroundColor: this.$Colors.info,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderSkipped: false,
                    data: [600, 680, 470, 770, 570, 810, 670]
                }
            ]
        },
        activityChart: {
            labels : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            xAxis: false,
            yAxis: false,
            datasets: [
                {
                    tension: .4,
                    label: "Activity",
                    borderColor: this.$Colors.success,
                    pointBackgroundColor: this.$Colors.success,
                    backgroundGradient: this.$Colors.success,
                    borderWidth: 2,
                    pointBorderColor: 'transparent',
                    pointHoverBackgroundColor: this.$Colors.success,
                    data: [120, 160, 95, 105, 98, 99, 167, 140, 155, 267, 237, 250]
                }
            ]
        },
        totalProfitChart: {
            labels : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            stacked: true,
            ticksValue: 'k',
            borderDash: [8, 4],
            xGridColor: this.$Colors.white,
            xGridBorderColor: this.$Colors.white,
            yGridBorderColor: this.$Colors.white,
            maxTicksLimit: 20,
            barThickness: 11,
            datasets: [
                {
                    borderRadius: {topLeft: 50, topRight: 50, bottomLeft: 50, bottomRight: 50},
                    backgroundColor: this.$Colors.primary,
                    label: "Total Income",
                    borderSkipped: false,
                    data: [120, 160, 95, 105, 98, 99, 167, 140, 155, 267, 237, 250]
                },
                {
                    borderRadius: {topLeft: 50, topRight: 50, bottomLeft: 50, bottomRight: 50},
                    backgroundColor: this.$Colors.success,
                    label: "Total Profit",
                    borderSkipped: false,
                    data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95]
                },
                {
                    borderRadius: {topLeft: 50, topRight: 50, bottomLeft: 50, bottomRight: 50},
                    backgroundColor: this.$Colors.gray300,
                    label: "Total Expense",
                    borderSkipped: false,
                    data: [75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125]
                }
            ]
        },
        totalSales: {
            size: 120,
            value: 65,
            angleOffset: -0.5,
            angleStart: 0.5,
            angleEnd: 0.5,
            colorFg: this.$Colors.info
        },
        totalRevenueChart: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            yAxis: false,
            xAxis: false,
            datasets: [
                {
                    tension: .4,
                    label: "Total",
                    borderColor: this.$Colors.primary,
                    backgroundColor: 'transparent',
                    borderWidth: 4,
                    pointBorderColor: 'transparent',
                    pointBackgroundColor: 'transparent',
                    pointHoverBackgroundColor: this.$Colors.primary,
                    borderCapStyle: 'round',
                    data: [12, 40, 13, 130, 70, 210]
                }
            ]
        },
        salesAnalyticsChart: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            borderDash: [8, 4],
            maxTicksLimit: 10,
            ticksValue: 'k',
            xAxis: false,
            xGridBorderColor: this.$Colors.white,
            yGridBorderColor: this.$Colors.white,
            datasets: [
                {
                    tension: .4,
                    borderWidth: 3,
                    borderColor: this.$Colors.yellow,
                    backgroundGradient: this.$Colors.yellow,
                    pointBorderColor: 'transparent',
                    pointBackgroundColor: 'transparent',
                    pointHoverBackgroundColor: this.$Colors.yellow,
                    label: "Total Sales",
                    fill: true,
                    data: [40, 60, 30, 65, 60, 95, 90, 100, 96, 120, 105, 134]
                },
                {
                    tension: .4,
                    borderWidth: 2,
                    pointBorderColor: 'transparent',
                    pointBackgroundColor: 'transparent',
                    borderColor: this.$Colors.danger,
                    pointHoverBackgroundColor: this.$Colors.danger,
                    label: "Total Orders",
                    borderDash: [8,4],
                    data: [70, 44, 49, 78, 39, 49, 39, 38, 59, 80, 56, 101]
                },
            ]
        }
    }
  }
}
</script>
