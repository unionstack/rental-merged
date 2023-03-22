<template>
  <Layout>
    <form @submit.prevent="update">
      <Row utils="g-gs">
        <Col xxl="12">
          <CardBody class="flex-grow-0 py-2">
            <CardTitleGroup>
              <CardTitle tag="div">
                <h3 class="title">Edit Manager</h3>
              </CardTitle>
              <CardTools>
                  <Button variant="primary" soft class="mx-1" type="submit">Save</Button>
              </CardTools>
            </CardTitleGroup>
          </CardBody>
        </Col>
      </Row>
      <Row utils="g-gs">
        <Col xxl="12">
          <Card class="mb-4">
              <CardBody>
                  <CardTitleGroup>
                      <CardTitle tag="div">
                        <h4 class="title mb-3"></h4>
                      </CardTitle>
                  </CardTitleGroup>
                  <div class="alert alert-danger" v-if="showError">
                      {{ error }}
                  </div>
                  <div class="alert alert-success" v-if="showSuccess">
                      {{ success }}
                  </div>
                  <div class="row g-3 gx-gs mb-4">
                    <div class="col-md-6">
                      <div class="form-group">
                          <label  class="form-label">First Name</label>
                          <div class="form-control-wrap">
                              <FormInput type="text" v-model="form.first_name" required placeholder="Enter First Name"/>
                              <p class="formError" v-if="firstNameError">*{{ firstNameError }}</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="form-group">
                          <label  class="form-label">Last Name</label>
                          <div class="form-control-wrap">
                              <FormInput type="text" v-model="form.last_name" required placeholder="Enter Last Name"/>
                              <p class="formError" v-if="lastNameError">*{{ lastNameError }}</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="form-group">
                          <label  class="form-label">Email</label>
                          <div class="form-control-wrap">
                              <FormInput type="email" v-model="form.email" required placeholder="Enter Email"/>
                              <p class="formError" v-if="emailError">*{{ emailError }}</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="form-group">
                          <label  class="form-label">Phone</label>
                          <div class="form-control-wrap">
                              <FormInput type="text" v-model="form.phone" placeholder="Enter Phone"/>
                              <p class="formError" v-if="phoneError">*{{ phoneError }}</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-label">Property</label>
                        <div class="form-control-wrap">
                            <ChoiceSelect size="sm" id="properties" :cross="false" @change="updateProperty" v-if="properties !== null">
                                <ChoiceSelectOption selected disabled>Search for Property</ChoiceSelectOption>
                                <ChoiceSelectOption :value="property.id" v-for="(property, index) in properties" v-bind:key="index">{{ property.project_id}} - {{ property.bedroom_id }} - {{ property.list_price }}  {{ property.currency_id }}</ChoiceSelectOption>
                            </ChoiceSelect>
                        </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-label">Active</label>
                        <div class="form-control-wrap">
                            <ChoiceSelect size="sm" id="active" :cross="false" @change="updateActive">
                                <ChoiceSelectOption selected disabled>Select</ChoiceSelectOption>
                                <ChoiceSelectOption :value="Yes">Yes</ChoiceSelectOption>
                                <ChoiceSelectOption :value="No">No</ChoiceSelectOption>
                            </ChoiceSelect>
                        </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                        <label  class="form-label">Contract Start</label>
                        <div class="form-control-wrap">
                          <FormInput type="date" v-model="form.contract_start" required/>
                        </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                        <label  class="form-label">Contract End</label>
                        <div class="form-control-wrap">
                          <FormInput type="date" v-model="form.contract_end" required />
                        </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-label">Period(Months)</label>
                        <div class="form-control-wrap">
                            <ChoiceSelect size="sm" id="period" :cross="false" @change="updatePeriod">
                                <ChoiceSelectOption selected disabled>Select Period(Months)</ChoiceSelectOption>
                                <ChoiceSelectOption :value="1">1</ChoiceSelectOption>
                                <ChoiceSelectOption :value="2">2</ChoiceSelectOption>
                                <ChoiceSelectOption :value="3">3</ChoiceSelectOption>
                                <ChoiceSelectOption :value="4">4</ChoiceSelectOption>
                                <ChoiceSelectOption :value="5">5</ChoiceSelectOption>
                                <ChoiceSelectOption :value="6">6</ChoiceSelectOption>
                                <ChoiceSelectOption :value="7">7</ChoiceSelectOption>
                                <ChoiceSelectOption :value="8">8</ChoiceSelectOption>
                                <ChoiceSelectOption :value="9">9</ChoiceSelectOption>
                                <ChoiceSelectOption :value="10">10</ChoiceSelectOption>
                                <ChoiceSelectOption :value="11">11</ChoiceSelectOption>
                                <ChoiceSelectOption :value="12">12</ChoiceSelectOption>
                            </ChoiceSelect>
                        </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                        <label  class="form-label">Real Contract End</label>
                        <div class="form-control-wrap">
                          <FormInput type="date" v-model="form.real_contract_end" required />
                        </div>
                    </div>
                  </div>
                  </div>
              </CardBody>
          </Card>
        </Col>
      </Row>
    </form>
  </Layout>
</template>
<style>
.formError{
  font-size: 14px;
  color: red;
}   
</style>
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
import FormInput from '@/components/forms/input/FormInput.vue';
import ChoiceSelect from '@/components/choices/ChoiceSelect.vue';
import ChoiceSelectOption from '@/components/choices/ChoiceSelectOption.vue';
import axios from 'axios';

export default {
  name: 'AccountOrder',
  components: {
    Layout,
    Row,
    Col,
    Card,
    CardBody,
    CardTitleGroup,
    CardTitle,
    Button,
    FormInput,
    ChoiceSelect,
    ChoiceSelectOption,
  },
  data(){
    return {
        id: this.$route.params.id,
        showError: false,
        showSuccess: false,
        error: '',
        success:'',
        form: {
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          property: '',
          active: '',
          contract_start: '',
          contract_end: '',
          period: '',
          real_contract_end: ''
        },
        baseURL: process.env.VUE_APP_API_URL,
        tenant_data: '',
        properties:null
    }
  },
  created(){
    this.fetchTenant();
    this.fetchProperties();
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
    fetchTenant(){

      var token = localStorage.token;

      var headers = { 
          'Authorization': 'Bearer '+ JSON.parse(token), 
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
      // console.log(this.id);
      axios.get(this.baseURL+'/api/admin/'+this.id+'/edit-tenant/', { headers })
      .then(response => {
        if(response.data.status)
        {
          this.tenant_data = response.data.data;
          this.form.first_name = this.tenant_data[0].first_name;
          this.form.last_name = this.tenant_data[0].last_name;
          this.form.email = this.tenant_data[0].email;
          this.form.phone = this.tenant_data[0].phone;
          this.form.property = this.tenant_data[0].property_id;
          this.form.active = this.tenant_data[0].active;
          this.form.contract_start = this.tenant_data[0].contract_start;
          this.form.contract_end = this.tenant_data[0].contract_end;
          this.form.period = this.tenant_data[0].period;
          this.form.real_contract_end = this.tenant_data[0].real_contract_end;
        }
      });
    },
    update(e){
      e.preventDefault();

      this.showError = false;
      this.showSuccess = false;

      var token = localStorage.token;

      var headers = { 
          'Authorization': 'Bearer '+ JSON.parse(token), 
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
      axios.post(this.baseURL+'/api/admin/tenants/'+this.id+'/update', this.form, { headers })
      .then(response => {
        if(!response.data.status)
        {
          if(response.data.errors)
          {
            this.error = response.data.errors;
          }else{
            this.error = response.data.message;
          }

          this.showError = true;
          return;
        }

        this.showError = false;
        this.success = response.data.message;
        this.showSuccess = true;
        this.fetchManager();
      })
      .catch(function () {
        // console.log(e);
      });
      
    },
    updateProperty(e)
    {
      this.form.property = e.target.value;
    },
    updateActive(e){
      this.form.active = e.target.value;
    },
    updatePeriod(e){
      this.form.period = e.target.value;
    }
  }
}
</script>
