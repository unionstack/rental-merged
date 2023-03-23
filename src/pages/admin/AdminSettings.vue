<template>
    <Layout>
      <form @submit.prevent="update">
        <Row utils="g-gs">
          <Col xxl="12">
            <CardBody class="flex-grow-0 py-2">
              <CardTitleGroup>
                <CardTitle tag="div">
                  <h3 class="title">Change Password</h3>
                </CardTitle>
                <CardTools>
                    <Button variant="primary" soft class="mx-1" type="submit">Update</Button>
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
                                <label  class="form-label">Old Password <span class="text-danger">*</span></label>
                                <div class="form-control-wrap">
                                    <FormInput type="password"  v-model="form.old_password" placeholder="Enter Bedrooms" required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row g-3 gx-gs mb-4">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label  class="form-label">New Password <span class="text-danger">*</span></label>
                                <div class="form-control-wrap">
                                    <FormInput type="password"  v-model="form.new_password" placeholder="Enter Bedrooms" required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row g-3 gx-gs mb-4">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label  class="form-label">Confirm New Password <span class="text-danger">*</span></label>
                                <div class="form-control-wrap">
                                    <FormInput type="password"  v-model="form.confirm_password" placeholder="Enter Bedrooms" required/>
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
        showError: false,
        showSuccess: false,
        error: '',
        success:'',
        form: {
          old_password: '',
          new_password: '',
          confirm_password: ''
        },
        baseURL: process.env.VUE_APP_API_URL,
      }
    },
    methods: {
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
        axios.post(this.baseURL+'/api/admin/change-password', this.form, { headers })
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
          this.form.old_password = '';
          this.form.new_password = '';
          this.form.confirm_password = '';
        })
        .catch(function () {
          // console.log(e);
        });
        
      }
  
    }
  }
  </script>
  