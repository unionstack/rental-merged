<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Colors</BlockTitle>
        <BlockText>Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead>
          <BlockTitle>Colors</BlockTitle>
          <BlockText>Use <code>.text-{name}</code> colorize text.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <p class="text-primary">.text-primary</p>
          <p class="text-secondary">.text-secondary</p>
          <p class="text-success">.text-success</p>
          <p class="text-danger">.text-danger</p>
          <p class="text-warning bg-dark">.text-warning</p>
          <p class="text-info bg-dark">.text-info</p>
          <p class="text-light bg-dark">.text-light</p>
          <p class="text-dark">.text-dark</p>
          <p class="text-body">.text-body</p>
          <p class="text-muted">.text-muted</p>
          <p class="text-white bg-dark">.text-white</p>
          <p class="text-black-50">.text-black-50</p>
          <p class="text-white-50 bg-dark">.text-white-50</p>
        </CardBody>
        <CodePreview title="code example">
          &lt;p class=&quot;text-primary&quot;&gt;.text-primary&lt;/p&gt;
          &lt;p class=&quot;text-secondary&quot;&gt;.text-secondary&lt;/p&gt;
          &lt;p class=&quot;text-success&quot;&gt;.text-success&lt;/p&gt;
          &lt;p class=&quot;text-danger&quot;&gt;.text-danger&lt;/p&gt;
          &lt;p class=&quot;text-warning bg-dark&quot;&gt;.text-warning&lt;/p&gt;
          &lt;p class=&quot;text-info bg-dark&quot;&gt;.text-info&lt;/p&gt;
          &lt;p class=&quot;text-light bg-dark&quot;&gt;.text-light&lt;/p&gt;
          &lt;p class=&quot;text-dark&quot;&gt;.text-dark&lt;/p&gt;
          &lt;p class=&quot;text-body&quot;&gt;.text-body&lt;/p&gt;
          &lt;p class=&quot;text-muted&quot;&gt;.text-muted&lt;/p&gt;
          &lt;p class=&quot;text-white bg-dark&quot;&gt;.text-white&lt;/p&gt;
          &lt;p class=&quot;text-black-50&quot;&gt;.text-black-50&lt;/p&gt;
          &lt;p class=&quot;text-white-50 bg-dark&quot;&gt;.text-white-50&lt;/p&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
          <BlockTitle>Opacity</BlockTitle>
          <BlockText>Use <code>.text-opacity-{value}</code> utilities: </BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="text-primary">This is default primary text</div>
          <div class="text-primary text-opacity-75">This is 75% opacity primary text</div>
          <div class="text-primary text-opacity-50">This is 50% opacity primary text</div>
          <div class="text-primary text-opacity-25">This is 25% opacity primary text</div>
        </CardBody>
        <CodePreview title="code example">
          &lt;div class=&quot;text-primary&quot;&gt;This is default primary text&lt;/div&gt;
          &lt;div class=&quot;text-primary text-opacity-75&quot;&gt;This is 75% opacity primary text&lt;/div&gt;
          &lt;div class=&quot;text-primary text-opacity-50&quot;&gt;This is 50% opacity primary text&lt;/div&gt;
          &lt;div class=&quot;text-primary text-opacity-25&quot;&gt;This is 25% opacity primary text&lt;/div&gt;
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
  name: 'ColorsPage', 
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
