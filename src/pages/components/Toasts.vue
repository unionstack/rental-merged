<!-- eslint-disable vue/no-unused-components -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Toasts</BlockTitle>
        <BlockText>Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead class="wide-md">
        <BlockText><strong class="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component. 
        </BlockText>
        <BlockText>How to import component and use see the <a href="#">docs</a></BlockText>
        <BlockTitle>Live example </BlockTitle>
        <BlockText>Click the button below to show a toast (positioned with our utilities in the lower right corner) that has been hidden by default.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Button type="button" variant="primary" v-nk-toast="'live-toast'">Show live toast</Button>
          <ToastContainer body position="bottom-end" class="p-3">
              <Toast id="live-toast" role="alert" aria-live="assertive" aria-atomic="true">
                  <ToastHeader>
                    <MediaGroup>
                      <Media size="xs">
                        <Img src="/images/favicon.png"/>
                      </Media>
                      <MediaText>
                        <strong>NioBoard</strong>
                      </MediaText>
                    </MediaGroup>
                    <small>11 mins ago</small>
                    <ButtonClose dismiss="toast" aria-label="Close"></ButtonClose>
                  </ToastHeader>
                  <ToastBody>
                      Hello, world! This is a toast message.
                  </ToastBody>
              </Toast>
          </ToastContainer>
        </CardBody>
        <CodePreview title="code">
          &lt;Button type=&quot;button&quot; variant=&quot;primary&quot; v-nk-toast=&quot;'live-toast'&quot;&gt;Show live toast&lt;/Button&gt;
          &lt;ToastContainer body position=&quot;bottom&quot; class=&quot;p-3&quot;&gt;
              &lt;Toast id=&quot;live-toast&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
                  &lt;ToastHeader&gt;
                    &lt;MediaGroup&gt;
                      &lt;Media size=&quot;xs&quot;&gt;
                          &lt;Img src=&quot;/images/favicon.png&quot;/&gt;
                      &lt;/Media&gt;
                      &lt;MediaText&gt;
                          &lt;strong&gt;NioBoard&lt;/strong&gt;
                        &lt;/MediaText&gt;
                    &lt;/MediaGroup&gt;
                    &lt;small&gt;11 mins ago&lt;/small&gt;
                    &lt;ButtonClose dismiss=&quot;toast&quot; aria-label=&quot;Close&quot;&gt;&lt;/ButtonClose&gt;
                  &lt;/ToastHeader&gt;
                  &lt;ToastBody&gt;
                      Hello, world! This is a toast message.
                  &lt;/ToastBody&gt;
              &lt;/Toast&gt;
          &lt;/ToastContainer&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Translucent</BlockTitle>
        <BlockText>Toasts are slightly translucent to blend in with what’s below them.</BlockText>
      </BlockHead>
      <Card class="overflow-hidden">
        <CardBody class="bg-dark">
          <Toast class="fade show" role="alert" aria-live="assertive" aria-atomic="true">
              <ToastHeader>
                <MediaGroup>
                  <Media size="xs">
                    <Img src="/images/favicon.png"/>
                  </Media>
                  <MediaText>
                    <strong>NioBoard</strong>
                  </MediaText>
                </MediaGroup>
                <small class="text-muted">11 mins ago</small>
                <ButtonClose dismiss="toast" aria-label="Close"></ButtonClose>
              </ToastHeader>
              <ToastBody>
                  Hello, world! This is a toast message.
              </ToastBody>
          </Toast>
        </CardBody>
        <CodePreview title="code">
          &lt;Toast class=&quot;fade show&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
              &lt;ToastHeader&gt;
              &lt;MediaGroup&gt;
                      &lt;Media size=&quot;xs&quot;&gt;
                          &lt;Img src=&quot;/images/favicon.png&quot;/&gt;
                      &lt;/Media&gt;
                      &lt;MediaText&gt;
                          &lt;strong&gt;NioBoard&lt;/strong&gt;
                        &lt;/MediaText&gt;
                    &lt;/MediaGroup&gt;
                  &lt;small class=&quot;text-muted&quot;&gt;11 mins ago&lt;/small&gt;
                  &lt;ButtonClose dismiss=&quot;toast&quot; aria-label=&quot;Close&quot;&gt;&lt;/ButtonClose&gt;
              &lt;/ToastHeader&gt;
              &lt;ToastBody&gt;
                  Hello, world! This is a toast message.
              &lt;/ToastBody&gt;
          &lt;/Toast&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Stacking</BlockTitle>
        <BlockText>You can stack toasts by wrapping them in a toast container, which will vertically add some spacing.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ToastContainer inline>
              <Toast class="fade show" role="alert" aria-live="assertive" aria-atomic="true">
                  <ToastHeader>
                    <MediaGroup>
                      <Media size="xs">
                          <Img src="/images/favicon.png"/>
                      </Media>
                      <MediaText>
                          <strong>NioBoard</strong>
                        </MediaText>
                    </MediaGroup>
                      <small class="text-muted">just now</small>
                      <ButtonClose dismiss="toast" aria-label="Close"></ButtonClose>
                  </ToastHeader>
                  <ToastBody>
                      See? Just like this.
                  </ToastBody>
              </Toast>
              <Toast class="fade show" role="alert" aria-live="assertive" aria-atomic="true">
                  <ToastHeader>
                    <MediaGroup>
                      <Media size="xs">
                          <Img src="/images/favicon.png"/>
                      </Media>
                      <MediaText>
                          <strong>NioBoard</strong>
                        </MediaText>
                    </MediaGroup>
                      <small class="text-muted">2 seconds ago</small>
                      <ButtonClose dismiss="toast" aria-label="Close"></ButtonClose>
                  </ToastHeader>
                  <ToastBody>
                      Heads up, toasts will stack automatically
                  </ToastBody>
              </Toast>
          </ToastContainer>
        </CardBody>
        <CodePreview title="code">
          &lt;ToastContainer inline&gt;
              &lt;Toast class=&quot;fade show&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
                  &lt;ToastHeader&gt;
                      &lt;Img src=&quot;/images/favicon.png&quot; class=&quot;me-2&quot; /&gt;
                      &lt;strong class=&quot;me-auto&quot;&gt;NioBoard&lt;/strong&gt;
                      &lt;small class=&quot;text-muted&quot;&gt;just now&lt;/small&gt;
                      &lt;ButtonClose dismiss=&quot;toast&quot; aria-label=&quot;Close&quot;&gt;&lt;/ButtonClose&gt;
                  &lt;/ToastHeader&gt;
                  &lt;ToastBody&gt;
                      See? Just like this.
                  &lt;/ToastBody&gt;
              &lt;/Toast&gt;
              &lt;Toast class=&quot;fade show&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
                  &lt;ToastHeader&gt;
                      &lt;Img src=&quot;/images/favicon.png&quot; class=&quot;me-2&quot; /&gt;
                      &lt;strong class=&quot;me-auto&quot;&gt;NioBoard&lt;/strong&gt;
                      &lt;small class=&quot;text-muted&quot;&gt;2 seconds ago&lt;/small&gt;
                      &lt;ButtonClose dismiss=&quot;toast&quot; aria-label=&quot;Close&quot;&gt;&lt;/ButtonClose&gt;
                  &lt;/ToastHeader&gt;
                  &lt;ToastBody&gt;
                      Heads up, toasts will stack automatically
                  &lt;/ToastBody&gt;
              &lt;/Toast&gt;
          &lt;/ToastContainer&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Custom content</BlockTitle>
        <BlockText>Customize your toasts by removing sub-components</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Toast class="align-items-center fade show" role="alert" aria-live="assertive" aria-atomic="true">
              <div class="d-flex">
                  <ToastBody>
                      Hello, world! This is a toast message.
                  </ToastBody>
                  <ButtonClose class="me-2 m-auto" dismiss="toast" aria-label="Close"></ButtonClose>
              </div>
          </Toast>
          <p class="mt-4">Alternatively, you can also add additional controls and components to toasts.</p>
          <Toast class="fade show" role="alert" aria-live="assertive" aria-atomic="true">
              <ToastBody>
                  Hello, world! This is a toast message.
                  <div class="mt-2 pt-2 border-top">
                      <Button type="button" variant="primary" size="sm" class="me-1">Take action</Button>
                      <Button type="button" variant="secondary" size="sm" dismiss="toast">Close</Button>
                  </div>
              </ToastBody>
          </Toast>
        </CardBody>
        <CodePreview title="code">
          &lt;Toast class=&quot;align-items-center fade show&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
              &lt;div class=&quot;d-flex&quot;&gt;
                  &lt;ToastBody&gt;
                      Hello, world! This is a toast message.
                  &lt;/ToastBody&gt;
                  &lt;ButtonClose class=&quot;me-2 m-auto&quot; dismiss=&quot;toast&quot; aria-label=&quot;Close&quot;&gt;&lt;/ButtonClose&gt;
              &lt;/div&gt;
          &lt;/Toast&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Color schemes</BlockTitle>
        <BlockText>Building on the above example, you can create different toast color schemes with our color and background utilities. Here we’ve added <code>variant="primary"</code> prop to the <code>Toast</code>, and then added <code>variant="white"</code> to our <code>CloseButton</code>. For a crisp edge, we remove the default border with <code>.border-0</code>.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Toast variant="primary" class="align-items-center fade show border-0" role="alert" aria-live="assertive" aria-atomic="true">
              <div class="d-flex">
                  <ToastBody>
                      Hello, world! This is a toast message.
                  </ToastBody>
                  <ButtonClose class="me-2 m-auto" variant="white" dismiss="toast" aria-label="Close"></ButtonClose>
              </div>
          </Toast>
        </CardBody>
        <CodePreview title="code">
          &lt;Toast variant=&quot;primary&quot; class=&quot;align-items-center fade show border-0&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
              &lt;div class=&quot;d-flex&quot;&gt;
                  &lt;ToastBody&gt;
                      Hello, world! This is a toast message.
                  &lt;/ToastBody&gt;
                  &lt;ButtonClose class=&quot;me-2 m-auto&quot; dismiss=&quot;toast&quot; aria-label=&quot;Close&quot;&gt;&lt;/ButtonClose&gt;
              &lt;/div&gt;
          &lt;/Toast&gt;
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
import Img from '@/components/img/Img.vue';
import ToastContainer from '@/components/uielements/toast/ToastContainer.vue';
import Toast from '@/components/uielements/toast/Toast.vue';
import ToastHeader from '@/components/uielements/toast/ToastHeader.vue';
import ToastBody from '@/components/uielements/toast/ToastBody.vue';
import Button from '@/components/uielements/button/Button.vue';
import ButtonClose from '@/components/uielements/button-close/ButtonClose.vue';
import MediaGroup from '@/components/media/MediaGroup.vue';
import Media from '@/components/media/Media.vue';
import MediaText from '@/components/media/MediaText.vue';

export default {
  name: 'ToastsPage', 
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
    Img,
    ToastContainer,
    Toast,
    ToastHeader,
    ToastBody,
    Button,
    ButtonClose,
    MediaGroup,
    Media,
    MediaText
  },
  
}
</script>
