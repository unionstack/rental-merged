<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Containers</BlockTitle>
        <BlockText>Containers are a fundamental building block of Bootstrap that contain, pad, and align your content within a given device or viewport.</BlockText>
      </BlockHeadContent>
    </BlockHead>
  
    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Containers</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="table-responsive">
              <Table class="small">
                  <TableHead>
                      <tr>
                          <th></th>
                          <th>Extra small<div class="fw-normal">&lt;576px</div></th>
                          <th>Small<div class="fw-normal">≥576px</div></th>
                          <th>Medium<div class="fw-normal">≥768px</div></th>
                          <th>Large<div class="fw-normal">≥992px</div></th>
                          <th>X-Large<div class="fw-normal">≥1200px</div></th>
                          <th>XX-Large<div class="fw-normal">≥1400px</div></th>
                      </tr>
                  </TableHead>
                  <TableBody>
                      <tr>
                          <td><code>.container</code></td>
                          <td><span class="text-muted">100%</span></td>
                          <td>540px</td>
                          <td>720px</td>
                          <td>960px</td>
                          <td>1140px</td>
                          <td>1320px</td>
                      </tr>
                      <tr>
                          <td><code>.container-sm</code></td>
                          <td><span class="text-muted">100%</span></td>
                          <td>540px</td>
                          <td>720px</td>
                          <td>960px</td>
                          <td>1140px</td>
                          <td>1320px</td>
                      </tr>
                      <tr>
                          <td><code>.container-md</code></td>
                          <td><span class="text-muted">100%</span></td>
                          <td><span class="text-muted">100%</span></td>
                          <td>720px</td>
                          <td>960px</td>
                          <td>1140px</td>
                          <td>1320px</td>
                      </tr>
                      <tr>
                          <td><code>.container-lg</code></td>
                          <td><span class="text-muted">100%</span></td>
                          <td><span class="text-muted">100%</span></td>
                          <td><span class="text-muted">100%</span></td>
                          <td>960px</td>
                          <td>1140px</td>
                          <td>1320px</td>
                      </tr>
                      <tr>
                          <td><code>.container-xl</code></td>
                          <td><span class="text-muted">100%</span></td>
                          <td><span class="text-muted">100%</span></td>
                          <td><span class="text-muted">100%</span></td>
                          <td><span class="text-muted">100%</span></td>
                          <td>1140px</td>
                          <td>1320px</td>
                      </tr>
                      <tr>
                          <td><code>.container-xxl</code></td>
                          <td><span class="text-muted">100%</span></td>
                          <td><span class="text-muted">100%</span></td>
                          <td><span class="text-muted">100%</span></td>
                          <td><span class="text-muted">100%</span></td>
                          <td><span class="text-muted">100%</span></td>
                          <td>1320px</td>
                      </tr>
                      <tr>
                          <td><code>.container-fluid</code></td>
                          <td><span class="text-muted">100%</span></td>
                          <td><span class="text-muted">100%</span></td>
                          <td><span class="text-muted">100%</span></td>
                          <td><span class="text-muted">100%</span></td>
                          <td><span class="text-muted">100%</span></td>
                          <td><span class="text-muted">100%</span></td>
                      </tr>
                  </TableBody>
              </Table>
          </div>
        </CardBody>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Default container</BlockTitle>
        <BlockText>Our default <code>Container</code> component is a responsive, fixed-width container, meaning its max-width changes at each breakpoint. Use <code>fluid</code> prop for container fluid.</BlockText>
      </BlockHead>
      <Card>
        <CodePreview title="code example">
          &lt;Container&gt;
            &lt;!-- Content here --&gt;
          &lt;/Container&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Grid system</BlockTitle>
        <BlockText>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers, Sass variables and mixins, and dozens of predefined classes.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Row>
              <Col utils="bg-light border p-3">
                  Column
              </Col>
              <Col utils="bg-light border p-3">
                  Column
              </Col>
              <Col utils="bg-light border p-3">
                  Column
              </Col>
          </Row>
        </CardBody>
        <CodePreview title="code example">
          &lt;Row&gt;
              &lt;Col utils=&quot;bg-light border p-3&quot;&gt;
                  Column
              &lt;/Col&gt;
              &lt;Col utils=&quot;bg-light border p-3&quot;&gt;
                  Column
              &lt;/Col&gt;
              &lt;Col utils=&quot;bg-light border p-3&quot;&gt;
                  Column
              &lt;/Col&gt;
          &lt;/Row&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Nesting</BlockTitle>
        <BlockText>To nest your content with the default grid, add a new <code>Row</code> and set of <code>Col</code> with <code>sm=*</code> prop columns within an existing <code>.col-sm-*</code> column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Row>
              <Col sm="3" utils="bg-light border p-3">
                  Level 1: .col-sm-3
              </Col>
              <Col sm="9" utils="py-2">
                  <Row>
                      <Col col="8" sm="6" utils="bg-light border p-3">
                          Level 2: .col-8 .col-sm-6
                      </Col>

                      <Col col="4" sm="6" utils="bg-light border p-3">
                          Level 2: .col-4 .col-sm-6
                      </Col>
                  </Row>
              </Col>
          </Row>
        </CardBody>
        <CodePreview title="code example">
          &lt;Row&gt;
              &lt;Col sm=&quot;3&quot; utils=&quot;bg-light border p-3&quot;&gt;
                  Level 1: .col-sm-3
              &lt;/Col&gt;
              &lt;Col sm=&quot;9&quot; utils=&quot;py-2&quot;&gt;
                  &lt;Row&gt;
                      &lt;Col col=&quot;8&quot; sm=&quot;6&quot; utils=&quot;bg-light border p-3&quot;&gt;
                          Level 2: .col-8 .col-sm-6
                      &lt;/Col&gt;

                      &lt;Col col=&quot;4&quot; sm=&quot;6&quot; utils=&quot;bg-light border p-3&quot;&gt;
                          Level 2: .col-4 .col-sm-6
                      &lt;/Col&gt;
                  &lt;/Row&gt;
              &lt;/Col&gt;
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
import Table from '@/components/utilities/table/Table.vue';
import TableHead from '@/components/utilities/table/TableHead.vue';
import TableBody from '@/components/utilities/table/TableBody.vue';
import Row from '@/components/layout/Row.vue';
import Col from '@/components/layout/Col.vue';


export default {
  name: 'ContainersPage', 
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
    Table,
    TableHead,
    TableBody,
    Row,
    Col,
  },
}
</script>
