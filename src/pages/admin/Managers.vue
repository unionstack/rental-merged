<template>
    <Layout>
      <Row utils="g-gs">
        <Col xxl="12">
          <CardBody class="flex-grow-0 py-2">
            <CardTitleGroup>
              <CardTitle tag="div">
                <h3 class="title mb-3">Managers</h3>
              </CardTitle>
              <CardTools>
                <!-- <Button type="button" variant="danger" soft class="" style="float:right;" as="RouterLink" to="">Delete Multiple Addresses</Button>  -->
                <!-- <Button type="button" variant="danger" soft class="mx-1" style="float:right;" as="RouterLink" to="">Deactivate Selected Items</Button>  -->
              </CardTools>
            </CardTitleGroup>
          </CardBody>
        </Col>
      </Row>
      <Row utils="g-gs">
        <Col xxl="12">
          <Card full>
              <div class="table-responsive">
                <DataTable id="datatable-init-2" class="table-border">
                  <TableHead>
                      <tr>
                          <th><OverlineTitle tag="span">Name</OverlineTitle></th>
                          <th><OverlineTitle tag="span">Email</OverlineTitle></th>
                          <th><OverlineTitle tag="span">Phone</OverlineTitle></th>
                          <th><OverlineTitle tag="span"></OverlineTitle></th>
                      </tr>
                  </TableHead>
                  <TableBody>
                    <tr>
                        <td>Test Manager</td>
                        <td>manager@gmail.com</td>
                        <td>123456789</td>
                        <td class="d-flex justify-content-end">
                            <Button type="button" variant="primary" soft class="" as="RouterLink" to="">Edit</Button> 
                            <Button type="button" variant="danger" soft class="mx-2"  as="RouterLink" to="">Delete</Button> 
                        </td>
                    </tr>
                  </TableBody>
                </DataTable>
              </div>
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
//   import Icon from '@/components/icon/Icon.vue';
  import Button from '@/components/uielements/button/Button.vue';
  import CardTools from '@/components/uielements/card/CardTools.vue';
  import TableHead from '@/components/utilities/table/TableHead.vue';
  import TableBody from '@/components/utilities/table/TableBody.vue';
  import OverlineTitle from '@/components/misc/OverlineTitle.vue';
  import DataTable from '@/components/data-tables/SimpleDataTable.vue';



  
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
    //   Icon,
      // Media,
      Button,
      CardTools,
      TableHead,
      TableBody,
      OverlineTitle,
      DataTable,
     
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
      }
    }
  }
  </script>
  