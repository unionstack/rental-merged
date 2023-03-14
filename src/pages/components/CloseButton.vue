<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Close button</BlockTitle>
        <BlockText>A generic close button for dismissing content like modals and alerts.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead class="wide-md">
          <BlockText><strong class="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component. 
          </BlockText>
          <BlockText>How to import component and use see the <a href="#">docs</a></BlockText>
          <BlockTitle>Example</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
          <ButtonClose aria-label="Close"></ButtonClose>
        </CardBody>
        <CodePreview title="code example">
          &lt;ButtonClose aria-label=&quot;Close&quot;&gt;&lt;/ButtonClose&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Disabled state</BlockTitle>
          <BlockText>Disabled close buttons change their opacity. We’ve also applied pointer-events: none and user-select: none to preventing hover and active states from triggering.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ButtonClose aria-label="Close" disabled></ButtonClose>
        </CardBody>
        <CodePreview title="code example">
          &lt;ButtonClose aria-label=&quot;Close&quot; disabled&gt;&lt;/ButtonClose&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>White variant</BlockTitle>
          <BlockText>Change the default <code>ButtonClose</code> to be white with the <code>variant="white"</code> prop.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="bg-dark p-3 rounded-2">
              <ul class="d-flex gap g-2">
                  <li><ButtonClose variant="white" aria-label="Close"></ButtonClose></li>
                  <li><ButtonClose variant="white" disabled aria-label="Close"></ButtonClose></li>
              </ul>
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;ButtonClose variant=&quot;white&quot; aria-label=&quot;Close&quot;&gt;&lt;/ButtonClose&gt;
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
import ButtonClose from '@/components/uielements/button-close/ButtonClose.vue';

export default {
  name: 'CloseButtonPage', 
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
    ButtonClose
  },
}
</script>
