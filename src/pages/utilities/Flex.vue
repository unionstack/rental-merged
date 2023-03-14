<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head wide-md">
      <BlockHeadContent>
        <BlockTitle tag="h1">Flex</BlockTitle>
        <BlockText>Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Enable flex behaviors</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="d-flex p-2 bg-secondary text-white mb-3">I'm a flexbox container!</div>
          <div class="d-inline-flex p-2 bg-secondary text-white">I'm an inline flexbox container!</div>
        </CardBody>
        <CodePreview title="code example">
          &lt;div class=&quot;d-flex p-2 bg-secondary text-white mb-3&quot;&gt;I'm a flexbox container!&lt;/div&gt;
          &lt;div class=&quot;d-inline-flex p-2 bg-secondary text-white&quot;&gt;I'm an inline flexbox container!&lt;/div&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Direction</BlockTitle>
          <BlockText>Use <code>.flex-row</code> to set a horizontal direction (the browser default), or <code>.flex-row-reverse</code> to start the horizontal direction from the opposite side.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="d-flex flex-row mb-3 bg-secondary text-white">
          <div class="p-2">Flex item 1</div>
          <div class="p-2">Flex item 2</div>
          <div class="p-2">Flex item 3</div>
        </div>
        <div class="d-flex flex-row-reverse bg-secondary text-white">
          <div class="p-2">Flex item 1</div>
          <div class="p-2">Flex item 2</div>
          <div class="p-2">Flex item 3</div>
        </div>
        <p class="mt-5">Use <code>.flex-column</code> to set a vertical direction, or <code>.flex-column-reverse</code> to start the vertical direction from the opposite side.</p>
        <div class="d-flex flex-column mb-3 bg-secondary text-white">
          <div class="p-2">Flex item 1</div>
          <div class="p-2">Flex item 2</div>
          <div class="p-2">Flex item 3</div>
        </div>
        <div class="d-flex flex-column-reverse bg-secondary text-white">
          <div class="p-2">Flex item 1</div>
          <div class="p-2">Flex item 2</div>
          <div class="p-2">Flex item 3</div>
        </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;div class=&quot;d-flex flex-row mb-3 bg-secondary text-white&quot;&gt;
          &lt;div class=&quot;p-2&quot;&gt;Flex item 1&lt;/div&gt;
          &lt;div class=&quot;p-2&quot;&gt;Flex item 2&lt;/div&gt;
          &lt;div class=&quot;p-2&quot;&gt;Flex item 3&lt;/div&gt;
        &lt;/div&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Justify content</BlockTitle>
          <BlockText>Use justify-content utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if flex-direction: column). Choose from start (browser default), end, center, between, around, or evenly.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="d-flex justify-content-start mb-3 bg-secondary text-white">
              <div class="p-2">Flex item</div>
              <div class="p-2">Flex item</div>
              <div class="p-2">Flex item</div>
          </div>
          <div class="d-flex justify-content-end mb-3 bg-secondary text-white">
              <div class="p-2">Flex item</div>
              <div class="p-2">Flex item</div>
              <div class="p-2">Flex item</div>
          </div>
          <div class="d-flex justify-content-center mb-3 bg-secondary text-white">
              <div class="p-2">Flex item</div>
              <div class="p-2">Flex item</div>
              <div class="p-2">Flex item</div>
          </div>
          <div class="d-flex justify-content-between mb-3 bg-secondary text-white">
              <div class="p-2">Flex item</div>
              <div class="p-2">Flex item</div>
              <div class="p-2">Flex item</div>
          </div>
          <div class="d-flex justify-content-around mb-3 bg-secondary text-white">
              <div class="p-2">Flex item</div>
              <div class="p-2">Flex item</div>
              <div class="p-2">Flex item</div>
          </div>
          <div class="d-flex justify-content-evenly bg-secondary text-white">
              <div class="p-2">Flex item</div>
              <div class="p-2">Flex item</div>
              <div class="p-2">Flex item</div>
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;div class=&quot;d-flex justify-content-start mb-3 bg-secondary text-white&quot;&gt;
              &lt;div class=&quot;p-2&quot;&gt;Flex item&lt;/div&gt;
              &lt;div class=&quot;p-2&quot;&gt;Flex item&lt;/div&gt;
              &lt;div class=&quot;p-2&quot;&gt;Flex item&lt;/div&gt;
          &lt;/div&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Align items</BlockTitle>
          <BlockText>Use align-items utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if flex-direction: column). Choose from start, end, center, baseline, or stretch (browser default).</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="d-flex align-items-start mb-3 bg-secondary text-white" style="height: 100px">
              <div class="p-2 border">Flex item</div>
              <div class="p-2 border">Flex item</div>
              <div class="p-2 border">Flex item</div>
          </div>
          <div class="d-flex align-items-end mb-3 bg-secondary text-white" style="height: 100px">
              <div class="p-2 border">Flex item</div>
              <div class="p-2 border">Flex item</div>
              <div class="p-2 border">Flex item</div>
          </div>
          <div class="d-flex align-items-center mb-3 bg-secondary text-white" style="height: 100px">
              <div class="p-2 border">Flex item</div>
              <div class="p-2 border">Flex item</div>
              <div class="p-2 border">Flex item</div>
          </div>
          <div class="d-flex align-items-baseline mb-3 bg-secondary text-white" style="height: 100px">
              <div class="p-2 border">Flex item</div>
              <div class="p-2 border">Flex item</div>
              <div class="p-2 border">Flex item</div>
          </div>
          <div class="d-flex align-items-stretch mb-3 bg-secondary text-white" style="height: 100px">
              <div class="p-2 border">Flex item</div>
              <div class="p-2 border">Flex item</div>
              <div class="p-2 border">Flex item</div>
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;div class=&quot;d-flex align-items-start mb-3 bg-secondary text-white&quot; style=&quot;height: 100px&quot;&gt;
              &lt;div class=&quot;p-2 border&quot;&gt;Flex item&lt;/div&gt;
              &lt;div class=&quot;p-2 border&quot;&gt;Flex item&lt;/div&gt;
              &lt;div class=&quot;p-2 border&quot;&gt;Flex item&lt;/div&gt;
          &lt;/div&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Align self</BlockTitle>
          <BlockText>Use align-self utilities on flexbox items to individually change their alignment on the cross axis (the y-axis to start, x-axis if flex-direction: column). Choose from the same options as align-items: start, end, center, baseline, or stretch (browser default).</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="d-flex mb-3 bg-secondary text-white" style="height: 100px">
              <div class="p-2 border">Flex item</div>
              <div class="p-2 border align-self-start">Flex item</div>
              <div class="p-2 border">Flex item</div>
          </div>
          <div class="d-flex mb-3 bg-secondary text-white" style="height: 100px">
              <div class="p-2 border">Flex item</div>
              <div class="p-2 border align-self-end">Flex item</div>
              <div class="p-2 border">Flex item</div>
          </div>
          <div class="d-flex  mb-3 bg-secondary text-white" style="height: 100px">
              <div class="p-2 border">Flex item</div>
              <div class="p-2 border align-self-center">Flex item</div>
              <div class="p-2 border">Flex item</div>
          </div>
          <div class="d-flex  mb-3 bg-secondary text-white" style="height: 100px">
              <div class="p-2 border">Flex item</div>
              <div class="p-2 border align-self-baseline">Flex item</div>
              <div class="p-2 border">Flex item</div>
          </div>
          <div class="d-flex  mb-3 bg-secondary text-white" style="height: 100px">
              <div class="p-2 border">Flex item</div>
              <div class="p-2 border align-self-stretch">Flex item</div>
              <div class="p-2 border">Flex item</div>
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;div class=&quot;d-flex mb-3 bg-secondary text-white&quot; style=&quot;height: 100px&quot;&gt;
              &lt;div class=&quot;p-2 border&quot;&gt;Flex item&lt;/div&gt;
              &lt;div class=&quot;p-2 border align-self-start&quot;&gt;Flex item&lt;/div&gt;
              &lt;div class=&quot;p-2 border&quot;&gt;Flex item&lt;/div&gt;
          &lt;/div&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Fill</BlockTitle>
          <BlockText>Use the <code>.flex-fill</code> class on a series of sibling elements to force them into widths equal to their content (or equal widths if their content does not surpass their border-boxes) while taking up all available horizontal space.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="d-flex bg-secondary text-white">
              <div class="p-2 flex-fill border">Flex item with a lot of content</div>
              <div class="p-2 flex-fill border">Flex item</div>
              <div class="p-2 flex-fill border">Flex item</div>
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;div class=&quot;d-flex bg-secondary text-white&quot;&gt;
              &lt;div class=&quot;p-2 flex-fill border&quot;&gt;Flex item with a lot of content&lt;/div&gt;
              &lt;div class=&quot;p-2 flex-fill border&quot;&gt;Flex item&lt;/div&gt;
              &lt;div class=&quot;p-2 flex-fill border&quot;&gt;Flex item&lt;/div&gt;
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

export default {
  name: 'FlexPage', 
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
  },
}
</script>
