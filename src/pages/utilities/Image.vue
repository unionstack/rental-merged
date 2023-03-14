<template>
  <Layout content="container">
    <BlockHead class="nk-page-head wide-md">
      <BlockHeadContent>
        <BlockTitle tag="h1">Images</BlockTitle>
        <BlockText>Documentation and examples for opting images into responsive behavior (so they never become wider than their parent) and add lightweight styles to them—all via classes.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead class="wide-md">
        <BlockText><strong class="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component. 
        </BlockText>
        <BlockText>How to import component and use see the <a href="#">docs</a></BlockText>
        <BlockTitle>Responsive images</BlockTitle>
        <BlockText>Images in Bootstrap are made responsive with <code>fluid</code> prop. This applies <code>max-width: 100%;</code> and <code>height: auto;</code> to the image so that it scales with the parent width. </BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Img src="/images/preview/a.jpg" fluid shape="rounded"/>
        </CardBody>
        <CodePreview title="code example">
          &lt;Img src=&quot;/images/preview/a.jpg&quot; fluid shape=&quot;rounded&quot;/&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Image thumbnails</BlockTitle>
        <BlockText>you can use <code>thumbnail</code> prop to give an image a rounded 1px border appearance. </BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Img src="/images/preview/a.jpg" thumbnail/>
        </CardBody>
        <CodePreview title="code example">
          &lt;Img src=&quot;/images/preview/a.jpg&quot; thumbnail/&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Aligning images</BlockTitle>
        <BlockText>Align images with the helper float classes or text alignment classes. block-level images can be centered using the .mx-auto margin utility class.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Img src="/images/preview/a.jpg" shape="rounded" class="float-start"/>
          <Img src="/images/preview/a.jpg" shape="rounded" class="float-end"/>
        </CardBody>
        <CodePreview title="code example">
          &lt;Img src=&quot;/images/preview/a.jpg&quot; shape=&quot;rounded&quot; class=&quot;float-start&quot;/&gt;
          &lt;Img src=&quot;/images/preview/a.jpg&quot; shape=&quot;rounded&quot; class=&quot;float-end&quot;/&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <Card>
        <CardBody>
          <Img src="/images/preview/a.jpg" shape="rounded" class="mx-auto d-block"/>
        </CardBody>
        <CodePreview title="code example">
          &lt;Img src=&quot;/images/preview/a.jpg&quot; shape=&quot;rounded&quot; class=&quot;mx-auto d-block&quot;/&gt;
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
import Img from '@/components/img/Img.vue';

export default {
  name: 'ImagesPage', 
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
    Img
  },
}
</script>
