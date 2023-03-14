<!-- eslint-disable no-unused-vars -->
<template>
    <Layout content="container">
      <BlockHead class="nk-page-head">
        <BlockHeadContent>
          <BlockTitle tag="h1">Quill Editor</BlockTitle>
          <BlockText class="lead">Using the <a href="https://quilljs.com/" target="_blank">quilljs</a> plugin, you can simply make some awesome rich text editor.</BlockText>
        </BlockHeadContent>
      </BlockHead>
  
      <Block>
        <BlockHead class="wide-md">
            <BlockText><strong class="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component. 
            </BlockText>
            <BlockText>How to import component and use see the <a href="#">docs</a></BlockText>
            <BlockTitle>Basic Editor Example</BlockTitle>
            <BlockText>A basic demostration of quilljs rich text editor.</BlockText>
        </BlockHead>
        <Card>
            <CardBody>
                <Quill id="default-quill">
                    Hello Quiller
                </Quill>
                <div class="form-note mt-3">
                  <strong class="text-black">Note:</strong> You must have to give a unique id to every <code>Quill</code> for showing quill editor.
                </div>
            </CardBody>
            <CodePreview title="default quill">
                &lt;Quill id=&quot;default-quill&quot;&gt;
                    Hello Quiller
                &lt;/Quill&gt;
            </CodePreview>
        </Card>
      </Block>

      <Block>
        <BlockHead>
            <BlockTitle>Minimal Editor Example</BlockTitle>
            <BlockText>A minimal demostration of quilljs rich text editor.</BlockText>
        </BlockHead>
        <Card>
            <CardBody>
                <Quill id="minimal-quill" toolbar="minimal" placeholder="Write some awesome text"></Quill>
                <div class="form-note mt-3">
                    Use <code>toolbar="minimal"</code> prop to <code>Quill</code> for minimal quill editor example.
                </div>
            </CardBody>
            <CodePreview title="minimal quill">
                &lt;Quill id=&quot;minimal-quill&quot; toolbar=&quot;minimal&quot; placeholder=&quot;Write some awesome text&quot;&gt;&lt;/Quill&gt;
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
  import Quill from '@/components/forms/editors/Quill.vue';
  import CodePreview from '@/components/code-preview/CodePreview.vue';

  export default {
    name: 'QuillPage', 
    components: {
      Layout,
      Block,
      BlockHead,
      BlockHeadContent,
      BlockTitle,
      BlockText,
      Card,
      CardBody,
      Quill,
      CodePreview
    },
  }
  </script>  