<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head wide-md">
      <BlockHeadContent>
        <BlockTitle tag="h1">Spacing</BlockTitle>
        <BlockText>Bootstrap includes a wide range of shorthand responsive margin, padding, and gap utility classes to modify an element’s appearance.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Horizontal centering</BlockTitle>
          <BlockText>Additionally, Bootstrap also includes an <code>.mx-auto</code> class for horizontally centering fixed-width block level content—that is, content that has <code>display: block</code> and a width set—by setting the horizontal margins to auto.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="mx-auto bg-secondary text-white" style="width: 200px;">
              Centered element
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;div class=&quot;mx-auto bg-secondary text-white&quot; style=&quot;width: 200px;&quot;&gt;
              Centered element
          &lt;/div&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Gap</BlockTitle>
          <BlockText>When using <code>display: grid</code>, you can make use of gap utilities on the parent grid container.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="d-grid gap-3">
              <div class="p-2 bg-light border">Grid item 1</div>
              <div class="p-2 bg-light border">Grid item 2</div>
              <div class="p-2 bg-light border">Grid item 3</div>
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;div class=&quot;d-grid gap-3&quot;&gt;
              &lt;div class=&quot;p-2 bg-light border&quot;&gt;Grid item 1&lt;/div&gt;
              &lt;div class=&quot;p-2 bg-light border&quot;&gt;Grid item 2&lt;/div&gt;
              &lt;div class=&quot;p-2 bg-light border&quot;&gt;Grid item 3&lt;/div&gt;
          &lt;/div&gt;
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
  name: 'SpecingPage', 
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
