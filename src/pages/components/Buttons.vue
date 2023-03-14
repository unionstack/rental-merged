<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Buttons</BlockTitle>
        <BlockText>Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead>
          <BlockText class="wide-md"> <strong class="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component. 
          </BlockText>
          <BlockText>How to import component and use see the <a href="#">docs</a></BlockText>
          <BlockTitle>Example</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex gap g-3">
              <li>
                  <Button type="button" variant="primary">Primary</Button>
              </li>
              <li>
                  <Button type="button" variant="secondary">Secondary</Button>
              </li>
              <li>
                  <Button type="button" variant="success">Success</Button>
              </li>
              <li>
                  <Button type="button" variant="danger">Danger</Button>
              </li>
              <li>
                  <Button type="button" variant="warning">Warning</Button>
              </li>
              <li>
                  <Button type="button" variant="info">Info</Button>
              </li>
              <li>
                  <Button type="button" variant="light">Light</Button>
              </li>
              <li>
                  <Button type="button" variant="dark">Dark</Button>
              </li>
              <li>
                  <Button type="button" variant="link">Link</Button>
              </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button type=&quot;button&quot; variant=&quot;primary&quot;&gt;Primary&lt;/Button&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Button tags</BlockTitle>
          <BlockText>The <code>Button</code> component are designed to be used with the button element. However, you can also use the <code>Button</code> component on <code>a</code> or <code>input</code></BlockText>
          <BlockText>The <code>Button</code> component generally renders a <code>button</code> element. you can also render an <code>a</code> element by providing an <code>href</code> prop value. and you can change the HTML tag with <code>tag=""</code> prop</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex gap g-3">
              <li><Button variant="primary" href="#">I am a Link</Button></li>
              <li><Button variant="primary" type="button">I am a Button</Button></li>
              <li><Button tag="input" variant="primary" type="button" value="Input"></Button></li>
              <li><Button tag="input" variant="primary" type="submit" value="Submit"></Button></li>
              <li><Button tag="input" variant="primary" type="reset" value="Reset"></Button></li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button variant=&quot;primary&quot; href=&quot;#&quot;&gt;I am a Link&lt;/Button&gt; 
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Outline buttons</BlockTitle>
          <BlockText>In need of a button, but not the hefty background colors they bring? Use the <code>variant="outline-*"</code> to remove all background images and colors on any button.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex gap g-3">
              <li><Button type="button" variant="outline-primary">Primary</Button></li>
              <li><Button type="button" variant="outline-secondary">Secondary</Button></li>
              <li><Button type="button" variant="outline-success">Success</Button></li>
              <li><Button type="button" variant="outline-danger">Danger</Button></li>
              <li><Button type="button" variant="outline-warning">Warning</Button></li>
              <li><Button type="button" variant="outline-info">Info</Button></li>
              <li><Button type="button" variant="outline-light">Light</Button></li>
              <li><Button type="button" variant="outline-dark">Dark</Button></li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button type=&quot;button&quot; variant=&quot;outline-primary&quot;&gt;Primary&lt;/Button&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
          <BlockTitle>Soft buttons</BlockTitle>
          <BlockText>In need of a button, but not the hefty background colors they bring? just set the prop <code>soft</code> to true for a soften background colors on any button.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex gap g-3">
              <li><Button soft type="button" variant="primary">Primary</Button></li>
              <li><Button soft type="button" variant="secondary">Secondary</Button></li>
              <li><Button soft type="button" variant="success">Success</Button></li>
              <li><Button soft type="button" variant="danger">Danger</Button></li>
              <li><Button soft type="button" variant="warning">Warning</Button></li>
              <li><Button soft type="button" variant="info">Info</Button></li>
              <li><Button soft type="button" variant="light">Light</Button></li>
              <li><Button soft type="button" variant="dark">Dark</Button></li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button soft type=&quot;button&quot; variant=&quot;primary&quot;&gt;Primary&lt;/Button&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Soft Outline buttons</BlockTitle>
          <BlockText>In need of a button, but not the hefty background colors they bring? just set the prop <code>soft</code> to true for a soften background colors on any button with <code>variant="outline-*"</code>.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex gap g-3">
              <li><Button soft type="button" variant="outline-primary">Primary</Button></li>
              <li><Button soft type="button" variant="outline-secondary">Secondary</Button></li>
              <li><Button soft type="button" variant="outline-success">Success</Button></li>
              <li><Button soft type="button" variant="outline-danger">Danger</Button></li>
              <li><Button soft type="button" variant="outline-warning">Warning</Button></li>
              <li><Button soft type="button" variant="outline-info">Info</Button></li>
              <li><Button soft type="button" variant="outline-light">Light</Button></li>
              <li><Button soft type="button" variant="outline-dark">Dark</Button></li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button soft type=&quot;button&quot; variant=&quot;outline-primary&quot;&gt;Primary&lt;/Button&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
          <BlockTitle>Buttons with Icons</BlockTitle>
          <BlockText>Try with flowing code examples to use icons in buttons</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex gap g-3">
            <li><Button type="button" variant="primary"><Icon icon="arrow-left"></Icon> <span>Left Icon</span></Button></li>
            <li><Button type="button" variant="primary"><span>Right Icon</span><Icon icon="arrow-right"></Icon></Button></li>
            <li><Button type="button" variant="primary" class="btn-icon"><Icon icon="msg"></Icon></Button></li>
            <li><Button type="button" class="btn-color-primary btn-hover-primary btn-icon"><Icon icon="msg"></Icon></Button></li>
            <li><Button type="button" class="btn-color-dark btn-hover-primary btn-icon btn-soft"><Icon icon="msg"></Icon></Button></li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button type=&quot;button&quot; variant=&quot;primary&quot;&gt;&lt;Icon icon=&quot;arrow-left&quot;&gt;&lt;/Icon&gt; &lt;span&gt;Left Icon&lt;/span&gt;&lt;/Button&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
          <BlockTitle>Sizes</BlockTitle>
          <BlockText>Fancy larger or smaller buttons? Specify <code>lg</code> or <code>sm</code> via the <code>size</code> prop.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex align-items-center gap g-3">
              <li>
                  <Button type="button" variant="primary" size="lg">Large button</Button>
              </li>
              <li>
                  <Button type="button" variant="primary">Regular button</Button>
              </li>
              <li>
                  <Button type="button" variant="primary" size="sm">Small button</Button>
              </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button type=&quot;button&quot; variant=&quot;primary&quot;&gt;Regular button&lt;/Button&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
          <BlockTitle>Rounded Buttons</BlockTitle>
          <BlockText>Prefer buttons with a more rounded-pill style? Just set the prop <code>pill</code> to true.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex align-items-center gap g-3">
            <li>
                <Button pill type="button" variant="primary" size="lg">Large button</Button>
            </li>
            <li>
                <Button pill type="button" variant="primary">Regular button</Button>
            </li>
            <li>
                <Button pill type="button" variant="primary" size="sm">Small button</Button>
            </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button pill type=&quot;button&quot; variant=&quot;primary&quot; size=&quot;lg&quot;&gt;Large button&lt;/Button&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
          <BlockTitle>Disabled state</BlockTitle>
          <BlockText>Make buttons look inactive by adding the disabled boolean attribute to <code>button</code></BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex gap g-3">
              <li><Button type="button" variant="primary" disabled>Primary button</Button></li>
              <li><Button type="button" variant="secondary" disabled>Button</Button></li>
              <li><Button type="button" variant="outline-primary" disabled>Primary button</Button></li>
              <li><Button type="button" variant="outline-secondary" disabled>Button</Button></li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button type=&quot;button&quot; variant=&quot;primary&quot; disabled&gt;Primary button&lt;/Button&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
          <BlockTitle>Block level buttons</BlockTitle>
          <BlockText>Create responsive stacks of full-width, block level buttons by setting the <code>block</code> prop. </BlockText>
      </BlockHead>
      <Card>
        <CardBody>
            <Button block type="button" variant="primary">Block level button</Button>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button block type=&quot;button&quot; variant=&quot;primary&quot;&gt;Block level button&lt;/Button&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Toggle states</BlockTitle>
          <BlockText>Add <code>data-bs-toggle="button"</code> to toggle a button’s active state. If you’re pre-toggling a button, you must manually add the <code>.active</code> class and <code>aria-pressed="true"</code> to ensure that it is conveyed appropriately to assistive technologies.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex gap g-3">
              <li><Button type="button" variant="primary" data-bs-toggle="button">Toggle button</Button></li>
              <li><Button class="active" variant="primary" data-bs-toggle="button" aria-pressed="true">Active toggle button</Button></li>
              <li><Button type="button" variant="primary" disabled data-bs-toggle="button">Disabled toggle button</Button></li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button type=&quot;button&quot; variant=&quot;primary&quot; data-bs-toggle=&quot;button&quot;&gt;Toggle button&lt;/Button&gt;
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
import Icon from '@/components/icon/Icon.vue';

export default {
  name: 'ButtonsPage', 
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
    Icon
  },
}
</script>
