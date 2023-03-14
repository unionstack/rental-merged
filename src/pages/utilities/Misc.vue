<template>
  <Layout content="container">
    <BlockHead class="nk-page-head wide-md">
      <BlockHeadContent>
        <BlockTitle tag="h1">Reboot</BlockTitle>
        <BlockText>Reboot, a collection of element-specific CSS changes in a single file, kickstart Bootstrap to provide an elegant, consistent, and simple baseline to build upon.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Horizontal rules</BlockTitle>
        <BlockText>The <code>hr</code> element has been simplified. Similar to browser defaults, <code>hr</code> are styled via <code>border-top</code>, have a default <code>opacity: .25</code>, and automatically inherit their <code>border-color</code> via <code>color</code>, including when <code>color</code> is set via the parent. They can be modified with text, border, and opacity utilities.
        </BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Hr/>
          <div class="text-success">
            <Hr/>
          </div>
          <Hr class="text-danger border-2 opacity-50"/>
          <Hr class="border-primary border-3 opacity-75"/>
        </CardBody>
        <CodePreview title="code example">
          &lt;Hr/&gt;
          &lt;div class=&quot;text-success&quot;&gt;
            &lt;Hr/&gt;
          &lt;/div&gt;
          &lt;Hr class=&quot;text-danger border-2 opacity-50&quot;/&gt;
          &lt;Hr class=&quot;border-primary border-3 opacity-75&quot;/&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Display property</BlockTitle>
        <BlockText>Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing. </BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex gap g-3 pb-4">
            <li>
                <div class="d-inline p-2 bg-primary text-white">d-inline</div>
            </li>
            <li>
                <div class="d-inline p-2 bg-dark text-white">d-inline</div>
            </li>
          </ul>
          <span class="d-block p-2 bg-primary text-white">d-block</span>
          <span class="d-block p-2 bg-dark text-white">d-block</span>
        </CardBody>
        <CodePreview title="code example">
          &lt;div class=&quot;d-inline p-2 bg-primary text-white&quot;&gt;d-inline&lt;/div&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Shadows</BlockTitle>
        <BlockText>Add or remove shadows to elements with box-shadow utilities.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
          <div class="shadow-sm p-3 mb-5 bg-body rounded">Small shadow</div>
          <div class="shadow p-3 mb-5 bg-body rounded">Regular shadow</div>
          <div class="shadow-lg p-3 mb-5 bg-body rounded">Larger shadow</div>
        </CardBody>
        <CodePreview title="code example">
          &lt;div class=&quot;shadow-none p-3 mb-5 bg-light rounded&quot;&gt;No shadow&lt;/div&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Opacity</BlockTitle>
        <BlockText>Set the opacity of an element using <code>.opacity-{value}</code> utilities.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="d-flex">
            <div class="opacity-100 p-3 m-2 bg-primary text-white fw-bold rounded">100%</div>
            <div class="opacity-75 p-3 m-2 bg-primary text-white fw-bold rounded">75%</div>
            <div class="opacity-50 p-3 m-2 bg-primary text-white fw-bold rounded">50%</div>
            <div class="opacity-25 p-3 m-2 bg-primary text-white fw-bold rounded">25%</div>  
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;div class=&quot;d-flex&quot;&gt;
            &lt;div class=&quot;opacity-100 p-3 m-2 bg-primary text-white fw-bold rounded&quot;&gt;100%&lt;/div&gt;
            &lt;div class=&quot;opacity-75 p-3 m-2 bg-primary text-white fw-bold rounded&quot;&gt;75%&lt;/div&gt;
            &lt;div class=&quot;opacity-50 p-3 m-2 bg-primary text-white fw-bold rounded&quot;&gt;50%&lt;/div&gt;
            &lt;div class=&quot;opacity-25 p-3 m-2 bg-primary text-white fw-bold rounded&quot;&gt;25%&lt;/div&gt;  
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
import Hr from '@/components/utilities/misc/Hr.vue';

export default {
  name: 'MiscPage', 
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
    Hr
  },
}
</script>
