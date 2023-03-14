<!-- eslint-disable vue/no-unused-components -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head wide-md">
      <BlockHeadContent>
        <BlockTitle tag="h1">Tooltips</BlockTitle>
        <BlockText>Documentation and examples for adding custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and use <code>v-nk-tooltip</code> directive for local title storage.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead class="wide-md">
        <BlockText><strong class="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component. 
        </BlockText>
        <BlockText>How to import component and use see the <a href="#">docs</a></BlockText>
        <BlockTitle>Tooltips on links</BlockTitle>
        <BlockText>Hover over the links below to see tooltips:</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <p class="muted">
                Placeholder text to demonstrate some <a href="#" v-nk-tooltip="'Default tooltip'">inline links</a> with tooltips. This is now just filler, no killer. Content placed here just to mimic the presence of <a href="#" v-nk-tooltip="'Another tooltip'">real text</a>. And all that just to give you an idea of how tooltips would look when used in real-world situations. So hopefully you've now seen how <a href="#" v-nk-tooltip="'Another one here too'">these tooltips on links</a> can work in practice, once you use them on <a href="#" v-nk-tooltip="'The last tip!'">your own</a> site or project.
          </p>
        </CardBody>
        <CodePreview title="code example">
          &lt;a href=&quot;#&quot; v-nk-tooltip=&quot;'Default tooltip'&quot;&gt;inline links&lt;/a&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Directions</BlockTitle>
        <BlockText>Hover over the buttons below to see the four tooltips <code>directions: top, right, bottom, and left</code>. Directions are mirrored when using Bootstrap in RTL. use <code>v-nk-tooltip:right||bottom||left</code> Default direction is top</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex gap g-3">
              <li>
                  <Button type="button" variant="primary" v-nk-tooltip="'Tooltip on top'">
                      Tooltip on top
                  </Button>
              </li>
              <li>
                  <Button type="button" variant="primary"  v-nk-tooltip:right="'Tooltip on right'">
                      Tooltip on right
                  </Button>
              </li>
              <li>
                  <Button type="button" variant="primary"  v-nk-tooltip:bottom="'Tooltip on bottom'">
                      Tooltip on bottom
                  </Button>
              </li>
              <li>
                  <Button type="button" variant="primary" v-nk-tooltip:left="'Tooltip on left'">
                      Tooltip on left
                  </Button>
              </li>
              <li>
                  <Button type="button" variant="primary" v-nk-tooltip="'<em>Tooltip</em> <u>with</u> <b>HTML</b>'">
                      Tooltip with HTML
                  </Button>
              </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;ul class=&quot;d-flex gap g-3&quot;&gt;
              &lt;li&gt;
                  &lt;Button type=&quot;button&quot; variant=&quot;primary&quot; v-nk-tooltip=&quot;'Tooltip on top'&quot;&gt;
                      Tooltip on top
                  &lt;/Button&gt;
              &lt;/li&gt;
              &lt;li&gt;
                  &lt;Button type=&quot;button&quot; variant=&quot;primary&quot;  v-nk-tooltip:right=&quot;'Tooltip on right'&quot;&gt;
                      Tooltip on right
                  &lt;/Button&gt;
              &lt;/li&gt;
              &lt;li&gt;
                  &lt;Button type=&quot;button&quot; variant=&quot;primary&quot;  v-nk-tooltip:bottom=&quot;'Tooltip on bottom'&quot;&gt;
                      Tooltip on bottom
                  &lt;/Button&gt;
              &lt;/li&gt;
              &lt;li&gt;
                  &lt;Button type=&quot;button&quot; variant=&quot;primary&quot; v-nk-tooltip:left=&quot;'Tooltip on left'&quot;&gt;
                      Tooltip on left
                  &lt;/Button&gt;
              &lt;/li&gt;
              &lt;li&gt;
                  &lt;Button type=&quot;button&quot; variant=&quot;primary&quot; v-nk-tooltip=&quot;'&lt;em&gt;Tooltip&lt;/em&gt; &lt;u&gt;with&lt;/u&gt; &lt;b&gt;HTML&lt;/b&gt;'&quot;&gt;
                      Tooltip with HTML
                  &lt;/Button&gt;
              &lt;/li&gt;
          &lt;/ul&gt;
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
  name: 'TooltipPage', 
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
}, 
}
</script>
