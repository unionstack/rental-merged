<!-- eslint-disable vue/no-unused-components -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Spinners</BlockTitle>
        <BlockText>Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead class="wide-md">
        <BlockText><strong class="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component. 
        </BlockText>
        <BlockText>How to import component and use see the <a href="#">docs</a></BlockText>
        <BlockTitle>Border spinner</BlockTitle>
        <BlockText>Use the border spinners for a lightweight loading indicator. </BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Spinner></Spinner>
        </CardBody>
        <CodePreview title="code example">
          &lt;Spinner&gt;&lt;/Spinner&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Colors </BlockTitle>
        <BlockText>The border spinner uses <code>currentColor</code> for its <code>border-color</code>, meaning you can customize the color with <code>variant="*"</code> prop to change border color.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex gap g-3">
              <li><Spinner variant="primary"></Spinner></li>
              <li><Spinner variant="secondary"></Spinner></li>
              <li><Spinner variant="success"></Spinner></li>
              <li><Spinner variant="danger"></Spinner></li>
              <li><Spinner variant="warning"></Spinner></li>
              <li><Spinner variant="info"></Spinner></li>
              <li><Spinner variant="light"></Spinner></li>
              <li><Spinner variant="dark"></Spinner></li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;ul class=&quot;d-flex gap g-3&quot;&gt;
              &lt;li&gt;&lt;Spinner variant=&quot;primary&quot;&gt;&lt;/Spinner&gt;&lt;/li&gt;
              &lt;li&gt;&lt;Spinner variant=&quot;secondary&quot;&gt;&lt;/Spinner&gt;&lt;/li&gt;
              &lt;li&gt;&lt;Spinner variant=&quot;success&quot;&gt;&lt;/Spinner&gt;&lt;/li&gt;
              &lt;li&gt;&lt;Spinner variant=&quot;danger&quot;&gt;&lt;/Spinner&gt;&lt;/li&gt;
              &lt;li&gt;&lt;Spinner variant=&quot;warning&quot;&gt;&lt;/Spinner&gt;&lt;/li&gt;
              &lt;li&gt;&lt;Spinner variant=&quot;info&quot;&gt;&lt;/Spinner&gt;&lt;/li&gt;
              &lt;li&gt;&lt;Spinner variant=&quot;light&quot;&gt;&lt;/Spinner&gt;&lt;/li&gt;
              &lt;li&gt;&lt;Spinner variant=&quot;dark&quot;&gt;&lt;/Spinner&gt;&lt;/li&gt;
          &lt;/ul&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Growing spinner </BlockTitle>
        <BlockText>If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex gap g-3">
              <li><Spinner animation="grow" variant="primary"></Spinner></li>
              <li><Spinner animation="grow" variant="secondary"></Spinner></li>
              <li><Spinner animation="grow" variant="success"></Spinner></li>
              <li><Spinner animation="grow" variant="danger"></Spinner></li>
              <li><Spinner animation="grow" variant="warning"></Spinner></li>
              <li><Spinner animation="grow" variant="info"></Spinner></li>
              <li><Spinner animation="grow" variant="light"></Spinner></li>
              <li><Spinner animation="grow" variant="dark"></Spinner></li>
          </ul>
          <div class="form-note mt-4"> Use <code>animation="grow"</code> prop to <code>Spinner</code> for grow spinner. </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;Spinner animation=&quot;grow&quot; variant=&quot;primary&quot;&gt;&lt;/Spinner&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Placement </BlockTitle>
        <BlockText>Use flexbox utilities, float utilities, or text alignment utilities to place spinners exactly where you need them in any situation.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="d-flex justify-content-center my-5">
              <Spinner></Spinner>
          </div>
          <hr>
          <div class="d-flex align-items-center my-5 justify-content-between">
              <strong>Loading...</strong>
              <Spinner></Spinner>
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;div class=&quot;d-flex justify-content-center my-5&quot;&gt;
              &lt;Spinner&gt;&lt;/Spinner&gt;
          &lt;/div&gt;
          &lt;hr&gt;
          &lt;div class=&quot;d-flex align-items-center my-5 justify-content-between&quot;&gt;
              &lt;strong&gt;Loading...&lt;/strong&gt;
              &lt;Spinner&gt;&lt;/Spinner&gt;
          &lt;/div&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Size  </BlockTitle>
        <BlockText>Add <code>size="sm"</code> prop to make a smaller spinner that can quickly be used within other components.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex gap g-3">
              <li>
                  <Spinner size="sm"></Spinner>
              </li>
              <li>
                  <Spinner animation="grow" size="sm"></Spinner>
              </li>
          </ul>
          <p class="my-4">Or, use custom CSS or inline styles to change the dimensions as needed.</p>
          <ul class="d-flex gap g-3">
              <li>
                  <Spinner style="width: 3rem; height: 3rem;"></Spinner>
              </li>
              <li>
                  <Spinner animation="grow" style="width: 3rem; height: 3rem;"></Spinner>
              </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;Spinner size=&quot;sm&quot;&gt;&lt;/Spinner&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Buttons</BlockTitle>
        <BlockText>Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element 
          <br/> and utilize button text as needed.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex gap g-3">
              <li>
                  <Button type="button" variant="primary" disabled>
                      <Spinner size="sm"></Spinner>
                  </Button>
              </li>
              <li>
                  <Button type="button" variant="primary" disabled>
                      <Spinner size="sm" class="me-1"></Spinner>
                      Loading...
                  </Button>
              </li>
              <li>
                  <Button type="button" variant="primary" disabled>
                      <Spinner animation="grow" size="sm"></Spinner>
                  </Button>
              </li>
              <li>
                  <Button type="button" variant="primary" disabled>
                      <Spinner animation="grow" size="sm" class="me-1"></Spinner>
                      Loading...
                  </Button>
              </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button type=&quot;button&quot; variant=&quot;primary&quot; disabled&gt;
              &lt;Spinner size=&quot;sm&quot;&gt;&lt;/Spinner&gt;
          &lt;/Button&gt;
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
import Spinner from '@/components/uielements/spinner/Spinner.vue';
import Button from '@/components/uielements/button/Button.vue';

export default {
  name: 'SpinnersPage', 
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
    Spinner,
    Button
},
  
}
</script>
