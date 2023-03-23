<template>
  <Layout>
    <form>
      <Row utils="g-gs">
        <Col xxl="12">
          <CardBody class="flex-grow-0 py-2">
            <CardTitleGroup>
              <CardTitle tag="div">
                <!-- <h3 class="title">Welcome to Admin Panel!</h3> -->
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
import CardBody from '@/components/uielements/card/CardBody.vue';
import CardTitleGroup from '@/components/uielements/card/CardTitleGroup.vue';
import CardTitle from '@/components/uielements/card/CardTitle.vue';
import axios from 'axios';


export default {
  name: 'AccountOrder',
  components: {
    Layout,
    Row,
    Col,
    CardBody,
    CardTitleGroup,
    CardTitle,
  },
  data(){
    return {
      user:{
        token: ''
      },
      baseURL: process.env.VUE_APP_API_URL
    }
  },
  created(){
    this.adminLogout();
  },
  methods: {
    adminLogout(){

      var token = localStorage.token;
      this.user.token = token;
      var headers = { 
          'Authorization': 'Bearer '+ JSON.parse(token), 
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
      axios.post(this.baseURL+'/api/admin/logout', this.user, { headers })
      .then(response => {
      if(response.data.status)
      {
          // this.response_data = response.data.data;
          localStorage.setItem('token', null);
          localStorage.setItem('user', null);
          localStorage.setItem('role',null);
          this.$router.push('/admin/login');
      }
      });
    },

  }
}
</script>
