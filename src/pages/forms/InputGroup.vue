<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head wide-md">
      <BlockHeadContent>
        <BlockTitle tag="h1">Input group</BlockTitle>
        <BlockText>Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.</BlockText>
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
          <ul class="gap g-3">
              <li>
                  <InputGroup>
                      <InputGroupText id="basic-addon1">@</InputGroupText>
                      <FormInput type="text" placeholder="Username" aria-describedby="basic-addon1"/>
                  </InputGroup>
              </li>
              <li>
                  <InputGroup>
                      <FormInput type="text" placeholder="Recipient's username" aria-describedby="basic-addon2"/>
                      <InputGroupText id="basic-addon2">@example.com</InputGroupText>
                  </InputGroup>
              </li>
              <li>
                  <FormLabel for="basic-url" class="small">Your vanity URL</FormLabel>
                  <InputGroup>
                      <InputGroupText id="basic-addon3">https://example.com/users/</InputGroupText>
                      <FormInput type="text" id="basic-url" aria-describedby="basic-addon3"/>
                  </InputGroup>
              </li>
              <li>
                  <InputGroup>
                      <InputGroupText>$</InputGroupText>
                      <FormInput type="text"/>
                      <InputGroupText>.00</InputGroupText>
                  </InputGroup>
              </li>
              <li>
                  <InputGroup>
                      <FormInput type="text" placeholder="Username"/>
                      <InputGroupText>@</InputGroupText>
                      <FormInput type="text" placeholder="Server" aria-label="Server"/>
                  </InputGroup>
              </li>
              <li>
                  <InputGroup>
                      <InputGroupText>With textarea</InputGroupText>
                      <FormTextarea></FormTextarea>
                  </InputGroup>
              </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;InputGroup&gt;
            &lt;InputGroupText id=&quot;basic-addon1&quot;&gt;@&lt;/InputGroupText&gt;
            &lt;FormInput type=&quot;text&quot; placeholder=&quot;Username&quot;/&gt;
          &lt;/InputGroup&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Sizing</BlockTitle>
        <BlockText>Set height using the <code>size</code> prop to <code>sm</code> or <code>lg</code> for small or large respectively. </BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="gap g-3">
              <li>
                  <InputGroup size="sm">
                      <InputGroupText id="inputGroup-sizing-sm">Small</InputGroupText>
                      <FormInput type="text" aria-describedby="inputGroup-sizing-sm"/>
                  </InputGroup>
              </li>
              <li>
                  <InputGroup>
                      <InputGroupText id="inputGroup-sizing-default">Default</InputGroupText>
                      <FormInput type="text" aria-describedby="inputGroup-sizing-default"/>
                  </InputGroup>
              </li>
              <li>
                  <InputGroup size="lg">
                      <InputGroupText id="inputGroup-sizing-lg">Large</InputGroupText>
                      <FormInput type="text" aria-describedby="inputGroup-sizing-lg"/>
                  </InputGroup>
              </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;InputGroup size=&quot;sm&quot;&gt;
            &lt;InputGroupText id=&quot;inputGroup-sizing-sm&quot;&gt;Small&lt;/InputGroupText&gt;
            &lt;FormInput type=&quot;text&quot; aria-describedby=&quot;inputGroup-sizing-sm&quot;/&gt;
          &lt;/InputGroup&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Checkboxes and radios</BlockTitle>
        <BlockText>Place any checkbox or radio option within an input group’s addon instead of text. We recommend adding <code>.mt-0</code> to the <code>form-check-input</code> when there’s no visible text next to the input.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="gap g-3">
              <li>
                  <InputGroup>
                      <InputGroupText tag="div">
                          <FormCheckInput class="mt-0" type="checkbox" value=""/>
                      </InputGroupText>
                      <FormInput type="text"/>
                  </InputGroup>
              </li>
              <li>
                  <InputGroup>
                      <InputGroupText tag="div">
                          <FormCheckInput class="mt-0" type="radio" value=""/>
                      </InputGroupText>
                      <FormInput type="text"/>
                  </InputGroup>
              </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;InputGroup&gt;
              &lt;InputGroupText tag=&quot;div&quot;&gt;
                  &lt;FormCheckInput class=&quot;mt-0&quot; type=&quot;checkbox&quot; value=&quot;&quot;/&gt;
              &lt;/InputGroupText&gt;
              &lt;FormInput type=&quot;text&quot;/&gt;
          &lt;/InputGroup&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Multiple inputs</BlockTitle>
        <BlockText>While multiple inputs are supported visually, validation styles are only available for input groups with a single input.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <InputGroup>
              <InputGroupText>First and last name</InputGroupText>
              <FormInput type="text" aria-label="First name"/>
              <FormInput type="text" aria-label="Last name"/>
          </InputGroup>
        </CardBody>
        <CodePreview title="code example">
          &lt;InputGroup&gt;
              &lt;InputGroupText&gt;First and last name&lt;/InputGroupText&gt;
              &lt;FormInput type=&quot;text&quot; aria-label=&quot;First name&quot;/&gt;
              &lt;FormInput type=&quot;text&quot; aria-label=&quot;Last name&quot;/&gt;
          &lt;/InputGroup&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Multiple addons</BlockTitle>
        <BlockText>Multiple add-ons are supported and can be mixed with checkbox and radio input versions.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="gap g-3">
              <li>
                  <InputGroup>
                      <InputGroupText>$</InputGroupText>
                      <InputGroupText>0.00</InputGroupText>
                      <FormInput type="text"/>
                  </InputGroup>
              </li>
              <li>
                  <InputGroup>
                      <FormInput type="text"/>
                      <InputGroupText>$</InputGroupText>
                      <InputGroupText>0.00</InputGroupText>
                  </InputGroup>
              </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;InputGroup&gt;
              &lt;InputGroupText&gt;$&lt;/InputGroupText&gt;
              &lt;InputGroupText&gt;0.00&lt;/InputGroupText&gt;
              &lt;FormInput type=&quot;text&quot;/&gt;
          &lt;/InputGroup&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Button addons and dropdowns</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="gap g-3">
              <li>
                  <InputGroup>
                      <Button variant="outline-primary" type="button" id="button-addon1">Button</Button>
                      <FormInput type="text" aria-describedby="button-addon1"/>
                  </InputGroup>
              </li>
              <li>
                  <InputGroup>
                      <FormInput type="text" placeholder="Recipient's username" aria-describedby="button-addon2"/>
                      <Button variant="outline-primary" type="button" id="button-addon2">Button</Button>
                  </InputGroup>
              </li>
              <li>
                  <InputGroup>
                      <Button variant="outline-primary" type="button">Button</Button>
                      <Button variant="outline-primary" type="button">Button</Button>
                      <FormInput type="text"/>
                  </InputGroup>
              </li>
              <li>
                  <InputGroup>
                      <FormInput type="text" placeholder="Recipient's username"/>
                      <Button variant="outline-primary" type="button">Button</Button>
                      <Button variant="outline-primary" type="button">Button</Button>
                  </InputGroup>
              </li>
              <li>
                  <InputGroup>
                      <Button variant="outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">Dropdown</Button>
                      <DropdownMenu>
                          <DropdownItem><DropdownLink href="#">Action</DropdownLink></DropdownItem>
                          <DropdownItem><DropdownLink href="#">Another action</DropdownLink></DropdownItem>
                          <DropdownItem><DropdownLink href="#">Something else here</DropdownLink></DropdownItem>
                          <DropdownItem><Hr class="dropdown-divider"/></DropdownItem>
                          <DropdownItem><DropdownLink href="#">Separated link</DropdownLink></DropdownItem>
                      </DropdownMenu>
                      <FormInput type="text" />
                  </InputGroup>
              </li>
              <li>
                  <InputGroup>
                      <FormInput type="text" />
                      <Button variant="outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">Dropdown</Button>
                      <DropdownMenu class="dropdown-menu-end">
                          <DropdownItem><DropdownLink href="#">Action</DropdownLink></DropdownItem>
                          <DropdownItem><DropdownLink href="#">Another action</DropdownLink></DropdownItem>
                          <DropdownItem><DropdownLink href="#">Something else here</DropdownLink></DropdownItem>
                          <DropdownItem><Hr class="dropdown-divider"/></DropdownItem>
                          <DropdownItem><DropdownLink href="#">Separated link</DropdownLink></DropdownItem>
                      </DropdownMenu>
                  </InputGroup>
              </li>
              <li>
                  <InputGroup>
                      <Button variant="outline-primary" class="dropdown-toggle" type="button" data-bs-toggle="dropdown">Dropdown</Button>
                      <DropdownMenu>
                          <DropdownItem><DropdownLink href="#">Action before</DropdownLink></DropdownItem>
                          <DropdownItem><DropdownLink href="#">Another action before</DropdownLink></DropdownItem>
                          <DropdownItem><DropdownLink href="#">Something else here</DropdownLink></DropdownItem>
                          <DropdownItem><Hr class="dropdown-divider"/></DropdownItem>
                          <DropdownItem><DropdownLink href="#">Separated link</DropdownLink></DropdownItem>
                      </DropdownMenu>
                      <FormInput type="text" />
                      <Button variant="outline-primary" class="dropdown-toggle" type="button" data-bs-toggle="dropdown">Dropdown</Button>
                      <DropdownMenu class="dropdown-menu-end">
                          <DropdownItem><DropdownLink href="#">Action</DropdownLink></DropdownItem>
                          <DropdownItem><DropdownLink href="#">Another action</DropdownLink></DropdownItem>
                          <DropdownItem><DropdownLink href="#">Something else here</DropdownLink></DropdownItem>
                          <DropdownItem><Hr class="dropdown-divider"/></DropdownItem>
                          <DropdownItem><DropdownLink href="#">Separated link</DropdownLink></DropdownItem>
                      </DropdownMenu>
                  </InputGroup>
              </li>
          </ul>
        </CardBody>
        <CodePreview title="button">
          &lt;InputGroup&gt;
              &lt;Button variant=&quot;outline-primary&quot; type=&quot;button&quot; id=&quot;button-addon1&quot;&gt;Button&lt;/Button&gt;
              &lt;FormInput type=&quot;text&quot; aria-describedby=&quot;button-addon1&quot;/&gt;
          &lt;/InputGroup&gt;
        </CodePreview>
        <CodePreview title="button dropdown">
          &lt;InputGroup&gt;
              &lt;Button variant=&quot;outline-primary dropdown-toggle&quot; type=&quot;button&quot; data-bs-toggle=&quot;dropdown&quot;&gt;Dropdown&lt;/Button&gt;
              &lt;DropdownMenu&gt;
                  &lt;DropdownItem&gt;&lt;DropdownLink href=&quot;#&quot;&gt;Action&lt;/DropdownLink&gt;&lt;/DropdownItem&gt;
                  &lt;DropdownItem&gt;&lt;DropdownLink href=&quot;#&quot;&gt;Another action&lt;/DropdownLink&gt;&lt;/DropdownItem&gt;
                  &lt;DropdownItem&gt;&lt;DropdownLink href=&quot;#&quot;&gt;Something else here&lt;/DropdownLink&gt;&lt;/DropdownItem&gt;
                  &lt;DropdownItem&gt;&lt;Hr class=&quot;dropdown-divider&quot;/&gt;&lt;/DropdownItem&gt;
                  &lt;DropdownItem&gt;&lt;DropdownLink href=&quot;#&quot;&gt;Separated link&lt;/DropdownLink&gt;&lt;/DropdownItem&gt;
              &lt;/DropdownMenu&gt;
              &lt;FormInput type=&quot;text&quot; /&gt;
          &lt;/InputGroup&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Segmented buttons</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="gap g-3">
              <li>
                  <InputGroup>
                      <Button type="button" variant="outline-primary">Action</Button>
                      <Button type="button" variant="outline-primary" class="dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
                        <span class="visually-hidden">Toggle Dropdown</span>
                      </Button>
                      <DropdownMenu>
                        <DropdownItem><DropdownLink href="#">Action</DropdownLink></DropdownItem>
                        <DropdownItem><DropdownLink href="#">Another action</DropdownLink></DropdownItem>
                        <DropdownItem><DropdownLink href="#">Something else here</DropdownLink></DropdownItem>
                        <DropdownItem><Hr class="dropdown-divider"/></DropdownItem>
                        <DropdownItem><DropdownLink href="#">Separated link</DropdownLink></DropdownItem>
                      </DropdownMenu>
                      <FormInput type="text"/>
                  </InputGroup>
              </li>
              <li>
                  <InputGroup>
                      <FormInput type="text"/>
                      <Button type="button" variant="outline-primary">Action</Button>
                      <Button type="button" variant="outline-primary" class="dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
                        <span class="visually-hidden">Toggle Dropdown</span>
                      </Button>
                      <DropdownMenu class="dropdown-menu-end">
                        <DropdownItem><DropdownLink href="#">Action</DropdownLink></DropdownItem>
                        <DropdownItem><DropdownLink href="#">Another action</DropdownLink></DropdownItem>
                        <DropdownItem><DropdownLink href="#">Something else here</DropdownLink></DropdownItem>
                        <DropdownItem><Hr class="dropdown-divider"/></DropdownItem>
                        <DropdownItem><DropdownLink href="#">Separated link</DropdownLink></DropdownItem>
                      </DropdownMenu>
                  </InputGroup>
              </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;InputGroup&gt;
              &lt;Button type=&quot;button&quot; variant=&quot;outline-primary&quot;&gt;Action&lt;/Button&gt;
              &lt;Button type=&quot;button&quot; variant=&quot;outline-primary&quot; class=&quot;dropdown-toggle dropdown-toggle-split&quot; data-bs-toggle=&quot;dropdown&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Toggle Dropdown&lt;/span&gt;
              &lt;/Button&gt;
              &lt;DropdownMenu&gt;
                &lt;DropdownItem&gt;&lt;DropdownLink href=&quot;#&quot;&gt;Action&lt;/DropdownLink&gt;&lt;/DropdownItem&gt;
                &lt;DropdownItem&gt;&lt;DropdownLink href=&quot;#&quot;&gt;Another action&lt;/DropdownLink&gt;&lt;/DropdownItem&gt;
                &lt;DropdownItem&gt;&lt;DropdownLink href=&quot;#&quot;&gt;Something else here&lt;/DropdownLink&gt;&lt;/DropdownItem&gt;
                &lt;DropdownItem&gt;&lt;Hr class=&quot;dropdown-divider&quot;/&gt;&lt;/DropdownItem&gt;
                &lt;DropdownItem&gt;&lt;DropdownLink href=&quot;#&quot;&gt;Separated link&lt;/DropdownLink&gt;&lt;/DropdownItem&gt;
              &lt;/DropdownMenu&gt;
              &lt;FormInput type=&quot;text&quot;/&gt;
          &lt;/InputGroup&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Custom forms</BlockTitle>
        <BlockText>Input groups include support for custom selects and custom file inputs. Browser default versions of these are not supported.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="gap g-3">
            <li>
              <InputGroup>
                <InputGroupText tag="label" for="inputGroupSelect01">Options</InputGroupText>
                <FormSelect id="inputGroupSelect01">
                  <FormSelectOption selected>Choose...</FormSelectOption>
                  <FormSelectOption value="1">One</FormSelectOption>
                  <FormSelectOption value="2">Two</FormSelectOption>
                  <FormSelectOption value="3">Three</FormSelectOption>
                </FormSelect>
              </InputGroup>
            </li>
            <li>
                <InputGroup>
                <FormSelect id="inputGroupSelect02">
                  <FormSelectOption selected>Choose...</FormSelectOption>
                  <FormSelectOption value="1">One</FormSelectOption>
                  <FormSelectOption value="2">Two</FormSelectOption>
                  <FormSelectOption value="3">Three</FormSelectOption>
                </FormSelect>
                <InputGroupText tag="label" for="inputGroupSelect02">Options</InputGroupText>
              </InputGroup>
            </li>
            <li>
              <InputGroup>
                <Button variant="outline-primary" type="button">Button</Button>
                <FormSelect>
                  <FormSelectOption selected>Choose...</FormSelectOption>
                  <FormSelectOption value="1">One</FormSelectOption>
                  <FormSelectOption value="2">Two</FormSelectOption>
                  <FormSelectOption value="3">Three</FormSelectOption>
                </FormSelect>
              </InputGroup>
            </li>
            <li>
              <InputGroup>
                <FormSelect>
                  <FormSelectOption selected>Choose...</FormSelectOption>
                  <FormSelectOption value="1">One</FormSelectOption>
                  <FormSelectOption value="2">Two</FormSelectOption>
                  <FormSelectOption value="3">Three</FormSelectOption>
                </FormSelect>
                <Button variant="outline-primary" type="button">Button</Button>
              </InputGroup>
            </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;InputGroup&gt;
                &lt;InputGroupText tag=&quot;label&quot; for=&quot;inputGroupSelect01&quot;&gt;Options&lt;/InputGroupText&gt;
                &lt;FormSelect id=&quot;inputGroupSelect01&quot;&gt;
                  &lt;FormSelectOption selected&gt;Choose...&lt;/FormSelectOption&gt;
                  &lt;FormSelectOption value=&quot;1&quot;&gt;One&lt;/FormSelectOption&gt;
                  &lt;FormSelectOption value=&quot;2&quot;&gt;Two&lt;/FormSelectOption&gt;
                  &lt;FormSelectOption value=&quot;3&quot;&gt;Three&lt;/FormSelectOption&gt;
                &lt;/FormSelect&gt;
              &lt;/InputGroup&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Custom file input</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="gap g-3">
            <li>
              <InputGroup>
                <InputGroupText tag="label" for="inputGroupFile01">Upload</InputGroupText>
                <FormInput type="file" id="inputGroupFile01"/>
              </InputGroup>
            </li>
            <li>
              <InputGroup>
                <FormInput type="file" id="inputGroupFile02"/>
                <InputGroupText tag="label" for="inputGroupFile02">Upload</InputGroupText>
              </InputGroup>
            </li>
            <li>
              <InputGroup>
                <Button variant="outline-primary" type="button" id="inputGroupFileAddon03">Button</Button>
                <FormInput type="file" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03"/>
              </InputGroup>
            </li>
            <li>
              <InputGroup>
                <FormInput type="file" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04"/>
                <Button variant="outline-primary" type="button" id="inputGroupFileAddon04">Button</Button>
              </InputGroup>
            </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;InputGroup&gt;
            &lt;InputGroupText tag=&quot;label&quot; for=&quot;inputGroupFile01&quot;&gt;Upload&lt;/InputGroupText&gt;
            &lt;FormInput type=&quot;file&quot; id=&quot;inputGroupFile01&quot;/&gt;
          &lt;/InputGroup&gt;
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
import InputGroup from '@/components/forms/input-group/InputGroup.vue';
import InputGroupText from '@/components/forms/input-group/InputGroupText.vue';
import FormInput from '@/components/forms/input/FormInput.vue';
import FormLabel from '@/components/forms/form-label/FormLabel.vue';
import FormTextarea from '@/components/forms/textarea/FormTextarea.vue';
import FormCheckInput from '@/components/forms/form-check/FormCheckInput.vue';
import Button from '@/components/uielements/button/Button.vue';
import DropdownMenu from '@/components/uielements/dropdown/DropdownMenu.vue';
import DropdownItem from '@/components/uielements/dropdown/DropdownItem.vue';
import DropdownLink from '@/components/uielements/dropdown/DropdownLink.vue';
import Hr from '@/components/utilities/misc/Hr.vue';
import FormSelect from '@/components/forms/select/FormSelect.vue';
import FormSelectOption from '@/components/forms/select/FormSelectOption.vue';

export default {
  name: 'InputGroupPage', 
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
    InputGroup,
    InputGroupText,
    FormInput,
    FormLabel,
    FormTextarea,
    FormCheckInput,
    Button,
    DropdownMenu,
    DropdownItem,
    DropdownLink,
    Hr,
    FormSelect,
    FormSelectOption
  },
}
</script>
