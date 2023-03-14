<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Offcanvas</BlockTitle>
        <BlockText>Build hidden sidebars into your project for navigation, shopping carts, and more with a few classes and our JavaScript plugin.</BlockText>
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
          <ul class="d-flex gap g-3">
              <li>
                  <Button variant="primary" v-nk-offcanvas href="#offcanvasExample">
                      Link with href
                  </Button>
              </li>
              <li>
                  <Button variant="primary" type="button" v-nk-offcanvas="'#offcanvasExample'">
                      Button with value
                  </Button>
              </li>
          </ul>
          <OffcanvasContainer tabindex="-1" id="offcanvasExample">
              <OffcanvasHeader>
                  <h3 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h3>
                  <ButtonClose dismiss="offcanvas" aria-label="Close"></ButtonClose>
              </OffcanvasHeader>
              <OffcanvasBody>
                  <div>
                      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                  </div>
                  <Dropdown class="mt-3">
                      <DropdownToggle variant="secondary" type="button">
                          Dropdown button
                      </DropdownToggle>
                      <DropdownMenu>
                          <DropdownItem><DropdownLink href="#">Action</DropdownLink></DropdownItem>
                          <DropdownItem><DropdownLink href="#">Another action</DropdownLink></DropdownItem>
                          <DropdownItem><DropdownLink href="#">Something else here</DropdownLink></DropdownItem>
                      </DropdownMenu>
                  </Dropdown>
              </OffcanvasBody>
          </OffcanvasContainer>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button variant=&quot;primary&quot; v-nk-offcanvas href=&quot;#offcanvasExample&quot;&gt;
              Link with href
          &lt;/Button&gt;
          &lt;OffcanvasContainer tabindex=&quot;-1&quot; id=&quot;offcanvasExample&quot;&gt;
              &lt;OffcanvasHeader&gt;
                  &lt;h3 class=&quot;offcanvas-title&quot; id=&quot;offcanvasExampleLabel&quot;&gt;Offcanvas&lt;/h3&gt;
                  &lt;ButtonClose dismiss=&quot;offcanvas&quot; aria-label=&quot;Close&quot;&gt;&lt;/ButtonClose&gt;
              &lt;/OffcanvasHeader&gt;
              &lt;OffcanvasBody&gt;
                  &lt;div&gt;
                      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                  &lt;/div&gt;
                  &lt;Dropdown class=&quot;mt-3&quot;&gt;
                      &lt;DropdownToggle variant=&quot;secondary&quot; type=&quot;button&quot;&gt;
                          Dropdown button
                      &lt;/DropdownToggle&gt;
                      &lt;DropdownMenu&gt;
                          &lt;DropdownItem&gt;&lt;DropdownLink href=&quot;#&quot;&gt;Action&lt;/DropdownLink&gt;&lt;/DropdownItem&gt;
                          &lt;DropdownItem&gt;&lt;DropdownLink href=&quot;#&quot;&gt;Another action&lt;/DropdownLink&gt;&lt;/DropdownItem&gt;
                          &lt;DropdownItem&gt;&lt;DropdownLink href=&quot;#&quot;&gt;Something else here&lt;/DropdownLink&gt;&lt;/DropdownItem&gt;
                      &lt;/DropdownMenu&gt;
                  &lt;/Dropdown&gt;
              &lt;/OffcanvasBody&gt;
          &lt;/OffcanvasContainer&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Body scrolling</BlockTitle>
          <BlockText>Scrolling the <code>body</code> element is disabled when an offcanvas and its backdrop are visible. Use the <code>scroll="true"</code> prop to enable <code>body</code> scrolling.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Button variant="primary" type="button" v-nk-offcanvas="'#offcanvasScrolling'">Enable body scrolling</Button>
          <OffcanvasContainer scroll="true" backdrop="false" tabindex="-1" id="offcanvasScrolling">
              <OffcanvasHeader>
                  <h3 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h3>
                  <ButtonClose dismiss="offcanvas" aria-label="Close"></ButtonClose>
              </OffcanvasHeader>
              <OffcanvasBody>
                  <p>Try scrolling the rest of the page to see this option in action.</p>
              </OffcanvasBody>
          </OffcanvasContainer>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button variant=&quot;primary&quot; type=&quot;button&quot; v-nk-offcanvas=&quot;'#offcanvasScrolling'&quot;&gt;Enable body scrolling&lt;/Button&gt;
          &lt;OffcanvasContainer scroll=&quot;true&quot; backdrop=&quot;false&quot; tabindex=&quot;-1&quot; id=&quot;offcanvasScrolling&quot;&gt;
              &lt;OffcanvasHeader&gt;
                  &lt;h3 class=&quot;offcanvas-title&quot; id=&quot;offcanvasScrollingLabel&quot;&gt;Offcanvas with body scrolling&lt;/h3&gt;
                  &lt;ButtonClose dismiss=&quot;offcanvas&quot; aria-label=&quot;Close&quot;&gt;&lt;/ButtonClose&gt;
              &lt;/OffcanvasHeader&gt;
              &lt;OffcanvasBody&gt;
                  &lt;p&gt;Try scrolling the rest of the page to see this option in action.&lt;/p&gt;
              &lt;/OffcanvasBody&gt;
          &lt;/OffcanvasContainer&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Body scrolling and backdrop</BlockTitle>
          <BlockText>You can also enable <code>body</code> scrolling with a visible backdrop.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Button variant="primary" type="button" v-nk-offcanvas="'#offcanvasWithBothOptions'">Enable both scrolling & backdrop</Button>
          <OffcanvasContainer scroll="true" tabindex="-1" id="offcanvasWithBothOptions">
              <OffcanvasHeader>
                  <h3 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h3>
                  <ButtonClose dismiss="offcanvas" aria-label="Close"></ButtonClose>
              </OffcanvasHeader>
              <OffcanvasBody>
                  <p>Try scrolling the rest of the page to see this option in action.</p>
              </OffcanvasBody>
          </OffcanvasContainer>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button variant=&quot;primary&quot; type=&quot;button&quot; v-nk-offcanvas=&quot;'#offcanvasWithBothOptions'&quot;&gt;Enable both scrolling &amp; backdrop&lt;/Button&gt;
          &lt;OffcanvasContainer scroll=&quot;true&quot; tabindex=&quot;-1&quot; id=&quot;offcanvasWithBothOptions&quot;&gt;
              &lt;OffcanvasHeader&gt;
                  &lt;h3 class=&quot;offcanvas-title&quot; id=&quot;offcanvasWithBothOptionsLabel&quot;&gt;Backdrop with scrolling&lt;/h3&gt;
                  &lt;ButtonClose dismiss=&quot;offcanvas&quot; aria-label=&quot;Close&quot;&gt;&lt;/ButtonClose&gt;
              &lt;/OffcanvasHeader&gt;
              &lt;OffcanvasBody&gt;
                  &lt;p&gt;Try scrolling the rest of the page to see this option in action.&lt;/p&gt;
              &lt;/OffcanvasBody&gt;
          &lt;/OffcanvasContainer&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Static backdrop</BlockTitle>
          <BlockText>When backdrop is set to static, the offcanvas will not close when clicking outside of it.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Button variant="primary" type="button" v-nk-offcanvas="'#staticBackdrop'" aria-controls="staticBackdrop">
          Toggle static offcanvas
          </Button>
          <OffcanvasContainer backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
              <OffcanvasHeader>
                  <h3 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h3>
                  <ButtonClose dismiss="offcanvas" aria-label="Close"></ButtonClose>
              </OffcanvasHeader>
              <OffcanvasBody>
                  <p>
                      I will not close if you click outside of me.
                  </p>
              </OffcanvasBody>
          </OffcanvasContainer>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button variant=&quot;primary&quot; type=&quot;button&quot; v-nk-offcanvas=&quot;'#staticBackdrop'&quot; aria-controls=&quot;staticBackdrop&quot;&gt;
          Toggle static offcanvas
          &lt;/Button&gt;
          &lt;OffcanvasContainer backdrop=&quot;static&quot; tabindex=&quot;-1&quot; id=&quot;staticBackdrop&quot; aria-labelledby=&quot;staticBackdropLabel&quot;&gt;
              &lt;OffcanvasHeader&gt;
                  &lt;h3 class=&quot;offcanvas-title&quot; id=&quot;staticBackdropLabel&quot;&gt;Offcanvas&lt;/h3&gt;
                  &lt;ButtonClose dismiss=&quot;offcanvas&quot; aria-label=&quot;Close&quot;&gt;&lt;/ButtonClose&gt;
              &lt;/OffcanvasHeader&gt;
              &lt;OffcanvasBody&gt;
                  &lt;p&gt;
                      I will not close if you click outside of me.
                  &lt;/p&gt;
              &lt;/OffcanvasBody&gt;
          &lt;/OffcanvasContainer&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Placement</BlockTitle>
          <BlockText>There’s no default placement for offcanvas components, so you must add one of the modifier classes below.</BlockText>
          <ul class="small">
              <li><code>position="start"</code> prop places offcanvas on the left of the viewport (shown above)</li>
              <li><code>position="end"</code> prop places offcanvas on the right of the viewport</li>
              <li><code>position="top"</code> prop places offcanvas on the top of the viewport</li>
              <li><code>position="bottom"</code> prop places offcanvas on the bottom of the viewport</li>
          </ul>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex gap g-3">
              <li>
                  <Button variant="primary" type="button" v-nk-offcanvas="'#offcanvasTop'">Toggle top offcanvas</Button>
              </li>
              <li>
                  <Button variant="primary" type="button" v-nk-offcanvas="'#offcanvasRight'">Toggle right offcanvas</Button>
              </li>
              <li>
                  <Button variant="primary" type="button" v-nk-offcanvas="'#offcanvasBottom'">Toggle bottom offcanvas</Button>
              </li>
          </ul>

          <!-- top -->
          <OffcanvasContainer position="top" tabindex="-1" id="offcanvasTop">
              <OffcanvasHeader>
                  <h3 class="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h3>
                  <ButtonClose dismiss="offcanvas" aria-label="Close"></ButtonClose>
              </OffcanvasHeader>
              <OffcanvasBody>
                  ...
              </OffcanvasBody>
          </OffcanvasContainer>
          
          <!-- right-->
          <OffcanvasContainer position="end" tabindex="-1" id="offcanvasRight">
              <OffcanvasHeader>
                  <h3 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h3>
                  <ButtonClose dismiss="offcanvas" aria-label="Close"></ButtonClose>
              </OffcanvasHeader>
              <OffcanvasBody>
                  ...
              </OffcanvasBody>
          </OffcanvasContainer>

          <!-- bottom-->
          <OffcanvasContainer position="bottom" tabindex="-1" id="offcanvasBottom">
              <OffcanvasHeader>
                  <h3 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h3>
                  <ButtonClose dismiss="offcanvas" aria-label="Close"></ButtonClose>
              </OffcanvasHeader>
              <OffcanvasBody>
                  ...
              </OffcanvasBody>
          </OffcanvasContainer>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button variant=&quot;primary&quot; type=&quot;button&quot; v-nk-offcanvas=&quot;'#offcanvasTop'&quot;&gt;Toggle top offcanvas&lt;/Button&gt;
          &lt;OffcanvasContainer position=&quot;top&quot; tabindex=&quot;-1&quot; id=&quot;offcanvasTop&quot;&gt;
              &lt;OffcanvasHeader&gt;
                  &lt;h3 class=&quot;offcanvas-title&quot; id=&quot;offcanvasTopLabel&quot;&gt;Offcanvas top&lt;/h3&gt;
                  &lt;ButtonClose dismiss=&quot;offcanvas&quot; aria-label=&quot;Close&quot;&gt;&lt;/ButtonClose&gt;
              &lt;/OffcanvasHeader&gt;
              &lt;OffcanvasBody&gt;
                  ...
              &lt;/OffcanvasBody&gt;
          &lt;/OffcanvasContainer&gt;
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
import Button from '@/components/uielements/button/Button.vue';
import OffcanvasContainer from '@/components/uielements/offcanvas/OffcanvasContainer.vue';
import OffcanvasHeader from '@/components/uielements/offcanvas/OffcanvasHeader.vue';
import OffcanvasBody from '@/components/uielements/offcanvas/OffcanvasBody.vue';
import Dropdown from '@/components/uielements/dropdown/Dropdown.vue';
import DropdownToggle from '@/components/uielements/dropdown/DropdownToggle.vue';
import DropdownMenu from '@/components/uielements/dropdown/DropdownMenu.vue';
import DropdownItem from '@/components/uielements/dropdown/DropdownItem.vue';
import DropdownLink from '@/components/uielements/dropdown/DropdownLink.vue';
import ButtonClose from '@/components/uielements/button-close/ButtonClose.vue';

export default {
  name: 'OffcanvasPage', 
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
    Button,
    OffcanvasContainer,
    OffcanvasHeader,
    OffcanvasBody,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    DropdownLink,
    ButtonClose
  },
}
</script>
