<template>
    <AppRoot>
        <AppMain>
            <AppWrap class="align-items-center justify-content-center">
                <Container class="p-2 p-sm-4">
                    <Card class="overflow-hidden rounded-4 card-auth card-auth-mh" gutter="lg">
                        <Row utils="g-0 flex-lg-row-reverse">
                            <Col lg="5">
                                <CardBody class="h-100 d-flex flex-column justify-content-center">
                                    <div class="nk-block-head text-center">
                                        <div class="nk-block-head-content">
                                            <h3 class="nk-block-title mb-1">Login to Account</h3>
                                            <p class="small">Please sign-in to your account and start the adventure.</p>
                                        </div>
                                    </div>
                                    <form action="#" @submit.prevent="setAuth" id="loginForm">
                                        <Row utils="gy-3">
                                            <Col lg="12">
                                                <FormGroup>
                                                    <FormLabel for="username">Email or Username</FormLabel>
                                                    <FormInputWrap>
                                                        <FormInput type="email" id="username"  v-model="authForm.email" placeholder="Enter email" required/>
                                                    </FormInputWrap>
                                                </FormGroup><!-- .form-group -->
                                            </Col>
                                            <Col lg="12">
                                                <FormGroup>
                                                    <FormLabel for="password">Password</FormLabel>
                                                    <FormInputWrap>
                                                        <FormInputIcon href="password" class="password-toggle" position="end" title="Toggle show/hide password">
                                                            <Icon icon="eye" class="inactive"></Icon>
                                                            <Icon icon="eye-off" class="active"></Icon>
                                                        </FormInputIcon>
                                                        <FormInput type="password" id="password" v-model="authForm.password" placeholder="Enter password" required />
                                                    </FormInputWrap>
                                                </FormGroup><!-- .form-group -->
                                            </Col>
                                            <Col lg="12">
                                                <div class="d-flex flex-wrap justify-content-between">
                                                    <FormCheck size="sm">
                                                        <FormCheckInput type="checkbox" checked id="RememberMe"/>
                                                        <FormCheckLabel for="RememberMe" >
                                                            Remember Me
                                                        </FormCheckLabel>
                                                    </FormCheck>
                                                    <router-link to="/auths/auth-reset" class="small">Forgot Password?</router-link>
                                                </div>
                                            </Col>
                                            <Col lg="12">
                                                <div class="d-grid">
                                                    <Button variant="primary" type="submit">Login to account</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </form>
                                    <div class="my-3 text-center">
                                        <OverlineTitle tag="h6" class="overline-title-sep"><span>OR</span></OverlineTitle>
                                    </div>
                                    <Row utils="g-2">
                                        <Col xxl="6">
                                            <Button href="#" variant="outline-light" class="w-100">
                                                <Img src="/images/icon/d.png" alt="" class="icon" />
                                                <span class="fw-medium">Continue with Google</span>
                                            </Button>
                                        </Col>
                                        <Col xxl="6">
                                            <Button href="#" variant="outline-light" class="w-100">
                                                <Img src="/images/icon/b.png" alt="" class="icon" />
                                                <span class="fw-medium">Continue with Facebook</span>
                                            </Button>
                                        </Col>
                                    </Row>
                                    <div class="text-center mt-4">
                                        <p class="small">Don't have an account? <router-link to="/auths/auth-register">Register</router-link></p>
                                    </div>
                                </CardBody>
                            </Col>
                            <Col lg="7">
                                <CardBody class="bg-darker is-theme has-mask has-mask-1 h-100 d-flex flex-column justify-content-end">
                                    <div class="mask mask-1"></div><!-- .mask-->
                                    <div class="brand-logo">
                                        <Logo />
                                    </div>
                                    <Row>
                                        <Col sm="11">
                                            <div class="mt-4">
                                                <div class="h1 title mb-3">Welcome back to <br> our community</div>
                                                <p>Discover how to manage Two-Factor Authentication in Joomla. The two-factor authentication in Joomla is a very popular security practice.</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div class="mt-5">
                                        <MediaGroup overlap>
                                            <Media size="sm" shape="circle" class="media-border border-white">
                                                <Img src="/images/avatar/a.jpg" alt="" />
                                            </Media>
                                            <Media size="sm" shape="circle" class="media-border border-white">
                                                <Img src="/images/avatar/b.jpg" alt="" />
                                            </Media>
                                            <Media size="sm" shape="circle" class="media-border border-white">
                                                <Img src="/images/avatar/c.jpg" alt="" />
                                            </Media>
                                            <Media size="sm" shape="circle" class="media-border border-white">
                                                <Img src="/images/avatar/d.jpg" alt="" />
                                            </Media>
                                        </MediaGroup>
                                        <p class="small mt-2">More than 2k people joined us, it's your turn</p>
                                    </div>
                                </CardBody>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </AppWrap>
        </AppMain>
        <ToastContainer class="position-fixed end-0 bottom-0 p-3">
            <Toast class="fade text-bg-danger border-danger" :class="authForm.showError && 'show'">
                <ToastBody>
                    Please try with currect username and password
                </ToastBody>
            </Toast>
        </ToastContainer>
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
import Logo from '@/components/logo/Logo.vue';
import MediaGroup from '@/components/media/MediaGroup.vue';
import Media from '@/components/media/Media.vue';
import Img from '@/components/img/Img.vue';
import FormInput from '@/components/forms/input/FormInput.vue';
import FormInputWrap from '@/components/forms/input/FormInputWrap.vue';
import FormLabel from '@/components/forms/form-label/FormLabel.vue';
import FormCheckInput from '@/components/forms/form-check/FormCheckInput.vue';
import FormCheckLabel from '@/components/forms/form-check/FormCheckLabel.vue';
import FormCheck from '@/components/forms/form-check/FormCheck.vue';
import Button from '@/components/uielements/button/Button.vue';
import OverlineTitle from '@/components/misc/OverlineTitle.vue';
import FormInputIcon from '@/components/forms/input/FormInputIcon.vue';
import Icon from '@/components/icon/Icon.vue';
import FormGroup from '@/components/forms/FormGroup.vue';
import ToastContainer from '@/components/uielements/toast/ToastContainer.vue';
import Toast from '@/components/uielements/toast/Toast.vue';
import ToastBody from '@/components/uielements/toast/ToastBody.vue';

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
        Logo,
        MediaGroup,
        Media,
        Img,
        FormInput,
        FormInputWrap,
        FormLabel,
        FormCheck,
        FormCheckInput,
        FormCheckLabel,
        FormGroup,
        Button,
        OverlineTitle,
        FormInputIcon,
        Icon,
        Toast,
        ToastBody,
        ToastContainer
    },
    data(){
        return{
            credentials:{
                email:'info@softnio.com',
                password: '123456'
            },
            authForm:{
                email:'info@softnio.com',
                password: '123456',
                showError: false
            },

        }
    },
    methods:{
        setAuth(){
            const email = this.authForm.email;
            const password = this.authForm.password;
            if(email === this.credentials.email && password === this.credentials.password){
                localStorage.setItem('nioBoardAuthenticated',true);
                this.$router.push('/');
            }else{
                this.authForm.showError = true;
                setTimeout(() => {
                    this.authForm.showError = false;
                }, 20000);
            }
        }
    }
}
</script>
