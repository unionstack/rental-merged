<!-- eslint-disable no-unused-vars -->
<template>
    <Layout content="container">
      <BlockHead class="nk-page-head">
        <BlockHeadContent>
          <BlockTitle tag="h1">Form Upload</BlockTitle>
          <BlockText>Made with <a href="https://www.dropzone.dev/" target="_blank">Dropzone.js</a> to handle drag and dropping of files into your form.</BlockText>
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
            <div class="row gx-gs gy-4">
                <div class="col-sm-6 col-lg-4">
                    <div class="form-group">
                        <label class="form-label">Default Dropzone</label>
                        <div class="form-control-wrap">
                            <Dropzone id="default-dropzone" icon="files"></Dropzone>
                        </div>
                    </div>
                </div><!-- .col -->
                <div class="col-sm-6 col-lg-4">
                    <div class="form-group">
                        <label class="form-label">Single File Dropzone</label>
                        <div class="form-control-wrap">
                            <Dropzone id="single-file-dropzone" :maxFiles="1" icon="file"></Dropzone>
                        </div>
                    </div>
                </div><!-- .col -->
                <div class="col-sm-6 col-lg-4">
                    <div class="form-group">
                        <label class="form-label">Change Icon</label>
                        <div class="form-control-wrap">
                            <Dropzone id="change-icon-dropzone" icon="img"></Dropzone>
                        </div>
                    </div>
                </div><!-- .col -->
                <div class="col-12 col-lg-10">
                    <div class="form-note"> 
                        Use <code>:maxFiles="1"</code> prop to <code>Dropzone</code> to enable single file upload. and use <code>icon="*"</code> prop to <code>Dropzone</code> for change icon.
                    </div>
                </div>
            </div><!-- .row -->
          </CardBody>
          <CodePreview title="dropzone">
            &lt;Dropzone id=&quot;default-dropzone&quot; icon=&quot;files&quot;&gt;&lt;/Dropzone&gt;
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <BlockHead>
          <BlockTitle>Form File Input</BlockTitle>
          <BlockText>Basic styled form file input.</BlockText>
        </BlockHead>
        <Card>
          <CardBody>
            <div class="row gx-gs gy-3">
                <div class="col-sm-6">
                    <div class="form-group">
                        <label class="form-label">Default file input</label>
                        <div class="form-control-wrap">
                            <FormInput type="file"/>
                        </div>
                    </div>
                </div><!-- .col -->
                <div class="col-sm-6">
                    <div class="form-group">
                        <label class="form-label">Disabled file input</label>
                        <div class="form-control-wrap">
                            <FormInput type="file" disabled/>
                        </div>
                    </div>
                </div><!-- .col -->
                <div class="col-sm-12">
                    <div class="form-group">
                        <label class="form-label">Multiple files input example</label>
                        <div class="form-control-wrap">
                            <FormInput type="file" multiple/>
                        </div>
                    </div>
                </div><!-- .col -->
                <div class="col-12">
                    <div class="form-note"> 
                        Use <code>type="file"</code> attribute to <code>input</code> to enable file upload mode, same as <code>disabled</code> attribute to enable disabled mode, <code>multiple</code> attribute to enable multiple file upload mode. 
                    </div>
                </div><!-- .col -->
            </div><!-- .row -->
          </CardBody>
          <CodePreview title="file input">
            &lt;FormInput type=&quot;file&quot;/&gt;
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <BlockHead>
          <BlockTitle>Sizing</BlockTitle>
          <BlockText>Set heights using props like <code>size="lg"</code> and <code>size="sm"</code>.</BlockText>
        </BlockHead>
        <Card>
          <CardBody>
            <div class="row g-3 align-items-center">
                <div class="col-lg-4">
                    <div class="form-control-wrap">
                        <FormInput type="file" size="lg"/>
                    </div>
                </div><!-- .col -->
                <div class="col-lg-4">
                    <div class="form-control-wrap">
                        <FormInput type="file"/>
                    </div>
                </div><!-- .col -->
                <div class="col-lg-4">
                    <div class="form-control-wrap">
                        <FormInput type="file" size="sm"/>
                    </div>
                </div><!-- .col -->
            </div><!-- .row -->
          </CardBody>
          <CodePreview title="file input">
            &lt;FormInput type=&quot;file&quot; size=&quot;lg&quot;/&gt;
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
  import Dropzone from '@/components/forms/form-upload/Dropzone.vue';
  import FormInput from '@/components/forms/input/FormInput.vue';

  export default {
    name: 'FormUploadPage',
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
      Dropzone,
      FormInput
    },
  }
  </script>
  