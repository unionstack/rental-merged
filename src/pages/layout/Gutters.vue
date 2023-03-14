<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Gutters</BlockTitle>
        <BlockText>Gutters are the padding between your columns, used to responsively space and align content in the Bootstrap grid system.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Horizontal gutters</BlockTitle>
        <BlockText><code>.gx-*</code> classes can be used to control the horizontal gutter widths. The <code>.container</code> or <code>.container-fluid</code> parent may need to be adjusted if larger gutters are used too to avoid unwanted overflow, using a matching padding utility. For example, in the following example we’ve increased the padding with <code>.px-4</code>:</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
            <Container utils="px-4">
              <Row utils="gx-5">
                  <Col>
                      <div class="p-3 border bg-light">Custom column padding</div>
                  </Col>
                  <Col>
                      <div class="p-3 border bg-light">Custom column padding</div>
                  </Col>
              </Row>
          </Container>
        </CardBody>
        <CodePreview title="code example">
          &lt;Container utils=&quot;px-4&quot;&gt;
              &lt;Row utils=&quot;gx-5&quot;&gt;
                  &lt;Col&gt;
                      &lt;div class=&quot;p-3 border bg-light&quot;&gt;Custom column padding&lt;/div&gt;
                  &lt;/Col&gt;
                  &lt;Col&gt;
                      &lt;div class=&quot;p-3 border bg-light&quot;&gt;Custom column padding&lt;/div&gt;
                  &lt;/Col&gt;
              &lt;/Row&gt;
          &lt;/Container&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Vertical gutters</BlockTitle>
        <BlockText><code>.gy-*</code> classes can be used to control the vertical gutter widths. Like the horizontal gutters, the vertical gutters can cause some overflow below the .row at the end of a page. If this occurs, you add a wrapper around <code>.row</code> with the <code>.overflow-hidden</code> class:</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
            <Row utils="gy-5">
              <Col col="6">
                  <div class="p-3 border bg-light">Custom column padding</div>
              </Col>
              <Col col="6">
                  <div class="p-3 border bg-light">Custom column padding</div>
              </Col>
              <Col col="6">
                  <div class="p-3 border bg-light">Custom column padding</div>
              </Col>
              <Col col="6">
                  <div class="p-3 border bg-light">Custom column padding</div>
              </Col>
          </Row>
        </CardBody>
        <CodePreview title="code example">
          &lt;Row utils=&quot;gy-5&quot;&gt;
              &lt;Col col=&quot;6&quot;&gt;
                  &lt;div class=&quot;p-3 border bg-light&quot;&gt;Custom column padding&lt;/div&gt;
              &lt;/Col&gt;
              &lt;Col col=&quot;6&quot;&gt;
                  &lt;div class=&quot;p-3 border bg-light&quot;&gt;Custom column padding&lt;/div&gt;
              &lt;/Col&gt;
              &lt;Col col=&quot;6&quot;&gt;
                  &lt;div class=&quot;p-3 border bg-light&quot;&gt;Custom column padding&lt;/div&gt;
              &lt;/Col&gt;
              &lt;Col col=&quot;6&quot;&gt;
                  &lt;div class=&quot;p-3 border bg-light&quot;&gt;Custom column padding&lt;/div&gt;
              &lt;/Col&gt;
          &lt;/Row&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Horizontal & vertical gutters</BlockTitle>
        <BlockText><code>.g-*</code> classes can be used to control the horizontal gutter widths, for the following example we use a smaller gutter width, so there won’t be a need to add the .overflow-hidden wrapper class.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
            <Row utils="g-2">
              <Col col="6">
                  <div class="p-3 border bg-light">Custom column padding</div>
              </Col>
              <Col col="6">
                  <div class="p-3 border bg-light">Custom column padding</div>
              </Col>
              <Col col="6">
                  <div class="p-3 border bg-light">Custom column padding</div>
              </Col>
              <Col col="6">
                  <div class="p-3 border bg-light">Custom column padding</div>
              </Col>
          </Row>
        </CardBody>
        <CodePreview title="code example">
          &lt;Row utils=&quot;g-2&quot;&gt;
              &lt;Col col=&quot;6&quot;&gt;
                  &lt;div class=&quot;p-3 border bg-light&quot;&gt;Custom column padding&lt;/div&gt;
              &lt;/Col&gt;
              &lt;Col col=&quot;6&quot;&gt;
                  &lt;div class=&quot;p-3 border bg-light&quot;&gt;Custom column padding&lt;/div&gt;
              &lt;/Col&gt;
              &lt;Col col=&quot;6&quot;&gt;
                  &lt;div class=&quot;p-3 border bg-light&quot;&gt;Custom column padding&lt;/div&gt;
              &lt;/Col&gt;
              &lt;Col col=&quot;6&quot;&gt;
                  &lt;div class=&quot;p-3 border bg-light&quot;&gt;Custom column padding&lt;/div&gt;
              &lt;/Col&gt;
          &lt;/Row&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Row columns gutters</BlockTitle>
        <BlockText>Gutter classes can also be added to row columns. In the following example, we use responsive row columns and responsive gutter classes.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Row utils="row-cols-2 row-cols-lg-5 g-2 g-lg-3">
              <Col>
                  <div class="p-3 border bg-light">Row column</div>
              </Col>
              <Col>
                  <div class="p-3 border bg-light">Row column</div>
              </Col>
              <Col>
                  <div class="p-3 border bg-light">Row column</div>
              </Col>
              <Col>
                  <div class="p-3 border bg-light">Row column</div>
              </Col>
              <Col>
                  <div class="p-3 border bg-light">Row column</div>
              </Col>
              <Col>
                  <div class="p-3 border bg-light">Row column</div>
              </Col>
              <Col>
                  <div class="p-3 border bg-light">Row column</div>
              </Col>
              <Col>
                  <div class="p-3 border bg-light">Row column</div>
              </Col>
              <Col>
                  <div class="p-3 border bg-light">Row column</div>
              </Col>
              <Col>
                  <div class="p-3 border bg-light">Row column</div>
              </Col>
          </Row>
        </CardBody>
        <CodePreview title="code example">
          &lt;Row utils=&quot;row-cols-2 row-cols-lg-5 g-2 g-lg-3&quot;&gt;
              &lt;Col&gt;
                  &lt;div class=&quot;p-3 border bg-light&quot;&gt;Row column&lt;/div&gt;
              &lt;/Col&gt;
              &lt;Col&gt;
                  &lt;div class=&quot;p-3 border bg-light&quot;&gt;Row column&lt;/div&gt;
              &lt;/Col&gt;
              &lt;Col&gt;
                  &lt;div class=&quot;p-3 border bg-light&quot;&gt;Row column&lt;/div&gt;
              &lt;/Col&gt;
              &lt;Col&gt;
                  &lt;div class=&quot;p-3 border bg-light&quot;&gt;Row column&lt;/div&gt;
              &lt;/Col&gt;
              &lt;Col&gt;
                  &lt;div class=&quot;p-3 border bg-light&quot;&gt;Row column&lt;/div&gt;
              &lt;/Col&gt;
              &lt;Col&gt;
                  &lt;div class=&quot;p-3 border bg-light&quot;&gt;Row column&lt;/div&gt;
              &lt;/Col&gt;
              &lt;Col&gt;
                  &lt;div class=&quot;p-3 border bg-light&quot;&gt;Row column&lt;/div&gt;
              &lt;/Col&gt;
              &lt;Col&gt;
                  &lt;div class=&quot;p-3 border bg-light&quot;&gt;Row column&lt;/div&gt;
              &lt;/Col&gt;
              &lt;Col&gt;
                  &lt;div class=&quot;p-3 border bg-light&quot;&gt;Row column&lt;/div&gt;
              &lt;/Col&gt;
              &lt;Col&gt;
                  &lt;div class=&quot;p-3 border bg-light&quot;&gt;Row column&lt;/div&gt;
              &lt;/Col&gt;
          &lt;/Row&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>No gutters</BlockTitle>
        <BlockText>The gutters between columns in our predefined grid classes can be removed with <code>.g-0</code>. This removes the negative margins from <code>.row</code> and the horizontal padding from all immediate children columns.</BlockText>
        <BlockText>Need an edge-to-edge design? Drop the parent <code>.container</code> or <code>.container-fluid</code> and add <code>.mx-0</code> to the <code>.row</code> to prevent overflow.</BlockText>
        <BlockText>In practice, here’s how it looks. Note you can continue to use this with all other predefined grid classes (including column widths, responsive tiers, reorders, and more).</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Row utils="g-0">
              <Col sm="6" md="8" utils="p-3 border bg-light">.col-sm-6 .col-md-8</Col>
              <Col col="6" md="4" utils="p-3 border bg-light">.col-6 .col-md-4</Col>
          </Row>
        </CardBody>
        <CodePreview title="code example">
          &lt;Row utils=&quot;g-0&quot;&gt;
              &lt;Col sm=&quot;6&quot; md=&quot;8&quot; utils=&quot;p-3 border bg-light&quot;&gt;.col-sm-6 .col-md-8&lt;/Col&gt;
              &lt;Col col=&quot;6&quot; md=&quot;4&quot; utils=&quot;p-3 border bg-light&quot;&gt;.col-6 .col-md-4&lt;/Col&gt;
          &lt;/Row&gt;
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
import Container from '@/components/layout/Container.vue';
import Row from '@/components/layout/Row.vue';
import Col from '@/components/layout/Col.vue';

export default {
  name: 'GuttersPage', 
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
    Container,
    Row,
    Col
  },
}
</script>
