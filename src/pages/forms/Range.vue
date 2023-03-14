<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Range</BlockTitle>
        <BlockText>Use our custom range inputs for consistent cross-browser styling and built-in customization.</BlockText>
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
          <div class="row gy-4 gx-gs">
                <div class="col-sm-6">
                    <div class="form-group">
                        <label class="form-label mb-3">Default Range Slider</label>
                        <div class="form-control-wrap">
                            <NoUiRange id="default-range" start="30"/>
                        </div>
                    </div> 
                </div><!-- .col -->
                <div class="col-sm-6">
                    <div class="form-group">
                        <label class="form-label mb-3">Range Connect (upper)</label>
                        <div class="form-control-wrap">
                          <NoUiRange id="range-connect" start="20" connect="upper"/>
                        </div>
                    </div> 
                </div><!-- .col -->
                <div class="col-sm-6">
                    <div class="form-group">
                        <label class="form-label mb-3">Range Slider Step (10)</label>
                        <div class="form-control-wrap">
                          <NoUiRange id="range-step" :step="10" start="20"/>
                        </div>
                    </div> 
                </div><!-- .col -->
                <div class="col-sm-6">
                    <div class="form-group">
                        <label class="form-label mb-3">Range Multiple</label>
                        <div class="form-control-wrap">
                          <NoUiRange id="range-multiple" connect="true" start="30 70"/>
                        </div>
                    </div> 
                </div><!-- .col -->
                <div class="col-12 col-lg-10">
                    <ul class="gap gy-2">
                        <li>
                            <div class="form-note">
                                <code>start="20"</code> prop to specify value for slider handle, this can take multiple value saparated with an space like this <code>[start="20 40"]</code>.
                            </div>
                        </li>
                        <li>
                            <div class="form-note">
                                <code>step="10"</code> prop to enable slider step mode.
                            </div>
                        </li>
                        <li>
                            <div class="form-note">
                                <code>connect="upper"</code> prop to specify if slider handles are connected with something. you can use <code>{lower, upper, true, false}</code> with this. <code>lower</code> connects with start point, <code>upper</code> connects with end point, <code>true</code> connects handles with each other. Also you need to make combination with handle count with connect points, this can take multiple value saparated with an space like this <code>[connect="lower false true upper"]</code>.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;NoUiRange id=&quot;default-range&quot; start=&quot;30&quot;/&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
        <BlockTitle>Example Vertical</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
            <div class="row gy-4 gx-gs">
                <div class="col-sm-3 col-6">
                    <div class="form-group">
                        <label class="form-label mb-3">Default Range Slider</label>
                        <div class="form-control-wrap">
                            <NoUiRange id="vertical-Default-Range" orientation="vertical" start="30"/>
                        </div>
                    </div> 
                </div><!-- .col -->
                <div class="col-sm-3 col-6">
                    <div class="form-group">
                        <label class="form-label mb-3">Range Connect (upper)</label>
                        <div class="form-control-wrap">
                            <NoUiRange id="vertical-range-connect" orientation="vertical" start="20" connect="upper"/>
                        </div>
                    </div> 
                </div><!-- .col -->
                <div class="col-sm-3 col-6">
                    <div class="form-group">
                        <label class="form-label mb-3">Range Slider Step (10)</label>
                        <div class="form-control-wrap">
                            <NoUiRange id="vertical-range-step" orientation="vertical" :step="10" start="20" connect="upper"/>
                        </div>
                    </div> 
                </div><!-- .col -->
                <div class="col-sm-3 col-6">
                    <div class="form-group">
                        <label class="form-label mb-3">Range Multiple</label>
                        <div class="form-control-wrap">
                            <NoUiRange id="vertical-range-multiple" orientation="vertical" start="30 70" connect="true"/>
                        </div>
                    </div> 
                </div><!-- .col -->

                <div class="col-12">
                  <div class="form-note">
                    Use <code>orientation="vertical"</code> prop to enable vertical mode.
                  </div>
                </div>
            </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;NoUiRange id=&quot;vertical-Default-Range&quot; orientation=&quot;vertical&quot; start=&quot;30&quot;/&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
        <BlockTitle>Example Tooltip</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
              <div class="row gy-4 gx-gs">
                <div class="col-sm-6">
                    <div class="form-group">
                        <label class="form-label mb-3">Tooltip Slider</label>
                        <div class="form-control-wrap">
                            <NoUiRange id="tooltip-Range" start="40" :tooltip="true"/>
                        </div>
                    </div> 
                </div><!-- .col -->
                <div class="col-sm-6">
                    <div class="form-group">
                        <label class="form-label mb-3">Minimum Distance Slider</label>
                        <div class="form-control-wrap">
                            <NoUiRange id="min-distance-range" :tooltip="true" connect="true" start="30 60" :minDistance="20"/>
                        </div>
                    </div> 
                </div><!-- .col -->
                <div class="col-sm-6">
                    <div class="form-group">
                        <label class="form-label mb-3">Maximum Distance Slider</label>
                        <div class="form-control-wrap">
                            <NoUiRange id="Max-Distance-Range" :tooltip="true" connect="true" start="30 60" :maxDistance="50"/>
                        </div>
                    </div> 
                </div><!-- .col -->
                <div class="col-12">
                  <div class="form-note">
                    Use <code>tooltip="true"</code> prop to enable Tooltip mode. and use <code>:minDistance="number value"</code> for minimun Distance. and use <code>:maxDistance="number value"</code> maximum Distance.
                  </div>
                </div>
            </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;NoUiRange id=&quot;tooltip-Range&quot; start=&quot;40&quot; :tooltip=&quot;true&quot;/&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
        <BlockTitle>Example</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="gap g-3">
            <li>
              <FormLabel for="customRange1" class="small">Example range</FormLabel>
              <FormRange id="customRange1"/>
            </li>
            <li>
              <FormLabel for="disabledRange" class="small">Disabled range</FormLabel>
              <FormRange id="disabledRange" disabled/>
            </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">Code exmaple goes here</CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Default Example</BlockTitle>
        <BlockText>Create custom range controls with <code>FormRange</code> component. The track (the background) and thumb (the value) are both styled to appear the same across browsers.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="row g-gs">
            <div class="col-md-6">
              <div class="form-group">
                <FormLabel for="customRange1">Default range</FormLabel>
                <FormRange id="customRange1"/>
              </div>
            </div><!-- .col -->
            <div class="col-md-6">
              <div class="form-group">
                <FormLabel for="customRange2">Disabled range</FormLabel>
                <FormRange id="customRange2" disabled/>
              </div>
            </div><!-- .col -->
            <div class="col-md-6">
              <div class="form-group">
                <FormLabel for="customRange3">Min and max range (0-5)</FormLabel>
                <FormRange id="customRange3" min="0" max="5"/>
              </div>
            </div><!-- .col -->
            <div class="col-md-6">
              <div class="form-group">
                <FormLabel for="customRange4">Steps range (10)</FormLabel>
                <FormRange id="customRange4" step="10"/>
              </div>
            </div><!-- .col -->
          </div><!-- .col -->
        </CardBody>
        <CodePreview title="default">
          &lt;FormRange id=&quot;customRange1&quot;/&gt;
        </CodePreview>
        <CodePreview title="min and max">
          &lt;FormRange id=&quot;customRange3&quot; min=&quot;0&quot; max=&quot;5&quot;/&gt;
        </CodePreview>
        <CodePreview title="range step">
          &lt;FormRange id=&quot;customRange4&quot; step=&quot;10&quot;/&gt;
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
import FormLabel from '@/components/forms/form-label/FormLabel.vue';
import FormRange from '@/components/forms/form-range/FormRange.vue';
import NoUiRange from '@/components/forms/nouislider/NoUiRange.vue';

export default {
  name: 'RangePage', 
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
    FormLabel,
    FormRange,
    NoUiRange
  },
}
</script>
