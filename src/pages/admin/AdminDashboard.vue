<template>
  <Layout>
    <form>
      <Row utils="g-gs">
        <Col xxl="12">
          <CardBody class="flex-grow-0 py-2">
            <CardTitleGroup>
              <CardTitle tag="div">
                <h3 class="title">Welcome to Admin Panel!</h3>
              </CardTitle>
            </CardTitleGroup>
          </CardBody>
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
// import Card from '@/components/uielements/card/Card.vue';
import CardBody from '@/components/uielements/card/CardBody.vue';
import CardTitleGroup from '@/components/uielements/card/CardTitleGroup.vue';
import CardTitle from '@/components/uielements/card/CardTitle.vue';
// import Button from '@/components/uielements/button/Button.vue';
// import FormInput from '@/components/forms/input/FormInput.vue';
// import axios from 'axios';

export default {
  name: 'AccountOrder',
  components: {
    Layout,
    Row,
    Col,
    // Card,
    CardBody,
    CardTitleGroup,
    CardTitle,
    // Button,
    // FormInput,
  },
  data(){
    return {
      // showError: false,
      // showSuccess: false,
      // error: '',
      // success:'',
      // form: {
      //   name: '',
      // },
      // baseURL: process.env.VUE_APP_API_URL,
    }
  },
  methods: {
    // create(e){
    //   e.preventDefault();

    //   this.showError = false;
    //   this.showSuccess = false;

    //   var token = localStorage.token;

    //   var headers = { 
    //       'Authorization': 'Bearer '+ JSON.parse(token), 
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //   }
    //   axios.post(this.baseURL+'/api/admin/create/bedroom', this.form, { headers })
    //   .then(response => {
    //     if(!response.data.status)
    //     {
    //       if(response.data.errors)
    //       {
    //         this.error = response.data.errors;
    //       }else{
    //         this.error = response.data.message;
    //       }

    //       this.showError = true;
    //       return;
    //     }

    //     this.showError = false;
    //     this.success = response.data.message;
    //     this.showSuccess = true;
    //     this.form.name = '';
    //   })
    //   .catch(function () {
    //     // console.log(e);
    //   });
      
    // }

  }
}
</script>
