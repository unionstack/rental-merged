<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Background</BlockTitle>
        <BlockText>Convey meaning through background-color and add decoration with gradients.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead>
        <BlockTitle>Example </BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex flex-wrap gap g-3">
              <li><div class="p-3 bg-primary text-white">.bg-primary</div></li>
              <li><div class="p-3 bg-secondary text-white">.bg-secondary</div></li>
              <li><div class="p-3 bg-success text-white">.bg-success</div></li>
              <li><div class="p-3 bg-danger text-white">.bg-danger</div></li>
              <li><div class="p-3 bg-warning text-dark">.bg-warning</div></li>
              <li><div class="p-3 bg-info text-white">.bg-info</div></li>
              <li><div class="p-3 bg-light text-dark">.bg-light</div></li>
              <li><div class="p-3 bg-dark text-white">.bg-dark</div></li>
              <li><div class="p-3 bg-body text-dark">.bg-body</div></li>
              <li><div class="p-3 bg-white text-dark">.bg-white</div></li>
              <li><div class="p-3 bg-transparent text-dark">.bg-transparent</div></li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;ul class=&quot;d-flex flex-wrap gap g-3&quot;&gt;
              &lt;li&gt;&lt;div class=&quot;p-3 bg-primary text-white&quot;&gt;.bg-primary&lt;/div&gt;&lt;/li&gt;
              &lt;li&gt;&lt;div class=&quot;p-3 bg-secondary text-white&quot;&gt;.bg-secondary&lt;/div&gt;&lt;/li&gt;
              &lt;li&gt;&lt;div class=&quot;p-3 bg-success text-white&quot;&gt;.bg-success&lt;/div&gt;&lt;/li&gt;
              &lt;li&gt;&lt;div class=&quot;p-3 bg-danger text-white&quot;&gt;.bg-danger&lt;/div&gt;&lt;/li&gt;
              &lt;li&gt;&lt;div class=&quot;p-3 bg-warning text-dark&quot;&gt;.bg-warning&lt;/div&gt;&lt;/li&gt;
              &lt;li&gt;&lt;div class=&quot;p-3 bg-info text-white&quot;&gt;.bg-info&lt;/div&gt;&lt;/li&gt;
              &lt;li&gt;&lt;div class=&quot;p-3 bg-light text-dark&quot;&gt;.bg-light&lt;/div&gt;&lt;/li&gt;
              &lt;li&gt;&lt;div class=&quot;p-3 bg-dark text-white&quot;&gt;.bg-dark&lt;/div&gt;&lt;/li&gt;
              &lt;li&gt;&lt;div class=&quot;p-3 bg-body text-dark&quot;&gt;.bg-body&lt;/div&gt;&lt;/li&gt;
              &lt;li&gt;&lt;div class=&quot;p-3 bg-white text-dark&quot;&gt;.bg-white&lt;/div&gt;&lt;/li&gt;
              &lt;li&gt;&lt;div class=&quot;p-3 bg-transparent text-dark&quot;&gt;.bg-transparent&lt;/div&gt;&lt;/li&gt;
          &lt;/ul&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
        <BlockTitle>Background gradient </BlockTitle>
        <BlockText>By adding a <code>.bg-gradient</code> class, a linear gradient is added as background image to the backgrounds.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="gap g-3">
              <li><div class="p-3 bg-primary text-white bg-gradient">.bg-primary.bg-gradient</div></li>
              <li><div class="p-3 bg-secondary text-white bg-gradient">.bg-secondary.bg-gradient</div></li>
              <li><div class="p-3 bg-success text-white bg-gradient">.bg-success.bg-gradient</div></li>
              <li><div class="p-3 bg-danger text-white bg-gradient">.bg-danger.bg-gradient</div></li>
              <li><div class="p-3 bg-warning text-dark bg-gradient">.bg-warning.bg-gradient</div></li>
              <li><div class="p-3 bg-info text-dark bg-gradient">.bg-info.bg-gradient</div></li>
              <li><div class="p-3 bg-light text-dark bg-gradient">.bg-light.bg-gradient</div></li>
              <li><div class="p-3 bg-dark text-white bg-gradient">.bg-dark.bg-gradient</div></li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;ul class=&quot;gap g-3&quot;&gt;
              &lt;li&gt;&lt;div class=&quot;p-3 bg-primary text-white bg-gradient&quot;&gt;.bg-primary.bg-gradient&lt;/div&gt;&lt;/li&gt;
              &lt;li&gt;&lt;div class=&quot;p-3 bg-secondary text-white bg-gradient&quot;&gt;.bg-secondary.bg-gradient&lt;/div&gt;&lt;/li&gt;
              &lt;li&gt;&lt;div class=&quot;p-3 bg-success text-white bg-gradient&quot;&gt;.bg-success.bg-gradient&lt;/div&gt;&lt;/li&gt;
              &lt;li&gt;&lt;div class=&quot;p-3 bg-danger text-white bg-gradient&quot;&gt;.bg-danger.bg-gradient&lt;/div&gt;&lt;/li&gt;
              &lt;li&gt;&lt;div class=&quot;p-3 bg-warning text-dark bg-gradient&quot;&gt;.bg-warning.bg-gradient&lt;/div&gt;&lt;/li&gt;
              &lt;li&gt;&lt;div class=&quot;p-3 bg-info text-dark bg-gradient&quot;&gt;.bg-info.bg-gradient&lt;/div&gt;&lt;/li&gt;
              &lt;li&gt;&lt;div class=&quot;p-3 bg-light text-dark bg-gradient&quot;&gt;.bg-light.bg-gradient&lt;/div&gt;&lt;/li&gt;
              &lt;li&gt;&lt;div class=&quot;p-3 bg-dark text-white bg-gradient&quot;&gt;.bg-dark.bg-gradient&lt;/div&gt;&lt;/li&gt;
          &lt;/ul&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
        <BlockTitle>Opacity</BlockTitle>
        <BlockText>Use <code>.bg-opacity-{value}</code> utilities</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="bg-success p-2 text-white">This is default success background</div>
          <div class="bg-success p-2 text-white bg-opacity-75">This is 75% opacity success background</div>
          <div class="bg-success p-2 text-dark bg-opacity-50">This is 50% opacity success background</div>
          <div class="bg-success p-2 text-dark bg-opacity-25">This is 25% opacity success background</div>
          <div class="bg-success p-2 text-dark bg-opacity-10">This is 10% opacity success background</div>
        </CardBody>
        <CodePreview title="code example">
          &lt;div class=&quot;bg-success p-2 text-white&quot;&gt;This is default success background&lt;/div&gt;
          &lt;div class=&quot;bg-success p-2 text-white bg-opacity-75&quot;&gt;This is 75% opacity success background&lt;/div&gt;
          &lt;div class=&quot;bg-success p-2 text-dark bg-opacity-50&quot;&gt;This is 50% opacity success background&lt;/div&gt;
          &lt;div class=&quot;bg-success p-2 text-dark bg-opacity-25&quot;&gt;This is 25% opacity success background&lt;/div&gt;
          &lt;div class=&quot;bg-success p-2 text-dark bg-opacity-10&quot;&gt;This is 10% opacity success background&lt;/div&gt;
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
  name: 'BackgroundPage', 
  components: {
    Layout,
    Block,
    BlockHead,
    BlockHeadContent,
    BlockTitle,
    BlockText,
    Card,
    CardBody,
    CodePreview
  },
}
</script>
