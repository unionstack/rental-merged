<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead>
        <BlockHeadBetween class="flex-wrap gap g-2">
            <BlockHeadContent>
                <BlockTitle tag="h2">Users List</BlockTitle>
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
      <Card>
        <div class="data-table-wrapper">
            <div class="data-table-top">
                <div class="data-table-search">
                    <input v-model="searchInput" class="form-control" placeholder="Search by name or email" type="text">
                </div>
                <div class="data-table-action-wrap">
                    <div class="data-table-select">
                        <select v-model="perPage" class="form-select">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select> 
                        <span class="text">Per page</span>
                    </div>
                </div><!-- .data-table-action-wrap -->
            </div><!-- .dataTable-top -->
            <div class="data-table-container table-responsive">
                <Table>
                    <TableHead variant="light">
                        <tr>
                            <th class="tb-col">
                                <OverlineTitle tag="span">Users</OverlineTitle>
                            </th>
                            <th class="tb-col">
                                <OverlineTitle tag="span">Positions</OverlineTitle>
                            </th>
                            <th class="tb-col">
                                <OverlineTitle tag="span">Plans</OverlineTitle>
                            </th>
                            <th class="tb-col tb-col-xl">
                                <OverlineTitle tag="span">Billings</OverlineTitle>
                            </th>
                            <th class="tb-col tb-col-xxl">
                                <OverlineTitle tag="span">Joined Date</OverlineTitle>
                            </th>
                            <th class="tb-col">
                                <OverlineTitle tag="span">Status</OverlineTitle>
                            </th>
                            <th class="tb-col tb-col-end">
                                <OverlineTitle tag="span">Action</OverlineTitle>
                            </th>
                        </tr>
                    </TableHead>
                    <TableBody>
                        <template v-if="userData.length > 0">
                            <tr v-for="user in userData" :key="user.id">
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media v-if="user.avatar" middle size="md" shape="circle">
                                            <img :src="user.avatar" :alt="user.name">
                                        </Media>
                                        <Media v-if="!user.avatar" middle size="md" :variant="user.theme" shape="circle">
                                            <span class="smaller">
                                                {{toInitials(user.name)}}
                                            </span>
                                        </Media>
                                        <MediaText>
                                            <router-link :to="`/user-manage/user-profile/${user.id}`" class="title">{{user.name}}</router-link>
                                            <span class="small text">{{user.email}}</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col"><span class="small">{{user.role}}</span></td>
                                <td class="tb-col"><span class="small">{{user.plan}}</span></td>
                                <td class="tb-col tb-col-xl"><span class="small">{{user.billing}}</span></td>
                                <td class="tb-col tb-col-xxl"><span class="small">{{user.joining}}</span></td>
                                <td class="tb-col">
                                    <Badge :variant="
                                        user.status === 'Active' ? 'success-soft'
                                        : user.status === 'Pending' ? 'warning-soft'
                                        : user.status === 'Inactive' ? 'secondary-soft'
                                        : 'primary-soft'">
                                        {{user.status ? user.status : 'General'}}
                                    </Badge>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <Dropdown>
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
                                </td>
                            </tr>
                        </template>
                        <template v-else>
                            <tr>
                                <td class="tb-col text-center" colspan="7">
                                    No user found!
                                </td>
                            </tr>
                        </template>
                    </TableBody>
                </Table>
            </div>
            <div v-if="this.pageCount > 0" class="data-table-bottom">
                <div class="pagination-wrap">
                    <Paginate class="pagination-s1" v-if="this.pageCount > 1" v-model="page" :force-page="3" :page-count="pageCount"></Paginate>
                    <div class="pagination-info small">{{dataInfo}}</div>
                </div>
            </div>
        </div><!-- .dataTable-wrapper -->
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
import Table from '@/components/utilities/table/Table.vue';
import TableHead from '@/components/utilities/table/TableHead.vue';
import TableBody from '@/components/utilities/table/TableBody.vue';
import OverlineTitle from '@/components/misc/OverlineTitle.vue';
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
import Dropdown from '@/components/uielements/dropdown/Dropdown.vue';
import DropdownMenu from '@/components/uielements/dropdown/DropdownMenu.vue';
import DropdownContent from '@/components/uielements/dropdown/DropdownContent.vue';
import List from '@/components/list/List.vue';
import ListItem from '@/components/list/ListItem.vue';
import MediaGroup from '@/components/media/MediaGroup.vue';
import Media from '@/components/media/Media.vue';
import MediaText from '@/components/media/MediaText.vue';
import Badge from '@/components/uielements/badge/Badge.vue';
import Icon from '@/components/icon/Icon.vue';
import ChoiceSelect from '@/components/choices/ChoiceSelect.vue';
import ChoiceSelectOption from '@/components/choices/ChoiceSelectOption.vue';
import getInitials from '@/utilities/getInitials.js';
import Paginate from "vuejs-paginate-next";
import { users } from '@/store/users';

export default {
  name: 'UserListPage',
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
    Table,
    TableHead,
    TableBody,
    OverlineTitle,
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
    Dropdown,
    DropdownMenu,
    DropdownContent,
    List,
    ListItem,
    MediaGroup,
    Media,
    MediaText,
    Badge,
    Icon,
    ChoiceSelect,
    ChoiceSelectOption,
    Paginate
  },
  data(){
    return{
       users,
       searchInput: '',
       perPage: 10,
       page: 1
    }
  },
  methods: {
    toInitials(name){
        return getInitials(name);
    },
    filteredUsers(input){
        const filter = users.filter((user) => {
            return user.name.toLowerCase().includes(input.toLowerCase()) || user.email.toLowerCase().includes(input.toLowerCase())
        })
        return filter;
    }
  },
  computed:{
    filterData(){
        return this.searchInput === '' ? users : this.filteredUsers(this.searchInput)
    },
    userData(){
        const startIndex = parseInt(this.perPage) * (this.page - 1);
        const endIndex = startIndex + parseInt(this.perPage);
        return this.filterData.slice(startIndex, endIndex);
    },
    pageCount(){
        return Math.ceil(this.filterData.length / parseInt(this.perPage))
    },
    dataInfo(){
        let total = this.filterData.length;
        let currentMax = Math.min(parseInt(this.perPage) * this.page, this.filterData.length);
        let currentMin = parseInt(this.perPage) * this.page - parseInt(this.perPage) + 1;
        return this.pageCount < 2 ? `Showing ${total} entries` : `Showing ${currentMin} to ${currentMax} of ${total} entries`
    }
  },
  watch:{
    searchInput(newSearch){
        if(newSearch !== ''){
            this.page = 1;
        }
    },
    perPage(){
        if(this.pageCount < this.page){
            this.page = this.pageCount;
        }
    }
  }
}
</script>
