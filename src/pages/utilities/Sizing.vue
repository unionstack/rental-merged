<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Sizing</BlockTitle>
        <BlockText>Easily make an element as wide or as tall with our width and height utilities.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead>
          <BlockTitle>Width</BlockTitle>
          <BlockText>Includes support for <code>25%, 50%, 75%, 100%</code>, and auto by default. Modify those values as you need to generate different utilities here.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="w-25 p-3" style="background-color: #eee;">Width 25%</div>
          <div class="w-50 p-3" style="background-color: #eee;">Width 50%</div>
          <div class="w-75 p-3" style="background-color: #eee;">Width 75%</div>
          <div class="w-100 p-3" style="background-color: #eee;">Width 100%</div>
          <div class="w-auto p-3" style="background-color: #eee;">Width auto</div>
        </CardBody>
        <CodePreview title="code example">
          &lt;div class=&quot;w-25 p-3&quot; style=&quot;background-color: #eee;&quot;&gt;Width 25%&lt;/div&gt;
          &lt;div class=&quot;w-50 p-3&quot; style=&quot;background-color: #eee;&quot;&gt;Width 50%&lt;/div&gt;
          &lt;div class=&quot;w-75 p-3&quot; style=&quot;background-color: #eee;&quot;&gt;Width 75%&lt;/div&gt;
          &lt;div class=&quot;w-100 p-3&quot; style=&quot;background-color: #eee;&quot;&gt;Width 100%&lt;/div&gt;
          &lt;div class=&quot;w-auto p-3&quot; style=&quot;background-color: #eee;&quot;&gt;Width auto&lt;/div&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
          <BlockTitle>Height</BlockTitle>
          <BlockText>Height support for <code>25%, 50%, 75%, 100%</code>, and auto by default. Modify those values as you need to generate different utilities here.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div style="height: 100px; background-color: rgba(255,0,0,0.1);">
              <div class="h-25 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 25%</div>
              <div class="h-50 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 50%</div>
              <div class="h-75 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 75%</div>
              <div class="h-100 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 100%</div>
              <div class="h-auto d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height auto</div>
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;div style=&quot;height: 100px; background-color: rgba(255,0,0,0.1);&quot;&gt;
              &lt;div class=&quot;h-25 d-inline-block&quot; style=&quot;width: 120px; background-color: rgba(0,0,255,.1)&quot;&gt;Height 25%&lt;/div&gt;
              &lt;div class=&quot;h-50 d-inline-block&quot; style=&quot;width: 120px; background-color: rgba(0,0,255,.1)&quot;&gt;Height 50%&lt;/div&gt;
              &lt;div class=&quot;h-75 d-inline-block&quot; style=&quot;width: 120px; background-color: rgba(0,0,255,.1)&quot;&gt;Height 75%&lt;/div&gt;
              &lt;div class=&quot;h-100 d-inline-block&quot; style=&quot;width: 120px; background-color: rgba(0,0,255,.1)&quot;&gt;Height 100%&lt;/div&gt;
              &lt;div class=&quot;h-auto d-inline-block&quot; style=&quot;width: 120px; background-color: rgba(0,0,255,.1)&quot;&gt;Height auto&lt;/div&gt;
          &lt;/div&gt;
        </CodePreview>
      </Card>
    </Block>
  </Layout>
</template>

<script>
import Layout from '@/layout/Index.vue'
import { Block, BlockHead, BlockHeadContent, BlockTitle } from '@/components/block/Block.vue';
import Card from '@/components/uielements/card/Card.vue';
import CardBody from '@/components/uielements/card/CardBody.vue';
import CodePreview from '@/components/code-preview/CodePreview.vue';

export default {
  name: 'SizingPage', 
  components: {
    Layout,
    Block,
    BlockHead,
    BlockHeadContent,
    BlockTitle,
    Card,
    CardBody,
    CodePreview,
  },
}
</script>
