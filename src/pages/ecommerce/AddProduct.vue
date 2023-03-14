<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead>
        <BlockHeadBetween class="flex-wrap gap g-2">
            <BlockHeadContent>
                <BlockTitle tag="h2">Add Product</BlockTitle>
                <Breadcrumb divider="arrow">
                    <BreadcrumbItem to="/">Home</BreadcrumbItem>
                    <BreadcrumbItem to="/">Ecommerce</BreadcrumbItem>
                    <BreadcrumbItem active>Add Product</BreadcrumbItem>
                </Breadcrumb>
            </BlockHeadContent>
            <BlockHeadContent>
                <ul class="d-flex">
                    <li>
                        <Button size="md" class="d-md-none" as="RouterLink" to="/ecommerce/products" variant="primary">
                            <Icon icon="eye"></Icon>
                            <span>View</span>
                        </Button>
                    </li>
                    <li>
                        <Button class="d-none d-md-inline-flex" as="RouterLink" to="/ecommerce/products" variant="primary">
                            <Icon icon="eye"></Icon>
                            <span>View Products</span>
                        </Button>
                    </li>
                </ul>
            </BlockHeadContent>
        </BlockHeadBetween>
    </BlockHead>

    <Block>
        <form action="#">
            <Row utils="g-gs">
                <Col xxl="9">
                    <Row utils="g-gs">
                        <Col sm="12">
                            <Card gutter="md">
                                <CardBody>
                                    <Row utils="g-gs">
                                        <Col lg="12">
                                            <div class="form-group">
                                                <FormLabel>Product Name</FormLabel>
                                                <FormInputWrap>
                                                    <FormInput type="text" placeholder="Product Name" />
                                                </FormInputWrap>
                                            </div>
                                        </Col>
                                        <Col lg="6">
                                            <div class="form-group">
                                                <FormLabel>Base Price</FormLabel>
                                                <FormInputWrap>
                                                    <FormInput type="text" placeholder="Product Price" />
                                                </FormInputWrap>
                                            </div>
                                        </Col>
                                        <Col lg="6">
                                            <div class="form-group">
                                                <FormLabel>Discount Price</FormLabel>
                                                <FormInputWrap>
                                                    <FormInput type="text" placeholder="Discount Price" />
                                                </FormInputWrap>
                                            </div>
                                        </Col>
                                        <Col lg="6">
                                            <div class="form-group">
                                                <FormLabel>Tax Class</FormLabel>
                                                <FormInputWrap>
                                                    <ChoiceSelect id="tax-select" :search="false" :cross="false">
                                                        <ChoiceSelectOption value="">Select an option</ChoiceSelectOption>
                                                        <ChoiceSelectOption value="1">Tax Free</ChoiceSelectOption>
                                                        <ChoiceSelectOption value="2">Taxable Goods</ChoiceSelectOption>
                                                        <ChoiceSelectOption value="3">Downloadable Product</ChoiceSelectOption>
                                                    </ChoiceSelect>
                                                </FormInputWrap>
                                            </div>
                                        </Col>
                                        <Col lg="6">
                                            <div class="form-group">
                                                <FormLabel>VAT Amount (%)</FormLabel>
                                                <FormInputWrap>
                                                    <FormInput type="text"/>
                                                </FormInputWrap>
                                            </div>
                                        </Col>
                                        <Col lg="6">
                                            <div class="form-group">
                                                <FormLabel>SKU</FormLabel>
                                                <FormInputWrap>
                                                    <FormInput type="text" placeholder="SKU number"/>
                                                </FormInputWrap>
                                            </div>
                                        </Col>
                                        <Col lg="6">
                                            <div class="form-group">
                                                <FormLabel>Barcode</FormLabel>
                                                <FormInputWrap>
                                                    <FormInput type="text" placeholder="Barcode number"/>
                                                </FormInputWrap>
                                            </div>
                                        </Col>
                                        <Col lg="12">
                                            <div class="form-group">
                                                <FormLabel>Quantity</FormLabel>
                                                <Row utils="g-gs">
                                                    <Col lg="6">
                                                        <FormInputWrap>
                                                            <FormInput type="number" placeholder="On shelf"/>
                                                        </FormInputWrap>
                                                    </Col>
                                                    <Col lg="6">
                                                        <FormInputWrap>
                                                            <FormInput type="text" placeholder="In warehouse"/>
                                                        </FormInputWrap>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                        <Col lg="12">
                                            <div class="form-group">
                                                <FormLabel>Description</FormLabel>
                                                <Quill id="description-quill" toolbar="minimal" placeholder="Write product description here..."></Quill>
                                            </div>
                                        </Col>
                                        <Col lg="12">
                                            <div class="form-group">
                                                <FormCheck>
                                                    <FormCheckInput type="checkbox" value="" id="addProductshippingCheckbox" />
                                                    <FormCheckLabel for="addProductshippingCheckbox">This is a physical product</FormCheckLabel>
                                                </FormCheck>
                                                <div class="smaller">Set if the product is a physical or digital item. Physical products may require shipping.</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12">
                            <div class="card card-gutter-md">
                                <div class="card-body">
                                    <div class="form-group">
                                        <label class="form-label">Upload Media</label>
                                        <div class="form-control-wrap">
                                            <Dropzone id="upload-media" :maxFiles="1" icon="img"></Dropzone>
                                        </div>
                                        <div class="form-note mt-3">Set the product media gallery.</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm="12">
                            <ul class="d-flex align-items-center gap g-3">
                                <li>
                                    <Button type="submit" variant="primary">Save Changes</Button>
                                </li>
                                <li>
                                    <Button as="RouterLink" to="/ecommerce/products" class="border-0">Cancel</Button>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col xxl="3">
                    <Card gutter="md">
                        <CardBody>
                            <Row utils="g-gs">
                                <Col lg="12">
                                    <div class="form-group">
                                        <FormLabel>Thumbnail</FormLabel>
                                        <FormInputWrap>
                                            <ImageUpload src="/images/avatar/avatar-placeholder.jpg"></ImageUpload>
                                        </FormInputWrap>
                                        <div class="form-note mt-3">Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted.</div>
                                    </div><!-- .form-group -->
                                </Col>
                                <Col lg="12">
                                    <div class="form-group">
                                        <FormLabel>Categories</FormLabel>
                                        <FormInputWrap>
                                            <ChoiceSelect id="category-select" selectText="" multiple>
                                                <ChoiceSelectOption value="">Select an option</ChoiceSelectOption>
                                                <ChoiceSelectOption value="1">Computers</ChoiceSelectOption>
                                                <ChoiceSelectOption value="2">Watches</ChoiceSelectOption>
                                                <ChoiceSelectOption value="3">Headphones</ChoiceSelectOption>
                                                <ChoiceSelectOption value="4">Footwear</ChoiceSelectOption>
                                                <ChoiceSelectOption value="5">Cameras</ChoiceSelectOption>
                                                <ChoiceSelectOption value="6">Shirts</ChoiceSelectOption>
                                                <ChoiceSelectOption value="7">Household</ChoiceSelectOption>
                                                <ChoiceSelectOption value="8">Handbags</ChoiceSelectOption>
                                                <ChoiceSelectOption value="9">Wines</ChoiceSelectOption>
                                            </ChoiceSelect>
                                        </FormInputWrap>
                                    </div><!-- .form-group -->
                                </Col>
                                <Col lg="12">
                                    <div class="form-group">
                                        <FormLabel>Tags</FormLabel>
                                        <FormInputWrap>
                                            <ChoiceInput id="tags-input" value="" type="text" placeholder="Add tags to a product" />
                                        </FormInputWrap>
                                    </div><!-- .form-group -->
                                </Col>
                                <Col lg="12">
                                    <div class="form-group">
                                        <FormLabel>Status</FormLabel>
                                        <FormInputWrap>
                                            <ChoiceSelect id="status-select" selectText="" :search="false">
                                                <ChoiceSelectOption value="">Select an option</ChoiceSelectOption>
                                                <ChoiceSelectOption value="1">Published</ChoiceSelectOption>
                                                <ChoiceSelectOption value="2">Draft</ChoiceSelectOption>
                                                <ChoiceSelectOption value="3">Scheduled</ChoiceSelectOption>
                                                <ChoiceSelectOption value="4">Inactive</ChoiceSelectOption>
                                            </ChoiceSelect>
                                        </FormInputWrap>
                                    </div><!-- .form-group -->
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </form>
    </Block>
  </Layout>

</template>

<script>
import Layout from '@/layout/Index.vue';
import Row from '@/components/layout/Row.vue';
import Col from '@/components/layout/Col.vue';
import { Block, BlockHead, BlockHeadContent, BlockHeadBetween, BlockTitle, } from '@/components/block/Block.vue';
import Card from '@/components/uielements/card/Card.vue';
import CardBody from '@/components/uielements/card/CardBody.vue';
import Breadcrumb from '@/components/uielements/breadcrumb/Breadcrumb.vue';
import BreadcrumbItem from '@/components/uielements/breadcrumb/BreadcrumbItem.vue';
import Button from '@/components/uielements/button/Button.vue';
import Icon from '@/components/icon/Icon.vue';
import FormLabel from '@/components/forms/form-label/FormLabel.vue';
import FormInput from '@/components/forms/input/FormInput.vue';
import FormInputWrap from '@/components/forms/input/FormInputWrap.vue';
import FormCheck from '@/components/forms/form-check/FormCheck.vue';
import FormCheckInput from '@/components/forms/form-check/FormCheckInput.vue';
import FormCheckLabel from '@/components/forms/form-check/FormCheckLabel.vue';
import ImageUpload from '@/components/forms/form-upload/ImageUpload.vue';
import ChoiceInput from '@/components/choices/ChoiceInput.vue';
import ChoiceSelect from '@/components/choices/ChoiceSelect.vue';
import ChoiceSelectOption from '@/components/choices/ChoiceSelectOption.vue';

import Quill from '@/components/forms/editors/Quill.vue';
import Dropzone from '@/components/forms/form-upload/Dropzone.vue';

export default {
    name: 'AddProductPage', 
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
        CardBody,
        Breadcrumb,
        BreadcrumbItem,
        Button,
        Icon,
        FormLabel,
        FormInput,
        FormInputWrap,
        Quill,
        FormCheckInput,
        FormCheckLabel,
        FormCheck,
        Dropzone,
        ImageUpload,
        ChoiceInput,
        ChoiceSelect,
        ChoiceSelectOption
    }
}
</script>