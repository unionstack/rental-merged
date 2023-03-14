<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Borders</BlockTitle>
        <BlockText>Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead>
          <BlockTitle>Additive</BlockTitle>
          <BlockText>Add borders to custom elements:</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="border-utils">
              <span class="border"></span>
              <span class="border-top"></span>
              <span class="border-end"></span>
              <span class="border-bottom"></span>
              <span class="border-start"></span>
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;span class=&quot;border&quot;&gt;&lt;/span&gt;
              &lt;span class=&quot;border-top&quot;&gt;&lt;/span&gt;
              &lt;span class=&quot;border-end&quot;&gt;&lt;/span&gt;
              &lt;span class=&quot;border-bottom&quot;&gt;&lt;/span&gt;
              &lt;span class=&quot;border-start&quot;&gt;&lt;/span&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
          <BlockTitle>Subtractive</BlockTitle>
          <BlockText>Or remove borders:</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="border-utils border-utils-0">
              <span class="border-0"></span>
              <span class="border-top-0"></span>
              <span class="border-end-0"></span>
              <span class="border-bottom-0"></span>
              <span class="border-start-0"></span>
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;span class=&quot;border-0&quot;&gt;&lt;/span&gt;
              &lt;span class=&quot;border-top-0&quot;&gt;&lt;/span&gt;
              &lt;span class=&quot;border-end-0&quot;&gt;&lt;/span&gt;
              &lt;span class=&quot;border-bottom-0&quot;&gt;&lt;/span&gt;
              &lt;span class=&quot;border-start-0&quot;&gt;&lt;/span&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
          <BlockTitle>Color</BlockTitle>
          <BlockText>Change the border color using utilities built on our theme colors.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="border-utils">
              <span class="border border-primary"></span>
              <span class="border border-secondary"></span>
              <span class="border border-success"></span>
              <span class="border border-danger"></span>
              <span class="border border-warning"></span>
              <span class="border border-info"></span>
              <span class="border border-light"></span>
              <span class="border border-dark"></span>
              <span class="border border-white"></span>
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;span class=&quot;border border-primary&quot;&gt;&lt;/span&gt;
              &lt;span class=&quot;border border-secondary&quot;&gt;&lt;/span&gt;
              &lt;span class=&quot;border border-success&quot;&gt;&lt;/span&gt;
              &lt;span class=&quot;border border-danger&quot;&gt;&lt;/span&gt;
              &lt;span class=&quot;border border-warning&quot;&gt;&lt;/span&gt;
              &lt;span class=&quot;border border-info&quot;&gt;&lt;/span&gt;
              &lt;span class=&quot;border border-light&quot;&gt;&lt;/span&gt;
              &lt;span class=&quot;border border-dark&quot;&gt;&lt;/span&gt;
              &lt;span class=&quot;border border-white&quot;&gt;&lt;/span&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
          <BlockTitle>Opacity</BlockTitle>
          <BlockText><code>.border-opacity-{value}</code> utilities:</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="border border-success p-2 mb-2">This is default success border</div>
          <div class="border border-success p-2 mb-2 border-opacity-75">This is 75% opacity success border</div>
          <div class="border border-success p-2 mb-2 border-opacity-50">This is 50% opacity success border</div>
          <div class="border border-success p-2 mb-2 border-opacity-25">This is 25% opacity success border</div>
          <div class="border border-success p-2 border-opacity-10">This is 10% opacity success border</div>
        </CardBody>
        <CodePreview title="code example">
          &lt;div class=&quot;border border-success p-2 mb-2&quot;&gt;This is default success border&lt;/div&gt;
          &lt;div class=&quot;border border-success p-2 mb-2 border-opacity-75&quot;&gt;This is 75% opacity success border&lt;/div&gt;
          &lt;div class=&quot;border border-success p-2 mb-2 border-opacity-50&quot;&gt;This is 50% opacity success border&lt;/div&gt;
          &lt;div class=&quot;border border-success p-2 mb-2 border-opacity-25&quot;&gt;This is 25% opacity success border&lt;/div&gt;
          &lt;div class=&quot;border border-success p-2 border-opacity-10&quot;&gt;This is 10% opacity success border&lt;/div&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
          <BlockTitle>Width</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="border-utils">
              <span class="border border-1"></span>
              <span class="border border-2"></span>
              <span class="border border-3"></span>
              <span class="border border-4"></span>
              <span class="border border-5"></span>
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;span class=&quot;border border-1&quot;&gt;&lt;/span&gt;
              &lt;span class=&quot;border border-2&quot;&gt;&lt;/span&gt;
              &lt;span class=&quot;border border-3&quot;&gt;&lt;/span&gt;
              &lt;span class=&quot;border border-4&quot;&gt;&lt;/span&gt;
              &lt;span class=&quot;border border-5&quot;&gt;&lt;/span&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
          <BlockTitle>Radius</BlockTitle>
          <BlockText>Add classes to an element to easily round its corners.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="rounded-utils">
              <span class="bg-primary-soft rounded"></span>
              <span class="bg-primary-soft rounded-top"></span>
              <span class="bg-primary-soft rounded-end"></span>
              <span class="bg-primary-soft rounded-bottom"></span>
              <span class="bg-primary-soft rounded-start"></span>
              <span class="bg-primary-soft rounded-circle"></span>
              <span class="bg-primary-soft rounded-pill"></span>
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;span class=&quot;bg-primary-soft rounded&quot;&gt;&lt;/span&gt;
          &lt;span class=&quot;bg-primary-soft rounded-top&quot;&gt;&lt;/span&gt;
          &lt;span class=&quot;bg-primary-soft rounded-end&quot;&gt;&lt;/span&gt;
          &lt;span class=&quot;bg-primary-soft rounded-bottom&quot;&gt;&lt;/span&gt;
          &lt;span class=&quot;bg-primary-soft rounded-start&quot;&gt;&lt;/span&gt;
          &lt;span class=&quot;bg-primary-soft rounded-circle&quot;&gt;&lt;/span&gt;
          &lt;span class=&quot;bg-primary-soft rounded-pill&quot;&gt;&lt;/span&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
          <BlockTitle>Sizes</BlockTitle>
          <BlockText>Use the <code>.rounded-{value}</code> classes for larger or smaller rounded corners. Sizes range from 0 to 5, and can be configured by modifying the utilities API..</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="rounded-utils">
              <span class="bg-primary-soft rounded-0"></span>
              <span class="bg-primary-soft rounded-1"></span>
              <span class="bg-primary-soft rounded-2"></span>
              <span class="bg-primary-soft rounded-3"></span>
              <span class="bg-primary-soft rounded-4"></span>
              <span class="bg-primary-soft rounded-5"></span>
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;span class=&quot;bg-primary-soft rounded-0&quot;&gt;&lt;/span&gt;
          &lt;span class=&quot;bg-primary-soft rounded-1&quot;&gt;&lt;/span&gt;
          &lt;span class=&quot;bg-primary-soft rounded-2&quot;&gt;&lt;/span&gt;
          &lt;span class=&quot;bg-primary-soft rounded-3&quot;&gt;&lt;/span&gt;
          &lt;span class=&quot;bg-primary-soft rounded-4&quot;&gt;&lt;/span&gt;
          &lt;span class=&quot;bg-primary-soft rounded-5&quot;&gt;&lt;/span&gt;
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

export default {
  name: 'BordersPage', 
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
  },
}
</script>
