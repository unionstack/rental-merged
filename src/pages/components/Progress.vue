<!-- eslint-disable vue/no-unused-components -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Progress</BlockTitle>
        <BlockText>Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.</BlockText>
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
          <ul class="gap g-3">
              <li>
                  <Progress>
                      <ProgressBar></ProgressBar>
                  </Progress>
              </li>
              <li>
                  <Progress>
                      <ProgressBar progress="25"></ProgressBar>
                  </Progress>
              </li>
              <li>
                  <Progress>
                      <ProgressBar progress="50"></ProgressBar>
                  </Progress>
              </li>
              <li>
                  <Progress>
                      <ProgressBar progress="75"></ProgressBar>
                  </Progress>
              </li>
              <li>
                  <Progress>
                      <ProgressBar progress="100"></ProgressBar>
                  </Progress>
              </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;Progress&gt;
              &lt;ProgressBar&gt;&lt;/ProgressBar&gt;
          &lt;/Progress&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Labels</BlockTitle>
        <BlockText>Add labels to your progress bars by placing text within the <code>ProgressBar</code>. </BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Progress>
              <ProgressBar progress="25">25%</ProgressBar>
          </Progress>
        </CardBody>
        <CodePreview title="code example">
          &lt;Progress&gt;
              &lt;ProgressBar progress=&quot;25&quot;&gt;25%&lt;/ProgressBar&gt;
          &lt;/Progress&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Backgrounds</BlockTitle>
        <BlockText>Use <code>variant="*"</code> props to change the appearance of individual progress bars.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="gap g-3">
              <li>
                  <Progress>
                      <ProgressBar progress="25" variant="success"></ProgressBar>
                  </Progress>
              </li>
              <li>
                  <Progress>
                      <ProgressBar progress="50" variant="info"></ProgressBar>
                  </Progress>
              </li>
              <li>
                  <Progress>
                      <ProgressBar progress="75" variant="warning"></ProgressBar>
                  </Progress>
              </li>
              <li>
                  <Progress>
                      <ProgressBar progress="100" variant="danger"></ProgressBar>
                  </Progress>
              </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;Progress&gt;
              &lt;ProgressBar progress=&quot;25&quot; variant=&quot;success&quot;&gt;&lt;/ProgressBar&gt;
          &lt;/Progress&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Multiple bars</BlockTitle>
        <BlockText>Include multiple progress bars in a progress component if you need.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Progress>
              <ProgressBar progress="15"></ProgressBar>
              <ProgressBar variant="success" progress="30"></ProgressBar>
              <ProgressBar variant="info" progress="20"></ProgressBar>
          </Progress>
        </CardBody>
        <CodePreview title="code example">
          &lt;Progress&gt;
              &lt;ProgressBar progress=&quot;15&quot;&gt;&lt;/ProgressBar&gt;
              &lt;ProgressBar variant=&quot;success&quot; progress=&quot;30&quot;&gt;&lt;/ProgressBar&gt;
              &lt;ProgressBar variant=&quot;info&quot; progress=&quot;20&quot;&gt;&lt;/ProgressBar&gt;
          &lt;/Progress&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Striped</BlockTitle>
        <BlockText>Add <code>striped</code> props to any <code>ProgressBar</code> to apply a stripe via CSS gradient over the progress bar’s background color.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="gap g-3">
              <li>
                  <Progress>
                      <ProgressBar striped progress="10"></ProgressBar>
                  </Progress>
              </li>
              <li>
                  <Progress>
                      <ProgressBar striped variant="success" progress="25"></ProgressBar>
                  </Progress>
              </li>
              <li>
                  <Progress>
                      <ProgressBar striped variant="info" progress="50"></ProgressBar>
                  </Progress>
              </li>
              <li>
                  <Progress>
                      <ProgressBar striped variant="warning" progress="75"></ProgressBar>
                  </Progress>
              </li>
              <li>
                  <Progress>
                      <ProgressBar striped variant="danger" progress="100"></ProgressBar>
                  </Progress>
              </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;Progress&gt;
              &lt;ProgressBar striped progress=&quot;10&quot;&gt;&lt;/ProgressBar&gt;
          &lt;/Progress&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Animated stripes</BlockTitle>
        <BlockText>The striped gradient can also be animated. Add <code>animated</code> prop to <code>ProgressBar</code> to animate the stripes right to left via CSS3 animations.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Progress>
              <ProgressBar striped animated progress="75"></ProgressBar>
          </Progress>
        </CardBody>
        <CodePreview title="code example">
          &lt;Progress&gt;
              &lt;ProgressBar striped animated progress=&quot;75&quot;&gt;&lt;/ProgressBar&gt;
          &lt;/Progress&gt;
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
import Progress from '@/components/uielements/progress/Progress.vue';
import ProgressBar from '@/components/uielements/progress/ProgressBar.vue';

export default {
  name: 'ProgressPage', 
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
        Progress,
        ProgressBar
    }
}
</script>
