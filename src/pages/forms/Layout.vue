<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Layout</BlockTitle>
        <BlockText>Give your forms some structure—from inline to horizontal to custom grid implementations—with our form layout options.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead class="wide-md">
        <BlockText><strong class="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component. 
        </BlockText>
        <BlockText>How to import component and use see the <a href="#">docs</a></BlockText>
        <BlockTitle>Forms</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
            <ul class="gap g-3">
              <li>
                  <FormLabel for="formGroupExampleInput" class="small">Example label</FormLabel>
                  <FormInput type="text" id="formGroupExampleInput" placeholder="Example input placeholder"/>
              </li>
              <li>
                  <FormLabel for="formGroupExampleInput2" class="small">Another label</FormLabel>
                  <FormInput type="text" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
              </li>
            </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;ul class=&quot;gap g-3&quot;&gt;
              &lt;li&gt;
                  &lt;FormLabel for=&quot;formGroupExampleInput&quot; class=&quot;small&quot;&gt;Example label&lt;/FormLabel&gt;
                  &lt;FormInput type=&quot;text&quot; id=&quot;formGroupExampleInput&quot; placeholder=&quot;Example input placeholder&quot;/&gt;
              &lt;/li&gt;
              &lt;li&gt;
                  &lt;FormLabel for=&quot;formGroupExampleInput2&quot; class=&quot;small&quot;&gt;Another label&lt;/FormLabel&gt;
                  &lt;FormInput type=&quot;text&quot; id=&quot;formGroupExampleInput2&quot; placeholder=&quot;Another input placeholder&quot;/&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Form grid</BlockTitle>
        <BlockText>More complex forms can be built using our grid classes.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
            <div class="row g-gs">
              <div class="col">
                  <FormInput type="text" placeholder="First name"/>
              </div>
              <div class="col">
                  <FormInput type="text" placeholder="Last name"/>
              </div>
            </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;div class=&quot;row g-gs&quot;&gt;
              &lt;div class=&quot;col&quot;&gt;
                  &lt;FormInput type=&quot;text&quot; placeholder=&quot;First name&quot;/&gt;
              &lt;/div&gt;
              &lt;div class=&quot;col&quot;&gt;
                  &lt;FormInput type=&quot;text&quot; placeholder=&quot;Last name&quot;/&gt;
              &lt;/div&gt;
            &lt;/div&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Gutters</BlockTitle>
        <BlockText>
          <code>.g-*</code> classes can be used to control the horizontal gutter widths, for the following example we use a smaller gutter width. <br>
          <span class="text-black">Note:</span> <code>.g-*</code> classes only work with <code>.row</code>.
        </BlockText>
      </BlockHead>
      <Card>
        <CardBody>
            <div class="row g-4">
              <div class="col">
                  <FormInput type="text" placeholder="First name"/>
              </div>
              <div class="col">
                  <FormInput type="text" placeholder="Last name"/>
              </div>
            </div>
            <p class="mt-5">More complex layouts can also be created with the grid system.</p>
            <form class="row g-4">
                <div class="col-md-6">
                    <FormLabel for="inputEmail4" class="small">Email</FormLabel>
                    <FormInput type="email" id="inputEmail4"/>
                </div>
                <div class="col-md-6">
                    <FormLabel for="inputPassword4" class="small">Password</FormLabel>
                    <FormInput type="password" id="inputPassword4"/>
                </div>
                <div class="col-12">
                    <FormLabel for="inputAddress" class="small">Address</FormLabel>
                    <FormInput type="text" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div class="col-12">
                    <FormLabel for="inputAddress2" class="small">Address 2</FormLabel>
                    <FormInput type="text" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div class="col-md-6">
                    <FormLabel for="inputCity" class="small">City</FormLabel>
                    <FormInput type="text" id="inputCity"/>
                </div>
                <div class="col-md-4">
                    <FormLabel for="inputState" class="small">State</FormLabel>
                    <FormSelect id="inputState">
                        <FormSelectOption selected>Choose...</FormSelectOption>
                        <FormSelectOption>...</FormSelectOption>
                    </FormSelect>
                </div>
                <div class="col-md-2">
                    <FormLabel for="inputZip" class="small">Zip</FormLabel>
                    <FormInput type="text" id="inputZip"/>
                </div>
                <div class="col-12">
                    <FormCheck>
                        <FormCheckInput type="checkbox" id="gridCheck"/>
                        <FormCheckLabel for="gridCheck">Check me out</FormCheckLabel>
                    </FormCheck>
                </div>
                <div class="col-12">
                    <Button type="submit" variant="primary">Sign in</Button>
                </div>
            </form>
        </CardBody>
        <CodePreview title="code example">
          &lt;form class=&quot;row g-4&quot;&gt;
                &lt;div class=&quot;col-md-6&quot;&gt;
                    &lt;FormLabel for=&quot;inputEmail4&quot; class=&quot;small&quot;&gt;Email&lt;/FormLabel&gt;
                    &lt;FormInput type=&quot;email&quot; id=&quot;inputEmail4&quot;/&gt;
                &lt;/div&gt;
                &lt;div class=&quot;col-md-6&quot;&gt;
                    &lt;FormLabel for=&quot;inputPassword4&quot; class=&quot;small&quot;&gt;Password&lt;/FormLabel&gt;
                    &lt;FormInput type=&quot;password&quot; id=&quot;inputPassword4&quot;/&gt;
                &lt;/div&gt;
                &lt;div class=&quot;col-12&quot;&gt;
                    &lt;FormLabel for=&quot;inputAddress&quot; class=&quot;small&quot;&gt;Address&lt;/FormLabel&gt;
                    &lt;FormInput type=&quot;text&quot; id=&quot;inputAddress&quot; placeholder=&quot;1234 Main St&quot;/&gt;
                &lt;/div&gt;
                &lt;div class=&quot;col-12&quot;&gt;
                    &lt;FormLabel for=&quot;inputAddress2&quot; class=&quot;small&quot;&gt;Address 2&lt;/FormLabel&gt;
                    &lt;FormInput type=&quot;text&quot; id=&quot;inputAddress2&quot; placeholder=&quot;Apartment, studio, or floor&quot;/&gt;
                &lt;/div&gt;
                &lt;div class=&quot;col-md-6&quot;&gt;
                    &lt;FormLabel for=&quot;inputCity&quot; class=&quot;small&quot;&gt;City&lt;/FormLabel&gt;
                    &lt;FormInput type=&quot;text&quot; id=&quot;inputCity&quot;/&gt;
                &lt;/div&gt;
                &lt;div class=&quot;col-md-4&quot;&gt;
                    &lt;FormLabel for=&quot;inputState&quot; class=&quot;small&quot;&gt;State&lt;/FormLabel&gt;
                    &lt;FormSelect id=&quot;inputState&quot;&gt;
                        &lt;FormSelectOption selected&gt;Choose...&lt;/FormSelectOption&gt;
                        &lt;FormSelectOption&gt;...&lt;/FormSelectOption&gt;
                    &lt;/FormSelect&gt;
                &lt;/div&gt;
                &lt;div class=&quot;col-md-2&quot;&gt;
                    &lt;FormLabel for=&quot;inputZip&quot; class=&quot;small&quot;&gt;Zip&lt;/FormLabel&gt;
                    &lt;FormInput type=&quot;text&quot; id=&quot;inputZip&quot;/&gt;
                &lt;/div&gt;
                &lt;div class=&quot;col-12&quot;&gt;
                    &lt;FormCheck&gt;
                        &lt;FormCheckInput type=&quot;checkbox&quot; id=&quot;gridCheck&quot;/&gt;
                        &lt;FormCheckLabel for=&quot;gridCheck&quot;&gt;Check me out&lt;/FormCheckLabel&gt;
                    &lt;/FormCheck&gt;
                &lt;/div&gt;
                &lt;div class=&quot;col-12&quot;&gt;
                    &lt;Button type=&quot;submit&quot; variant=&quot;primary&quot;&gt;Sign in&lt;/Button&gt;
                &lt;/div&gt;
            &lt;/form&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Horizontal form</BlockTitle>
        <BlockText>Create horizontal forms with the grid by adding the <code>.row</code> class to form groups and using the <code>.col-*-*</code> classes to specify the width of your labels and controls. Be sure to add <code>.col-form-label</code> to your <code>label</code>s as well so they’re vertically centered with their associated form controls.</BlockText>
        <BlockText>At times, you maybe need to use margin or padding utilities to create that perfect alignment you need. For example, we’ve removed the <code>padding-top</code> on our stacked radio inputs label to better align the text baseline.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
            <form>
              <div class="row mb-3">
                  <ColFormLabel for="inputEmail3" class="col-sm-2">Email</ColFormLabel>
                  <div class="col-sm-10">
                      <FormInput type="email" id="inputEmail3"/>
                  </div>
              </div>
              <div class="row mb-3">
                  <ColFormLabel for="inputPassword3" class="col-sm-2">Password</ColFormLabel>
                  <div class="col-sm-10">
                      <FormInput type="password" id="inputPassword3"/>
                  </div>
              </div>
              <fieldset class="row mb-3">
                  <ColFormLabel tag="legend" class="col-sm-2 pt-0">Radios</ColFormLabel>
                  <div class="col-sm-10">
                      <FormCheck>
                          <FormCheckInput type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                          <FormCheckLabel for="gridRadios1">
                              First radio
                          </FormCheckLabel>
                      </FormCheck>
                      <FormCheck>
                          <FormCheckInput type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                          <FormCheckLabel for="gridRadios2">
                              Second radio
                          </FormCheckLabel>
                      </FormCheck>
                      <FormCheck class="disabled">
                          <FormCheckInput type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled/>
                          <FormCheckLabel for="gridRadios3">
                              Third disabled radio
                          </FormCheckLabel>
                      </FormCheck>
                  </div>
              </fieldset>
              <div class="row mb-3">
                  <div class="col-sm-10 offset-sm-2">
                      <FormCheck>
                          <FormCheckInput type="checkbox" id="gridCheck1"/>
                          <FormCheckLabel for="gridCheck1">
                              Example checkbox
                          </FormCheckLabel>
                      </FormCheck>
                  </div>
              </div>
              <Button type="submit" variant="primary">Sign in</Button>
            </form>
        </CardBody>
        <CodePreview title="code example">
          &lt;form&gt;
              &lt;div class=&quot;row mb-3&quot;&gt;
                  &lt;ColFormLabel for=&quot;inputEmail3&quot; class=&quot;col-sm-2&quot;&gt;Email&lt;/ColFormLabel&gt;
                  &lt;div class=&quot;col-sm-10&quot;&gt;
                      &lt;FormInput type=&quot;email&quot; id=&quot;inputEmail3&quot;/&gt;
                  &lt;/div&gt;
              &lt;/div&gt;
              &lt;div class=&quot;row mb-3&quot;&gt;
                  &lt;ColFormLabel for=&quot;inputPassword3&quot; class=&quot;col-sm-2&quot;&gt;Password&lt;/ColFormLabel&gt;
                  &lt;div class=&quot;col-sm-10&quot;&gt;
                      &lt;FormInput type=&quot;password&quot; id=&quot;inputPassword3&quot;/&gt;
                  &lt;/div&gt;
              &lt;/div&gt;
              &lt;fieldset class=&quot;row mb-3&quot;&gt;
                  &lt;ColFormLabel tag=&quot;legend&quot; class=&quot;col-sm-2 pt-0&quot;&gt;Radios&lt;/ColFormLabel&gt;
                  &lt;div class=&quot;col-sm-10&quot;&gt;
                      &lt;FormCheck&gt;
                          &lt;FormCheckInput type=&quot;radio&quot; name=&quot;gridRadios&quot; id=&quot;gridRadios1&quot; value=&quot;option1&quot; checked/&gt;
                          &lt;FormCheckLabel for=&quot;gridRadios1&quot;&gt;
                              First radio
                          &lt;/FormCheckLabel&gt;
                      &lt;/FormCheck&gt;
                      &lt;FormCheck&gt;
                          &lt;FormCheckInput type=&quot;radio&quot; name=&quot;gridRadios&quot; id=&quot;gridRadios2&quot; value=&quot;option2&quot;/&gt;
                          &lt;FormCheckLabel for=&quot;gridRadios2&quot;&gt;
                              Second radio
                          &lt;/FormCheckLabel&gt;
                      &lt;/FormCheck&gt;
                      &lt;FormCheck class=&quot;disabled&quot;&gt;
                          &lt;FormCheckInput type=&quot;radio&quot; name=&quot;gridRadios&quot; id=&quot;gridRadios3&quot; value=&quot;option3&quot; disabled/&gt;
                          &lt;FormCheckLabel for=&quot;gridRadios3&quot;&gt;
                              Third disabled radio
                          &lt;/FormCheckLabel&gt;
                      &lt;/FormCheck&gt;
                  &lt;/div&gt;
              &lt;/fieldset&gt;
              &lt;div class=&quot;row mb-3&quot;&gt;
                  &lt;div class=&quot;col-sm-10 offset-sm-2&quot;&gt;
                      &lt;FormCheck&gt;
                          &lt;FormCheckInput type=&quot;checkbox&quot; id=&quot;gridCheck1&quot;/&gt;
                          &lt;FormCheckLabel for=&quot;gridCheck1&quot;&gt;
                              Example checkbox
                          &lt;/FormCheckLabel&gt;
                      &lt;/FormCheck&gt;
                  &lt;/div&gt;
              &lt;/div&gt;
              &lt;Button type=&quot;submit&quot; variant=&quot;primary&quot;&gt;Sign in&lt;/Button&gt;
            &lt;/form&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Horizontal form label sizing</BlockTitle>
        <BlockText>Be sure to use size prop to <code>sm</code> or <code>lg</code> to your label's or legend's to correctly follow the size of form-control's <code>sm</code> and <code>lg</code>.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
            <div class="row mb-3">
              <ColFormLabel for="colFormLabelSm" class="col-sm-2" size="sm">Email</ColFormLabel>
              <div class="col-sm-10">
                  <FormInput type="email" size="sm" id="colFormLabelSm" placeholder="Enter your email"/>
              </div>
            </div>
            <div class="row mb-3">
                <ColFormLabel for="colFormLabel" class="col-sm-2">Email</ColFormLabel>
                <div class="col-sm-10">
                    <FormInput type="email" id="colFormLabel" placeholder="Enter your email"/>
                </div>
            </div>
            <div class="row">
                <ColFormLabel for="colFormLabelLg" class="col-sm-2" size="lg">Email</ColFormLabel>
                <div class="col-sm-10">
                    <FormInput type="email" size="lg" id="colFormLabelLg" placeholder="Enter your email"/>
                </div>
            </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;div class=&quot;row mb-3&quot;&gt;
              &lt;ColFormLabel for=&quot;colFormLabelSm&quot; class=&quot;col-sm-2&quot; size=&quot;sm&quot;&gt;Email&lt;/ColFormLabel&gt;
              &lt;div class=&quot;col-sm-10&quot;&gt;
                  &lt;FormInput type=&quot;email&quot; size=&quot;sm&quot; id=&quot;colFormLabelSm&quot; placeholder=&quot;Enter your email&quot;/&gt;
              &lt;/div&gt;
            &lt;/div&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Column sizing</BlockTitle>
        <BlockText>As shown in the previous examples, our grid system allows you to place any number of <code>.cols</code> within a <code>.row</code>.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
            <div class="row g-3">
              <div class="col-sm-7">
                  <FormInput type="text" placeholder="City"/>
              </div>
              <div class="col-sm">
                  <FormInput type="text" placeholder="State"/>
              </div>
              <div class="col-sm">
                  <FormInput type="text" placeholder="Zip"/>
              </div>
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;div class=&quot;row g-3&quot;&gt;
              &lt;div class=&quot;col-sm-7&quot;&gt;
                  &lt;FormInput type=&quot;text&quot; placeholder=&quot;City&quot;/&gt;
              &lt;/div&gt;
              &lt;div class=&quot;col-sm&quot;&gt;
                  &lt;FormInput type=&quot;text&quot; placeholder=&quot;State&quot;/&gt;
              &lt;/div&gt;
              &lt;div class=&quot;col-sm&quot;&gt;
                  &lt;FormInput type=&quot;text&quot; placeholder=&quot;Zip&quot;/&gt;
              &lt;/div&gt;
          &lt;/div&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Auto-sizing</BlockTitle>
        <BlockText>The example below uses a flexbox utility to vertically center the contents and changes <code>.col</code> to <code>.col-auto</code> so that your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <form>
              <div class="row gy-2 gx-3 align-items-center">
                  <div class="col-auto">
                      <FormInput type="text" id="autoSizingInput" placeholder="Jane Doe"/>
                  </div>
                  <div class="col-auto">
                      <div class="input-group">
                          <InputGroupText tag="div">@</InputGroupText>
                          <FormInput type="text" id="autoSizingInputGroup" placeholder="Username"/>
                      </div>
                  </div>
                  <div class="col-auto">
                      <FormSelect>
                          <FormSelectOption selected>Choose...</FormSelectOption>
                          <FormSelectOption value="1">One</FormSelectOption>
                          <FormSelectOption value="2">Two</FormSelectOption>
                          <FormSelectOption value="3">Three</FormSelectOption>
                      </FormSelect>
                  </div>
                  <div class="col-auto">
                      <FormCheck>
                          <FormCheckInput type="checkbox" id="autoSizingCheck"/>
                          <FormCheckLabel for="autoSizingCheck">
                              Remember me
                          </FormCheckLabel>
                      </FormCheck>
                  </div>
                  <div class="col-auto">
                      <Button type="submit" variant="primary">Submit</Button>
                  </div>
              </div>
          </form>
        </CardBody>
        <CodePreview title="code example">
          &lt;form&gt;
              &lt;div class=&quot;row gy-2 gx-3 align-items-center&quot;&gt;
                  &lt;div class=&quot;col-auto&quot;&gt;
                      &lt;FormInput type=&quot;text&quot; id=&quot;autoSizingInput&quot; placeholder=&quot;Jane Doe&quot;/&gt;
                  &lt;/div&gt;
                  &lt;div class=&quot;col-auto&quot;&gt;
                      &lt;div class=&quot;input-group&quot;&gt;
                          &lt;InputGroupText tag=&quot;div&quot;&gt;@&lt;/InputGroupText&gt;
                          &lt;FormInput type=&quot;text&quot; id=&quot;autoSizingInputGroup&quot; placeholder=&quot;Username&quot;/&gt;
                      &lt;/div&gt;
                  &lt;/div&gt;
                  &lt;div class=&quot;col-auto&quot;&gt;
                      &lt;FormSelect&gt;
                          &lt;FormSelectOption selected&gt;Choose...&lt;/FormSelectOption&gt;
                          &lt;FormSelectOption value=&quot;1&quot;&gt;One&lt;/FormSelectOption&gt;
                          &lt;FormSelectOption value=&quot;2&quot;&gt;Two&lt;/FormSelectOption&gt;
                          &lt;FormSelectOption value=&quot;3&quot;&gt;Three&lt;/FormSelectOption&gt;
                      &lt;/FormSelect&gt;
                  &lt;/div&gt;
                  &lt;div class=&quot;col-auto&quot;&gt;
                      &lt;FormCheck&gt;
                          &lt;FormCheckInput type=&quot;checkbox&quot; id=&quot;autoSizingCheck&quot;/&gt;
                          &lt;FormCheckLabel for=&quot;autoSizingCheck&quot;&gt;
                              Remember me
                          &lt;/FormCheckLabel&gt;
                      &lt;/FormCheck&gt;
                  &lt;/div&gt;
                  &lt;div class=&quot;col-auto&quot;&gt;
                      &lt;Button type=&quot;submit&quot; variant=&quot;primary&quot;&gt;Submit&lt;/Button&gt;
                  &lt;/div&gt;
              &lt;/div&gt;
          &lt;/form&gt;
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
import FormInput from '@/components/forms/input/FormInput.vue';
import FormSelect from '@/components/forms/select/FormSelect.vue';
import FormSelectOption from '@/components/forms/select/FormSelectOption.vue';
import FormLabel from '@/components/forms/form-label/FormLabel.vue';
import FormCheck from '@/components/forms/form-check/FormCheck.vue';
import FormCheckInput from '@/components/forms/form-check/FormCheckInput.vue';
import FormCheckLabel from '@/components/forms/form-check/FormCheckLabel.vue';
import Button from '@/components/uielements/button/Button.vue';
import ColFormLabel from '@/components/forms/form-label/ColFormLabel.vue';
import InputGroupText from '@/components/forms/input-group/InputGroupText.vue';

export default {
  name: 'LayoutPage', 
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
    FormInput,
    FormSelect,
    FormSelectOption,
    FormLabel,
    FormCheck,
    FormCheckInput,
    FormCheckLabel,
    Button,
    ColFormLabel,
    InputGroupText
  },
}
</script>
