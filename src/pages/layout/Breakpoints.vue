<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Breakpoints</BlockTitle>
        <BlockText>Breakpoints are customizable widths that determine how your responsive layout behaves across device or viewport sizes in Bootstrap.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead>
        <BlockTitle>Breakpoints</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="table-responsive">
              <Table>
                  <TableHead>
                      <tr>
                          <th>Breakpoint</th>
                          <th>Class infix</th>
                          <th>Dimensions</th>
                      </tr>
                  </TableHead>
                  <TableBody>
                      <tr>
                          <td class="small">Extra small</td>
                          <td><em>None</em></td>
                          <td class="small">&lt;576px</td>
                      </tr>
                      <tr>
                          <td class="small">Small</td>
                          <td><code>sm</code></td>
                          <td class="small">≥576px</td>
                      </tr>
                      <tr>
                          <td class="small">Medium</td>
                          <td><code>md</code></td>
                          <td class="small">≥768px</td>
                      </tr>
                      <tr>
                          <td class="small">Large</td>
                          <td><code>lg</code></td>
                          <td class="small">≥992px</td>
                      </tr>
                      <tr>
                          <td class="small">Extra large</td>
                          <td><code>xl</code></td>
                          <td class="small">≥1200px</td>
                      </tr>
                      <tr>
                          <td class="small">Extra extra large</td>
                          <td><code>xxl</code></td>
                          <td class="small">≥1400px</td>
                      </tr>
                  </TableBody>
              </Table>
          </div>
        </CardBody>
      </Card>
    </Block>
  </Layout>
</template>

<script>
import Layout from '@/layout/Index.vue'
import { Block, BlockHead, BlockHeadContent, BlockTitle } from '@/components/block/Block.vue';
import Card from '@/components/uielements/card/Card.vue';
import CardBody from '@/components/uielements/card/CardBody.vue';
import Table from '@/components/utilities/table/Table.vue';
import TableHead from '@/components/utilities/table/TableHead.vue';
import TableBody from '@/components/utilities/table/TableBody.vue';


export default {
  name: 'BreakpointsPage', 
  components: {
    Layout,
    Block,
    BlockHead,
    BlockHeadContent,
    BlockTitle,
    Card,
    CardBody,
    Table,
    TableHead,
    TableBody
  },
}
</script>
