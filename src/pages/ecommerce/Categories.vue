<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead>
        <BlockHeadBetween class="flex-wrap gap g-2">
            <BlockHeadContent>
                <BlockTitle tag="h2">Categories</BlockTitle>
                <Breadcrumb divider="arrow">
                    <BreadcrumbItem to="/">Home</BreadcrumbItem>
                    <BreadcrumbItem to="/">Ecommerce</BreadcrumbItem>
                    <BreadcrumbItem active>Categories</BreadcrumbItem>
                </Breadcrumb>
            </BlockHeadContent>
            <BlockHeadContent>
                <ul class="d-flex">
                    <li>
                        <Button size="md" class="d-md-none" as="RouterLink" to="/ecommerce/add-category" variant="primary">
                            <Icon icon="plus"></Icon>
                            <span>Add</span>
                        </Button>
                    </li>
                    <li>
                        <Button class="d-none d-md-inline-flex" as="RouterLink" to="/ecommerce/add-category" variant="primary">
                            <Icon icon="plus"></Icon>
                            <span>Add Category</span>
                        </Button>
                    </li>
                </ul>
            </BlockHeadContent>
        </BlockHeadBetween>
    </BlockHead>

    <Block>
      <Card>
        <div class="data-table-container">
            <div class="data-table-top">
                <div class="data-table-search">
                    <input v-model="searchInput" class="form-control" placeholder="Search by name" type="text">
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
            <div class="table-responsive">
                <Table middle class="mb-0">
                    <TableHead variant="light">
                        <tr>
                            <th class="tb-col tb-col-check">
                                <FormCheck>
                                    <FormCheckInput type="checkbox" value="" />
                                </FormCheck>
                            </th>
                            <th class="tb-col">
                                <OverlineTitle tag="span">category</OverlineTitle>
                            </th>
                            <th class="tb-col tb-col-md">
                                <OverlineTitle tag="span">type</OverlineTitle>
                            </th>
                            <th class="tb-col tb-col-sm">
                                <OverlineTitle tag="span">items</OverlineTitle>
                            </th>
                            <th class="tb-col tb-col-end">
                                <OverlineTitle tag="span">Action</OverlineTitle>
                            </th>
                        </tr>
                    </TableHead>
                    <TableBody>
                        <template v-if="categoryData.length > 0">
                            <tr v-for="category in categoryData" :key="category.id">
                                <td class="tb-col tb-col-check">
                                    <FormCheck>
                                        <FormCheckInput type="checkbox" value="" />
                                    </FormCheck>
                                </td>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle>
                                            <Img :src="category.src" alt="category" />
                                        </Media>
                                        <MediaText>
                                            <router-link :to="`/ecommerce/edit-category/${category.id}`" class="title">{{category.name}}</router-link>
                                            <div class="text smaller d-none d-sm-block">{{category.description}}</div>
                                            <div class="d-sm-none small text-light">
                                                <span>{{category.items}}</span>
                                            </div>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-md">
                                   <Badge :variant="`${
                                        category.status === 'Main' ? 'primary-soft' 
                                        : category.status === 'Sub' ? 'success-soft' 
                                        : 'secondary-soft'}`"
                                        > 
                                        {{category.status}}
                                    </Badge>
                                </td>
                                <td class="tb-col tb-col-sm">
                                    <Badge variant="danger-soft" v-if="category.items === '0'">Stock out</Badge>
                                    <div class="d-flex align-items-center" v-else-if="category.items <= '12'">
                                        <span class="text-warning me-1 small">{{category.items}}</span>
                                        <Badge variant="warning-soft">Low</Badge>
                                    </div>
                                    <span class="small" v-else>
                                        {{category.items}}
                                    </span>
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
                                                        <router-link :to="`/ecommerce/edit-category/${category.id}`"><Icon icon="edit"></Icon><span>Edit</span></router-link>
                                                    </ListItem>
                                                    <ListItem>
                                                        <router-link :to="`/ecommerce/edit-category/${category.id}`"><Icon icon="trash"></Icon><span>Delete</span></router-link>
                                                    </ListItem>
                                                    <ListItem>
                                                        <router-link to="/ecommerce/categories"><Icon icon="eye"></Icon><span>View Details</span></router-link>
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
                                    No category found!
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
        </div><!-- .data-table-container -->
        
      </Card>
    </Block>
  </Layout>

</template>

<script>
import Layout from '@/layout/Index.vue';
import { Block, BlockHead, BlockHeadContent, BlockHeadBetween, BlockTitle, } from '@/components/block/Block.vue';
import Card from '@/components/uielements/card/Card.vue';
import Breadcrumb from '@/components/uielements/breadcrumb/Breadcrumb.vue';
import BreadcrumbItem from '@/components/uielements/breadcrumb/BreadcrumbItem.vue';
import Table from '@/components/utilities/table/Table.vue';
import TableHead from '@/components/utilities/table/TableHead.vue';
import TableBody from '@/components/utilities/table/TableBody.vue';
import OverlineTitle from '@/components/misc/OverlineTitle.vue';
import Button from '@/components/uielements/button/Button.vue';
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
import Img from '@/components/img/Img.vue';
import FormCheck from '@/components/forms/form-check/FormCheck.vue';
import FormCheckInput from '@/components/forms/form-check/FormCheckInput.vue';
import { categories } from '@/store/products';
import Paginate from "vuejs-paginate-next";

export default {
  name: 'CategoryPage', 
  components: {
    Layout,
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
    Img,
    FormCheck,
    FormCheckInput,
    Paginate
  },
  data(){
    return{
        categories,
        searchInput: '',
        perPage: 10,
        page: 1
    }
  },
  methods: {
    filteredProducts(input){
        const filter = categories.filter((product) => {
            return product.name.toLowerCase().includes(input.toLowerCase())
        })
        return filter;
    }
  },
  computed:{
    filterData(){
        return this.searchInput === '' ? categories : this.filteredProducts(this.searchInput)
    },
    categoryData(){
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