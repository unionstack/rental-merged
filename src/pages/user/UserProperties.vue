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
              <div class="table-responsive px-2">
                <DataTable id="datatable-init-2" class="table-border" v-if="properties !== null">
                  <TableHead>
                      <tr>
                          <!-- <th><OverlineTitle tag="span">Owner</OverlineTitle></th> -->
                          <th><OverlineTitle tag="span">Project</OverlineTitle></th>
                          <th><OverlineTitle tag="span">Bedrooms</OverlineTitle></th>
                          <th><OverlineTitle tag="span">Area</OverlineTitle></th>
                          <th><OverlineTitle tag="span">Price</OverlineTitle></th>
                          <th><OverlineTitle tag="span"></OverlineTitle></th>
                      </tr>
                  </TableHead>
                  <TableBody>
                    <tr v-for="(property, index) in properties" v-bind:key="index">
                      <td>{{ property.project }}</td>
                      <td>{{ property.bedroom }}</td>
                      <td>{{ property.area }}</td>
                      <td>{{ property.list_price }} {{ property.currency }}</td>
                      <td class="d-flex justify-content-end">
                          <Button type="button" :id="`view-`+property.id+`-`+index" variant="info" soft class="mx-2">View Details</Button>
                          <router-link :to="{ name: 'UserEditProperty', params: { id: property.id } }">
                            <Button type="button" variant="primary" soft>Edit</Button> 
                          </router-link> 
                      </td>
                  </tr>
                  </TableBody>
                </DataTable>
              </div>
          </Card>
        </Col>
      </Row>
      <ModalContainer animation="fade" id="PropertyDetailsModal" tabindex="-1" aria-labelledby="exampleModalLabel">
        <ModalDialog size="lg" position="top">
            <ModalContent>
              <ModalHeader>
                  <h5 class="modal-title" id="exampleModalLabel">Property Details</h5>
                  <ButtonClose dismiss="modal"></ButtonClose>
              </ModalHeader>
              <ModalBody>
                <div class="row" v-if="pro_d !== null">
                  <div class="col-md-6 mb-3">
                    <div class="form-group d-flex justify-content-start align-items-center">
                      <div class="pe-2">
                        <label for=""><b>Project: </b></label>
                      </div>
                      <div>
                        <p class="mb-0" style="font-size:13px;">{{pro_d.project}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="form-group d-flex justify-content-start align-items-center">
                      <div class="pe-2">
                        <label for=""><b>Bedrooms: </b></label>
                      </div>
                      <div>
                        <p class="mb-0" style="font-size:13px;">{{pro_d.bedroom}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="form-group d-flex justify-content-start align-items-center">
                      <div class="pe-2">
                        <label for=""><b>Address: </b></label>
                      </div>
                      <div>
                        <p class="mb-0" style="font-size:13px;">{{pro_d.address}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="form-group d-flex justify-content-start align-items-center">
                      <div class="pe-2">
                        <label for=""><b>Country: </b></label>
                      </div>
                      <div>
                        <p class="mb-0" style="font-size:13px;">{{pro_d.country}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="form-group d-flex justify-content-start align-items-center">
                      <div class="pe-2">
                        <label for=""><b>County: </b></label>
                      </div>
                      <div>
                        <p class="mb-0" style="font-size:13px;">{{pro_d.county}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="form-group d-flex justify-content-start align-items-center">
                      <div class="pe-2">
                        <label for=""><b>Zip Code: </b></label>
                      </div>
                      <div>
                        <p class="mb-0" style="font-size:13px;">{{pro_d.zip_code}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="form-group d-flex justify-content-start align-items-center">
                      <div class="pe-2">
                        <label for=""><b>Type: </b></label>
                      </div>
                      <div>
                        <p class="mb-0" style="font-size:13px;">{{pro_d.type}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="form-group d-flex justify-content-start align-items-center">
                      <div class="pe-2">
                        <label for=""><b>Area: </b></label>
                      </div>
                      <div>
                        <p class="mb-0" style="font-size:13px;">{{pro_d.area}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="form-group d-flex justify-content-start align-items-center">
                      <div class="pe-2">
                        <label for=""><b>Building: </b></label>
                      </div>
                      <div>
                        <p class="mb-0" style="font-size:13px;">{{pro_d.building_tex}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="form-group d-flex justify-content-start align-items-center">
                      <div class="pe-2">
                        <label for=""><b>Floor: </b></label>
                      </div>
                      <div>
                        <p class="mb-0" style="font-size:13px;">{{pro_d.floor}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="form-group d-flex justify-content-start align-items-center">
                      <div class="pe-2">
                        <label for=""><b>Estimated Rent: </b></label>
                      </div>
                      <div>
                        <p class="mb-0" style="font-size:13px;">{{pro_d.estimated_rent}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="form-group d-flex justify-content-start align-items-center">
                      <div class="pe-2">
                        <label for=""><b>Currency: </b></label>
                      </div>
                      <div>
                        <p class="mb-0" style="font-size:13px;">{{pro_d.currency}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>
            </ModalContent>
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
      ButtonClose
     
  },
  data(){
      return {
        properties: null,
        baseURL: process.env.VUE_APP_API_URL,
        // owners:null,
        pro_d: null
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
        // var id = ex[1];
        var index = ex[2];

        if(ex[0] == 'view'){
          this.pro_d = this.properties[index];
          console.log(this.pro_d);
          const modal = new Modal("#PropertyDetailsModal");
          modal.show();
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
        axios.get(this.baseURL+'/api/user/properties', { headers })
        .then(response => {
          if(response.data.status)
          {
            // console.log(response.data.data);
            this.properties = response.data.data;
            // this.owners = this.properties.owner;
            // console.log(response.data.data);
          }
        });
      }
    }
  }
  </script>
  