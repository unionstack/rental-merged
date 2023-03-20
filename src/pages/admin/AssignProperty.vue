<template>
  <Layout>
    <form @submit.prevent="create">
        <Row utils="g-gs">
            <Col xxl="12">
                <CardBody class="flex-grow-0 py-2">
                <CardTitleGroup>
                    <CardTitle tag="div">
                    <h3 class="title">Assign Property</h3>
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
                                    <label class="form-label">Property</label>
                                    <div class="form-control-wrap">
                                        <ChoiceSelect size="sm" id="properties" :cross="false" @change="updateProperty" v-if="properties !== null">
                                            <ChoiceSelectOption selected disabled>Search for Property</ChoiceSelectOption>
                                            <ChoiceSelectOption :value="property.id" v-for="(property, index) in properties" v-bind:key="index">{{ property.owner_id }} - {{ property.bedroom_id }} - {{ property.list_price }}  {{ property.currency_id }}</ChoiceSelectOption>
                                        </ChoiceSelect>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="form-label">Property Manager</label>
                                    <div class="form-control-wrap">
                                        <select multiple="true" v-model="form.managers" class="form-control form-select" v-if="managers !== null">
                                            <option :value="manager.id" v-for="(manager, index) in managers" v-bind:key="index">{{ manager.first_name }} {{ manager.last_name }}</option>
                                        </select>
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
import ChoiceSelect from '@/components/choices/ChoiceSelect.vue';
import ChoiceSelectOption from '@/components/choices/ChoiceSelectOption.vue';
// import FormInput from '@/components/forms/input/FormInput.vue';
import axios from 'axios';
// import Multiselect from 'vue-multiselect'

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
    ChoiceSelect,
    ChoiceSelectOption,
    // FormInput,
    // Multiselect
  },
  data(){
    return {
    //   loading:true,
      showError: false,
      showSuccess: false,
      error: '',
      success:'',
      form: {
        property: '',
        managers: []
      },
      properties: null,
      managers: null,
      baseURL: process.env.VUE_APP_API_URL,
    }
  },
  created(){
    this.fetchProperties();
    this.fetchManagers();
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
    fetchManagers(){

        var token = localStorage.token;

        var headers = { 
            'Authorization': 'Bearer '+ JSON.parse(token), 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        axios.get(this.baseURL+'/api/admin/managers', { headers })
        .then(response => {
        if(response.data.status)
        {
            this.managers = response.data.data;
        }
        });
    },
    create(e){
      e.preventDefault();

      this.showError = false;
      this.showSuccess = false;

      var token = localStorage.token;

      var headers = { 
          'Authorization': 'Bearer '+ JSON.parse(token), 
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
      axios.post(this.baseURL+'/api/admin/assign/property', this.form, { headers })
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
        this.form.property= '',
        this.form.managers= ''
      })
      .catch(function () {
        // console.log(e);
      });
      
    },
    updateProperty(e)
    {
      this.form.property = e.target.value;
    },
    // updateManager(e)
    // {
    //     console.log(e.target.value);
    //     this.form.manager = e.target.value;
    //     this.form.values = e.target.value;
    // }
  }
}
</script>
