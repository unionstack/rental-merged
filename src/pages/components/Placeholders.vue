<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Placeholders</BlockTitle>
        <BlockText>Use loading placeholders for your components or pages to indicate something may still be loading.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead class="wide-md">
        <BlockText><strong class="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component. 
        </BlockText>
        <BlockText>How to import component and use see the <a href="#">docs</a></BlockText>
          <BlockTitle>Example</BlockTitle>
          <BlockText>In the example below, we take a typical card component and recreate it with placeholders applied to create a “loading card”. Size and proportions are the same between the two</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="row">
              <div class="col-md-3">
                  <Card>
                      <Img src="/images/preview/a.jpg" class="card-img-top" />
                      <CardBody>
                          <CardTitle tag="h5">Card title</CardTitle>
                          <CardText>Some quick example text to build on the card title and make up the bulk.</CardText>
                          <Button href="#" variant="primary">Go somewhere</Button>
                      </CardBody>
                  </Card>
              </div>
              <div class="col-md-3">
                  <Card>
                      <Img src="/images/preview/a.jpg" class="card-img-top" />
                      <CardBody>
                          <CardTitle tag="h5" class="placeholder-glow">
                              <Placeholder col="6"></Placeholder>
                          </CardTitle>
                          <CardText class="placeholder-glow">
                              <Placeholder col="7"></Placeholder>
                              <Placeholder col="4"></Placeholder>
                              <Placeholder col="4"></Placeholder>
                              <Placeholder col="6"></Placeholder>
                              <Placeholder col="8"></Placeholder>
                          </CardText>
                          <Button href="#" tabindex="-1" variant="primary" class="disabled placeholder col-6"></Button>
                      </CardBody>
                  </Card> 
              </div>
          </div>  
        </CardBody>
        <CodePreview title="code example">
          &lt;div class=&quot;row&quot;&gt;
              &lt;div class=&quot;col-md-3&quot;&gt;
                  &lt;Card&gt;
                      &lt;Img src=&quot;/images/preview/a.jpg&quot; class=&quot;card-img-top&quot; /&gt;
                      &lt;CardBody&gt;
                          &lt;CardTitle tag=&quot;h5&quot;&gt;Card title&lt;/CardTitle&gt;
                          &lt;CardText&gt;Some quick example text to build on the card title and make up the bulk.&lt;/CardText&gt;
                          &lt;Button href=&quot;#&quot; variant=&quot;primary&quot;&gt;Go somewhere&lt;/Button&gt;
                      &lt;/CardBody&gt;
                  &lt;/Card&gt;
              &lt;/div&gt;
              &lt;div class=&quot;col-md-3&quot;&gt;
                  &lt;Card&gt;
                      &lt;Img src=&quot;/images/preview/a.jpg&quot; class=&quot;card-img-top&quot; /&gt;
                      &lt;CardBody&gt;
                          &lt;CardTitle tag=&quot;h5&quot; class=&quot;placeholder-glow&quot;&gt;
                              &lt;Placeholder col=&quot;6&quot;&gt;&lt;/Placeholder&gt;
                          &lt;/CardTitle&gt;
                          &lt;CardText class=&quot;placeholder-glow&quot;&gt;
                              &lt;Placeholder col=&quot;7&quot;&gt;&lt;/Placeholder&gt;
                              &lt;Placeholder col=&quot;4&quot;&gt;&lt;/Placeholder&gt;
                              &lt;Placeholder col=&quot;4&quot;&gt;&lt;/Placeholder&gt;
                              &lt;Placeholder col=&quot;6&quot;&gt;&lt;/Placeholder&gt;
                              &lt;Placeholder col=&quot;8&quot;&gt;&lt;/Placeholder&gt;
                          &lt;/CardText&gt;
                          &lt;Button href=&quot;#&quot; tabindex=&quot;-1&quot; variant=&quot;primary&quot; class=&quot;disabled placeholder col-6&quot;&gt;&lt;/Button&gt;
                      &lt;/CardBody&gt;
                  &lt;/Card&gt; 
              &lt;/div&gt;
          &lt;/div&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Color</BlockTitle>
          <BlockText>By default, the placeholder uses <code>currentColor</code>. This can be overridden with the <code>variant="*"</code> props.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Placeholder col="12"></Placeholder>
          <Placeholder col="12" variant="primary"></Placeholder>
          <Placeholder col="12" variant="secondary"></Placeholder>
          <Placeholder col="12" variant="success"></Placeholder>
          <Placeholder col="12" variant="danger"></Placeholder>
          <Placeholder col="12" variant="warning"></Placeholder>
          <Placeholder col="12" variant="info"></Placeholder>
          <Placeholder col="12" variant="light"></Placeholder>
          <Placeholder col="12" variant="dark"></Placeholder>  
        </CardBody>
        <CodePreview title="code example">
          &lt;Placeholder col=&quot;12&quot; variant=&quot;primary&quot;&gt;&lt;/Placeholder&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Sizing</BlockTitle>
          <BlockText>The size of <code>Placeholder</code> are based on the typographic style of the parent element. Customize them with sizing modifiers: <code>size="lg,sm,xs"</code>.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Placeholder col="12" size="lg"></Placeholder>
          <Placeholder col="12"></Placeholder>
          <Placeholder col="12" size="sm"></Placeholder>
          <Placeholder col="12" size="xs"></Placeholder>  
        </CardBody>
        <CodePreview title="code example">
          &lt;Placeholder col=&quot;12&quot; size=&quot;lg&quot;&gt;&lt;/Placeholder&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Animation</BlockTitle>
          <BlockText>Animate placeholders with <code>.placeholder-glow</code> or <code>.placeholder-wave</code> to better convey the perception of something being actively loaded.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <p class="placeholder-glow">
              <Placeholder col="12"></Placeholder>
          </p>
          <p class="placeholder-wave">
              <Placeholder col="12"></Placeholder>
          </p> 
        </CardBody>
        <CodePreview title="code example">
          &lt;p class=&quot;placeholder-glow&quot;&gt;
              &lt;Placeholder col=&quot;12&quot;&gt;&lt;/Placeholder&gt;
          &lt;/p&gt;
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
import CardTitle from '@/components/uielements/card/CardTitle.vue';
import CardText from '@/components/uielements/card/CardText.vue';
import Button from '@/components/uielements/button/Button.vue';
import Placeholder from '@/components/uielements/placeholder/Placeholder.vue';

export default {
  name: 'PlaceholdersPage', 
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
    CardTitle,
    CardText,
    Button,
    Placeholder
},
}
</script>
