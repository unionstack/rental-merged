<template>
    <Layout>
      <Row utils="g-gs">
        <Col xxl="12">
          <CardBody class="flex-grow-0 py-2">
            <CardTitleGroup>
              <CardTitle tag="div">
                <h3 class="title mb-3">Properties</h3>
              </CardTitle>
              <CardTools>
              <Button type="button" variant="info" soft class="mx-1" style="float:right;" as="RouterLink" to="/admin/property/create">
                <Icon icon="plus"/>  
                Create
              </Button> 
              </CardTools>
            </CardTitleGroup>
          </CardBody>
        </Col>
      </Row>
      <Row utils="g-gs">
        <Col xxl="12">
          <Card full>
              <div class="table-responsive">
                <DataTable id="datatable-init-2" class="table-border" v-if="properties !== null">
                  <TableHead>
                      <tr>
                          <th><OverlineTitle tag="span">Owner</OverlineTitle></th>
                          <th><OverlineTitle tag="span">Manager</OverlineTitle></th>
                          <th><OverlineTitle tag="span">Project</OverlineTitle></th>
                          <th><OverlineTitle tag="span">Bedrooms</OverlineTitle></th>
                          <th><OverlineTitle tag="span">Price</OverlineTitle></th>
                          <th><OverlineTitle tag="span"></OverlineTitle></th>
                      </tr>
                  </TableHead>
                  <TableBody>
                    <tr v-for="(property, index) in properties" v-bind:key="index">
                        <td>{{ property.owner_id }}</td>
                        <td>{{ property.property_manager_id }}</td>
                        <td>{{ property.project_id }}</td>
                        <td>{{ property.bedroom_id }}</td>
                        <td>{{ property.list_price }} {{ property.currency_id }}</td>
                        <td class="d-flex justify-content-end">
                            <router-link :to="{ name: 'EditProperty', params: { id: property.id } }">
                              <Button type="button" variant="primary" soft>Edit</Button> 
                            </router-link>
                            <Button type="button" variant="danger" soft class="mx-2"  :id="`del-`+property.id">Delete</Button> 
                        </td>
                    </tr>
                  </TableBody>
                </DataTable>
              </div>
          </Card>
        </Col>
      </Row>


    <!-- Delete Modal -->
    <ModalContainer animation="fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel">
      <ModalDialog>
          <form @submit.prevent="deleteRecord">
          <ModalContent>
            <ModalHeader>
                <h5 class="modal-title" id="exampleModalLabel">Delete</h5>
                <ButtonClose dismiss="modal"></ButtonClose>
            </ModalHeader>
            <ModalBody>
              Are you sure you want to delete this record?
            </ModalBody>
            <ModalFooter> 
              <input type="hidden" id="delete_id" value="" />
              <Button type="button" size="sm" variant="secondary" soft dismiss="modal" id="close">Close</Button> 
              <Button type="submit" size="sm" variant="danger" soft>Delete</Button> 
            </ModalFooter>
          </ModalContent>
          </form>
      </ModalDialog>
    </ModalContainer>

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
  import Button from '@/components/uielements/button/Button.vue';
  import CardTools from '@/components/uielements/card/CardTools.vue';
  import TableHead from '@/components/utilities/table/TableHead.vue';
  import TableBody from '@/components/utilities/table/TableBody.vue';
  import OverlineTitle from '@/components/misc/OverlineTitle.vue';
  import DataTable from '@/components/data-tables/SimpleDataTable.vue';
  import ModalContainer from '@/components/uielements/modal/ModalContainer.vue';
  import ModalDialog from '@/components/uielements/modal/ModalDialog.vue';
  import ModalContent from '@/components/uielements/modal/ModalContent.vue';
  import ModalHeader from '@/components/uielements/modal/ModalHeader.vue';
  import ModalBody from '@/components/uielements/modal/ModalBody.vue';
  import ModalFooter from '@/components/uielements/modal/ModalFooter.vue';
  import ButtonClose from '@/components/uielements/button-close/ButtonClose.vue';

  import axios from 'axios';
  import $ from 'jquery';
  import { Modal } from 'bootstrap';




  
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
      // Media,
      Button,
      CardTools,
      TableHead,
      TableBody,
      OverlineTitle,
      DataTable,
      ModalContainer,
      ModalDialog,
      ModalContent,
      ModalHeader,
      ModalBody,
      ModalFooter,
      ButtonClose
     
  },
    data(){
      return {
        properties: null,
        baseURL: process.env.VUE_APP_API_URL
      }
    },
    created(){
      this.fetchProperties();
    },
    mounted() {
        $('body').on('click', 'button', (event) => {
          const button = $(event.target);
          var idStr = button[0].id;
          var ex = idStr.split("-");
          var id = ex[1];

          if(ex[0] == 'del'){
            //delete modal
            $("#deleteModal #delete_id").val(id);
            const modal = new Modal("#deleteModal");
            modal.show();
          }
          else if(ex[0] == 'edit')
          {
            // edit modal

          }
          
        });
    },
    methods: {
      fetchProperties(){

        var token = localStorage.token;

        var headers = { 
            'Authorization': 'Bearer '+ JSON.parse(token), 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        axios.get(this.baseURL+'/api/admin/properties', { headers })
        .then(response => {
          if(response.data.status)
          {
            this.properties = response.data.data;
            // console.log(this.properties);
          }
        });
      },
      deleteRecord(e)
      {
        e.preventDefault();

        var token = localStorage.token;
        var id = $("#delete_id").val();

        var headers = { 
            'Authorization': 'Bearer '+ JSON.parse(token), 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        var data = {
          id: id
        };

        
        axios.post(this.baseURL+'/api/admin/property/delete', data, { headers })
        .then(response => {
          if(response.data.status)
          {
              window.location.reload();
          }
        });

      }
    }
  }
  </script>
  