<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Badges</BlockTitle>
        <BlockText>Documentation and examples for badges, our small count and labeling component.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead>
        <BlockText class="wide-md"> <strong class="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component. 
        </BlockText>
        <BlockText>How to import component and use see the <a href="#">docs</a></BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <h1>Example heading <Badge variant="secondary">New</Badge></h1>
          <h2>Example heading <Badge variant="secondary">New</Badge></h2>
          <h3>Example heading <Badge variant="secondary">New</Badge></h3>
          <h4>Example heading <Badge variant="secondary">New</Badge></h4>
          <h5>Example heading <Badge variant="secondary">New</Badge></h5>
          <h6>Example heading <Badge variant="secondary">New</Badge></h6>
        </CardBody>
        <CodePreview title="code example">
          &lt;Badge variant=&quot;secondary&quot;&gt;New&lt;/Badge&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
          <BlockTitle>Buttons</BlockTitle>
          <BlockText>Badges can be used as part of links or buttons to provide a counter.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Button variant="primary" type="button">Notifications <Badge variant="light" class="ms-1">4</Badge></Button>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button variant=&quot;primary&quot; type=&quot;button&quot;&gt;Notifications &lt;Badge variant=&quot;light&quot; class=&quot;ms-1&quot;&gt;4&lt;/Badge&gt;&lt;/Button&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
          <BlockTitle>Positioned</BlockTitle>
          <BlockText>Use utilities to modify a <code>.badge</code> and position it in the corner of a link or button.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex align-items-center gap g-5">
            <li>
              <Button type="button" class="position-relative" variant="primary">
                  Inbox
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                    <span class="visually-hidden">unread messages</span>
                  </span>
              </Button>
            </li>
            <li>
                <Button type="button" class="position-relative" variant="primary">
                  Profile
                  <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                    <span class="visually-hidden">New alerts</span>
                  </span>
                </Button>
            </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button type=&quot;button&quot; class=&quot;position-relative&quot; variant=&quot;primary&quot;&gt;
                  Inbox
                  &lt;span class=&quot;position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger&quot;&gt;
                    99+
                    &lt;span class=&quot;visually-hidden&quot;&gt;unread messages&lt;/span&gt;
                  &lt;/span&gt;
              &lt;/Button&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
          <BlockTitle>Background colors</BlockTitle>
          <BlockText>Set a <code>background-color</code> with contrasting foreground color with our <code>variant"color"</code> prop.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex gap g-2">
            <li><Badge variant="primary">Primary</Badge></li>
            <li><Badge variant="secondary">Secondary</Badge></li>
            <li><Badge variant="success">Success</Badge></li>
            <li><Badge variant="danger">Danger</Badge></li>
            <li><Badge variant="warning">Warning</Badge></li>
            <li><Badge variant="info">Info</Badge></li>
            <li><Badge variant="light">Light</Badge></li>
            <li><Badge variant="dark">Dark</Badge></li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;Badge variant=&quot;primary&quot;&gt;Primary&lt;/Badge&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
          <BlockTitle>Pill badges</BlockTitle>
          <BlockText>Use the <code>pill</code> prop to make badges more rounded (with a larger border-radius). </BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex gap g-2">
            <li><Badge pill variant="primary">Primary</Badge></li>
            <li><Badge pill variant="secondary">Secondary</Badge></li>
            <li><Badge pill variant="success">Success</Badge></li>
            <li><Badge pill variant="danger">Danger</Badge></li>
            <li><Badge pill variant="warning">Warning</Badge></li>
            <li><Badge pill variant="info">Info</Badge></li>
            <li><Badge pill variant="light">Light</Badge></li>
            <li><Badge pill variant="dark">Dark</Badge></li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;Badge pill variant=&quot;primary&quot;&gt;Primary&lt;/Badge&gt;
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
import Badge from '@/components/uielements/badge/Badge.vue';

export default {
  name: 'BadgePage', 
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
    Badge
  },
}
</script>
