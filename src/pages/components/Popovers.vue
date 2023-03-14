<!-- eslint-disable vue/no-unused-components -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Popovers</BlockTitle>
        <BlockText>Documentation and examples for adding Bootstrap popovers, like those found in iOS, to any element on your site.</BlockText>
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
          <Button size="lg" variant="danger" v-nk-popover="{title: 'Popover title', content:`And here's some amazing content. It's very engaging. Right?`}">Click to toggle popover</Button>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button size=&quot;lg&quot; variant=&quot;danger&quot; v-nk-popover=&quot;{title: 'Popover title', content:`And here's some amazing content. It's very engaging. Right?`}&quot;&gt;Click to toggle popover&lt;/Button&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Four directions</BlockTitle>
        <BlockText>Four options are available: top, right, bottom, and left. Directions are mirrored when using Bootstrap in RTL. Set <code>v-nk-popover:top||right||bottom||left</code> to change the direction.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex gap g-3">
              <li>
                  <Button variant="secondary" data-bs-container="body" v-nk-popover:top="{content:'Top popover', container:'body'}">
                      Popover on top
                  </Button>
              </li>
              <li>
                  <Button variant="secondary" data-bs-container="body" v-nk-popover:right="{content:'Right popover', container:'body'}">
                      Popover on right
                  </Button>
              </li>
              <li>
                  <Button variant="secondary" data-bs-container="body" v-nk-popover:bottom="{content:'Bottom popover', container:'body'}">
                      Popover on bottom
                  </Button>
              </li>
              <li>
                  <Button variant="secondary" data-bs-container="body" v-nk-popover:left="{content:'Left popover', container:'body'}">
                      Popover on left
                  </Button>
              </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button variant=&quot;secondary&quot; data-bs-container=&quot;body&quot; v-nk-popover:top=&quot;{content:'Top popover', container:'body'}&quot;&gt;
                      Popover on top
                  &lt;/Button&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Custom popovers</BlockTitle>
        <BlockText>We set a custom class with <code>data-bs-custom-class="custom-popover"</code> to scope our custom appearance </BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Button variant="secondary" v-nk-popover:right="{title: 'Custom popover', content:'This popover is themed via CSS variables.',customClass:'custom-popover'}">
              Custom popover
          </Button>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button variant=&quot;secondary&quot; v-nk-popover:right=&quot;{title: 'Custom popover', content:'This popover is themed via CSS variables.',customClass:'custom-popover'}&quot;&gt;
              Custom popover
          &lt;/Button&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Dismiss on next click</BlockTitle>
        <BlockText>Use the focus trigger to dismiss popovers on the user’s next click of a different element than the toggle element.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Button size="lg" variant="danger" v-nk-popover:right="{title: 'Dismissible popover', content:`And here's some amazing content. It's very engaging. Right?`,trigger:'focus'}">Dismissible popover</Button>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button size=&quot;lg&quot; variant=&quot;danger&quot; v-nk-popover:right=&quot;{title: 'Dismissible popover', content:`And here's some amazing content. It's very engaging. Right?`,trigger:'focus'}&quot;&gt;Dismissible popover&lt;/Button&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Disabled elements</BlockTitle>
        <BlockText>Elements with the disabled attribute aren’t interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you’ll want to trigger the popover from a wrapper <code>div</code> or <code>span</code>, ideally made keyboard-focusable using <code>tabindex="0"</code>.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <span class="d-inline-block" tabindex="0" v-nk-popover:right="{content:'Disabled popover',trigger:'hover focus'}" >
              <Button variant="primary" type="button" disabled>Disabled button</Button>
          </span>
        </CardBody>
        <CodePreview title="code example">
          &lt;span class=&quot;d-inline-block&quot; tabindex=&quot;0&quot; v-nk-popover:right=&quot;{content:'Disabled popover',trigger:'hover focus'}&quot; &gt;
              &lt;Button variant=&quot;primary&quot; type=&quot;button&quot; disabled&gt;Disabled button&lt;/Button&gt;
          &lt;/span&gt;
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
  name: 'PopoversPage', 
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
    Button
  }
  
}
</script>
