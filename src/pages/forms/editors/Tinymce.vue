<!-- eslint-disable no-unused-vars -->
<template>
    <Layout content="container">
      <BlockHead class="nk-page-head">
        <BlockHeadContent>
          <BlockTitle tag="h1">Tinymce Editor</BlockTitle>
          <BlockText class="lead">Using the <a href="https://www.tiny.cloud/" target="_blank">Tinymce</a> plugin, you can simply make some awesome rich text editor.</BlockText>
        </BlockHeadContent>
      </BlockHead>
  
      <Block>
        <BlockHead class="wide-md">
            <BlockText><strong class="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component. 
            </BlockText>
            <BlockText>How to import component and use see the <a href="#">docs</a></BlockText>
            <BlockTitle>Default settings Editor</BlockTitle>
            <BlockText>Tinymce rich text editor with default options.</BlockText>
        </BlockHead>
        <Card>
            <CardBody>
                <Tinymce value="Hello TinyMCE" />
            </CardBody>
            <CodePreview title="default">
                &lt;Tinymce&gt;
                    Hello tinymce
                &lt;/Tinymce&gt;
            </CodePreview>
        </Card>
      </Block>

      <Block>
        <BlockHead class="wide-md">
            <BlockTitle>No Toolbar Editor</BlockTitle>
            <BlockText>Tinymce rich text editor with only menubar.</BlockText>
        </BlockHead>
        <Card>
            <CardBody>
                <Tinymce :toolbar="false" value="Hello TinyMCE"/>
                <div class="form-note mt-3">
                    Use <code>:toolbar="false"</code> prop to hide toolbar.
                </div>
            </CardBody>
            <CodePreview title="code example">
                &lt;Tinymce :toolbar=&quot;false&quot;&gt;
                    Hello tinymce
                &lt;/Tinymce&gt;
            </CodePreview>
        </Card>
      </Block>

      <Block>
        <BlockHead class="wide-md">
            <BlockTitle>No Menubar Editor</BlockTitle>
            <BlockText>Tinymce rich text editor with only toolbar.</BlockText>
        </BlockHead>
        <Card>
            <CardBody>
                <Tinymce :menubar="false" value="Hello TinyMCE"/>
                <div class="form-note mt-3">
                    Use <code>:menubar="false"</code> prop to hide menubar.
                </div>
            </CardBody>
            <CodePreview title="code example">
                &lt;Tinymce :menubar=&quot;false&quot;&gt;
                    Hello tinymce
                &lt;/Tinymce&gt;
            </CodePreview>
        </Card>
      </Block>

      <Block>
        <BlockHead class="wide-md">
            <BlockTitle>Inline Editor</BlockTitle>
            <BlockText>Tinymce rich text editor with only toolbar.</BlockText>
        </BlockHead>
        <Card>
            <CardBody>
                <Tinymce :inline="true" :menubar="false" value="Here are some of our customer’s most common use cases for TinyMCE"/>
                <div class="form-note mt-3">
                    Use <code>:inline="true"</code> prop to enable inline editor mode.
                </div>
            </CardBody>
            <CodePreview title="code example">
                &lt;Tinymce :inline=&quot;true&quot; :menubar=&quot;false&quot; value=&quot;Here are some of our customer&rsquo;s most common use cases for TinyMCE&quot;/&gt;
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
  import Tinymce from '@/components/forms/editors/Tinymce.vue';

  export default {
    name: 'TinymcePage', 
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
      Tinymce
    },
  }
  </script>  