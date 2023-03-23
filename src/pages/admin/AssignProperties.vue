<template>
    <Layout>
      <Row utils="g-gs">
        <Col xxl="12">
          <CardBody class="flex-grow-0 py-2">
            <CardTitleGroup>
              <CardTitle tag="div">
                <h3 class="title mb-3">Assign Properties</h3>
              </CardTitle>
              <CardTools>
                <Button type="button" variant="primary" soft class="" style="float:right;" as="RouterLink" to="/admin/assign-property/create"><Icon icon="plus"/> Assign Property</Button> 
                <!-- <Button type="button" variant="danger" soft class="mx-1" style="float:right;" as="RouterLink" to="">Deactivate Selected Items</Button>  -->
              </CardTools>
            </CardTitleGroup>
          </CardBody>
        </Col>
      </Row>
      <Row utils="g-gs">
        <Col xxl="12">
          <Card full>
              <div class="alert alert-danger" v-if="showError">
                  {{ error }}
              </div>
              <div class="alert alert-success" v-if="showSuccess">
                  {{ success }}
              </div>

              <div class="table-responsive px-2">
                <DataTable id="datatable-init-2" class="table-border" v-if="properties !== null">
                  <TableHead>
                      <tr>
                          <th><OverlineTitle tag="span">Property</OverlineTitle></th>
                          <th><OverlineTitle tag="span">Managers</OverlineTitle></th>
                          <th><OverlineTitle tag="span"></OverlineTitle></th>
                      </tr>
                  </TableHead>
                  <TableBody>
                    <tr v-for="(property, index) in properties" v-bind:key="index">
                        <td>
                          {{ property.title }}
                        </td>
                        <td>
                          <select class="form-control">
                            <option v-for="(man, index) in property.managers" v-bind:key="index">{{ man.first_name }} {{ man.last_name }} ({{ man.email }})</option>
                          </select>
                        </td>
                        <td class="d-flex justify-content-end">
                            <!-- <router-link :to="{ name: 'EditProperty', params: { id: property.id } }">
                              <Button type="button" variant="primary" soft>Edit</Button> 
                            </router-link> -->
                            <Button type="submit" variant="danger" soft class="mx-2" :id="`del-`+property.id">Delete</Button> 
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
              <Button type="button" variant="secondary" soft dismiss="modal" id="close">Close</Button> 
              <Button type="submit" variant="danger" soft>Delete</Button> 
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
        showError: false,
        showSuccess: false,
        success: null,
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
        axios.get(this.baseURL+'/api/admin/assigned-properties', { headers })
        .then(response => {
          if(response.data.status)
          {
            this.properties = response.data.data;
            console.log(this.properties);
          }
        });
      },
      deleteRecord(e){
        
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
        }
        axios.post(this.baseURL+'/api/admin/assigned-properties/delete', data, { headers })
        .then(response => {
          if(response.data.status)
          {
            // this.properties = response.data.data;
            window.location.reload();
            this.showError = false;
            this.success = response.data.message;
            this.showSuccess = true;
            console.log(response);
          }
        });
      },
    }
  }
  </script>
  