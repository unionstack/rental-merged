<template>
    <AppRoot>
        <AppMain>
            <AppWrap class="align-items-center justify-content-center">
                <Container class="p-2 p-sm-4">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-6">
                            <Card class="overflow-hidden rounded-4 card-auth card-auth-mh" gutter="lg">
                                <Row utils="g-0 flex-lg-row-revers">
                                    <Col lg="12">
                                        <CardBody class="h-100 d-flex flex-column justify-content-center">
                                            <div class="nk-block-head text-center">
                                                <div class="nk-block-head-content">
                                                    <h3 class="nk-block-title mb-1">Login to Account</h3>
                                                </div>
                                            </div>
                                            <div class="alert alert-danger" v-if="showError">
                                                {{ error }}
                                            </div>
                                            <form id="loginForm" ref="form" @submit.prevent="login">
                                                <Row utils="gy-3">
                                                    <Col lg="12">
                                                        <FormGroup>
                                                            <FormLabel for="username">Email Address</FormLabel>
                                                            <FormInputWrap>
                                                                <FormInput type="email" id="username"  v-model="authForm.email" placeholder="Enter email here" required/>
                                                            </FormInputWrap>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="12">
                                                        <FormGroup>
                                                            <FormLabel for="password">Password</FormLabel>
                                                            <FormInputWrap>
                                                                <FormInputIcon href="password" class="password-toggle" position="end" title="Toggle show/hide password">
                                                                    <Icon icon="eye" class="inactive"></Icon>
                                                                    <Icon icon="eye-off" class="active"></Icon>
                                                                </FormInputIcon>
                                                                <FormInput type="password" id="password" v-model="authForm.password" placeholder="Enter password here" required />
                                                            </FormInputWrap>
                                                        </FormGroup><!-- .form-group -->
                                                    </Col>
                                                    <Col lg="12">
                                                        <div class="">
                                                            Forgot your password? Click <router-link to="#">here</router-link> to reset your password.
                                                        </div>
                                                    </Col>
                                                    <Col lg="12">
                                                        <div class="d-grid">
                                                            <Button variant="primary" type="submit">Login to account</Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </form>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                    </div>
                </Container>
            </AppWrap>
        </AppMain>
       
    </AppRoot>
</template>

<script>
import AppRoot from '@/layout/global/AppRoot.vue';
import AppMain from '@/layout/global/AppMain.vue';
import AppWrap from '@/layout/global/AppWrap.vue';
import Container from '@/components/layout/Container.vue';
import Row from '@/components/layout/Row.vue';
import Col from '@/components/layout/Col.vue';
import Card from '@/components/uielements/card/Card.vue';
import CardBody from '@/components/uielements/card/CardBody.vue';
import FormInput from '@/components/forms/input/FormInput.vue';
import FormInputWrap from '@/components/forms/input/FormInputWrap.vue';
import FormLabel from '@/components/forms/form-label/FormLabel.vue';
// import FormCheckInput from '@/components/forms/form-check/FormCheckInput.vue';
// import FormCheckLabel from '@/components/forms/form-check/FormCheckLabel.vue';
// import FormCheck from '@/components/forms/form-check/FormCheck.vue';
import Button from '@/components/uielements/button/Button.vue';
import FormInputIcon from '@/components/forms/input/FormInputIcon.vue';
import Icon from '@/components/icon/Icon.vue';
import FormGroup from '@/components/forms/FormGroup.vue';
import axios from 'axios';

export default {
    name: 'AuthLoginPage',
    components: {
        AppRoot,
        AppMain,
        AppWrap,
        Container,
        Row,
        Col,
        Card,
        CardBody,
        FormInput,
        FormInputWrap,
        FormLabel,
        // FormCheck,
        // FormCheckInput,
        // FormCheckLabel,
        FormGroup,
        Button,
        FormInputIcon,
        Icon
    },
    data(){
        return{
            showError: false,
            error: '',
            authForm:{
                email:'',
                password: ''
            },
            baseURL: process.env.VUE_APP_API_URL,
        }
    },
    methods: {
        login(e){
            e.preventDefault();
            axios.post(this.baseURL+'/api/user/login', this.authForm).then(response => {
                if(!response.data.status)
                {
                    this.error = response.data.message;
                    this.showError = true;
                    return;
                }
                localStorage.setItem('token', JSON.stringify(response.data.token));
                localStorage.setItem('user', JSON.stringify(response.data.user));
                localStorage.setItem('role', JSON.stringify('user'));
                this.$router.push('/user/properties');
            })
            .catch(error => {
                this.error = error.response.data;
                this.showError = true;
            });
        }
    }
}
</script>
