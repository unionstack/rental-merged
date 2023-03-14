<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Button group</BlockTitle>
        <BlockText>Group a series of buttons together on a single line or stack them in a vertical column.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead>
          <BlockText class="wide-md"> <strong class="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component. 
          </BlockText>
          <BlockText>How to import component and use see the <a href="#">docs</a></BlockText>
          <BlockTitle>Example</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
          <ButtonGroup>
              <Button type="button" variant="primary">Left</Button>
              <Button type="button" variant="primary">Middle</Button>
              <Button type="button" variant="primary">Right</Button>
          </ButtonGroup>
        </CardBody>
        <CodePreview title="code example">
          &lt;ButtonGroup&gt;
              &lt;Button type=&quot;button&quot; variant=&quot;primary&quot;&gt;Left&lt;/Button&gt;
              &lt;Button type=&quot;button&quot; variant=&quot;primary&quot;&gt;Middle&lt;/Button&gt;
              &lt;Button type=&quot;button&quot; variant=&quot;primary&quot;&gt;Right&lt;/Button&gt;
          &lt;/ButtonGroup&gt;
        </CodePreview>
      </Card>
    </Block>
    <Block>
      <BlockHead>
          <BlockTitle>Mixed styles</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
          <ButtonGroup>
              <Button type="button" variant="danger">Left</Button>
              <Button type="button" variant="warning">Middle</Button>
              <Button type="button" variant="success">Right</Button>
          </ButtonGroup>
        </CardBody>
        <CodePreview title="code example">
          &lt;ButtonGroup&gt;
              &lt;Button type=&quot;button&quot; variant=&quot;danger&quot;&gt;Left&lt;/Button&gt;
              &lt;Button type=&quot;button&quot; variant=&quot;warning&quot;&gt;Middle&lt;/Button&gt;
              &lt;Button type=&quot;button&quot; variant=&quot;success&quot;&gt;Right&lt;/Button&gt;
          &lt;/ButtonGroup&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
          <BlockTitle>Outlined styles</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
          <ButtonGroup>
              <Button type="button" variant="outline-primary">Left</Button>
              <Button type="button" variant="outline-primary">Middle</Button>
              <Button type="button" variant="outline-primary">Right</Button>
          </ButtonGroup>
        </CardBody>
        <CodePreview title="code example">
          &lt;ButtonGroup&gt;
              &lt;Button type=&quot;button&quot; variant=&quot;outline-primary&quot;&gt;Left&lt;/Button&gt;
              &lt;Button type=&quot;button&quot; variant=&quot;outline-primary&quot;&gt;Middle&lt;/Button&gt;
              &lt;Button type=&quot;button&quot; variant=&quot;outline-primary&quot;&gt;Right&lt;/Button&gt;
          &lt;/ButtonGroup&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
          <BlockTitle>Checkbox and radio button groups</BlockTitle>
          <BlockText>Combine button-like checkbox and radio toggle buttons into a seamless looking button group.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex gap g-4">
            <li>
              <ButtonGroup>
                <ButtonCheck id="btncheck1" type="checkbox"/>
                <Button tag="label" variant="outline-primary" for="btncheck1">Checkbox 1</Button>

                <ButtonCheck id="btncheck2" type="checkbox"/>
                <Button tag="label" variant="outline-primary" for="btncheck2">Checkbox 2</Button>
              
                <ButtonCheck id="btncheck3" type="checkbox"/>
                <Button tag="label" variant="outline-primary" for="btncheck3">Checkbox 3</Button>
              </ButtonGroup>
            </li>
            <li>
              <ButtonGroup>
                <ButtonCheck id="btnradio1" type="radio" name="btnradio" checked/>
                <Button tag="label" variant="outline-primary" for="btnradio1">Radio 1</Button>
              
                <ButtonCheck id="btnradio2" type="radio" name="btnradio"/>
                <Button tag="label" variant="outline-primary" for="btnradio2">Radio 2</Button>
              
                <ButtonCheck id="btnradio3" type="radio" name="btnradio"/>
                <Button tag="label" variant="outline-primary" for="btnradio3">Radio 3</Button>
              </ButtonGroup>
            </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;ButtonGroup&gt;
                &lt;ButtonCheck id=&quot;btncheck1&quot; type=&quot;checkbox&quot;/&gt;
                &lt;Button tag=&quot;label&quot; variant=&quot;outline-primary&quot; for=&quot;btncheck1&quot;&gt;Checkbox 1&lt;/Button&gt;

                &lt;ButtonCheck id=&quot;btncheck2&quot; type=&quot;checkbox&quot;/&gt;
                &lt;Button tag=&quot;label&quot; variant=&quot;outline-primary&quot; for=&quot;btncheck2&quot;&gt;Checkbox 2&lt;/Button&gt;
              
                &lt;ButtonCheck id=&quot;btncheck3&quot; type=&quot;checkbox&quot;/&gt;
                &lt;Button tag=&quot;label&quot; variant=&quot;outline-primary&quot; for=&quot;btncheck3&quot;&gt;Checkbox 3&lt;/Button&gt;
              &lt;/ButtonGroup&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
          <BlockTitle>Button toolbar</BlockTitle>
          <BlockText>Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="btn-toolbar" role="toolbar">
            <ButtonGroup class="me-2 mb-2">
              <Button type="button" variant="primary">1</Button>
              <Button type="button" variant="primary">2</Button>
              <Button type="button" variant="primary">3</Button>
              <Button type="button" variant="primary">4</Button>
            </ButtonGroup>
            <ButtonGroup class="me-2 mb-2">
              <Button type="button" variant="secondary">5</Button>
              <Button type="button" variant="secondary">6</Button>
              <Button type="button" variant="secondary">7</Button>
            </ButtonGroup>
            <ButtonGroup class="mb-2">
              <Button type="button" variant="info">8</Button>
            </ButtonGroup>
          </div>
          <p class="mt-5">Feel free to mix input groups with button groups in your toolbars. Similar to the example above, you’ll likely need some utilities though to space things properly.</p>
          <div class="btn-toolbar mb-3" role="toolbar">
            <ButtonGroup class="me-2">
              <Button type="button" variant="outline-secondary">1</Button>
              <Button type="button" variant="outline-secondary">2</Button>
              <Button type="button" variant="outline-secondary">3</Button>
              <Button type="button" variant="outline-secondary">4</Button>
            </ButtonGroup>
            <div class="input-group">
              <div class="input-group-text" id="btnGroupAddon">@</div>
              <input type="text" class="form-control" placeholder="Input group example" aria-describedby="btnGroupAddon">
            </div>
          </div>
        
          <div class="btn-toolbar justify-content-between" role="toolbar">
            <ButtonGroup>
              <Button type="button" variant="outline-secondary">1</Button>
              <Button type="button" variant="outline-secondary">2</Button>
              <Button type="button" variant="outline-secondary">3</Button>
              <Button type="button" variant="outline-secondary">4</Button>
            </ButtonGroup>
            <div class="input-group">
              <div class="input-group-text" id="btnGroupAddon2">@</div>
              <input type="text" class="form-control" placeholder="Input group example" aria-describedby="btnGroupAddon2">
            </div>
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;div class=&quot;btn-toolbar&quot; role=&quot;toolbar&quot;&gt;
            &lt;ButtonGroup class=&quot;me-2&quot;&gt;
              &lt;Button type=&quot;button&quot; variant=&quot;primary&quot;&gt;1&lt;/Button&gt;
              &lt;Button type=&quot;button&quot; variant=&quot;primary&quot;&gt;2&lt;/Button&gt;
              &lt;Button type=&quot;button&quot; variant=&quot;primary&quot;&gt;3&lt;/Button&gt;
              &lt;Button type=&quot;button&quot; variant=&quot;primary&quot;&gt;4&lt;/Button&gt;
            &lt;/ButtonGroup&gt;
            &lt;ButtonGroup class=&quot;me-2&quot;&gt;
              &lt;Button type=&quot;button&quot; variant=&quot;secondary&quot;&gt;5&lt;/Button&gt;
              &lt;Button type=&quot;button&quot; variant=&quot;secondary&quot;&gt;6&lt;/Button&gt;
              &lt;Button type=&quot;button&quot; variant=&quot;secondary&quot;&gt;7&lt;/Button&gt;
            &lt;/ButtonGroup&gt;
            &lt;ButtonGroup&gt;
              &lt;Button type=&quot;button&quot; variant=&quot;info&quot;&gt;8&lt;/Button&gt;
            &lt;/ButtonGroup&gt;
          &lt;/div&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
          <BlockTitle>Sizing</BlockTitle>
          <BlockText>Instead of applying button sizing classes to every button in a group, just add <code>size=""</code> prop.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul>
              <li class="block mb-3">
                  <ButtonGroup size="lg">
                    <Button type="button" variant="outline-secondary">Left</Button>
                    <Button type="button" variant="outline-secondary">Middle</Button>
                    <Button type="button" variant="outline-secondary">Right</Button>
                  </ButtonGroup>
              </li>
              <li class="block mb-3">
                  <ButtonGroup>
                    <Button type="button" variant="outline-secondary">Left</Button>
                    <Button type="button" variant="outline-secondary">Middle</Button>
                    <Button type="button" variant="outline-secondary">Right</Button>
                  </ButtonGroup>
              </li>
              <li class="block mb-3">
                  <ButtonGroup size="sm">
                    <Button type="button" variant="outline-secondary">Left</Button>
                    <Button type="button" variant="outline-secondary">Middle</Button>
                    <Button type="button" variant="outline-secondary">Right</Button>
                  </ButtonGroup>
              </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;ButtonGroup size=&quot;lg&quot;&gt;
            &lt;Button type=&quot;button&quot; variant=&quot;outline-secondary&quot;&gt;Left&lt;/Button&gt;
            &lt;Button type=&quot;button&quot; variant=&quot;outline-secondary&quot;&gt;Middle&lt;/Button&gt;
            &lt;Button type=&quot;button&quot; variant=&quot;outline-secondary&quot;&gt;Right&lt;/Button&gt;
          &lt;/ButtonGroup&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
          <BlockTitle>Nesting</BlockTitle>
          <BlockText>Place a <code>ButtonGroup</code> within another <code>ButtonGroup</code> when you want dropdown menus mixed with a series of buttons.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ButtonGroup>
            <Button type="button" variant="primary">1</Button>
            <Button type="button" variant="primary">2</Button>

            <ButtonGroup>
              <Button id="btnGroupDrop1" variant="primary" class="dropdown-toggle" data-bs-toggle="dropdown" type="button">
                Dropdown
              </Button>
              <DropdownMenu>
                <DropdownItem>
                  <DropdownLink href="#">Dropdown link</DropdownLink>
                </DropdownItem>
                <DropdownItem>
                  <DropdownLink href="#">Dropdown link</DropdownLink>
                </DropdownItem>
              </DropdownMenu>
            </ButtonGroup>
          </ButtonGroup>
        </CardBody>
        <CodePreview title="code example">
          &lt;ButtonGroup&gt;
            &lt;Button type=&quot;button&quot; variant=&quot;primary&quot;&gt;1&lt;/Button&gt;
            &lt;Button type=&quot;button&quot; variant=&quot;primary&quot;&gt;2&lt;/Button&gt;

            &lt;ButtonGroup&gt;
              &lt;Button id=&quot;btnGroupDrop1&quot; variant=&quot;primary&quot; class=&quot;dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; type=&quot;button&quot;&gt;
                Dropdown
              &lt;/Button&gt;
              &lt;Dropdown&gt;
                &lt;DropdownItem&gt;
                  &lt;DropdownLink href=&quot;#&quot;&gt;Dropdown link&lt;/DropdownLink&gt;
                &lt;/DropdownItem&gt;
                &lt;DropdownItem&gt;
                  &lt;DropdownLink href=&quot;#&quot;&gt;Dropdown link&lt;/DropdownLink&gt;
                &lt;/DropdownItem&gt;
              &lt;/Dropdown&gt;
            &lt;/ButtonGroup&gt;
          &lt;/ButtonGroup&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Vertical variation</BlockTitle>
          <BlockText>Make a set of buttons appear vertically stacked rather than horizontally by setting the <code>vertical</code> prop. Split button dropdowns are not supported here.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex gap g-4">
            <li>
              <ButtonGroup vertical>
                  <Button type="button" variant="primary">Button</Button>
                  <Button type="button" variant="primary">Button</Button>

                  <ButtonGroup>
                    <Button variant="primary" class="dropdown-toggle" data-bs-toggle="dropdown" type="button">
                      Dropdown
                    </Button>
                    <DropdownMenu size="sm">
                      <DropdownItem>
                        <DropdownLink href="#">Option link</DropdownLink>
                      </DropdownItem>
                      <DropdownItem>
                        <DropdownLink href="#">Option link</DropdownLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </ButtonGroup>

                  <Button type="button" variant="primary">Button</Button>
                  <Button type="button" variant="primary">Button</Button>
                  <ButtonGroup>
                    <Button variant="primary" class="dropdown-toggle" data-bs-toggle="dropdown" type="button">
                      Dropdown
                    </Button>
                    <DropdownMenu size="sm">
                      <DropdownItem>
                        <DropdownLink href="#">Option link</DropdownLink>
                      </DropdownItem>
                      <DropdownItem>
                        <DropdownLink href="#">Option link</DropdownLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </ButtonGroup>

                  <ButtonGroup>
                    <Button variant="primary" class="dropdown-toggle" data-bs-toggle="dropdown" type="button">
                      Dropdown
                    </Button>
                    <DropdownMenu size="sm">
                      <DropdownItem>
                        <DropdownLink href="#">Option link</DropdownLink>
                      </DropdownItem>
                      <DropdownItem>
                        <DropdownLink href="#">Option link</DropdownLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </ButtonGroup>

                  <ButtonGroup>
                    <Button variant="primary" class="dropdown-toggle" data-bs-toggle="dropdown" type="button">
                      Dropdown
                    </Button>
                    <DropdownMenu size="sm">
                      <DropdownItem>
                        <DropdownLink href="#">Option link</DropdownLink>
                      </DropdownItem>
                      <DropdownItem>
                        <DropdownLink href="#">Option link</DropdownLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </ButtonGroup>
              </ButtonGroup>
            </li>
            <li>
                <ButtonGroup vertical>
                    <Button type="button" variant="dark">Button</Button>
                    <Button type="button" variant="dark">Button</Button>
                    <Button type="button" variant="dark">Button</Button>
                    <Button type="button" variant="dark">Button</Button>
                    <Button type="button" variant="dark">Button</Button>
                    <Button type="button" variant="dark">Button</Button>
                </ButtonGroup>
            </li>
            <li>
                <ButtonGroup vertical>
                    <ButtonCheck type="radio" name="vbtn-radio" id="vbtn-radio1" checked=""/>
                    <Button tag="label" variant="outline-danger" for="vbtn-radio1">Radio 1</Button>
                    <ButtonCheck type="radio" name="vbtn-radio" id="vbtn-radio2"/>
                    <Button tag="label" variant="outline-danger" for="vbtn-radio2">Radio 2</Button>
                    <ButtonCheck type="radio" name="vbtn-radio" id="vbtn-radio3"/>
                    <Button tag="label" variant="outline-danger" for="vbtn-radio3">Radio 3</Button>
                </ButtonGroup>
            </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;ButtonGroup vertical&gt;
              &lt;Button type=&quot;button&quot; variant=&quot;dark&quot;&gt;Button&lt;/Button&gt;
              &lt;Button type=&quot;button&quot; variant=&quot;dark&quot;&gt;Button&lt;/Button&gt;
              &lt;Button type=&quot;button&quot; variant=&quot;dark&quot;&gt;Button&lt;/Button&gt;
              &lt;Button type=&quot;button&quot; variant=&quot;dark&quot;&gt;Button&lt;/Button&gt;
              &lt;Button type=&quot;button&quot; variant=&quot;dark&quot;&gt;Button&lt;/Button&gt;
              &lt;Button type=&quot;button&quot; variant=&quot;dark&quot;&gt;Button&lt;/Button&gt;
          &lt;/ButtonGroup&gt;
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
import ButtonGroup from '@/components/uielements/button/ButtonGroup.vue';
import DropdownMenu from '@/components/uielements/dropdown/DropdownMenu.vue';
import DropdownItem from '@/components/uielements/dropdown/DropdownItem.vue';
import DropdownLink from '@/components/uielements/dropdown/DropdownLink.vue';
import ButtonCheck from '@/components/uielements/button/ButtonCheck.vue';

export default {
  name: 'ButtonGroupPage', 
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
    ButtonGroup,
    DropdownMenu,
    DropdownItem,
    DropdownLink,
    ButtonCheck
  },
}
</script>
