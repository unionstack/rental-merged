<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Accordion</BlockTitle>
        <BlockText>Build vertically collapsing accordions in combination with our Collapse JavaScript plugin</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead class="wide-md">
        <BlockText><strong class="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component. 
        </BlockText>
        <BlockText>How to import component and use see the <a href="#">docs</a></BlockText>
        <BlockTitle>Example</BlockTitle>
        <BlockText>Click the accordions below to expand/collapse the accordion content.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Accordion id="accordionExample">
            <AccordionItem>
                <AccordionHeader>
                  <AccordionButton target="collapseOne" opened>
                    Accordion Item #1
                  </AccordionButton>
                </AccordionHeader>
                <AccordionCollapse id="collapseOne" opened parent="accordionExample">
                    <AccordionBody>
                      <p><strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>
                    </AccordionBody>
                </AccordionCollapse>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader>
                  <AccordionButton target="collapseTwo">
                    Accordion Item #2
                  </AccordionButton>
                </AccordionHeader>
                <AccordionCollapse id="collapseTwo" parent="accordionExample">
                    <AccordionBody>
                      <p><strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>
                    </AccordionBody>
                </AccordionCollapse>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader>
                  <AccordionButton target="collapseThree">
                    Accordion Item #3
                  </AccordionButton>
                </AccordionHeader>
              <AccordionCollapse id="collapseThree" parent="accordionExample">
                  <AccordionBody>
                    <p><strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow.</p>
                  </AccordionBody>
              </AccordionCollapse>
            </AccordionItem>
          </Accordion>
        </CardBody>

        <CodePreview title="code example">
          &lt;Accordion id=&quot;accordionExample&quot;&gt;
            &lt;AccordionItem&gt;
                &lt;AccordionHeader&gt;
                  &lt;AccordionButton target=&quot;collapseOne&quot; opened&gt;
                    Accordion Item #1
                  &lt;/AccordionButton&gt;
                &lt;/AccordionHeader&gt;
                &lt;AccordionCollapse id=&quot;collapseOne&quot; opened parent=&quot;accordionExample&quot;&gt;
                    &lt;AccordionBody&gt;
                      &lt;p&gt;&lt;strong&gt;This is the first item's accordion body.&lt;/strong&gt; It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the &lt;code&gt;.accordion-body&lt;/code&gt;, though the transition does limit overflow.&lt;/p&gt;
                    &lt;/AccordionBody&gt;
                &lt;/AccordionCollapse&gt;
            &lt;/AccordionItem&gt;

            &lt;AccordionItem&gt;
                &lt;AccordionHeader&gt;
                  &lt;AccordionButton target=&quot;collapseTwo&quot;&gt;
                    Accordion Item #2
                  &lt;/AccordionButton&gt;
                &lt;/AccordionHeader&gt;
                &lt;AccordionCollapse id=&quot;collapseTwo&quot; parent=&quot;accordionExample&quot;&gt;
                    &lt;AccordionBody&gt;
                      &lt;p&gt;&lt;strong&gt;This is the second item's accordion body.&lt;/strong&gt; It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the &lt;code&gt;.accordion-body&lt;/code&gt;, though the transition does limit overflow.&lt;/p&gt;
                    &lt;/AccordionBody&gt;
                &lt;/AccordionCollapse&gt;
            &lt;/AccordionItem&gt;

            &lt;AccordionItem&gt;
                &lt;AccordionHeader&gt;
                  &lt;AccordionButton target=&quot;collapseThree&quot;&gt;
                    Accordion Item #3
                  &lt;/AccordionButton&gt;
                &lt;/AccordionHeader&gt;
              &lt;AccordionCollapse id=&quot;collapseThree&quot; parent=&quot;accordionExample&quot;&gt;
                  &lt;AccordionBody&gt;
                    &lt;p&gt;&lt;strong&gt;This is the third item's accordion body.&lt;/strong&gt; It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow.&lt;/p&gt;
                  &lt;/AccordionBody&gt;
              &lt;/AccordionCollapse&gt;
            &lt;/AccordionItem&gt;
          &lt;/Accordion&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Flush</BlockTitle>
        <BlockText>Add <code>flush</code> prop to remove the default <code>background-color</code>, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Accordion id="accordionFlushExample" flush opened>
            <AccordionItem>
                <AccordionHeader>
                  <AccordionButton target="flush-collapseOne">
                    Accordion Item #1
                  </AccordionButton>
                </AccordionHeader>
                <AccordionCollapse id="flush-collapseOne" parent="accordionFlushExample" opened>
                    <AccordionBody>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto impedit eos dignissimos, dolorem explicabo doloribus quisquam! Totam at ad aspernatur, deleniti reiciendis vitae dolor aut obcaecati recusandae, sed id doloribus.</p>
                    </AccordionBody>
                </AccordionCollapse>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader>
                  <AccordionButton target="flush-collapseTwo">
                    Accordion Item #2
                  </AccordionButton>
                </AccordionHeader>
                <AccordionCollapse id="flush-collapseTwo" parent="accordionFlushExample">
                    <AccordionBody>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto impedit eos dignissimos, dolorem explicabo doloribus quisquam! Totam at ad aspernatur, deleniti reiciendis vitae dolor aut obcaecati recusandae, sed id doloribus.</p>
                    </AccordionBody>
                </AccordionCollapse>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader>
                  <AccordionButton target="flush-collapseThree">
                    Accordion Item #3
                  </AccordionButton>
                </AccordionHeader>
                <AccordionCollapse id="flush-collapseThree" parent="accordionFlushExample">
                    <AccordionBody>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto impedit eos dignissimos, dolorem explicabo doloribus quisquam! Totam at ad aspernatur, deleniti reiciendis vitae dolor aut obcaecati recusandae, sed id doloribus.</p>
                    </AccordionBody>
                </AccordionCollapse>
            </AccordionItem>
          </Accordion>
        </CardBody>
        <CodePreview title="code example">
          &lt;Accordion id=&quot;accordionFlushExample&quot; flush opened&gt;
            &lt;AccordionItem&gt;
                &lt;AccordionHeader&gt;
                  &lt;AccordionButton target=&quot;flush-collapseOne&quot;&gt;
                    Accordion Item #1
                  &lt;/AccordionButton&gt;
                &lt;/AccordionHeader&gt;
                &lt;AccordionCollapse id=&quot;flush-collapseOne&quot; parent=&quot;accordionFlushExample&quot; opened&gt;
                    &lt;AccordionBody&gt;
                      &lt;p&gt;Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto impedit eos dignissimos, dolorem explicabo doloribus quisquam! Totam at ad aspernatur, deleniti reiciendis vitae dolor aut obcaecati recusandae, sed id doloribus.&lt;/p&gt;
                    &lt;/AccordionBody&gt;
                &lt;/AccordionCollapse&gt;
            &lt;/AccordionItem&gt;

            &lt;AccordionItem&gt;
                &lt;AccordionHeader&gt;
                  &lt;AccordionButton target=&quot;flush-collapseTwo&quot;&gt;
                    Accordion Item #2
                  &lt;/AccordionButton&gt;
                &lt;/AccordionHeader&gt;
                &lt;AccordionCollapse id=&quot;flush-collapseTwo&quot; parent=&quot;accordionFlushExample&quot;&gt;
                    &lt;AccordionBody&gt;
                      &lt;p&gt;Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto impedit eos dignissimos, dolorem explicabo doloribus quisquam! Totam at ad aspernatur, deleniti reiciendis vitae dolor aut obcaecati recusandae, sed id doloribus.&lt;/p&gt;
                    &lt;/AccordionBody&gt;
                &lt;/AccordionCollapse&gt;
            &lt;/AccordionItem&gt;

            &lt;AccordionItem&gt;
                &lt;AccordionHeader&gt;
                  &lt;AccordionButton target=&quot;flush-collapseThree&quot;&gt;
                    Accordion Item #3
                  &lt;/AccordionButton&gt;
                &lt;/AccordionHeader&gt;
                &lt;AccordionCollapse id=&quot;flush-collapseThree&quot; parent=&quot;accordionFlushExample&quot;&gt;
                    &lt;AccordionBody&gt;
                      &lt;p&gt;Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto impedit eos dignissimos, dolorem explicabo doloribus quisquam! Totam at ad aspernatur, deleniti reiciendis vitae dolor aut obcaecati recusandae, sed id doloribus.&lt;/p&gt;
                    &lt;/AccordionBody&gt;
                &lt;/AccordionCollapse&gt;
            &lt;/AccordionItem&gt;
          &lt;/Accordion&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Always open</BlockTitle>
        <BlockText>Omit the <code>parent</code> prop on each <code>AccordionCollapse</code> to make accordion items stay open when another item is opened.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Accordion id="accordionPanelsStayOpenExample">
            <AccordionItem>
                <AccordionHeader>
                  <AccordionButton target="PanelsStayOpen-collapseOne" opened>
                    Accordion Item #1
                  </AccordionButton>
                </AccordionHeader>
                <AccordionCollapse id="PanelsStayOpen-collapseOne" opened>
                    <AccordionBody>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto impedit eos dignissimos, dolorem explicabo doloribus quisquam! Totam at ad aspernatur, deleniti reiciendis vitae dolor aut obcaecati recusandae, sed id doloribus.</p>
                    </AccordionBody>
                </AccordionCollapse>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader>
                  <AccordionButton target="PanelsStayOpen-collapseTwo">
                    Accordion Item #2
                  </AccordionButton>
                </AccordionHeader>
                <AccordionCollapse id="PanelsStayOpen-collapseTwo">
                    <AccordionBody>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto impedit eos dignissimos, dolorem explicabo doloribus quisquam! Totam at ad aspernatur, deleniti reiciendis vitae dolor aut obcaecati recusandae, sed id doloribus.</p>
                    </AccordionBody>
                </AccordionCollapse>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader>
                  <AccordionButton target="PanelsStayOpen-collapseThree">
                    Accordion Item #3
                  </AccordionButton>
                </AccordionHeader>
                <AccordionCollapse id="PanelsStayOpen-collapseThree">
                    <AccordionBody>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto impedit eos dignissimos, dolorem explicabo doloribus quisquam! Totam at ad aspernatur, deleniti reiciendis vitae dolor aut obcaecati recusandae, sed id doloribus.</p>
                    </AccordionBody>
                </AccordionCollapse>
            </AccordionItem>
          </Accordion>
        </CardBody>
        <CodePreview title="code example">
          &lt;Accordion id=&quot;accordionPanelsStayOpenExample&quot;&gt;
            &lt;AccordionItem&gt;
                &lt;AccordionHeader&gt;
                  &lt;AccordionButton target=&quot;PanelsStayOpen-collapseOne&quot; opened&gt;
                    Accordion Item #1
                  &lt;/AccordionButton&gt;
                &lt;/AccordionHeader&gt;
                &lt;AccordionCollapse id=&quot;PanelsStayOpen-collapseOne&quot; opened&gt;
                    &lt;AccordionBody&gt;
                      &lt;p&gt;Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto impedit eos dignissimos, dolorem explicabo doloribus quisquam! Totam at ad aspernatur, deleniti reiciendis vitae dolor aut obcaecati recusandae, sed id doloribus.&lt;/p&gt;
                    &lt;/AccordionBody&gt;
                &lt;/AccordionCollapse&gt;
            &lt;/AccordionItem&gt;

            &lt;AccordionItem&gt;
                &lt;AccordionHeader&gt;
                  &lt;AccordionButton target=&quot;PanelsStayOpen-collapseTwo&quot;&gt;
                    Accordion Item #2
                  &lt;/AccordionButton&gt;
                &lt;/AccordionHeader&gt;
                &lt;AccordionCollapse id=&quot;PanelsStayOpen-collapseTwo&quot;&gt;
                    &lt;AccordionBody&gt;
                      &lt;p&gt;Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto impedit eos dignissimos, dolorem explicabo doloribus quisquam! Totam at ad aspernatur, deleniti reiciendis vitae dolor aut obcaecati recusandae, sed id doloribus.&lt;/p&gt;
                    &lt;/AccordionBody&gt;
                &lt;/AccordionCollapse&gt;
            &lt;/AccordionItem&gt;

            &lt;AccordionItem&gt;
                &lt;AccordionHeader&gt;
                  &lt;AccordionButton target=&quot;PanelsStayOpen-collapseThree&quot;&gt;
                    Accordion Item #3
                  &lt;/AccordionButton&gt;
                &lt;/AccordionHeader&gt;
                &lt;AccordionCollapse id=&quot;PanelsStayOpen-collapseThree&quot;&gt;
                    &lt;AccordionBody&gt;
                      &lt;p&gt;Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto impedit eos dignissimos, dolorem explicabo doloribus quisquam! Totam at ad aspernatur, deleniti reiciendis vitae dolor aut obcaecati recusandae, sed id doloribus.&lt;/p&gt;
                    &lt;/AccordionBody&gt;
                &lt;/AccordionCollapse&gt;
            &lt;/AccordionItem&gt;
          &lt;/Accordion&gt;
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
import Accordion from '@/components/uielements/accordion/Accordion.vue';
import AccordionItem from '@/components/uielements/accordion/AccordionItem.vue';
import AccordionHeader from '@/components/uielements/accordion/AccordionHeader.vue';
import AccordionButton from '@/components/uielements/accordion/AccordionButton.vue';
import AccordionCollapse from '@/components/uielements/accordion/AccordionCollapse.vue';
import AccordionBody from '@/components/uielements/accordion/AccordionBody.vue';
import CodePreview from '@/components/code-preview/CodePreview.vue';

export default {
  name: 'AccordionPage', 
  components: {
    Layout,
    Block,
    BlockHead,
    BlockHeadContent,
    BlockTitle,
    BlockText,
    Card,
    CardBody,
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionButton,
    AccordionCollapse,
    AccordionBody,
    CodePreview
  },
}
</script>
