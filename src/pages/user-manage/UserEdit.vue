<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead>
        <BlockHeadBetween class="flex-wrap gap g-2 align-items-center">
            <BlockHeadContent>
                <div class="d-flex flex-column flex-md-row align-items-md-center">
                    <Media v-if="user.avatar" middle size="huge" shape="circle">
                        <Img :src="user.avatar" :alt="user.name" thumbnail />
                    </Media>
                    <Media v-if="!user.avatar" middle size="huge" :variant="user.theme" shape="circle">
                        <span class="fw-medium">
                            {{toInitials(user.name)}}
                        </span>
                    </Media>
                    <div class="mt-3 mt-md-0 ms-md-3">
                        <h3 class="title mb-1">{{user.name}}</h3>
                        <span class="small">{{user.role}}</span>
                        <ul class="nk-list-option pt-1">
                            <li><Icon icon="map-pin"></Icon><span class="small">{{user.address}}</span></li>
                            <li><Icon icon="building"></Icon><span class="small">{{user.company}}</span></li>
                        </ul>
                    </div>
                </div>
            </BlockHeadContent>
            <BlockHeadContent>
                <ul class="d-flex gap g-2">
                    <li class="d-none d-md-block">
                        <router-link class="btn btn-soft btn-primary" :to="`/user-manage/user-profile/${user.id}`">
                            <Icon icon="user"></Icon>
                            <span>View Profile</span>
                        </router-link>
                    </li>
                    <li class="d-md-none">
                        <a class="btn btn-soft btn-primary btn-icon" :to="`/user-manage/user-profile/${user.id}`">
                            <Icon icon="user"></Icon>
                        </a>
                    </li>
                </ul>
            </BlockHeadContent>
        </BlockHeadBetween>
    </BlockHead>

    <Block>
        <Card gutter="md">
            <CardBody>
                <div class="bio-block">
                    <h4 class="bio-block-title mb-4">Edit Profile</h4>
                    <form action="#">
                        <Row utils="g-3">
                            <Col lg="12">
                                <div class="form-group">
                                    <FormLabel>Full Name</FormLabel>
                                    <FormInputWrap>
                                        <FormInput type="text" :modelValue="user.name" placeholder="Full name" />
                                    </FormInputWrap>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div class="form-group">
                                    <FormLabel>Email address</FormLabel>
                                    <FormInputWrap>
                                        <FormInput type="text" :modelValue="user.email" placeholder="Email address" />
                                    </FormInputWrap>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div class="form-group">
                                    <FormLabel>Company</FormLabel>
                                    <FormInputWrap>
                                        <FormInput type="text" :modelValue="user.company" placeholder="Company name" />
                                    </FormInputWrap>
                                </div>
                            </Col>
                            <Col lg="12">
                                <div class="form-group">
                                    <FormLabel>Address</FormLabel>
                                    <FormInputWrap>
                                        <FormInput type="text" :modelValue="user.address" placeholder="e.g. California, United States" />
                                    </FormInputWrap>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div class="form-group">
                                    <FormLabel>City</FormLabel>
                                    <FormInputWrap>
                                        <FormInput type="text" placeholder="City" />
                                    </FormInputWrap>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div class="form-group">
                                    <FormLabel>Country</FormLabel>
                                    <FormInputWrap>
                                        <ChoiceSelect id="country-select" :cross="false">
                                            <ChoiceSelectOption value="">Select a country</ChoiceSelectOption>
                                            <ChoiceSelectOption value="1">Germany</ChoiceSelectOption>
                                            <ChoiceSelectOption value="2">Canada</ChoiceSelectOption>
                                            <ChoiceSelectOption value="3">Usa</ChoiceSelectOption>
                                            <ChoiceSelectOption value="4">Aus</ChoiceSelectOption>
                                        </ChoiceSelect>
                                    </FormInputWrap>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div class="form-group">
                                    <FormLabel>Postal Code</FormLabel>
                                    <FormInputWrap>
                                        <FormInput type="text" placeholder="Zip code"/>
                                    </FormInputWrap>
                                </div>
                            </Col>
                            <Col lg="12">
                                <div class="form-group">
                                    <FormLabel>About Me</FormLabel>
                                    <FormInputWrap>
                                        <Quill id="minimal-quill" toolbar="minimal" placeholder="Write some awesome text" v-html="user.description"></Quill>
                                    </FormInputWrap>
                                </div>
                            </Col>
                            <Col lg="12">
                                <Button variant="primary" type="submit">Update Profile</Button>
                            </Col>
                        </Row>
                    </form>
                </div><!-- .bio-block -->
            </CardBody>
        </Card>
    </Block>
  </Layout>

</template>

<script>
import Layout from '@/layout/Index.vue';
import { Block, BlockHead, BlockHeadContent, BlockHeadBetween } from '@/components/block/Block.vue';
import Card from '@/components/uielements/card/Card.vue';
import CardBody from '@/components/uielements/card/CardBody.vue';
import Icon from '@/components/icon/Icon.vue';
import Media from '@/components/media/Media.vue';
import Img from '@/components/img/Img.vue';
import Button from '@/components/uielements/button/Button.vue';
import Row from '@/components/layout/Row.vue';
import Col from '@/components/layout/Col.vue';
import FormLabel from '@/components/forms/form-label/FormLabel.vue';
import FormInput from '@/components/forms/input/FormInput.vue';
import FormInputWrap from '@/components/forms/input/FormInputWrap.vue';
import ChoiceSelect from '@/components/choices/ChoiceSelect.vue';
import ChoiceSelectOption from '@/components/choices/ChoiceSelectOption.vue';
import getInitials from '@/utilities/getInitials.js';
import { users } from '@/store/users';
import Quill from '@/components/forms/editors/Quill.vue';

export default {
    name: 'UserEditPage', 
    components: {
        Layout,
        Block,
        BlockHead,
        BlockHeadContent,
        BlockHeadBetween,
        Card,
        CardBody,
        Icon,
        Media,
        Img,
        Button,
        Row,
        Col,
        FormLabel,
        FormInput,
        FormInputWrap,
        ChoiceSelect,
        ChoiceSelectOption,
        Quill
    },
    data(){
        return {
            user: null
        }
    },
    computed: {
        userId(){
            return this.$route.params.id
        }
    },
    methods: {
        toInitials(name){
            return getInitials(name);
        },
        initData(){
            // grabs the id form the url and loads the corresponding data
            let findUser = users.find((item) => item.id === this.userId);
            this.user = findUser;
        }
    },
    created() {
        this.initData();

        this.$watch(() => this.$route.params, this.initData);
    }
}
</script>
