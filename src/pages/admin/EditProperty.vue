<template>
  <Layout>
    <form @submit.prevent="update">
        <Row utils="g-gs">
            <Col xxl="12">
                <CardBody class="flex-grow-0 py-2">
                <CardTitleGroup>
                    <CardTitle tag="div">
                    <h3 class="title">Edit Property</h3>
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
                            <div class="col-md-6" v-if="selectLoaded">
                                <div class="form-group">
                                    <label class="form-label">Owner <span class="text-danger">*</span></label>
                                    <div class="form-control-wrap">
                                        <ChoiceSelect multiple size="sm" id="owner" :cross="false" @change="updateOwner" v-if="owners !== null">
                                            <ChoiceSelectOption :value="owner.id" v-for="owner in owners" :selected="owner.isSelected" v-bind:key="owner.id" >{{ owner.first_name }} {{ owner.last_name }} ({{ owner.email }})</ChoiceSelectOption>
                                        </ChoiceSelect>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6" v-if="selectLoaded">
                                <div class="form-group">
                                    <label class="form-label">Property Manager <span class="text-danger">*</span></label>
                                    <div class="form-control-wrap">
                                        <ChoiceSelect multiple size="sm" id="property_managers" :cross="false" @change="updateManager" v-if="managers !== null">
                                            <ChoiceSelectOption disabled>Search for Property Manager</ChoiceSelectOption>
                                            <ChoiceSelectOption :value="manager.id" v-for="(manager, index) in managers" :selected="manager.isSelected" v-bind:key="index">{{ manager.first_name }} {{ manager.last_name }} ({{ manager.email }})</ChoiceSelectOption>
                                        </ChoiceSelect>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6" v-if="selectLoaded">
                                <div class="form-group">
                                    <label class="form-label">Bedrooms <span class="text-danger">*</span></label>
                                    <div class="form-control-wrap">
                                        <ChoiceSelect size="sm" id="bedrooms" :cross="false" @change="updateBedroom" v-if="bedrooms !== null">
                                            <ChoiceSelectOption disabled>Search for Bedrooms</ChoiceSelectOption>
                                            <ChoiceSelectOption :value="bedroom.id" v-for="(bedroom, index) in bedrooms" :selected="bedroom.id == form.bedroom" v-bind:key="index">{{ bedroom.name }}</ChoiceSelectOption>
                                        </ChoiceSelect>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6" v-if="selectLoaded">
                                <div class="form-group">
                                    <label class="form-label">Project <span class="text-danger">*</span></label>
                                    <div class="form-control-wrap">
                                        <ChoiceSelect size="sm" id="project" :cross="false" @change="updateProject" v-if="projects !== null">
                                            <ChoiceSelectOption disabled>Search for Project</ChoiceSelectOption>
                                            <ChoiceSelectOption :value="project.id" :selected="project.id == form.project" v-for="(project, index) in projects" v-bind:key="index">{{ project.name }}</ChoiceSelectOption>
                                        </ChoiceSelect>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label  class="form-label">Country <span class="text-danger">*</span></label>
                                    <div class="form-control-wrap">
                                        <FormInput type="text" v-model="form.country" placeholder="Enter Country"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label  class="form-label">County <span class="text-danger">*</span></label>
                                    <div class="form-control-wrap">
                                        <FormInput type="text" v-model="form.county" placeholder="Enter County"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label  class="form-label">Zip Code <span class="text-danger">*</span></label>
                                    <div class="form-control-wrap">
                                        <FormInput type="text" v-model="form.zip_code" placeholder="Enter Zip Code"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label  class="form-label">Address <span class="text-danger">*</span></label>
                                    <div class="form-control-wrap">
                                        <FormInput type="text" v-model="form.address" placeholder="Enter Address"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label  class="form-label">Number <span class="text-danger">*</span></label>
                                    <div class="form-control-wrap">
                                        <FormInput type="text" v-model="form.phone" placeholder="Enter Number"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label  class="form-label">Type <span class="text-danger">*</span></label>
                                    <div class="form-control-wrap">
                                        <FormInput type="text" v-model="form.type" placeholder="Enter Type"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label  class="form-label">Area(M2) <span class="text-danger">*</span></label>
                                    <div class="form-control-wrap">
                                        <FormInput type="number" v-model="form.area" placeholder="Enter Area"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label  class="form-label">Building <span class="text-danger">*</span></label>
                                    <div class="form-control-wrap">
                                        <FormInput type="text" v-model="form.building" placeholder="Enter Building"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label  class="form-label">Floor <span class="text-danger">*</span></label>
                                    <div class="form-control-wrap">
                                        <FormInput type="number" v-model="form.floor" placeholder="Enter Floor"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label  class="form-label">List Price <span class="text-danger">*</span></label>
                                    <div class="form-control-wrap">
                                        <FormInput type="number" v-model="form.list_price" placeholder="Enter List price"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6" v-if="selectLoaded">
                                <div class="form-group">
                                    <label class="form-label">Currency <span class="text-danger">*</span></label>
                                    <div class="form-control-wrap">
                                        <ChoiceSelect size="sm" id="currency" :cross="false" @change="updateCurrency" v-if="currencies !== null">
                                            <ChoiceSelectOption selected disabled>Search for Currency</ChoiceSelectOption>
                                            <ChoiceSelectOption :value="currency.id" :selected="currency.id == form.currency" v-for="(currency, index) in currencies" v-bind:key="index">{{ currency.name }}</ChoiceSelectOption>
                                        </ChoiceSelect>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label  class="form-label">Estimated Rent <span class="text-danger">*</span></label>
                                    <div class="form-control-wrap">
                                        <FormInput type="number" v-model="form.estimated_rent" placeholder="Enter Estimated Rent"/>
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
import FormInput from '@/components/forms/input/FormInput.vue';
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
    ChoiceSelect,
    ChoiceSelectOption,
    FormInput,
  },
  data(){
    return {
    //   loading:true,
      id: this.$route.params.id,
      showError: false,
      showSuccess: false,
      error: '',
      success:'',
      form: {
        owner: [],
        manager: [],
        bedroom: '',
        project: '',
        country: '',
        county: '',
        zip_code: '',
        address: '',
        phone: '',
        type: '',
        area: '',
        building: '',
        floor: '',
        list_price: '',
        currency: '',
        estimated_rent: ''
      },
      owners: null,
      managers: null,
      selectLoaded: false,
      loadManager: false,
      projects: null,
      currencies: null,
      bedrooms: null,
      baseURL: process.env.VUE_APP_API_URL,
    }
  },
  created(){
    this.fetchOwners();
    this.fetchManagers();
    this.fetchProjects();
    this.fetchCurrencies();
    this.fetchBedrooms()
    this.fetchProperties();
  },
  methods: {
    fetchOwners(){

        var token = localStorage.token;

        var headers = { 
            'Authorization': 'Bearer '+ JSON.parse(token), 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        axios.get(this.baseURL+'/api/admin/users', { headers })
        .then(response => {
        if(response.data.status)
        {
            this.owners = response.data.data;
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
    fetchProjects(){

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
    },
    fetchBedrooms(){

        var token = localStorage.token;

        var headers = { 
            'Authorization': 'Bearer '+ JSON.parse(token), 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        axios.get(this.baseURL+'/api/admin/bedrooms', { headers })
        .then(response => {
        if(response.data.status)
        {
            this.bedrooms = response.data.data;
        }
        });
    },
    fetchCurrencies(){

        var token = localStorage.token;

        var headers = { 
            'Authorization': 'Bearer '+ JSON.parse(token), 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        axios.get(this.baseURL+'/api/admin/currencies', { headers })
        .then(response => {
        if(response.data.status)
        {
            this.currencies = response.data.data;
        }
        });
    },
    fetchProperties(){

        var token = localStorage.token;

        var headers = { 
            'Authorization': 'Bearer '+ JSON.parse(token), 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        axios.get(this.baseURL+'/api/admin/'+this.id+'/edit-property/', { headers })
        .then(response => {
        if(response.data.status)
        {
            this.property_data = response.data.data;
            this.form.owner         = this.property_data[0].owner_id,
            this.form.manager       = this.property_data[0].property_manager_id,
            this.form.bedroom       = this.property_data[0].bedroom_id,
            this.form.project       = this.property_data[0].project_id,
            this.form.country       = this.property_data[0].country,
            this.form.county        = this.property_data[0].county,
            this.form.zip_code      = this.property_data[0].zip_code,
            this.form.address       = this.property_data[0].address,
            this.form.phone         = this.property_data[0].number,
            this.form.type          = this.property_data[0].type,
            this.form.area          = this.property_data[0].area,
            this.form.building      = this.property_data[0].building_tex,
            this.form.floor         = this.property_data[0].floor,
            this.form.list_price    = this.property_data[0].list_price,
            this.form.currency      = this.property_data[0].currency_id,
            this.form.estimated_rent= this.property_data[0].estimated_rent

            this.owners.forEach((item)=>{
                let res = this.form.owner.includes(String(item.id));
                item.isSelected = res;
            });

            this.managers.forEach((item)=>{
                let res = this.form.manager.includes(String(item.id));
                item.isSelected = res;
            });

            this.selectLoaded = true;

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

    //   if(this.form.owner == "")
    //   {
    //     this.form.owner = null;
    //   }
    //   if(this.form.manager == "")
    //   {
    //     this.form.manager = null;
    //   }

      axios.post(this.baseURL+'/api/admin/property/'+this.id+'/update', this.form, { headers })
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
        this.fetchBedroom();

      })
      .catch(function () {

      });
      
    },
    updateOwner()
    {
        var items = [];
        var elem = document.querySelector("#owner");
        var options = elem.selectedOptions;
        for(var i=0; i<options.length;i++){
            items[i] = options[i].value;
        }
        this.form.owner = items;
    },
    updateManager()
    {
        
        var items = [];
        var elem = document.querySelector("#property_managers");
        var options = elem.selectedOptions;
        for(var i=0; i<options.length;i++){
            items[i] = options[i].value;
        }
        this.form.manager = items;
    },
    updateProject(e)
    {
      this.form.project = e.target.value;
    },
    updateBedroom(e)
    {
      this.form.bedroom = e.target.value;
    },
    updateCurrency(e)
    {
      this.form.currency = e.target.value;
    },
  }
}
</script>
