<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Collapse</BlockTitle>
        <BlockText>Toggle the visibility of content across your project with a few classes and our JavaScript plugins.</BlockText>
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
          <ul class="d-flex gap g-3 pb-3">
            <li>
              <Button class="btn" variant="primary" data-bs-toggle="collapse" href="#collapseExample" role="button">
                Link with href
              </Button>
            </li>
            <li>
              <Button class="btn" variant="primary" data-bs-toggle="collapse" data-bs-target="#collapseExample">
                Button with data-bs-target
              </Button>
            </li>
          </ul>
          <div class="collapse show" id="collapseExample">
              <Card class="card-body">
                  Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
              </Card>
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;ul class=&quot;d-flex gap g-3 pb-3&quot;&gt;
            &lt;li&gt;
              &lt;Button class=&quot;btn&quot; variant=&quot;primary&quot; data-bs-toggle=&quot;collapse&quot; href=&quot;#collapseExample&quot; role=&quot;button&quot;&gt;
                Link with href
              &lt;/Button&gt;
            &lt;/li&gt;
            &lt;li&gt;
              &lt;Button class=&quot;btn&quot; variant=&quot;primary&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#collapseExample&quot;&gt;
                Button with data-bs-target
              &lt;/Button&gt;
            &lt;/li&gt;
          &lt;/ul&gt;
          &lt;div class=&quot;collapse show&quot; id=&quot;collapseExample&quot;&gt;
              &lt;Card class=&quot;card-body&quot;&gt;
                  Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
              &lt;/Card&gt;
          &lt;/div&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Horizontal</BlockTitle>
          <BlockText>The collapse plugin also supports horizontal collapsing. Add the <code>.collapse-horizontal</code> modifier class to transition the width instead of height and set a width on the immediate child element.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="pb-3">
            <Button class="btn" variant="primary" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample">
              Toggle width collapse
            </Button>
          </div>
          <div style="min-height: 150px;">
            <div class="collapse collapse-horizontal" id="collapseWidthExample">
              <Card class="card-body" style="width: 300px;">
                This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
              </Card>
            </div>
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;div class=&quot;pb-3&quot;&gt;
            &lt;Button class=&quot;btn&quot; variant=&quot;primary&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#collapseWidthExample&quot;&gt;
              Toggle width collapse
            &lt;/Button&gt;
          &lt;/div&gt;
          &lt;div style=&quot;min-height: 150px;&quot;&gt;
            &lt;div class=&quot;collapse collapse-horizontal&quot; id=&quot;collapseWidthExample&quot;&gt;
              &lt;Card class=&quot;card-body&quot; style=&quot;width: 300px;&quot;&gt;
                This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
              &lt;/Card&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Multiple targets</BlockTitle>
          <BlockText>A <code>button</code> or <code>a</code> can show and hide multiple elements by referencing them with a selector in its href or <code>data-bs-target</code> attribute. Multiple <code>button</code> or <code>a</code> can show and hide an element if they each reference it with their href or <code>data-bs-target</code> attribute</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
        <ul class="d-flex gap g-3 pb-3">
          <li>
            <Button class="btn" variant="primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button">Toggle first element</Button>
          </li>
          <li>
            <Button class="btn" variant="primary" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2">Toggle second element</Button>
          </li>
          <li>
            <Button class="btn" variant="primary" data-bs-toggle="collapse" data-bs-target=".multi-collapse">Toggle both elements</Button>
          </li>
        </ul>
        <div class="row">
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample1">
              <Card class="card-body">
                Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
              </Card>
            </div>
          </div>
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample2">
              <Card class="card-body">
                Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
              </Card>
            </div>
          </div>
        </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;ul class=&quot;d-flex gap g-3 pb-3&quot;&gt;
          &lt;li&gt;
            &lt;Button class=&quot;btn&quot; variant=&quot;primary&quot; data-bs-toggle=&quot;collapse&quot; href=&quot;#multiCollapseExample1&quot; role=&quot;button&quot;&gt;Toggle first element&lt;/Button&gt;
          &lt;/li&gt;
          &lt;li&gt;
            &lt;Button class=&quot;btn&quot; variant=&quot;primary&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#multiCollapseExample2&quot;&gt;Toggle second element&lt;/Button&gt;
          &lt;/li&gt;
          &lt;li&gt;
            &lt;Button class=&quot;btn&quot; variant=&quot;primary&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;.multi-collapse&quot;&gt;Toggle both elements&lt;/Button&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
        &lt;div class=&quot;row&quot;&gt;
          &lt;div class=&quot;col&quot;&gt;
            &lt;div class=&quot;collapse multi-collapse&quot; id=&quot;multiCollapseExample1&quot;&gt;
              &lt;Card class=&quot;card-body&quot;&gt;
                Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
              &lt;/Card&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class=&quot;col&quot;&gt;
            &lt;div class=&quot;collapse multi-collapse&quot; id=&quot;multiCollapseExample2&quot;&gt;
              &lt;Card class=&quot;card-body&quot;&gt;
                Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
              &lt;/Card&gt;
            &lt;/div&gt;
          &lt;/div&gt;
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
import Button from '@/components/uielements/button/Button.vue';
export default {
  name: 'CollapsePage', 
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
    Button,
  },
}
</script>
