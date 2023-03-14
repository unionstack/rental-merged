<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead>
        <BlockHeadBetween class="flex-wrap gap g-2">
            <BlockHeadContent>
                <BlockTitle tag="h2">Users Cards</BlockTitle>
                <Breadcrumb divider="arrow">
                    <BreadcrumbItem to="/">Home</BreadcrumbItem>
                    <BreadcrumbItem to="/">User Manage</BreadcrumbItem>
                    <BreadcrumbItem active>Users</BreadcrumbItem>
                </Breadcrumb>
            </BlockHeadContent>
            <BlockHeadContent>
                <Button href="#" variant="primary" data-bs-toggle="modal" data-bs-target="#addUserModal">
                    <Icon icon="plus"></Icon>
                    <span>Add User</span>
                </Button>
            </BlockHeadContent>
        </BlockHeadBetween>
    </BlockHead>

    <Block>
        <Row utils="g-gs">
            <Col sm="6" xl="4" xxl="3" v-for="user in userData" :key="user.id">
                <Card full class="text-center">
                    <CardBody>
                        <Media v-if="user.avatar" middle size="xxl" shape="circle">
                            <Img :src="user.avatar" :alt="user.name" />
                        </Media>
                        <Media v-if="!user.avatar" middle size="xxl" :variant="user.theme" shape="circle">
                            <span class="fw-medium">
                                {{toInitials(user.name)}}
                            </span>
                        </Media>
                        <div class="mt-1 mb-4">
                            <router-link :to="`/user-manage/user-profile/${user.id}`" class="mb-1 h5">{{user.name}}</router-link>
                            <div class="small">{{user.role}}</div>
                        </div>
                        <Row utils="g-gs justify-content-center">
                            <div class="col-5">
                                <div class="h5 mb-1">{{user.followers}}</div>
                                <div class="small">Followers</div>
                            </div>
                            <div class="col-5">
                                <div class="h5 mb-1">{{user.following}}<span>K</span></div>
                                <div class="small">Following</div>
                            </div>
                        </Row>
                    </CardBody><!-- .card-body -->
                    <Dropdown class="position-absolute top-0 end-0 p-3">
                        <Button href="#" size="sm" zoom class="btn-icon me-n1" data-bs-toggle="dropdown">
                            <Icon icon="more-v"></Icon>
                        </Button>
                        <DropdownMenu size="sm" alignment="end">
                            <DropdownContent class="py-1">
                                <List class="link-list link-list-hover-bg-primary link-list-md">
                                    <ListItem>
                                        <router-link :to="`/user-manage/user-edit/${user.id}`"><Icon icon="edit"></Icon><span>Edit</span></router-link>
                                    </ListItem>
                                    <ListItem>
                                        <router-link :to="`/user-manage/user-edit/${user.id}`"><Icon icon="trash"></Icon><span>Delete</span></router-link>
                                    </ListItem>
                                    <ListItem>
                                        <router-link :to="`/user-manage/user-profile/${user.id}`"><Icon icon="eye"></Icon><span>View Details</span></router-link>
                                    </ListItem>
                                </List>
                            </DropdownContent>
                        </DropdownMenu>
                    </Dropdown>
                </Card>
            </Col>
        </Row>

        <Card class="mt-5" v-if="this.pageCount > 0">
            <CardBody>
                <div class="pagination-wrap">
                    <Paginate class="pagination-s1" v-if="this.pageCount > 1" v-model="page" :page-count="pageCount"></Paginate>
                    <div class="pagination-info small">{{dataInfo}}</div>
                </div>
            </CardBody>
        </Card>
    </Block>
  </Layout>

    <ModalContainer animation="fade" tabindex="-1" id="addUserModal">
        <ModalDialog position="center">
            <ModalContent>
                <ModalHeader>
                    <h4 class="modal-title">Add User</h4>
                    <ButtonClose data-bs-dismiss="modal"></ButtonClose>
                </ModalHeader>
                <ModalBody>
                    <form action="#">
                        <Row utils="g-3">
                            <Col lg="6">
                                <div class="form-group">
                                    <FormLabel>First Name</FormLabel>
                                    <FormInputWrap>
                                        <FormInput type="text" placeholder="First name"/>
                                    </FormInputWrap>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div class="form-group">
                                    <FormLabel>Last Name</FormLabel>
                                    <FormInputWrap>
                                        <FormInput type="text" placeholder="Last name"/>
                                    </FormInputWrap>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div class="form-group">
                                    <FormLabel>Email Address</FormLabel>
                                    <FormInputWrap>
                                        <FormInput type="email" placeholder="Email address"/>
                                    </FormInputWrap>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div class="form-group">
                                    <FormLabel class="form-label">Status</FormLabel>
                                    <FormInputWrap>
                                        <ChoiceSelect id="status-select" :cross="false">
                                            <ChoiceSelectOption value="">Select a status</ChoiceSelectOption>
                                            <ChoiceSelectOption value="1">Pending</ChoiceSelectOption>
                                            <ChoiceSelectOption value="2">Active</ChoiceSelectOption>
                                            <ChoiceSelectOption value="3">Inactive</ChoiceSelectOption>
                                        </ChoiceSelect>
                                    </FormInputWrap>
                                </div>
                            </Col>
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <FormLabel class="form-label">Role</FormLabel>
                                    <FormInputWrap>
                                        <ChoiceSelect id="role-select" :cross="false">
                                            <ChoiceSelectOption value="">Select a role</ChoiceSelectOption>
                                            <ChoiceSelectOption value="1">Administrator</ChoiceSelectOption>
                                            <ChoiceSelectOption value="2">Developer</ChoiceSelectOption>
                                            <ChoiceSelectOption value="3">Analyst</ChoiceSelectOption>
                                            <ChoiceSelectOption value="4">Support</ChoiceSelectOption>
                                            <ChoiceSelectOption value="5">Trial</ChoiceSelectOption>
                                        </ChoiceSelect>
                                    </FormInputWrap>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="d-flex gap g-2">
                                    <div class="gap-col">
                                        <Button type="submit" variant="primary">Add User</Button>
                                    </div>
                                    <div class="gap-col">
                                        <Button type="button" class="border-0" data-bs-dismiss="modal">Discard</Button>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </form>
                </ModalBody>
            </ModalContent>
        </ModalDialog>
    </ModalContainer>

</template>

<script>
import Layout from '@/layout/Index.vue';
import Row from '@/components/layout/Row.vue';
import Col from '@/components/layout/Col.vue';
import { Block, BlockHead, BlockHeadContent, BlockHeadBetween, BlockTitle, } from '@/components/block/Block.vue';
import Card from '@/components/uielements/card/Card.vue';
import Breadcrumb from '@/components/uielements/breadcrumb/Breadcrumb.vue';
import BreadcrumbItem from '@/components/uielements/breadcrumb/BreadcrumbItem.vue';
import Button from '@/components/uielements/button/Button.vue';
import ModalContainer from '@/components/uielements/modal/ModalContainer.vue';
import ModalDialog from '@/components/uielements/modal/ModalDialog.vue';
import ModalContent from '@/components/uielements/modal/ModalContent.vue';
import ModalHeader from '@/components/uielements/modal/ModalHeader.vue';
import ModalBody from '@/components/uielements/modal/ModalBody.vue';
import ButtonClose from '@/components/uielements/button-close/ButtonClose.vue';
import FormInputWrap from '@/components/forms/input/FormInputWrap.vue';
import FormInput from '@/components/forms/input/FormInput.vue';
import FormLabel from '@/components/forms/form-label/FormLabel.vue';
import Icon from '@/components/icon/Icon.vue';
import CardBody from '@/components/uielements/card/CardBody.vue';
import Media from '@/components/media/Media.vue';
import Dropdown from '@/components/uielements/dropdown/Dropdown.vue';
import DropdownMenu from '@/components/uielements/dropdown/DropdownMenu.vue';
import DropdownContent from '@/components/uielements/dropdown/DropdownContent.vue';
import List from '@/components/list/List.vue';
import ListItem from '@/components/list/ListItem.vue';
import Img from '@/components/img/Img.vue';
import ChoiceSelect from '@/components/choices/ChoiceSelect.vue';
import ChoiceSelectOption from '@/components/choices/ChoiceSelectOption.vue';
import getInitials from '@/utilities/getInitials.js';
import Paginate from "vuejs-paginate-next";
import { users } from '@/store/users';

export default {
  name: 'UserCardsPage', 
  components: {
    Layout,
    Row,
    Col,
    Block,
    BlockHead,
    BlockHeadContent,
    BlockHeadBetween,
    BlockTitle,
    Card,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    ModalContainer,
    ModalDialog,
    ModalContent,
    ModalHeader,
    ModalBody,
    ButtonClose,
    FormInputWrap,
    FormInput,
    FormLabel,
    Icon,
    CardBody,
    Media,
    Dropdown,
    DropdownMenu,
    DropdownContent,
    List,
    ListItem,
    Img,
    ChoiceSelect,
    ChoiceSelectOption,
    Paginate
  },
  data(){
    return {
        users,
        perPage: 12,
        page: 1
    }
  },
  methods: {
    toInitials(name){
        return getInitials(name);
    }
  },
  computed: {
    userData(){
        const startIndex = this.perPage * (this.page - 1);
        const endIndex = startIndex + this.perPage;
        return this.users.slice(startIndex, endIndex);
    },
    pageCount(){
        return Math.ceil(this.users.length/this.perPage)
    },
    dataInfo(){
        let total = this.users.length;
        let currentMax = Math.min(this.perPage * this.page,this.users.length);
        let currentMin = this.perPage * this.page - this.perPage + 1;
        return this.pageCount < 2 ? `Showing ${total} entries` : `Showing ${currentMin} to ${currentMax} of ${total} entries`
    }
  }
}
</script>
