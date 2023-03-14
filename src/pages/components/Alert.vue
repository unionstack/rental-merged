<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Alerts</BlockTitle>
        <BlockText>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead class="wide-md">
        <BlockText class="wide-md"> <strong class="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component. 
        </BlockText>
        <BlockText>How to import component and use see the <a href="#">docs</a></BlockText>
        <BlockTitle>Examples</BlockTitle>
        <BlockText>Alerts are available for any length of text, as well as an optional close button.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Alert variant="primary">A simple primary alert—check it out!</Alert>
          <Alert variant="secondary">A simple secondary alert—check it out!</Alert>
          <Alert variant="success">A simple success alert—check it out!</Alert>
          <Alert variant="danger">A simple danger alert—check it out!</Alert>
          <Alert variant="warning">A simple warning alert—check it out!</Alert>
          <Alert variant="info">A simple info alert—check it out!</Alert>
          <Alert variant="light">A simple light alert—check it out!</Alert>
          <Alert variant="dark">A simple dark alert—check it out!</Alert>
          <div class="form-note"> Use prop <code>variant="name"</code> for various alert options. </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;Alert variant=&quot;primary&quot;&gt;A simple primary alert&mdash;check it out!&lt;/Alert&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Live Example</BlockTitle>
        <BlockText>Click the button below to show an alert (hidden with inline styles to start), then dismiss (and destroy) it with the built-in close button.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div id="customAlertPlaceholder"></div>
          <Button variant="primary" v-nk-alert:success="{target: 'customAlertPlaceholder', content:'Nice, you triggered this alert message!'}">Show Live alert</Button>
        </CardBody>
        <CodePreview title="code example">
          &lt;div id=&quot;customAlertPlaceholder&quot;&gt;&lt;/div&gt;
          &lt;Button variant=&quot;primary&quot; v-nk-alert:success=&quot;{target: 'customAlertPlaceholder', content:'Nice, you triggered this alert message!'}&quot;&gt;Show Live alert&lt;/Button&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Link color</BlockTitle>
        <BlockText>Use the <code>AlertLink</code> component to quickly provide matching colored links within any alert.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
            <Alert variant="primary">
              A simple primary alert with <AlertLink href="#" >an example link</AlertLink>. Give it a click if you like.
            </Alert>
            <Alert variant="secondary">
              A simple secondary alert with <AlertLink href="#" >an example link</AlertLink>. Give it a click if you like.
            </Alert>
            <Alert variant="success">
              A simple success alert with <AlertLink href="#" >an example link</AlertLink>. Give it a click if you like.
            </Alert>
            <Alert variant="danger">
              A simple danger alert with <AlertLink href="#" >an example link</AlertLink>. Give it a click if you like.
            </Alert>
            <Alert variant="warning">
              A simple warning alert with <AlertLink href="#" >an example link</AlertLink>. Give it a click if you like.
            </Alert>
            <Alert variant="info">
              A simple info alert with <AlertLink href="#" >an example link</AlertLink>. Give it a click if you like.
            </Alert>
            <Alert variant="light">
              A simple light alert with <AlertLink href="#" >an example link</AlertLink>. Give it a click if you like.
            </Alert>
            <Alert variant="dark">
              A simple dark alert with <AlertLink href="#" >an example link</AlertLink>. Give it a click if you like.
            </Alert>
        </CardBody>
        <CodePreview title="code example">
          &lt;Alert variant=&quot;primary&quot;&gt;
              A simple primary alert with &lt;AlertLink href=&quot;#&quot; &gt;an example link&lt;/AlertLink&gt;. Give it a click if you like.
            &lt;/Alert&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Additional content</BlockTitle>
        <BlockText>Alerts can also contain additional HTML elements like headings, paragraphs and dividers.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
            <Alert variant="success" class="p-4">
              <h4 class="alert-heading">Well done!</h4>
              <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
              <hr>
              <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </Alert>
        </CardBody>
        <CodePreview title="code example">
          &lt;Alert variant=&quot;success&quot; class=&quot;p-4&quot;&gt;
              &lt;h4 class=&quot;alert-heading&quot;&gt;Well done!&lt;/h4&gt;
              &lt;p&gt;Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.&lt;/p&gt;
              &lt;hr&gt;
              &lt;p class=&quot;mb-0&quot;&gt;Whenever you need to, be sure to use margin utilities to keep things nice and tidy.&lt;/p&gt;
            &lt;/Alert&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Icons</BlockTitle>
        <BlockText>Similarly, you can use flexbox utilities to create alerts with icons. Depending on your icons and content, you may want to add more utilities or custom styles.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
            <Alert variant="primary" class="d-flex">
              <Icon icon="alert-fill" class="me-1 mt-1"></Icon>
              <div>
                Example primary alert with an icon
              </div>
            </Alert>
            <Alert variant="success" class="d-flex">
              <Icon icon="alert-fill" class="me-1 mt-1"></Icon>
              <div>
                Example success alert with an icon
              </div>
            </Alert>
            <Alert variant="warning" class="d-flex">
              <Icon icon="alert-fill" class="me-1 mt-1"></Icon>
              <div>
                Example warning alert with an icon
              </div>
            </Alert>
            <Alert variant="danger" class="d-flex">
              <Icon icon="alert-fill" class="me-1 mt-1"></Icon>
              <div>
                Example danger alert with an icon
              </div>
            </Alert>
        </CardBody>
        <CodePreview title="code example">
          &lt;Alert variant=&quot;danger&quot; class=&quot;d-flex align-items-center&quot;&gt;
              &lt;Icon icon=&quot;alert-fill&quot; class=&quot;me-1&quot;&gt;&lt;/Icon&gt;
              &lt;div&gt;
                Example danger alert with an icon
              &lt;/div&gt;
            &lt;/Alert&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Dismissing</BlockTitle>
        <BlockText>Using the alert JavaScript plugin, it’s possible to dismiss any alert inline. Here’s how:</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
            <Alert variant="warning" class="alert-dismissible fade show">
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
              <ButtonClose data-bs-dismiss="alert" aria-label="Close"></ButtonClose>
            </Alert>
        </CardBody>
        <CodePreview title="code example">
          &lt;Alert variant=&quot;warning&quot; class=&quot;alert-dismissible fade show&quot;&gt;
              &lt;strong&gt;Holy guacamole!&lt;/strong&gt; You should check in on some of those fields below.
              &lt;ButtonClose data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/ButtonClose&gt;
            &lt;/Alert&gt;
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
import Alert from '@/components/uielements/alert/Alert.vue';
import AlertLink from '@/components/uielements/alert/AlertLink.vue';
import Button from '@/components/uielements/button/Button.vue';
import ButtonClose from '@/components/uielements/button-close/ButtonClose.vue';
import Icon from '@/components/icon/Icon.vue';

export default {
  name: 'AlertPage', 
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
    Alert,
    AlertLink,
    Button,
    ButtonClose,
    Icon
  }
}
</script>
