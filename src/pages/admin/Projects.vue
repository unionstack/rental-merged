<template>
  <Layout>
    <Row utils="g-gs">
      <Col xxl="12">
        <CardBody class="flex-grow-0 py-2">
          <CardTitleGroup>
            <CardTitle tag="div">
              <h3 class="title mb-3">Projects</h3>
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
              <DataTable id="datatable-init-2" class="table-border" v-if="projects !== null">
                <TableHead>
                    <tr>
                        <th><OverlineTitle tag="span">Sr#</OverlineTitle></th>
                        <th><OverlineTitle tag="span">Name</OverlineTitle></th>
                        <th><OverlineTitle tag="span"></OverlineTitle></th>
                    </tr>
                </TableHead>
                <TableBody>
                  <tr v-for="(project, index) in projects" v-bind:key="index">
                      <td>{{ index+1 }}</td>
                      <td>{{ project.name }}</td>
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
import axios from 'axios';



export default {
  name: 'ManagerManagers',
  components: {
    Layout,
    Row,
    Col,
    Card,
    CardBody,
    CardTitleGroup,
    CardTitle,
    Button,
    CardTools,
    TableHead,
    TableBody,
    OverlineTitle,
    DataTable,
   
},
  data(){
    return {
      projects: null,
      baseURL: process.env.VUE_APP_API_URL
    }
  },
  created(){
    this.fetchprojects();
  },
  methods: {
    fetchprojects(){

      var token = localStorage.token;

      var headers = { 
          'Authorization': 'Bearer '+ JSON.parse(token), 
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
      axios.get(this.baseURL+'/api/admin/projects', { headers })
      .then(response => {
        if(response.data.status)
        {
          this.projects = response.data.data;
        }
      });
    }
  }
}
</script>
