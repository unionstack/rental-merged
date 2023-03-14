<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
    <BlockHeadContent>
        <BlockTitle tag="h1">Pagination</BlockTitle>
        <BlockText>Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.</BlockText>
    </BlockHeadContent>
    </BlockHead>

    <Block>
    <BlockHead class="wide-md">
        <BlockText><strong class="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component. 
        </BlockText>
        <BlockText>How to import component and use see the <a href="#">docs</a></BlockText>
        <BlockTitle>Custom Pagination</BlockTitle>
    </BlockHead>
    <Card>
        <CardBody>
            <nav>
                <Pagination class="pagination-s1">
                    <PaginationItem disabled>
                        <PaginationLink href="#">
                            <Icon icon="chevron-left"></Icon>
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem active>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">4</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            <Icon icon="chevron-right"></Icon>
                        </PaginationLink>
                    </PaginationItem>
                </Pagination>
            </nav>
        </CardBody>
        <CodePreview title="code">
            &lt;nav&gt;
            &lt;Pagination class=&quot;pagination-s1&quot;&gt;
                &lt;PaginationItem disabled&gt;
                    &lt;PaginationLink href=&quot;#&quot;&gt;
                        &lt;Icon icon=&quot;chevron-left&quot;&gt;&lt;/Icon&gt;
                    &lt;/PaginationLink&gt;
                &lt;/PaginationItem&gt;
                &lt;PaginationItem active&gt;
                    &lt;PaginationLink href=&quot;#&quot;&gt;1&lt;/PaginationLink&gt;
                &lt;/PaginationItem&gt;
                &lt;PaginationItem&gt;
                    &lt;PaginationLink href=&quot;#&quot;&gt;2&lt;/PaginationLink&gt;
                &lt;/PaginationItem&gt;
                &lt;PaginationItem&gt;
                    &lt;PaginationLink href=&quot;#&quot;&gt;3&lt;/PaginationLink&gt;
                &lt;/PaginationItem&gt;
                &lt;PaginationItem&gt;
                    &lt;PaginationLink href=&quot;#&quot;&gt;4&lt;/PaginationLink&gt;
                &lt;/PaginationItem&gt;
                &lt;PaginationItem&gt;
                    &lt;PaginationLink href=&quot;#&quot;&gt;
                        &lt;Icon icon=&quot;chevron-right&quot;&gt;&lt;/Icon&gt;
                    &lt;/PaginationLink&gt;
                &lt;/PaginationItem&gt;
            &lt;/Pagination&gt;
        &lt;/nav&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Default</BlockTitle>
    </BlockHead>
    <Card>
        <CardBody>
            <nav>
                <Pagination>
                    <PaginationItem>
                        <PaginationLink href="#">Previous</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">Next</PaginationLink>
                    </PaginationItem>
                </Pagination>
            </nav>
        </CardBody>
        <CodePreview title="code">
            &lt;nav&gt;
            &lt;Pagination&gt;
                &lt;PaginationItem&gt;
                    &lt;PaginationLink href=&quot;#&quot;&gt;Previous&lt;/PaginationLink&gt;
                &lt;/PaginationItem&gt;
                &lt;PaginationItem&gt;
                    &lt;PaginationLink href=&quot;#&quot;&gt;1&lt;/PaginationLink&gt;
                &lt;/PaginationItem&gt;
                &lt;PaginationItem&gt;
                    &lt;PaginationLink href=&quot;#&quot;&gt;2&lt;/PaginationLink&gt;
                &lt;/PaginationItem&gt;
                &lt;PaginationItem&gt;
                    &lt;PaginationLink href=&quot;#&quot;&gt;3&lt;/PaginationLink&gt;
                &lt;/PaginationItem&gt;
                &lt;PaginationItem&gt;
                    &lt;PaginationLink href=&quot;#&quot;&gt;Next&lt;/PaginationLink&gt;
                &lt;/PaginationItem&gt;
            &lt;/Pagination&gt;
        &lt;/nav&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Working with icons</BlockTitle>
        <BlockText>Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with <code>aria</code> attributes.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
            <nav>
                <Pagination>
                    <PaginationItem>
                        <PaginationLink href="#">
                                <span aria-hidden="true">&laquo;</span>
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            <span aria-hidden="true">&raquo;</span>
                        </PaginationLink>
                    </PaginationItem>
                </Pagination>
            </nav>
        </CardBody>
        <CodePreview title="code">
            &lt;nav&gt;
                &lt;Pagination&gt;
                    &lt;PaginationItem&gt;
                        &lt;PaginationLink href=&quot;#&quot;&gt;
                                &lt;span aria-hidden=&quot;true&quot;&gt;&amp;laquo;&lt;/span&gt;
                        &lt;/PaginationLink&gt;
                    &lt;/PaginationItem&gt;
                    &lt;PaginationItem&gt;
                        &lt;PaginationLink href=&quot;#&quot;&gt;1&lt;/PaginationLink&gt;
                    &lt;/PaginationItem&gt;
                    &lt;PaginationItem&gt;
                        &lt;PaginationLink href=&quot;#&quot;&gt;2&lt;/PaginationLink&gt;
                    &lt;/PaginationItem&gt;
                    &lt;PaginationItem&gt;
                        &lt;PaginationLink href=&quot;#&quot;&gt;3&lt;/PaginationLink&gt;
                    &lt;/PaginationItem&gt;
                    &lt;PaginationItem&gt;
                        &lt;PaginationLink href=&quot;#&quot;&gt;
                            &lt;span aria-hidden=&quot;true&quot;&gt;&amp;raquo;&lt;/span&gt;
                        &lt;/PaginationLink&gt;
                    &lt;/PaginationItem&gt;
                &lt;/Pagination&gt;
            &lt;/nav&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Disabled and active states</BlockTitle>
        <BlockText>Pagination links are customizable for different circumstances. Use <code>disabled</code> prop for links that appear un-clickable and <code>active</code> prop to indicate the current page.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
            <nav>
                <Pagination>
                    <PaginationItem disabled>
                        <PaginationLink href="#">
                            Previous
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem active>
                        <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            Next
                        </PaginationLink>
                    </PaginationItem>
                </Pagination>
            </nav>
        </CardBody>
        <CodePreview title="code">
            &lt;nav&gt;
            &lt;Pagination&gt;
                &lt;PaginationItem disabled&gt;
                    &lt;PaginationLink href=&quot;#&quot;&gt;
                        Previous
                    &lt;/PaginationLink&gt;
                &lt;/PaginationItem&gt;
                &lt;PaginationItem&gt;
                    &lt;PaginationLink href=&quot;#&quot;&gt;1&lt;/PaginationLink&gt;
                &lt;/PaginationItem&gt;
                &lt;PaginationItem active&gt;
                    &lt;PaginationLink href=&quot;#&quot;&gt;2&lt;/PaginationLink&gt;
                &lt;/PaginationItem&gt;
                &lt;PaginationItem&gt;
                    &lt;PaginationLink href=&quot;#&quot;&gt;3&lt;/PaginationLink&gt;
                &lt;/PaginationItem&gt;
                &lt;PaginationItem&gt;
                    &lt;PaginationLink href=&quot;#&quot;&gt;
                        Next
                    &lt;/PaginationLink&gt;
                &lt;/PaginationItem&gt;
            &lt;/Pagination&gt;
        &lt;/nav&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Sizing</BlockTitle>
        <BlockText>Fancy larger or smaller pagination? Add <code>size="lg,sm"</code> for additional sizes.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
        <nav class="mb-4">
            <Pagination size="lg">
                <PaginationItem active aria-current="page">
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
            </Pagination>
        </nav>
        <nav class="mb-4">
            <Pagination>
                <PaginationItem active aria-current="page">
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
            </Pagination>
        </nav>
        <nav>
            <Pagination size="sm">
                <PaginationItem active aria-current="page">
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
            </Pagination>
        </nav>
        </CardBody>
        <CodePreview title="code">
            &lt;nav&gt;
            &lt;Pagination size=&quot;lg&quot;&gt;
                &lt;PaginationItem active aria-current=&quot;page&quot;&gt;
                    &lt;PaginationLink href=&quot;#&quot;&gt;1&lt;/PaginationLink&gt;
                &lt;/PaginationItem&gt;
                &lt;PaginationItem&gt;
                    &lt;PaginationLink href=&quot;#&quot;&gt;2&lt;/PaginationLink&gt;
                &lt;/PaginationItem&gt;
                &lt;PaginationItem&gt;
                    &lt;PaginationLink href=&quot;#&quot;&gt;3&lt;/PaginationLink&gt;
                &lt;/PaginationItem&gt;
            &lt;/Pagination&gt;
        &lt;/nav&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Alignment</BlockTitle>
        <BlockText>Change the alignment of pagination components with flexbox utilities. For example, with <code>.justify-content-center</code>: <code>.justify-content-end</code>:</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
        <p class="text-center"><code>.justify-content-center</code></p>
        <nav class="mb-5">
            <Pagination class="justify-content-center">
                <PaginationItem disabled>
                    <PaginationLink href="#">Previous</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">Next</PaginationLink>
                </PaginationItem>
            </Pagination>
        </nav>
        <p class="text-end"><code>.justify-content-end</code></p>
        <nav>
            <Pagination class="justify-content-end">
                <PaginationItem disabled>
                    <PaginationLink href="#">Previous</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">Next</PaginationLink>
                </PaginationItem>
            </Pagination>
        </nav>
        </CardBody>
        <CodePreview title="code">
            &lt;nav class=&quot;mb-5&quot;&gt;
            &lt;Pagination class=&quot;justify-content-center&quot;&gt;
                &lt;PaginationItem disabled&gt;
                    &lt;PaginationLink href=&quot;#&quot;&gt;Previous&lt;/PaginationLink&gt;
                &lt;/PaginationItem&gt;
                &lt;PaginationItem&gt;
                    &lt;PaginationLink href=&quot;#&quot;&gt;1&lt;/PaginationLink&gt;
                &lt;/PaginationItem&gt;
                &lt;PaginationItem&gt;
                    &lt;PaginationLink href=&quot;#&quot;&gt;2&lt;/PaginationLink&gt;
                &lt;/PaginationItem&gt;
                &lt;PaginationItem&gt;
                    &lt;PaginationLink href=&quot;#&quot;&gt;3&lt;/PaginationLink&gt;
                &lt;/PaginationItem&gt;
                &lt;PaginationItem&gt;
                    &lt;PaginationLink href=&quot;#&quot;&gt;Next&lt;/PaginationLink&gt;
                &lt;/PaginationItem&gt;
            &lt;/Pagination&gt;
        &lt;/nav&gt;
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
import Pagination from '@/components/uielements/pagination/Pagination.vue';
import PaginationItem from '@/components/uielements/pagination/PaginationItem.vue';
import PaginationLink from '@/components/uielements/pagination/PaginationLink.vue';
import Icon from '@/components/icon/Icon.vue';

export default {
  name: 'PaginationPage', 
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
    Pagination,
    PaginationItem,
    PaginationLink,
    Icon
  },
}
</script>
