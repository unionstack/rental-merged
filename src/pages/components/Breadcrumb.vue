<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Breadcrumb</BlockTitle>
        <BlockText>Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead>
          <BlockText class="wide-md"> <strong class="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component. 
          </BlockText>
          <BlockText>How to import component and use see the <a href="#">docs</a></BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Breadcrumb>
              <BreadcrumbItem active>Home</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
              <BreadcrumbItem to="/">Home</BreadcrumbItem>
              <BreadcrumbItem active>Library</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
              <BreadcrumbItem to="/">Home</BreadcrumbItem>
              <BreadcrumbItem to="/">Library</BreadcrumbItem>
              <BreadcrumbItem active>Data</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
        <CodePreview title="code example">
          &lt;Breadcrumb&gt;
              &lt;BreadcrumbItem active&gt;Home&lt;/BreadcrumbItem&gt;
          &lt;/Breadcrumb&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
          <BlockTitle>Dividers</BlockTitle>
          <BlockText>We use <code>divider</code> prop for a divider</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Breadcrumb divider="arrow">
              <BreadcrumbItem active>Home</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb divider="arrow">
              <BreadcrumbItem to="/">Home</BreadcrumbItem>
              <BreadcrumbItem active>Library</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb divider="arrow">
              <BreadcrumbItem to="/">Home</BreadcrumbItem>
              <BreadcrumbItem to="/">Library</BreadcrumbItem>
              <BreadcrumbItem active>Data</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
        <CodePreview title="code example">
          &lt;Breadcrumb divider=&quot;arrow&quot;&gt;
              &lt;BreadcrumbItem active&gt;Home&lt;/BreadcrumbItem&gt;
          &lt;/Breadcrumb&gt;
        </CodePreview>
      </Card>
    </Block>
  </Layout>
</template>

<script>
import Layout from '@/layout/Index.vue'
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockText } from '@/components/block/Block.vue';
import Card from '@/components/uielements/card/Card.vue';
import CardBody from '@/components/uielements/card/CardBody.vue';
import CodePreview from '@/components/code-preview/CodePreview.vue';
import Breadcrumb from '@/components/uielements/breadcrumb/Breadcrumb.vue';
import BreadcrumbItem from '@/components/uielements/breadcrumb/BreadcrumbItem.vue';

export default {
  name: 'BreadcrumbPage', 
  components: {
    Layout,
    Block,
    BlockHead,
    BlockHeadContent,
    BlockTitle,
    BlockText,
    Card,
    CardBody,
    CodePreview,
    Breadcrumb,
    BreadcrumbItem
  },
}
</script>
