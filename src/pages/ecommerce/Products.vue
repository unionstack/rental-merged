<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead>
        <BlockHeadBetween class="flex-wrap gap g-2">
            <BlockHeadContent>
                <BlockTitle tag="h2">Products</BlockTitle>
                <Breadcrumb divider="arrow">
                    <BreadcrumbItem to="/">Home</BreadcrumbItem>
                    <BreadcrumbItem to="/">Ecommerce</BreadcrumbItem>
                    <BreadcrumbItem active>Products</BreadcrumbItem>
                </Breadcrumb>
            </BlockHeadContent>
            <BlockHeadContent>
                <ul class="d-flex">
                    <li>
                        <Button size="md" class="d-md-none" as="RouterLink" to="/ecommerce/add-product" variant="primary">
                            <Icon icon="plus"></Icon>
                            <span>Add</span>
                        </Button>
                    </li>
                    <li>
                        <Button class="d-none d-md-inline-flex" as="RouterLink" to="/ecommerce/add-product" variant="primary">
                            <Icon icon="plus"></Icon>
                            <span>Add Product</span>
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
                                <OverlineTitle tag="span">products</OverlineTitle>
                            </th>
                            <th class="tb-col">
                                <OverlineTitle tag="span">sku</OverlineTitle>
                            </th>
                            <th class="tb-col">
                                <OverlineTitle tag="span">qty</OverlineTitle>
                            </th>
                            <th class="tb-col tb-col-xl">
                                <OverlineTitle tag="span">price</OverlineTitle>
                            </th>
                            <th class="tb-col tb-col-xxl">
                                <OverlineTitle tag="span">rating</OverlineTitle>
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
                        <template v-if="productData.length > 0">
                            <tr v-for="product in productData" :key="product.id">
                                <td class="tb-col tb-col-check">
                                    <FormCheck>
                                        <FormCheckInput type="checkbox" value="" />
                                    </FormCheck>
                                </td>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle size="md">
                                            <Img :src="product.src" alt="product" />
                                        </Media>
                                        <MediaText>
                                            <router-link :to="`/ecommerce/edit-product/${product.id}`" class="title">{{product.name}}</router-link>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col">
                                    <span class="small">{{product.sku}}</span>
                                </td>
                                <td class="tb-col">
                                    <div class="blank">
                                        <div v-if="product.qty === '0'" class="d-flex align-items-center">
                                            <span class="text-danger me-1 small">{{product.qty}}</span>
                                            <Badge variant="danger-soft">Sold out</Badge>
                                        </div>
                                        <div v-else-if="product.qty === '4'" class="d-flex align-items-center">
                                            <span class="text-warning me-1 small">{{product.qty}}</span>
                                            <Badge variant="warning-soft">Low stock</Badge>
                                        </div>
                                        <span v-else class="small">
                                            {{product.qty}} 
                                        </span>
                                    </div>
                                </td>
                                <td class="tb-col">
                                    <span class="small">${{product.price}}</span>
                                </td>
                                <td class="tb-col">
                                    <Rating :ratings="product.rating"/>
                                </td>
                                <td class="tb-col">
                                   <Badge :variant="`${
                                        product.status === 'Published' ? 'success-soft' 
                                        : product.status === 'Scheduled' ? 'info-soft' 
                                        : product.status === 'Inactive' ? 'danger-soft' 
                                        : 'secondary-soft'}`"
                                        > 
                                        {{product.status}}
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
                                                        <router-link :to="`/ecommerce/edit-product/${product.id}`"><Icon icon="edit"></Icon><span>Edit</span></router-link>
                                                    </ListItem>
                                                    <ListItem>
                                                        <router-link :to="`/ecommerce/edit-product/${product.id}`"><Icon icon="trash"></Icon><span>Delete</span></router-link>
                                                    </ListItem>
                                                    <ListItem>
                                                        <router-link to="/ecommerce/products"><Icon icon="eye"></Icon><span>View Details</span></router-link>
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
                                    No product found!
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
        </div>
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
import { products } from '@/store/products';
import Paginate from "vuejs-paginate-next";
import Rating from '@/components/rating/Rating.vue';

export default {
  name: 'ProductsPage', 
  components: {
    Layout,
    Block,
    BlockHead,
    BlockHeadContent,
    BlockHeadBetween,
    BlockTitle,
    Table,
    TableHead,
    TableBody,
    Card,
    Breadcrumb,
    BreadcrumbItem,
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
    Paginate,
    FormCheck,
    FormCheckInput,
    Rating
  },
  data(){
    return{
        products,
        searchInput: '',
        perPage: 10,
        page: 1
    }
  },
  methods: {
    filteredProducts(input){
        const filter = products.filter((product) => {
            return product.name.toLowerCase().includes(input.toLowerCase())
        })
        return filter;
    }
  },
  computed:{
    filterData(){
        return this.searchInput === '' ? products : this.filteredProducts(this.searchInput)
    },
    productData(){
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