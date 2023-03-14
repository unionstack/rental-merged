<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Form controls</BlockTitle>
        <BlockText>Give textual form controls like input and textarea an upgrade with custom styles, sizing, focus states, and more.</BlockText>
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
          <div class="row g-3 gx-gs">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="exampleFormControlInputText1" class="form-label">Input text</label>
                        <div class="form-control-wrap">
                            <FormInput type="text" class="form-control" id="exampleFormControlInputText1" placeholder="Input text placeholder" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="exampleFormControlInputText2" class="form-label">Input with hint</label>
                        <div class="form-control-wrap">
                            <div class="form-control-hint"><span>hint</span></div>
                            <FormInput type="text" class="form-control" id="exampleFormControlInputText2" placeholder="Input text placeholder" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="exampleFormControlInputText3" class="form-label">Input with start icon</label>
                        <div class="form-control-wrap">
                            <div class="form-control-icon start"><em class="icon ni ni-eye"></em></div>
                            <FormInput type="text" class="form-control" id="exampleFormControlInputText3" placeholder="Input text placeholder" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="exampleFormControlInputText4" class="form-label">Input with end icon</label>
                        <div class="form-control-wrap">
                            <div class="form-control-icon end"><em class="icon ni ni-eye"></em></div>
                            <FormInput type="text" class="form-control" id="exampleFormControlInputText4" placeholder="Input text placeholder" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="exampleFormControlInputText5" class="form-label">Default Select</label>
                        <div class="form-control-wrap">
                            <FormSelect id="exampleFormControlInputText5">
                                <FormSelectOption selected>Open this select menu</FormSelectOption>
                                <FormSelectOption value="1">One</FormSelectOption>
                                <FormSelectOption value="2">Two</FormSelectOption>
                                <FormSelectOption value="3">Three</FormSelectOption>
                            </FormSelect>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="exampleFormControlInputText6" class="form-label">Default file input example</label>
                        <div class="form-control-wrap">
                            <input class="form-control" type="file" id="exampleFormControlInputText6">
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="exampleFormControlInputText7" class="form-label">Multiple Select</label>
                        <div class="form-control-wrap">
                            <FormSelect id="exampleFormControlInputText7" multiple>
                              <FormSelectOption selected>Open this select menu</FormSelectOption>
                              <FormSelectOption value="1">One</FormSelectOption>
                              <FormSelectOption value="2">Two</FormSelectOption>
                              <FormSelectOption value="3">Three</FormSelectOption>
                            </FormSelect>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea8" class="form-label">Example textarea</label>
                        <div class="form-control-wrap">
                            <FormTextarea placeholder="Textarea Placeholder" class="form-control" id="exampleFormControlTextarea8" rows="3"></FormTextarea>
                        </div>
                    </div>
                </div>
            </div>
        </CardBody>
        <CodePreview title="input basic">
          &lt;div class=&quot;form-control-wrap&quot;&gt;
              &lt;FormInput type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;exampleFormControlInputText1&quot; placeholder=&quot;Input text placeholder&quot; /&gt;
          &lt;/div&gt;
        </CodePreview>
        <CodePreview title="input hint">
          &lt;div class=&quot;form-control-wrap&quot;&gt;
              &lt;div class=&quot;form-control-hint&quot;&gt;&lt;span&gt;hint&lt;/span&gt;&lt;/div&gt;
              &lt;FormInput type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;exampleFormControlInputText2&quot; placeholder=&quot;Input text placeholder&quot; /&gt;
          &lt;/div&gt;
        </CodePreview>
        <CodePreview title="input with start icon">
          &lt;div class=&quot;form-control-wrap&quot;&gt;
              &lt;div class=&quot;form-control-icon start&quot;&gt;&lt;em class=&quot;icon ni ni-eye&quot;&gt;&lt;/em&gt;&lt;/div&gt;
              &lt;FormInput type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;exampleFormControlInputText3&quot; placeholder=&quot;Input text placeholder&quot; /&gt;
          &lt;/div&gt;
        </CodePreview>
        <CodePreview title="input with end icon">
          &lt;div class=&quot;form-control-wrap&quot;&gt;
              &lt;div class=&quot;form-control-icon end&quot;&gt;&lt;em class=&quot;icon ni ni-eye&quot;&gt;&lt;/em&gt;&lt;/div&gt;
              &lt;FormInput type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;exampleFormControlInputText4&quot; placeholder=&quot;Input text placeholder&quot; /&gt;
          &lt;/div&gt;
        </CodePreview>
        <CodePreview title="default select">
          &lt;div class=&quot;form-control-wrap&quot;&gt;
              &lt;FormSelect id=&quot;exampleFormControlInputText5&quot;&gt;
                  &lt;FormSelectOption selected&gt;Open this select menu&lt;/FormSelectOption&gt;
                  &lt;FormSelectOption value=&quot;1&quot;&gt;One&lt;/FormSelectOption&gt;
                  &lt;FormSelectOption value=&quot;2&quot;&gt;Two&lt;/FormSelectOption&gt;
                  &lt;FormSelectOption value=&quot;3&quot;&gt;Three&lt;/FormSelectOption&gt;
              &lt;/FormSelect&gt;
          &lt;/div&gt;
        </CodePreview>
        <CodePreview title="default file input">
          &lt;div class=&quot;form-control-wrap&quot;&gt;
              &lt;input class=&quot;form-control&quot; type=&quot;file&quot;&gt;
          &lt;/div&gt;
        </CodePreview>
        <CodePreview title="multiple select">
          &lt;div class=&quot;form-control-wrap&quot;&gt;
              &lt;FormSelect id=&quot;exampleFormControlInputText7&quot; multiple&gt;
                &lt;FormSelectOption selected&gt;Open this select menu&lt;/FormSelectOption&gt;
                &lt;FormSelectOption value=&quot;1&quot;&gt;One&lt;/FormSelectOption&gt;
                &lt;FormSelectOption value=&quot;2&quot;&gt;Two&lt;/FormSelectOption&gt;
                &lt;FormSelectOption value=&quot;3&quot;&gt;Three&lt;/FormSelectOption&gt;
              &lt;/FormSelect&gt;
          &lt;/div&gt;
        </CodePreview>
        <CodePreview title="textarea">
          &lt;div class=&quot;form-control-wrap&quot;&gt;
              &lt;FormTextarea placeholder=&quot;Textarea Placeholder&quot; class=&quot;form-control&quot; id=&quot;exampleFormControlTextarea8&quot; rows=&quot;3&quot;&gt;&lt;/FormTextarea&gt;
          &lt;/div&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Sizing</BlockTitle>
        <BlockText>Set heights using the <code>size</code> prop to <code>sm</code> or <code>lg</code> for small or large respectively.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="gap g-2">
              <li>
                  <FormInput size="sm" type="text" placeholder="Small"/>
              </li>
              <li>
                  <FormInput type="text" placeholder="Default"/>
              </li>
              <li>
                  <FormInput size="lg" type="text" placeholder="Large"/>
              </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;FormInput size=&quot;sm&quot; type=&quot;text&quot; placeholder=&quot;Small&quot;/&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Disabled</BlockTitle>
        <BlockText>Add the <code>disabled</code> boolean attribute on an input to give it a grayed out appearance and remove pointer events.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="gap g-2">
              <li>
                  <FormInput type="text" placeholder="Disabled input" disabled/>
              </li>
              <li>
                  <FormInput type="text" value="Disabled readonly input" disabled readonly/>
              </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;FormInput type=&quot;text&quot; placeholder=&quot;Disabled input&quot; disabled/&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Readonly</BlockTitle>
        <BlockText>Add the <code>readonly</code> boolean attribute on an input to prevent modification of the input’s value.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <FormInput type="text" value="Readonly input here..." readonly/>
        </CardBody>
        <CodePreview title="code example">
          &lt;FormInput type=&quot;text&quot; value=&quot;Readonly input here...&quot; readonly/&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Readonly plain text</BlockTitle>
        <BlockText>If you want to have <code>input readonly</code> elements in your form styled as plain text, use the <code>.form-control-plaintext</code> class to remove the default form field styling and preserve the correct margin and padding.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="mb-3 row">
              <label for="staticEmail" class="col-lg-2 col-form-label">Email</label>
              <div class="col-lg-10">
                  <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
              </div>
          </div>
          <div class="mb-3 row">
              <label for="inputPassword" class="col-lg-2 col-form-label">Password</label>
              <div class="col-lg-10">
                  <FormInput type="password" id="inputPassword"/>
              </div>
          </div>
          <form>
              <div class="row g-gs">
                  <div class="col-lg-2">
                      <label for="staticEmail2" class="visually-hidden">Email</label>
                      <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
                  </div>
                  <div class="col-lg-4">
                      <label for="inputPassword2" class="visually-hidden">Password</label>
                      <FormInput type="password" id="inputPassword2" placeholder="Password"/>
                  </div>
                  <div class="col-auto">
                      <Button type="submit" variant="primary" class="mb-3">Confirm identity</Button>
                  </div>
              </div>
          </form>
        </CardBody>
        <CodePreview title="code example">
          &lt;div class=&quot;mb-3 row&quot;&gt;
              &lt;label for=&quot;staticEmail&quot; class=&quot;col-lg-2 col-form-label&quot;&gt;Email&lt;/label&gt;
              &lt;div class=&quot;col-lg-10&quot;&gt;
                  &lt;input type=&quot;text&quot; readonly class=&quot;form-control-plaintext&quot; id=&quot;staticEmail&quot; value=&quot;email@example.com&quot;&gt;
              &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class=&quot;mb-3 row&quot;&gt;
              &lt;label for=&quot;inputPassword&quot; class=&quot;col-lg-2 col-form-label&quot;&gt;Password&lt;/label&gt;
              &lt;div class=&quot;col-lg-10&quot;&gt;
                  &lt;FormInput type=&quot;password&quot; id=&quot;inputPassword&quot;/&gt;
              &lt;/div&gt;
          &lt;/div&gt;
          &lt;form&gt;
              &lt;div class=&quot;row g-gs&quot;&gt;
                  &lt;div class=&quot;col-lg-2&quot;&gt;
                      &lt;label for=&quot;staticEmail2&quot; class=&quot;visually-hidden&quot;&gt;Email&lt;/label&gt;
                      &lt;input type=&quot;text&quot; readonly class=&quot;form-control-plaintext&quot; id=&quot;staticEmail2&quot; value=&quot;email@example.com&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class=&quot;col-lg-4&quot;&gt;
                      &lt;label for=&quot;inputPassword2&quot; class=&quot;visually-hidden&quot;&gt;Password&lt;/label&gt;
                      &lt;FormInput type=&quot;password&quot; id=&quot;inputPassword2&quot; placeholder=&quot;Password&quot;/&gt;
                  &lt;/div&gt;
                  &lt;div class=&quot;col-auto&quot;&gt;
                      &lt;Button type=&quot;submit&quot; variant=&quot;primary&quot; class=&quot;mb-3&quot;&gt;Confirm identity&lt;/Button&gt;
                  &lt;/div&gt;
              &lt;/div&gt;
          &lt;/form&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Datalists</BlockTitle>
        <BlockText>Datalists allow you to create a group of <code>option</code>s that can be accessed (and autocompleted) from within an <code>input</code>. These are similar to <code>select</code> elements, but come with more menu styling limitations and differences. While most browsers and operating systems include some support for <code>datalist</code> elements, their styling is inconsistent at best.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <label for="exampleDataList" class="form-label">Datalist example</label>
          <FormInput list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
          <Datalist id="datalistOptions">
              <DatalistOption value="San Francisco"/>
              <DatalistOption value="New York"/>
              <DatalistOption value="Seattle"/>
              <DatalistOption value="Los Angeles"/>
              <DatalistOption value="Chicago"/>
          </Datalist>
        </CardBody>
        <CodePreview title="code example">
          &lt;FormInput list=&quot;datalistOptions&quot; id=&quot;exampleDataList&quot; placeholder=&quot;Type to search...&quot;/&gt;
          &lt;Datalist id=&quot;datalistOptions&quot;&gt;
              &lt;DatalistOption value=&quot;San Francisco&quot;/&gt;
              &lt;DatalistOption value=&quot;New York&quot;/&gt;
              &lt;DatalistOption value=&quot;Seattle&quot;/&gt;
              &lt;DatalistOption value=&quot;Los Angeles&quot;/&gt;
              &lt;DatalistOption value=&quot;Chicago&quot;/&gt;
          &lt;/Datalist&gt;
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
import FormInput from '@/components/forms/input/FormInput.vue';
import FormTextarea from '@/components/forms/textarea/FormTextarea.vue';
import Datalist from '@/components/forms/datalist/Datalist.vue';
import DatalistOption from '@/components/forms/datalist/DatalistOption.vue';
import FormSelect from '@/components/forms/select/FormSelect.vue';
import FormSelectOption from '@/components/forms/select/FormSelectOption.vue';

export default {
  name: 'FormControlPage', 
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
    FormInput,
    FormTextarea,
    Datalist,
    DatalistOption,
    FormSelect,
    FormSelectOption
  },
}
</script>
