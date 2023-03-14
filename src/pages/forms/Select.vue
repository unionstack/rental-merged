<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Custom Select Box & Tag</BlockTitle>
        <BlockText>Here is some custom styled select fields using <a href="https://github.com/Choices-js/Choices" target="_blank">choice.js</a> plugin.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead class="wide-md">
        <BlockText><strong class="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component. 
        </BlockText>
        <BlockText>How to import component and use see the <a href="#">docs</a></BlockText>
        <BlockTitle>Example with choice.js</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="row gx-gs gy-3">
            <div class="col-md-6">
              <div class="form-group">
                <label class="form-label">Single select input</label>
                <ChoiceSelect id="single-select" :cross="false">
                  <ChoiceSelectOption value="">Open this select menu</ChoiceSelectOption>
                  <ChoiceSelectOption value="1">One</ChoiceSelectOption>
                  <ChoiceSelectOption value="2">Two</ChoiceSelectOption>
                  <ChoiceSelectOption value="3">Three</ChoiceSelectOption>
                </ChoiceSelect>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="form-label">Multiple select input</label>
                <ChoiceSelect id="multiple-select" multiple>
                  <ChoiceSelectOption value="">Open this select menu</ChoiceSelectOption>
                  <ChoiceSelectOption value="1">One</ChoiceSelectOption>
                  <ChoiceSelectOption value="2">Two</ChoiceSelectOption>
                  <ChoiceSelectOption value="3">Three</ChoiceSelectOption>
                </ChoiceSelect>
              </div>
            </div>
            <div class="col-12">
              <div class="form-note"> 
                Use <code>multiple</code> attribute to enable mutiple select on your <code>select</code> option. Available props <code>search</code>, <code>sort</code>, <code>cross</code>, <code>selectText</code>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="form-label">Tag (with cross)</label>
                <ChoiceInput id="with-cross" value="Tag1,Tag2" type="text" placeholder="Enter something"/>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="form-label">Tag (without cross)</label>
                <ChoiceInput id="without-cross" value="Tag1,Tag2" type="text" :cross="false" placeholder="Enter something" />
              </div>
            </div>
            <div class="col-12">
              <div class="form-note"> 
                Use <code>:cross="false"</code> prop to input to hide cross icon. Even though <code>cross="false"</code> is static, we need v-bind to tell Vue that <br> this is a JavaScript expression rather than a string.
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="form-label">Select Disabled</label>
                <ChoiceSelect id="select-disabled" :cross="false" disabled >
                  <ChoiceSelectOption value="">Open this select menu</ChoiceSelectOption>
                  <ChoiceSelectOption value="1">One</ChoiceSelectOption>
                  <ChoiceSelectOption value="2">Two</ChoiceSelectOption>
                  <ChoiceSelectOption value="3">Three</ChoiceSelectOption>
                </ChoiceSelect>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="form-label">Tag Disabled</label>
                <ChoiceInput id="tag-disabled" value="Tag1,Tag2" type="text" disabled placeholder="Enter something"/>
              </div>
            </div>
            <div class="form-note">
              Use <code>disabled</code> attribute to select and tag input for disabled state.
            </div>
          </div>
        </CardBody>
        <CodePreview title="select">
          &lt;ChoiceSelect id=&quot;single-select&quot; :cross=&quot;false&quot;&gt;
                  &lt;ChoiceSelectOption value=&quot;&quot;&gt;Open this select menu&lt;/ChoiceSelectOption&gt;
                  &lt;ChoiceSelectOption value=&quot;1&quot;&gt;One&lt;/ChoiceSelectOption&gt;
                  &lt;ChoiceSelectOption value=&quot;2&quot;&gt;Two&lt;/ChoiceSelectOption&gt;
                  &lt;ChoiceSelectOption value=&quot;3&quot;&gt;Three&lt;/ChoiceSelectOption&gt;
                &lt;/ChoiceSelect&gt;
        </CodePreview>
        <CodePreview title="tag">
          &lt;ChoiceInput id=&quot;with-cross&quot; value=&quot;Tag1,Tag2&quot; type=&quot;text&quot; placeholder=&quot;Enter something&quot;/&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Default Select</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="row g-gs">
            <div class="col-md-6">
              <div class="form-group">
                <label class="form-label">Default Select</label>
                <FormSelect>
                    <FormSelectOption selected>Open this select menu</FormSelectOption>
                    <FormSelectOption value="1">One</FormSelectOption>
                    <FormSelectOption value="2">Two</FormSelectOption>
                    <FormSelectOption value="3">Three</FormSelectOption>
                </FormSelect>
              </div>
            </div><!-- .col -->
            <div class="col-md-6">
              <div class="form-group">
                <label class="form-label">Disabled Select</label>
                <FormSelect disabled>
                    <FormSelectOption selected>Open this select menu</FormSelectOption>
                    <FormSelectOption value="1">One</FormSelectOption>
                    <FormSelectOption value="2">Two</FormSelectOption>
                    <FormSelectOption value="3">Three</FormSelectOption>
                </FormSelect>
              </div>
            </div><!-- .col -->
            <div class="col-md-6">
              <div class="form-group">
                <label class="form-label">Multiple Select</label>
                <FormSelect multiple>
                    <FormSelectOption selected>Open this select menu</FormSelectOption>
                    <FormSelectOption value="1">One</FormSelectOption>
                    <FormSelectOption value="2">Two</FormSelectOption>
                    <FormSelectOption value="3">Three</FormSelectOption>
                </FormSelect>
              </div>
            </div><!-- .col -->
            <div class="col-md-6">
              <div class="form-group">
                <label class="form-label">Disabled Multiple Select</label>
                <FormSelect multiple disabled>
                    <FormSelectOption selected>Open this select menu</FormSelectOption>
                    <FormSelectOption value="1">One</FormSelectOption>
                    <FormSelectOption value="2">Two</FormSelectOption>
                    <FormSelectOption value="3">Three</FormSelectOption>
                </FormSelect>
              </div>
            </div><!-- .col -->
            <div class="col-12">
              <div class="form-note">
                Use <code>multiple</code> or <code>disabled</code> attribute to <code>select</code> to enable multiple, disabled state.
              </div>
            </div>
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;FormSelect&gt;
              &lt;FormSelectOption selected&gt;Open this select menu&lt;/FormSelectOption&gt;
              &lt;FormSelectOption value=&quot;1&quot;&gt;One&lt;/FormSelectOption&gt;
              &lt;FormSelectOption value=&quot;2&quot;&gt;Two&lt;/FormSelectOption&gt;
              &lt;FormSelectOption value=&quot;3&quot;&gt;Three&lt;/FormSelectOption&gt;
          &lt;/FormSelect&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Sizing</BlockTitle>
        <BlockText>Use the <code>size</code> prop to <code>sm</code> or <code>lg</code> for small or large respectively.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="row g-3 align-items-center">
            <div class="col-lg-4">
                <FormSelect size="lg">
                  <FormSelectOption selected>Open this select menu</FormSelectOption>
                  <FormSelectOption value="1">One</FormSelectOption>
                  <FormSelectOption value="2">Two</FormSelectOption>
                  <FormSelectOption value="3">Three</FormSelectOption>
                </FormSelect>
            </div>
            <div class="col-lg-4">
                <FormSelect>
                  <FormSelectOption selected>Open this select menu</FormSelectOption>
                  <FormSelectOption value="1">One</FormSelectOption>
                  <FormSelectOption value="2">Two</FormSelectOption>
                  <FormSelectOption value="3">Three</FormSelectOption>
                </FormSelect>
            </div>
            <div class="col-lg-4">
              <FormSelect size="sm">
                <FormSelectOption selected>Open this select menu</FormSelectOption>
                <FormSelectOption value="1">One</FormSelectOption>
                <FormSelectOption value="2">Two</FormSelectOption>
                <FormSelectOption value="3">Three</FormSelectOption>
              </FormSelect>
            </div>
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;FormSelect&gt;
              &lt;FormSelectOption selected&gt;Open this select menu&lt;/FormSelectOption&gt;
              &lt;FormSelectOption value=&quot;1&quot;&gt;One&lt;/FormSelectOption&gt;
              &lt;FormSelectOption value=&quot;2&quot;&gt;Two&lt;/FormSelectOption&gt;
              &lt;FormSelectOption value=&quot;3&quot;&gt;Three&lt;/FormSelectOption&gt;
          &lt;/FormSelect&gt;
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
import FormSelect from '@/components/forms/select/FormSelect.vue';
import FormSelectOption from '@/components/forms/select/FormSelectOption.vue';
import ChoiceInput from '@/components/choices/ChoiceInput.vue';
import ChoiceSelect from '@/components/choices/ChoiceSelect.vue';
import ChoiceSelectOption from '@/components/choices/ChoiceSelectOption.vue';

export default {
  name: 'SelectPage', 
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
    FormSelect,
    FormSelectOption,
    ChoiceInput,
    ChoiceSelect,
    ChoiceSelectOption
  }
}
</script>
