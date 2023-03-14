<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Tabs</BlockTitle>
        <BlockText>Documentation and examples for how to use Bootstrap’s included navigation components.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead class="wide-md">
        <BlockText><strong class="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component. 
        </BlockText>
        <BlockText>How to import component and use see the <a href="#">docs</a></BlockText>
          <BlockTitle>Custom Tabs</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
          <Nav class="nav-tabs mb-3 nav-tabs-s1">
            <NavItem>
                <NavLink type="button" active v-nk-tab="'#custom-home-tab-pane'">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink type="button" v-nk-tab="'#custom-profile-tab-pane'">Profile</NavLink>
            </NavItem>
            <NavItem>
                <NavLink type="button" v-nk-tab="'#custom-contact-tab-pane'" >Contact</NavLink>
            </NavItem>
          </Nav>
          <TabContent id="myTabContent">
            <TabPane fade active id="custom-home-tab-pane">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
            </TabPane>
            <TabPane fade id="custom-profile-tab-pane">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
            </TabPane>
            <TabPane fade id="custom-contact-tab-pane">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
            </TabPane>
          </TabContent>
        </CardBody>
        <CodePreview title="code example">
          &lt;Nav class=&quot;nav-tabs mb-3 nav-tabs-s1&quot;&gt;
            &lt;NavItem&gt;
                &lt;NavLink type=&quot;button&quot; active v-nk-tab=&quot;'#custom-home-tab-pane'&quot;&gt;Home&lt;/NavLink&gt;
            &lt;/NavItem&gt;
            &lt;NavItem&gt;
                &lt;NavLink type=&quot;button&quot; v-nk-tab=&quot;'#custom-profile-tab-pane'&quot;&gt;Profile&lt;/NavLink&gt;
            &lt;/NavItem&gt;
            &lt;NavItem&gt;
                &lt;NavLink type=&quot;button&quot; v-nk-tab=&quot;'#custom-contact-tab-pane'&quot; &gt;Contact&lt;/NavLink&gt;
            &lt;/NavItem&gt;
          &lt;/Nav&gt;
          &lt;TabContent id=&quot;myTabContent&quot;&gt;
            &lt;TabPane fade active id=&quot;custom-home-tab-pane&quot;&gt;
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
            &lt;/TabPane&gt;
            &lt;TabPane fade id=&quot;custom-profile-tab-pane&quot;&gt;
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
            &lt;/TabPane&gt;
            &lt;TabPane fade id=&quot;custom-contact-tab-pane&quot;&gt;
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
            &lt;/TabPane&gt;
          &lt;/TabContent&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Default Tabs</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
          <Nav class="nav-tabs mb-3">
            <NavItem>
              <NavLink active v-nk-tab="'#home-tab-pane'" type="button">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink v-nk-tab="'#profile-tab-pane'" type="button">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink v-nk-tab="'#contact-tab-pane'" type="button">Contact</NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane fade active id="home-tab-pane">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
            </TabPane>
            <TabPane fade id="profile-tab-pane">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
            </TabPane>
            <TabPane fade id="contact-tab-pane">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
            </TabPane>
          </TabContent>  
        </CardBody>
        <CodePreview title="code example">
          &lt;Nav class=&quot;nav-tabs mb-3&quot;&gt;
            &lt;NavItem&gt;
              &lt;NavLink active v-nk-tab=&quot;'#home-tab-pane'&quot; type=&quot;button&quot;&gt;Home&lt;/NavLink&gt;
            &lt;/NavItem&gt;
            &lt;NavItem&gt;
              &lt;NavLink v-nk-tab=&quot;'#profile-tab-pane'&quot; type=&quot;button&quot;&gt;Profile&lt;/NavLink&gt;
            &lt;/NavItem&gt;
            &lt;NavItem&gt;
              &lt;NavLink v-nk-tab=&quot;'#contact-tab-pane'&quot; type=&quot;button&quot;&gt;Contact&lt;/NavLink&gt;
            &lt;/NavItem&gt;
          &lt;/Nav&gt;
          &lt;TabContent&gt;
            &lt;TabPane fade active id=&quot;home-tab-pane&quot;&gt;
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
            &lt;/TabPane&gt;
            &lt;TabPane fade id=&quot;profile-tab-pane&quot;&gt;
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
            &lt;/TabPane&gt;
            &lt;TabPane fade id=&quot;contact-tab-pane&quot;&gt;
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
            &lt;/TabPane&gt;
          &lt;/TabContent&gt; 
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Tabs Pills</BlockTitle>
          <BlockText>Use <code>pills</code> prop to <code>Nav</code> to works with pills</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Nav pills class="mb-3">
            <NavItem>
              <NavLink active v-nk-tab="'#pills-home'" type="button">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink v-nk-tab="'#pills-profile'" type="button">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink v-nk-tab="'#pills-contact'" type="button">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink v-nk-tab="'#pills-disabled'" type="button" disabled>Disabled</NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane fade active id="pills-home">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem dicta doloremque excepturi consectetur ipsa error nemo, dolor ad iste harum itaque, cum ipsam nihil deleniti accusamus, blanditiis libero repellat!
            </TabPane>
            <TabPane fade id="pills-profile">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem dicta doloremque excepturi consectetur ipsa error nemo, dolor ad iste harum itaque, cum ipsam nihil deleniti accusamus, blanditiis libero repellat!
            </TabPane>
            <TabPane fade id="pills-contact">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem dicta doloremque excepturi consectetur ipsa error nemo, dolor ad iste harum itaque, cum ipsam nihil deleniti accusamus, blanditiis libero repellat!
            </TabPane>
            <TabPane fade id="pills-disabled">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem dicta doloremque excepturi consectetur ipsa error nemo, dolor ad iste harum itaque, cum ipsam nihil deleniti accusamus, blanditiis libero repellat!
            </TabPane>
          </TabContent>   
        </CardBody>
        <CodePreview title="code example">
          &lt;Nav pills class=&quot;mb-3&quot;&gt;
            &lt;NavItem&gt;
              &lt;NavLink active v-nk-tab=&quot;'#pills-home'&quot; type=&quot;button&quot;&gt;Home&lt;/NavLink&gt;
            &lt;/NavItem&gt;
            &lt;NavItem&gt;
              &lt;NavLink v-nk-tab=&quot;'#pills-profile'&quot; type=&quot;button&quot;&gt;Profile&lt;/NavLink&gt;
            &lt;/NavItem&gt;
            &lt;NavItem&gt;
              &lt;NavLink v-nk-tab=&quot;'#pills-contact'&quot; type=&quot;button&quot;&gt;Contact&lt;/NavLink&gt;
            &lt;/NavItem&gt;
            &lt;NavItem&gt;
              &lt;NavLink v-nk-tab=&quot;'#pills-disabled'&quot; type=&quot;button&quot; disabled&gt;Disabled&lt;/NavLink&gt;
            &lt;/NavItem&gt;
          &lt;/Nav&gt;
          &lt;TabContent&gt;
            &lt;TabPane fade active id=&quot;pills-home&quot;&gt;
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem dicta doloremque excepturi consectetur ipsa error nemo, dolor ad iste harum itaque, cum ipsam nihil deleniti accusamus, blanditiis libero repellat!
            &lt;/TabPane&gt;
            &lt;TabPane fade id=&quot;pills-profile&quot;&gt;
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem dicta doloremque excepturi consectetur ipsa error nemo, dolor ad iste harum itaque, cum ipsam nihil deleniti accusamus, blanditiis libero repellat!
            &lt;/TabPane&gt;
            &lt;TabPane fade id=&quot;pills-contact&quot;&gt;
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem dicta doloremque excepturi consectetur ipsa error nemo, dolor ad iste harum itaque, cum ipsam nihil deleniti accusamus, blanditiis libero repellat!
            &lt;/TabPane&gt;
            &lt;TabPane fade id=&quot;pills-disabled&quot;&gt;
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem dicta doloremque excepturi consectetur ipsa error nemo, dolor ad iste harum itaque, cum ipsam nihil deleniti accusamus, blanditiis libero repellat!
            &lt;/TabPane&gt;
          &lt;/TabContent&gt; 
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Vertical pills</BlockTitle>
          <BlockText>And with vertical pills. Ideally, for vertical tabs, you should also add <code>orientation="vertical"</code> to the tab list container.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="row align-items-start g-gs">
            <div class="col-lg-3 col-xl-2">
              <Nav tag="div" pills orientation="vertical">
                <NavLink class="text-start" active v-nk-tab="'#v-pills-home'" type="button">Home</NavLink>
                <NavLink class="text-start" v-nk-tab="'#v-pills-profile'" type="button">Profile</NavLink>
                <NavLink class="text-start" v-nk-tab="'#v-pills-disabled'" type="button" disabled>Disabled</NavLink>
                <NavLink class="text-start" v-nk-tab="'#v-pills-messages'" type="button">Messages</NavLink>
                <NavLink class="text-start" v-nk-tab="'#v-pills-settings'" type="button">Settings</NavLink>
              </Nav>
            </div>
            <div class="col-lg-9 col-xl-10">
              <TabContent>
                <TabPane fade active id="v-pills-home">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab recusandae error architecto ea quos magnam culpa aliquid officiis quidem accusamus eius illum veritatis, facilis vero sit aliquam. Sed, odit est.
                </TabPane>
                <TabPane fade id="v-pills-profile">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab recusandae error architecto ea quos magnam culpa aliquid officiis quidem accusamus eius illum veritatis, facilis vero sit aliquam. Sed, odit est.
                </TabPane>
                <TabPane fade id="v-pills-disabled">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab recusandae error architecto ea quos magnam culpa aliquid officiis quidem accusamus eius illum veritatis, facilis vero sit aliquam. Sed, odit est.
                </TabPane>
                <TabPane fade id="v-pills-messages">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab recusandae error architecto ea quos magnam culpa aliquid officiis quidem accusamus eius illum veritatis, facilis vero sit aliquam. Sed, odit est.
                </TabPane>
                <TabPane fade id="v-pills-settings">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab recusandae error architecto ea quos magnam culpa aliquid officiis quidem accusamus eius illum veritatis, facilis vero sit aliquam. Sed, odit est.
                </TabPane>
              </TabContent>
            </div>
          </div>  
        </CardBody>
        <CodePreview title="code example">
          &lt;div class=&quot;row align-items-start g-gs&quot;&gt;
            &lt;div class=&quot;col-lg-3 col-xl-2&quot;&gt;
              &lt;Nav tag=&quot;div&quot; pills orientation=&quot;vertical&quot;&gt;
                &lt;NavLink class=&quot;text-start&quot; active v-nk-tab=&quot;'#v-pills-home'&quot; type=&quot;button&quot;&gt;Home&lt;/NavLink&gt;
                &lt;NavLink class=&quot;text-start&quot; v-nk-tab=&quot;'#v-pills-profile'&quot; type=&quot;button&quot;&gt;Profile&lt;/NavLink&gt;
                &lt;NavLink class=&quot;text-start&quot; v-nk-tab=&quot;'#v-pills-disabled'&quot; type=&quot;button&quot; disabled&gt;Disabled&lt;/NavLink&gt;
                &lt;NavLink class=&quot;text-start&quot; v-nk-tab=&quot;'#v-pills-messages'&quot; type=&quot;button&quot;&gt;Messages&lt;/NavLink&gt;
                &lt;NavLink class=&quot;text-start&quot; v-nk-tab=&quot;'#v-pills-settings'&quot; type=&quot;button&quot;&gt;Settings&lt;/NavLink&gt;
              &lt;/Nav&gt;
            &lt;/div&gt;
            &lt;div class=&quot;col-lg-9 col-xl-10&quot;&gt;
              &lt;TabContent&gt;
                &lt;TabPane fade active id=&quot;v-pills-home&quot;&gt;
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab recusandae error architecto ea quos magnam culpa aliquid officiis quidem accusamus eius illum veritatis, facilis vero sit aliquam. Sed, odit est.
                &lt;/TabPane&gt;
                &lt;TabPane fade id=&quot;v-pills-profile&quot;&gt;
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab recusandae error architecto ea quos magnam culpa aliquid officiis quidem accusamus eius illum veritatis, facilis vero sit aliquam. Sed, odit est.
                &lt;/TabPane&gt;
                &lt;TabPane fade id=&quot;v-pills-disabled&quot;&gt;
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab recusandae error architecto ea quos magnam culpa aliquid officiis quidem accusamus eius illum veritatis, facilis vero sit aliquam. Sed, odit est.
                &lt;/TabPane&gt;
                &lt;TabPane fade id=&quot;v-pills-messages&quot;&gt;
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab recusandae error architecto ea quos magnam culpa aliquid officiis quidem accusamus eius illum veritatis, facilis vero sit aliquam. Sed, odit est.
                &lt;/TabPane&gt;
                &lt;TabPane fade id=&quot;v-pills-settings&quot;&gt;
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab recusandae error architecto ea quos magnam culpa aliquid officiis quidem accusamus eius illum veritatis, facilis vero sit aliquam. Sed, odit est.
                &lt;/TabPane&gt;
              &lt;/TabContent&gt;
            &lt;/div&gt;
          &lt;/div&gt;  
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
import Nav from '@/components/uielements/nav/Nav.vue';
import NavItem from '@/components/uielements/nav/NavItem.vue';
import NavLink from '@/components/uielements/nav/NavLink.vue';
import TabContent from '@/components/uielements/tab/TabContent.vue';
import TabPane from '@/components/uielements/tab/TabPane.vue';

export default {
  name: 'TabsPage',
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
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane
  },
}
</script>
