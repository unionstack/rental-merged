<!-- eslint-disable no-unused-vars -->
<template>
    <Layout content="container">
      <BlockHead class="nk-page-head wide-md">
        <BlockHeadContent>
          <BlockTitle tag="h1">Nioicon Font</BlockTitle>
          <BlockText>Nioicon is hand-crafted and beautiful icon set which is designed by Softnio Team. We inspired from google icons and carefuly designed this for NioBoard dashboard. It's have over than 1000+ icons that helps much in your project.</BlockText>
          <BlockText>
            An in-built component can be used to show the icons. Import it to your file. <br />
            Such as <code>import Icon from 'relative_path/icon/Icon.vue'</code> use the <code>icon</code> props of the <code>Icon</code> to show the specific icon.
            <br /> Example of uses - <code>&lt;Icon icon="nioboard"/&gt;</code>
          </BlockText>
        </BlockHeadContent>
      </BlockHead>
  
      <Block>
        <ul class="preview-icon-list">
           <IconPreview v-for="icon in iconsData" :key="icon" :icon="icon" :title="icon"></IconPreview>
        </ul>
      </Block>
    </Layout>
  </template>
  
  <script>
  import Layout from '@/layout/Index.vue'
  import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockText} from '@/components/block/Block.vue';
  import IconPreview from '@/components/icon-preview/IconPreview.vue';
  import iconsData from '@/store/icons/IconData';
  export default {
    name: 'IconsPage', 
    components: {
        Layout,
        Block,
        BlockHead,
        BlockHeadContent,
        BlockTitle,
        BlockText,
        IconPreview
      },
      data() {
        return {
            iconsData
        }
      }
  }
  </script>
  