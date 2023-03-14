<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Checks and radios</BlockTitle>
        <BlockText>Create consistent cross-browser and cross-device checkboxes and radios with our completely rewritten checks component.</BlockText>
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
          <div class="row gy-3">
            <div class="col-12">
              <h6 class="overline-title">Checkboxes</h6>
            </div><!-- .col -->
            <div class="col-sm-6 col-lg-3">
              <FormCheck>
                  <FormCheckInput value="" type="checkbox" id="flexCheckDefault"/>
                  <FormCheckLabel for="flexCheckDefault">
                      Default
                  </FormCheckLabel>
              </FormCheck>
            </div><!-- .col -->
            <div class="col-sm-6 col-lg-3">
              <FormCheck>
                  <FormCheckInput value="" type="checkbox" id="flexCheckChecked" checked/>
                  <FormCheckLabel for="flexCheckChecked">
                      Checked
                  </FormCheckLabel>
              </FormCheck>
            </div><!-- .col -->
            <div class="col-sm-6 col-lg-3">
              <FormCheck>
                  <FormCheckInput value="" type="checkbox" id="flexCheckDisabled" disabled/>
                  <FormCheckLabel for="flexCheckDisabled">
                    Disabled
                  </FormCheckLabel>
              </FormCheck>
            </div><!-- .col -->
            <div class="col-sm-6 col-lg-3">
              <FormCheck>
                  <FormCheckInput value="" type="checkbox" id="flexCheckDisabledChecked" checked disabled/>
                  <FormCheckLabel for="flexCheckDisabledChecked">
                    Disabled checked
                  </FormCheckLabel>
              </FormCheck>
            </div><!-- .col -->
            <div class="col-12">
              <h6 class="overline-title">radios</h6>
            </div><!-- .col -->
            <div class="col-sm-6 col-lg-3">
              <FormCheck>
                  <FormCheckInput type="radio" name="flexRadioDefault" id="flexRadioDefault"/>
                  <FormCheckLabel for="flexRadioDefault">
                      Default
                  </FormCheckLabel>
              </FormCheck>
            </div><!-- .col -->
            <div class="col-sm-6 col-lg-3">
              <FormCheck>
                  <FormCheckInput type="radio" name="flexRadioDefaultChecked" id="flexRadioChecked" checked/>
                  <FormCheckLabel for="flexRadioChecked">
                      Checked
                  </FormCheckLabel>
              </FormCheck>
            </div><!-- .col -->
            <div class="col-sm-6 col-lg-3">
              <FormCheck>
                  <FormCheckInput type="radio" name="flexRadioDefaultDisabled" id="flexRadioDisabled" disabled/>
                  <FormCheckLabel for="flexRadioDisabled">
                    Disabled
                  </FormCheckLabel>
              </FormCheck>
            </div><!-- .col -->
            <div class="col-sm-6 col-lg-3">
              <FormCheck>
                  <FormCheckInput type="radio" name="flexRadioDefaultCheckedDisabled" id="flexRadioCheckedDisabled" checked disabled/>
                  <FormCheckLabel for="flexRadioCheckedDisabled">
                    Disabled checked
                  </FormCheckLabel>
              </FormCheck>
            </div><!-- .col -->
            <div class="col-12">
              <h6 class="overline-title">switches</h6>
            </div><!-- .col -->
            <div class="col-sm-6 col-lg-3">
              <FormCheck switcher>
                  <FormCheckInput type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  <FormCheckLabel for="flexSwitchCheckDefault">Default</FormCheckLabel>
              </FormCheck>
            </div><!-- .col -->
            <div class="col-sm-6 col-lg-3">
              <FormCheck switcher>
                  <FormCheckInput type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                  <FormCheckLabel for="flexSwitchCheckChecked">Checked</FormCheckLabel>
              </FormCheck>
            </div><!-- .col -->
            <div class="col-sm-6 col-lg-3">
              <FormCheck switcher>
                  <FormCheckInput type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled/>
                  <FormCheckLabel for="flexSwitchCheckDisabled">Disabled</FormCheckLabel>
              </FormCheck>
            </div><!-- .col -->
            <div class="col-sm-6 col-lg-3">
              <FormCheck switcher>
                  <FormCheckInput type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" checked disabled/>
                  <FormCheckLabel for="flexSwitchCheckCheckedDisabled">Disabled checked</FormCheckLabel>
              </FormCheck>
            </div><!-- .col -->
            <div class="col-12 col-lg-10">
                <div class="form-note"> 
                  Use <code>checked</code> attribute to <code>input</code> for checked mode, same as <code>disabled</code> for disabled mode. and use <code>switcher</code> prop to <code>FormCheck</code> to enable switch mode. 
                </div>
            </div><!-- .col -->
          </div><!-- .row -->
        </CardBody>
        <CodePreview title="checkbox">
          &lt;FormCheck&gt;
                  &lt;FormCheckInput value=&quot;&quot; type=&quot;checkbox&quot; id=&quot;flexCheckDefault&quot;/&gt;
                  &lt;FormCheckLabel for=&quot;flexCheckDefault&quot;&gt;
                      Default
                  &lt;/FormCheckLabel&gt;
              &lt;/FormCheck&gt;
        </CodePreview>
        <CodePreview title="radio">
          &lt;FormCheck&gt;
                  &lt;FormCheckInput type=&quot;radio&quot; name=&quot;flexRadioDefault&quot; id=&quot;flexRadioDefault&quot;/&gt;
                  &lt;FormCheckLabel for=&quot;flexRadioDefault&quot;&gt;
                      Default
                  &lt;/FormCheckLabel&gt;
              &lt;/FormCheck&gt;
        </CodePreview>
        <CodePreview title="switch">
          &lt;FormCheck switcher&gt;
                  &lt;FormCheckInput type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;flexSwitchCheckDefault&quot;/&gt;
                  &lt;FormCheckLabel for=&quot;flexSwitchCheckDefault&quot;&gt;Default&lt;/FormCheckLabel&gt;
              &lt;/FormCheck&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Sizing</BlockTitle>
        <BlockText>Set heights using prop like <code>size="xl"</code>, <code>size="lg"</code> and <code>size="sm"</code>.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="row gy-3">
            <div class="col-12">
              <h6 class="overline-title">Checkboxes</h6>
            </div>
            <div class="col-12">
              <div class="d-flex flex-wrap align-items-center gap gx-4 gy-2">
                <div>
                  <FormCheck size="sm">
                      <FormCheckInput type="checkbox" value="" id="flexCheckSizeSm"/>
                      <FormCheckLabel for="flexCheckSizeSm">Checkbox Label</FormCheckLabel>
                  </FormCheck>
                </div>
                <div>
                  <FormCheck>
                      <FormCheckInput type="checkbox" value="" id="flexCheckSize"/>
                      <FormCheckLabel for="flexCheckSize">Checkbox Label</FormCheckLabel>
                  </FormCheck>
                </div>
                <div>
                  <FormCheck size="lg">
                      <FormCheckInput type="checkbox" value="" id="flexCheckSizelg"/>
                      <FormCheckLabel for="flexCheckSizelg">Checkbox Label</FormCheckLabel>
                  </FormCheck>
                </div>
                <div>
                  <FormCheck size="xl">
                      <FormCheckInput type="checkbox" value="" id="flexCheckSizexl"/>
                      <FormCheckLabel for="flexCheckSizexl">Checkbox Label</FormCheckLabel>
                  </FormCheck>
                </div>
              </div>
            </div>
            <div class="col-12">
              <h6 class="overline-title">radios</h6>
            </div><!-- col -->
            <div class="col-12">
              <div class="d-flex flex-wrap align-items-center gap gx-4 gy-2">
                <div>
                  <FormCheck size="sm">
                    <FormCheckInput type="radio" name="flexRadioSize" id="flexRadioSizesm"/>
                    <FormCheckLabel for="flexRadioSizesm">
                      Radio Label
                    </FormCheckLabel>
                  </FormCheck>
                </div>
                <div>
                  <FormCheck>
                    <FormCheckInput type="radio" name="flexRadioSize" id="flexRadioSizeDefault"/>
                    <FormCheckLabel for="flexRadioSizeDefault">
                      Radio Label
                    </FormCheckLabel>
                  </FormCheck>
                </div>
                <div>
                  <FormCheck size="lg">
                    <FormCheckInput type="radio" name="flexRadioSize" id="flexRadioSizelg"/>
                    <FormCheckLabel for="flexRadioSizelg">
                      Radio Label
                    </FormCheckLabel>
                  </FormCheck>
                </div>
                <div>
                  <FormCheck size="xl">
                    <FormCheckInput type="radio" name="flexRadioSize" id="flexRadioSizexl"/>
                    <FormCheckLabel for="flexRadioSizexl">
                      Radio Label
                    </FormCheckLabel>
                  </FormCheck>
                </div>
              </div>
            </div><!-- col -->

            <div class="col-12">
              <h6 class="overline-title">Switches</h6>
            </div><!-- col -->
            <div class="col-12">
              <div class="d-flex flex-wrap align-items-center gap gx-4 gy-2">
                <div>
                  <FormCheck switcher size="sm">
                    <FormCheckInput type="checkbox" name="flexSwitcherSize" id="flexSwitcherSizesm"/>
                    <FormCheckLabel for="flexSwitcherSizesm">
                      Switch Label
                    </FormCheckLabel>
                  </FormCheck>
                </div>
                <div>
                  <FormCheck switcher>
                    <FormCheckInput type="checkbox" name="flexSwitcherSize" id="flexSwitcherSizeDefault"/>
                    <FormCheckLabel for="flexSwitcherSizeDefault">
                      Switch Label
                    </FormCheckLabel>
                  </FormCheck>
                </div>
                <div>
                  <FormCheck switcher size="lg">
                    <FormCheckInput type="checkbox" name="flexSwitcherSize" id="flexSwitcherSizelg"/>
                    <FormCheckLabel for="flexSwitcherSizelg">
                      Switch Label
                    </FormCheckLabel>
                  </FormCheck>
                </div>
                <div>
                  <FormCheck switcher size="xl">
                    <FormCheckInput type="checkbox" name="flexSwitcherSize" id="flexSwitcherSizexl"/>
                    <FormCheckLabel for="flexSwitcherSizexl">
                      Switch Label
                    </FormCheckLabel>
                  </FormCheck>
                </div>
              </div>
            </div><!-- col -->

          </div><!-- .col -->
        </CardBody>
        <CodePreview title="code example">Code exmaple goes here</CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Inline</BlockTitle>
        <BlockText>Group checkboxes or radios on the same horizontal row by adding <code>inline</code> prop to any <code>FormCheck</code>.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="gap g-4">
              <li>
                  <FormCheck inline>
                      <FormCheckInput type="checkbox" id="inlineCheckbox1" value="option1"/>
                      <FormCheckLabel for="inlineCheckbox1">1</FormCheckLabel>
                  </FormCheck>
                  <FormCheck inline>
                      <FormCheckInput type="checkbox" id="inlineCheckbox2" value="option2"/>
                      <FormCheckLabel for="inlineCheckbox2">2</FormCheckLabel>
                  </FormCheck>
                  <FormCheck inline>
                      <FormCheckInput type="checkbox" id="inlineCheckbox3" value="option3" disabled/>
                      <FormCheckLabel for="inlineCheckbox3">3 (disabled)</FormCheckLabel>
                  </FormCheck>
              </li>
              <li>
                  <FormCheck inline>
                      <FormCheckInput type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                      <FormCheckLabel for="inlineRadio1">1</FormCheckLabel>
                  </FormCheck>
                  <FormCheck inline>
                      <FormCheckInput type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                      <FormCheckLabel for="inlineRadio2">2</FormCheckLabel>
                  </FormCheck>
                  <FormCheck inline>
                      <FormCheckInput type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled/>
                      <FormCheckLabel for="inlineRadio3">3 (disabled)</FormCheckLabel>
                  </FormCheck>
              </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;FormCheck class=&quot;form-check-inline&quot;&gt;
              &lt;FormCheckInput type=&quot;checkbox&quot; id=&quot;inlineCheckbox1&quot; value=&quot;option1&quot;/&gt;
              &lt;FormCheckLabel for=&quot;inlineCheckbox1&quot;&gt;1&lt;/FormCheckLabel&gt;
          &lt;/FormCheck&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Reverse</BlockTitle>
        <BlockText>Put your checkboxes, radios, and switches on the opposite side with the <code>checkReverse</code> prop.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <FormCheck checkReverse>
              <FormCheckInput type="checkbox" value="" id="reverseCheck1"/>
              <FormCheckLabel for="reverseCheck1">Reverse checkbox</FormCheckLabel>
          </FormCheck>
          <FormCheck checkReverse>
              <FormCheckInput type="checkbox" value="" id="reverseCheck2" disabled/>
              <FormCheckLabel for="reverseCheck2">Disabled reverse checkbox</FormCheckLabel>
          </FormCheck>
          <FormCheck checkReverse switcher>
              <FormCheckInput type="checkbox" id="flexSwitchCheckReverse"/>
              <FormCheckLabel for="flexSwitchCheckReverse">Reverse switch checkbox input</FormCheckLabel>
          </FormCheck>
        </CardBody>
        <CodePreview title="code example">
          &lt;FormCheck checkReverse&gt;
              &lt;FormCheckInput type=&quot;checkbox&quot; value=&quot;&quot; id=&quot;reverseCheck1&quot;/&gt;
              &lt;FormCheckLabel for=&quot;reverseCheck1&quot;&gt;Reverse checkbox&lt;/FormCheckLabel&gt;
          &lt;/FormCheck&gt;
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
import FormCheck from '@/components/forms/form-check/FormCheck.vue';
import FormCheckInput from '@/components/forms/form-check/FormCheckInput.vue';
import FormCheckLabel from '@/components/forms/form-check/FormCheckLabel.vue';

export default {
  name: 'ChecksRadiosPage', 
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
    FormCheck,
    FormCheckInput,
    FormCheckLabel
  }
}
</script>
