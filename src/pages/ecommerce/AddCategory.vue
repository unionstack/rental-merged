<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead>
        <BlockHeadBetween class="flex-wrap gap g-2">
            <BlockHeadContent>
                <BlockTitle tag="h2">Add Category</BlockTitle>
                <Breadcrumb divider="arrow">
                    <BreadcrumbItem to="/">Home</BreadcrumbItem>
                    <BreadcrumbItem to="/">Ecommerce</BreadcrumbItem>
                    <BreadcrumbItem active>Add Category</BreadcrumbItem>
                </Breadcrumb>
            </BlockHeadContent>
            <BlockHeadContent>
                <ul class="d-flex">
                    <li>
                        <Button size="md" class="d-md-none" as="RouterLink" to="/ecommerce/categories" variant="primary">
                            <Icon icon="eye"></Icon>
                            <span>View</span>
                        </Button>
                    </li>
                    <li>
                        <Button class="d-none d-md-inline-flex" as="RouterLink" to="/ecommerce/categories" variant="primary">
                            <Icon icon="eye"></Icon>
                            <span>View Category</span>
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
                                                <FormLabel>Category Name</FormLabel>
                                                <FormInputWrap>
                                                    <FormInput type="text" placeholder="Category name" />
                                                </FormInputWrap>
                                            </div>
                                        </Col>
                                        <Col lg="12">
                                            <div class="form-group">
                                                <FormLabel>Parent Category</FormLabel>
                                                <FormInputWrap>
                                                    <ChoiceSelect id="parent-cat-select" :search="false" :cross="false">
                                                        <ChoiceSelectOption value="">Select an option</ChoiceSelectOption>
                                                        <ChoiceSelectOption value="1">Toothbrush</ChoiceSelectOption>
                                                        <ChoiceSelectOption value="2">Cameras</ChoiceSelectOption>
                                                        <ChoiceSelectOption value="3">Speakers</ChoiceSelectOption>
                                                        <ChoiceSelectOption value="4">Watches</ChoiceSelectOption>
                                                    </ChoiceSelect>
                                                </FormInputWrap>
                                            </div>
                                        </Col>
                                        <Col lg="6">
                                            <div class="form-group">
                                                <FormLabel>Meta Tag Title</FormLabel>
                                                <FormInputWrap>
                                                    <FormInput type="text" placeholder="Meta tag title"/>
                                                </FormInputWrap>
                                            </div>
                                        </Col>
                                        <Col lg="6">
                                            <div class="form-group">
                                                <FormLabel>Meta Tag Keywords</FormLabel>
                                                <FormInputWrap>
                                                    <ChoiceInput id="tags-input" type="text" placeholder="Meta tag" />
                                                </FormInputWrap>
                                            </div>
                                        </Col>
                                        <Col lg="12">
                                            <div class="form-group">
                                                <FormLabel>Description</FormLabel>
                                                <Quill id="description-quill" toolbar="minimal" placeholder="Write category description here..."></Quill>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
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
                                        <div class="form-note mt-3">Set the category thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted.</div>
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
import ImageUpload from '@/components/forms/form-upload/ImageUpload.vue';
import ChoiceInput from '@/components/choices/ChoiceInput.vue';
import ChoiceSelect from '@/components/choices/ChoiceSelect.vue';
import ChoiceSelectOption from '@/components/choices/ChoiceSelectOption.vue';

import Quill from '@/components/forms/editors/Quill.vue';

export default {
    name: 'AddCategoryPage', 
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
        ImageUpload,
        ChoiceInput,
        ChoiceSelect,
        ChoiceSelectOption
    }
}
</script>