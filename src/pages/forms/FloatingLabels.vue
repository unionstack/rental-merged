<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Floating labels</BlockTitle>
        <BlockText>Create beautifully simple form labels that float over your input fields.</BlockText>
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
            <div class="col-md-6">
              <FormFloating>
                  <FormInput type="email" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Email address</label>
              </FormFloating>
            </div><!-- .col -->
            <div class="col-md-6">
              <FormFloating>
                  <FormInput type="password" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Password</label>
              </FormFloating>
            </div><!-- .col -->
            <div class="col-md-6">
              <FormFloating tag="form">
                  <FormInput type="email" id="floatingInputValue" placeholder="name@example.com" value="test@example.com"/>
                  <label for="floatingInputValue">Input with value</label>
              </FormFloating>
            </div><!-- .col -->
            <div class="col-md-6">
              <FormFloating tag="form">
                  <FormInput type="email" class="is-invalid" id="floatingInputInvalid" placeholder="name@example.com" value="test@example.com"/>
                  <label for="floatingInputInvalid">Invalid input</label>
              </FormFloating>
            </div><!-- .col -->
            <div class="col-12">
              <FormFloating>
                  <FormTextarea placeholder="Leave a comment here" id="floatingTextarea"></FormTextarea>
                  <label for="floatingTextarea">Comments</label>
              </FormFloating>
            </div><!-- .col -->
          </div>
        </CardBody>
        <CodePreview title="input">
          &lt;FormFloating&gt;
                  &lt;FormInput type=&quot;email&quot; id=&quot;floatingInput&quot; placeholder=&quot;name@example.com&quot;/&gt;
                  &lt;label for=&quot;floatingInput&quot;&gt;Email address&lt;/label&gt;
              &lt;/FormFloating&gt;
        </CodePreview>
        <CodePreview title="textarea">
          &lt;FormFloating&gt;
                  &lt;FormTextarea placeholder=&quot;Leave a comment here&quot; id=&quot;floatingTextarea&quot;&gt;&lt;/FormTextarea&gt;
                  &lt;label for=&quot;floatingTextarea&quot;&gt;Comments&lt;/label&gt;
              &lt;/FormFloating&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Readonly plaintext</BlockTitle>
        <BlockText>Floating labels also support <code>form-control-plaintext</code>, which can be helpful for toggling from an editable input to a plaintext value without affecting the page layout. use <code>FormInputPlaintext</code> component for a input with plaintext</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="gap-g-3">
              <li>
                  <FormFloating>
                      <FormInputPlaintext type="email" readonly id="floatingEmptyPlaintextInput" placeholder="name@example.com"/>
                      <label for="floatingEmptyPlaintextInput">Empty input</label>
                  </FormFloating>
              </li>
              <li>
                  <FormFloating>
                      <FormInputPlaintext type="email" readonly id="floatingPlaintextInput" placeholder="name@example.com" value="name@example.com"/>
                      <label for="floatingPlaintextInput">Input with value</label>
                  </FormFloating>
              </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;FormFloating&gt;
              &lt;FormInputPlaintext type=&quot;email&quot; readonly id=&quot;floatingEmptyPlaintextInput&quot; placeholder=&quot;name@example.com&quot;/&gt;
              &lt;label for=&quot;floatingEmptyPlaintextInput&quot;&gt;Empty input&lt;/label&gt;
          &lt;/FormFloating&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Layout</BlockTitle>
        <BlockText>When working with the Bootstrap grid system, be sure to place form elements within column classes.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="row g-2">
              <div class="col-md">
                  <FormFloating>
                      <FormInput type="email" id="floatingInputGrid" placeholder="name@example.com" value="mdo@example.com"/>
                      <label for="floatingInputGrid">Email address</label>
                  </FormFloating>
              </div>
              <div class="col-md">
                  <FormFloating>
                      <FormSelect id="floatingSelectGrid">
                          <FormSelectOption selected>Open this select menu</FormSelectOption>
                          <FormSelectOption value="1">One</FormSelectOption>
                          <FormSelectOption value="2">Two</FormSelectOption>
                          <FormSelectOption value="3">Three</FormSelectOption>
                      </FormSelect>
                      <label for="floatingSelectGrid">Works with selects</label>
                  </FormFloating>
              </div>
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;div class=&quot;row g-2&quot;&gt;
              &lt;div class=&quot;col-md&quot;&gt;
                  &lt;FormFloating&gt;
                      &lt;FormInput type=&quot;email&quot; id=&quot;floatingInputGrid&quot; placeholder=&quot;name@example.com&quot; value=&quot;mdo@example.com&quot;/&gt;
                      &lt;label for=&quot;floatingInputGrid&quot;&gt;Email address&lt;/label&gt;
                  &lt;/FormFloating&gt;
              &lt;/div&gt;
              &lt;div class=&quot;col-md&quot;&gt;
                  &lt;FormFloating&gt;
                      &lt;FormSelect id=&quot;floatingSelectGrid&quot;&gt;
                          &lt;FormSelectOption selected&gt;Open this select menu&lt;/FormSelectOption&gt;
                          &lt;FormSelectOption value=&quot;1&quot;&gt;One&lt;/FormSelectOption&gt;
                          &lt;FormSelectOption value=&quot;2&quot;&gt;Two&lt;/FormSelectOption&gt;
                          &lt;FormSelectOption value=&quot;3&quot;&gt;Three&lt;/FormSelectOption&gt;
                      &lt;/FormSelect&gt;
                      &lt;label for=&quot;floatingSelectGrid&quot;&gt;Works with selects&lt;/label&gt;
                  &lt;/FormFloating&gt;
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
import FormFloating from '@/components/forms/form-floating/FormFloating.vue';
import FormInput from '@/components/forms/input/FormInput.vue';
import FormTextarea from '@/components/forms/textarea/FormTextarea.vue';
import FormSelect from '@/components/forms/select/FormSelect.vue';
import FormSelectOption from '@/components/forms/select/FormSelectOption.vue';
import FormInputPlaintext from '@/components/forms/input/FormInputPlaintext.vue';

export default {
  name: 'FloatingLabelsPage', 
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
    FormFloating,
    FormInput,
    FormTextarea,
    FormSelect,
    FormSelectOption,
    FormInputPlaintext
  },
}
</script>
