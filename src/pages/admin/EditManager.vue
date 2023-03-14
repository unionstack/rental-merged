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
                                  <FormInput type="email" v-model="form.email" disabled required placeholder="Enter Email"/>
                                  
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
        },
        baseURL: process.env.VUE_APP_API_URL,
        manager_data: '',
    }
  },
  created(){
    this.fetchManager();
  },
  methods: {
    fetchManager(){

      var token = localStorage.token;

      var headers = { 
          'Authorization': 'Bearer '+ JSON.parse(token), 
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
      // console.log(this.id);
      axios.get(this.baseURL+'/api/admin/'+this.id+'/edit-manager/', { headers })
      .then(response => {
        if(response.data.status)
        {
          this.manager_data = response.data.data;
          this.form.first_name = this.manager_data[0].first_name;
          this.form.last_name = this.manager_data[0].last_name;
          this.form.email = this.manager_data[0].email;
          this.form.phone = this.manager_data[0].phone;
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
      axios.post(this.baseURL+'/api/admin/managers/'+this.id+'/update', this.form, { headers })
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
      
    }
  }
}
</script>
