<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">List group</BlockTitle>
        <BlockText>List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within</BlockText>
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
          <ListGroup>
              <ListGroupItem>An item</ListGroupItem>
              <ListGroupItem>A second item</ListGroupItem>
              <ListGroupItem>A third item</ListGroupItem>
              <ListGroupItem>A fourth item</ListGroupItem>
              <ListGroupItem>And a fifth one</ListGroupItem>
          </ListGroup>
        </CardBody>
        <CodePreview title="code example">
          &lt;ListGroup&gt;
              &lt;ListGroupItem&gt;An item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem&gt;A second item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem&gt;A third item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem&gt;A fourth item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem&gt;And a fifth one&lt;/ListGroupItem&gt;
          &lt;/ListGroup&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Active items</BlockTitle>
          <BlockText>Add <code>active</code> props. to a <code>ListGroupItem</code> to indicate the current active selection.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ListGroup>
              <ListGroupItem active>An active item</ListGroupItem>
              <ListGroupItem>A second item</ListGroupItem>
              <ListGroupItem>A third item</ListGroupItem>
              <ListGroupItem>A fourth item</ListGroupItem>
              <ListGroupItem>And a fifth one</ListGroupItem>
          </ListGroup>
        </CardBody>
        <CodePreview title="code example">
          &lt;ListGroup&gt;
              &lt;ListGroupItem active&gt;An active item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem&gt;A second item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem&gt;A third item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem&gt;A fourth item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem&gt;And a fifth one&lt;/ListGroupItem&gt;
          &lt;/ListGroup&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Disabled items</BlockTitle>
          <BlockText>Add <code>disabled</code> prop. to a <code>ListGroupItem</code> to make it appear disabled.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ListGroup>
              <ListGroupItem disabled>A disabled item</ListGroupItem>
              <ListGroupItem>A second item</ListGroupItem>
              <ListGroupItem>A third item</ListGroupItem>
              <ListGroupItem>A fourth item</ListGroupItem>
              <ListGroupItem>And a fifth one</ListGroupItem>
          </ListGroup>
        </CardBody>
        <CodePreview title="code example">
          &lt;ListGroup&gt;
              &lt;ListGroupItem disabled&gt;A disabled item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem&gt;A second item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem&gt;A third item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem&gt;A fourth item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem&gt;And a fifth one&lt;/ListGroupItem&gt;
          &lt;/ListGroup&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Links and buttons</BlockTitle>
          <BlockText>Use <code>a</code> or <code>button</code> to create actionable list group items with hover, disabled, and active states by adding <code>href</code> prop for <code>a</code> and <code>tag="button"</code> prop for button.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ListGroup tag="div">
              <ListGroupItem href="#" actionable active>The current link item</ListGroupItem>
              <ListGroupItem href="#" actionable>A second link item</ListGroupItem>
              <ListGroupItem href="#" actionable>A third link item</ListGroupItem>
              <ListGroupItem href="#" actionable>A fourth link item</ListGroupItem>
              <ListGroupItem class="list-group-item-action disabled">A disabled link item</ListGroupItem>
          </ListGroup>
          <p class="mt-5">With <code>button</code>, you can also make use of the disabled attribute instead of the .disabled class. Sadly, <code>a</code> don’t support the disabled attribute.</p>
          <ListGroup tag="div">
              <ListGroupItem tag="button" actionable active type="button">The current button</ListGroupItem>
              <ListGroupItem tag="button" actionable type="button">A second button item</ListGroupItem>
              <ListGroupItem tag="button" actionable type="button">A third button item</ListGroupItem>
              <ListGroupItem tag="button" actionable type="button">A fourth button item</ListGroupItem>
              <ListGroupItem tag="button" actionable type="button" disabled>A disabled button item</ListGroupItem>
          </ListGroup>
        </CardBody>
        <CodePreview title="code example">
          &lt;ListGroup tag=&quot;div&quot;&gt;
              &lt;ListGroupItem href=&quot;#&quot; actionable active&gt;The current link item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem href=&quot;#&quot; actionable&gt;A second link item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem href=&quot;#&quot; actionable&gt;A third link item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem href=&quot;#&quot; actionable&gt;A fourth link item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem class=&quot;list-group-item-action disabled&quot;&gt;A disabled link item&lt;/ListGroupItem&gt;
          &lt;/ListGroup&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Flush</BlockTitle>
          <BlockText>Add <code>flush</code> props. to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ListGroup flush>
              <ListGroupItem>An item</ListGroupItem>
              <ListGroupItem>A second item</ListGroupItem>
              <ListGroupItem>A third item</ListGroupItem>
              <ListGroupItem>A fourth item</ListGroupItem>
              <ListGroupItem>And a fifth one</ListGroupItem>
          </ListGroup>
        </CardBody>
        <CodePreview title="code example">
          &lt;ListGroup flush&gt;
              &lt;ListGroupItem&gt;An item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem&gt;A second item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem&gt;A third item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem&gt;A fourth item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem&gt;And a fifth one&lt;/ListGroupItem&gt;
          &lt;/ListGroup&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Numbered</BlockTitle>
          <BlockText>Add the <code>numbered</code> props. (and optionally use an <code>ol</code> element) to opt into numbered list group items. Numbers are generated via CSS (as opposed to a <code>ol</code> s default browser styling) for better placement inside list group items and to allow for better customization.</BlockText>
          <BlockText>Numbers are generated by counter-reset on the <code>ol</code>, and then styled and placed with a ::before pseudo-element on the <code>li</code> with counter-increment and content.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ListGroup tag="ol" numbered>
              <ListGroupItem>A list item</ListGroupItem>
              <ListGroupItem>A list item</ListGroupItem>
              <ListGroupItem>A list item</ListGroupItem>
          </ListGroup>
          <p class="mt-5">These work great with custom content as well.</p>
          <ListGroup tag="ol" numbered>
              <ListGroupItem class="d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                      <div class="fw-bold">Subheading</div>
                      Content for list item
                  </div>
                  <Badge variant="primary" class="rounded-pill">14</Badge>
              </ListGroupItem>
              <ListGroupItem class="d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                      <div class="fw-bold">Subheading</div>
                      Content for list item
                  </div>
                  <Badge variant="primary" class="rounded-pill">14</Badge>
              </ListGroupItem>
              <ListGroupItem class="d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                      <div class="fw-bold">Subheading</div>
                      Content for list item
                  </div>
                  <Badge variant="primary" class="rounded-pill">14</Badge>
              </ListGroupItem>
          </ListGroup>
        </CardBody>
        <CodePreview title="code example">
          &lt;ListGroup tag=&quot;ol&quot; numbered&gt;
              &lt;ListGroupItem&gt;A list item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem&gt;A list item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem&gt;A list item&lt;/ListGroupItem&gt;
          &lt;/ListGroup&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Horizontal</BlockTitle>
          <BlockText>Add <code>horizontal</code> props. to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant <code>horizontal-{sm|md|lg|xl|xxl}</code> to make a list group horizontal starting at that breakpoint’s <code> min-width</code>. Currently horizontal list groups cannot be combined with flush list groups.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="gap g-3">
              <ListGroup horizontal>
                  <ListGroupItem>An item</ListGroupItem>
                  <ListGroupItem>A second item</ListGroupItem>
                  <ListGroupItem>A third item</ListGroupItem>
              </ListGroup>
              <ListGroup horizontal="sm">
                  <ListGroupItem>An item</ListGroupItem>
                  <ListGroupItem>A second item</ListGroupItem>
                  <ListGroupItem>A third item</ListGroupItem>
              </ListGroup>
              <ListGroup horizontal="md">
                  <ListGroupItem>An item</ListGroupItem>
                  <ListGroupItem>A second item</ListGroupItem>
                  <ListGroupItem>A third item</ListGroupItem>
              </ListGroup>
              <ListGroup horizontal="lg">
                  <ListGroupItem>An item</ListGroupItem>
                  <ListGroupItem>A second item</ListGroupItem>
                  <ListGroupItem>A third item</ListGroupItem>
              </ListGroup>
              <ListGroup horizontal="xl">
                  <ListGroupItem>An item</ListGroupItem>
                  <ListGroupItem>A second item</ListGroupItem>
                  <ListGroupItem>A third item</ListGroupItem>
              </ListGroup>
              <ListGroup horizontal="xxl">
                  <ListGroupItem>An item</ListGroupItem>
                  <ListGroupItem>A second item</ListGroupItem>
                  <ListGroupItem>A third item</ListGroupItem>
              </ListGroup>
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;ListGroup horizontal&gt;
                  &lt;ListGroupItem&gt;An item&lt;/ListGroupItem&gt;
                  &lt;ListGroupItem&gt;A second item&lt;/ListGroupItem&gt;
                  &lt;ListGroupItem&gt;A third item&lt;/ListGroupItem&gt;
              &lt;/ListGroup&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Contextual classes</BlockTitle>
          <BlockText>Use <code>variant="*"</code> props to style list items with a stateful background and color.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ListGroup>
              <ListGroupItem>A simple default list group item</ListGroupItem>
              <ListGroupItem variant="primary">A simple primary list group item</ListGroupItem>
              <ListGroupItem variant="secondary">A simple secondary list group item</ListGroupItem>
              <ListGroupItem variant="success">A simple success list group item</ListGroupItem>
              <ListGroupItem variant="danger">A simple danger list group item</ListGroupItem>
              <ListGroupItem variant="warning">A simple warning list group item</ListGroupItem>
              <ListGroupItem variant="info">A simple info list group item</ListGroupItem>
              <ListGroupItem variant="light">A simple light list group item</ListGroupItem>
              <ListGroupItem variant="dark">A simple dark list group item</ListGroupItem>
          </ListGroup>
          <p class="mt-4">Use <code>actionable</code> props for work with addition of the hover styles.</p>
          <ListGroup tag="div">
              <ListGroupItem href="#" actionable>A simple default list group item</ListGroupItem>
              <ListGroupItem href="#" actionable variant="primary">A simple primary list group item</ListGroupItem>
              <ListGroupItem href="#" actionable variant="secondary">A simple secondary list group item</ListGroupItem>
              <ListGroupItem href="#" actionable variant="success">A simple success list group item</ListGroupItem>
              <ListGroupItem href="#" actionable variant="danger">A simple danger list group item</ListGroupItem>
              <ListGroupItem href="#" actionable variant="warning">A simple warning list group item</ListGroupItem>
              <ListGroupItem href="#" actionable variant="info">A simple info list group item</ListGroupItem>
              <ListGroupItem href="#" actionable variant="light">A simple light list group item</ListGroupItem>
              <ListGroupItem href="#" actionable variant="dark">A simple dark list group item</ListGroupItem>
          </ListGroup>
        </CardBody>
        <CodePreview title="code example">
          &lt;ListGroup&gt;
              &lt;ListGroupItem&gt;A simple default list group item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem variant=&quot;primary&quot;&gt;A simple primary list group item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem variant=&quot;secondary&quot;&gt;A simple secondary list group item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem variant=&quot;success&quot;&gt;A simple success list group item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem variant=&quot;danger&quot;&gt;A simple danger list group item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem variant=&quot;warning&quot;&gt;A simple warning list group item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem variant=&quot;info&quot;&gt;A simple info list group item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem variant=&quot;light&quot;&gt;A simple light list group item&lt;/ListGroupItem&gt;
              &lt;ListGroupItem variant=&quot;dark&quot;&gt;A simple dark list group item&lt;/ListGroupItem&gt;
          &lt;/ListGroup&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>With badges</BlockTitle>
          <BlockText>Add badges to any list group item to show unread counts, activity, and more with the help of some utilities.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ListGroup>
              <ListGroupItem class="d-flex justify-content-between align-items-center">
                  A list item
                  <Badge variant="primary" pill>14</Badge>
              </ListGroupItem>
              <ListGroupItem class="d-flex justify-content-between align-items-center">
                  A second list item
                  <Badge variant="primary" pill>2</Badge>
              </ListGroupItem>
              <ListGroupItem class="d-flex justify-content-between align-items-center">
                  A third list item
                  <Badge variant="primary" pill>1</Badge>
              </ListGroupItem>
          </ListGroup>
        </CardBody>
        <CodePreview title="code example">
          &lt;ListGroup&gt;
              &lt;ListGroupItem class=&quot;d-flex justify-content-between align-items-center&quot;&gt;
                  A list item
                  &lt;Badge variant=&quot;primary&quot; pill&gt;14&lt;/Badge&gt;
              &lt;/ListGroupItem&gt;
              &lt;ListGroupItem class=&quot;d-flex justify-content-between align-items-center&quot;&gt;
                  A second list item
                  &lt;Badge variant=&quot;primary&quot; pill&gt;2&lt;/Badge&gt;
              &lt;/ListGroupItem&gt;
              &lt;ListGroupItem class=&quot;d-flex justify-content-between align-items-center&quot;&gt;
                  A third list item
                  &lt;Badge variant=&quot;primary&quot; pill&gt;1&lt;/Badge&gt;
              &lt;/ListGroupItem&gt;
          &lt;/ListGroup&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Custom content</BlockTitle>
          <BlockText>Add nearly any HTML within, even for linked list groups like the one below, with the help of flexbox utilities.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ListGroup tag="div">
              <ListGroupItem href="#" actionable active class="py-3">
                  <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">List group item heading</h5>
                      <small>3 days ago</small>
                  </div>
                  <p class="mb-1">Some placeholder content in a paragraph.</p>
                  <small>And some small print.</small>
              </ListGroupItem>
              <ListGroupItem href="#" actionable class="py-3">
                  <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">List group item heading</h5>
                      <small class="text-muted">3 days ago</small>
                  </div>
                  <p class="mb-1">Some placeholder content in a paragraph.</p>
                  <small class="text-muted">And some muted small print.</small>
              </ListGroupItem>
              <ListGroupItem href="#" actionable class="py-3">
                  <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">List group item heading</h5>
                      <small class="text-muted">3 days ago</small>
                  </div>
                  <p class="mb-1">Some placeholder content in a paragraph.</p>
                  <small class="text-muted">And some muted small print.</small>
              </ListGroupItem>
          </ListGroup>
        </CardBody>
        <CodePreview title="code example">
          &lt;ListGroup tag=&quot;div&quot;&gt;
              &lt;ListGroupItem href=&quot;#&quot; actionable active class=&quot;py-3&quot;&gt;
                  &lt;div class=&quot;d-flex w-100 justify-content-between&quot;&gt;
                      &lt;h5 class=&quot;mb-1&quot;&gt;List group item heading&lt;/h5&gt;
                      &lt;small&gt;3 days ago&lt;/small&gt;
                  &lt;/div&gt;
                  &lt;p class=&quot;mb-1&quot;&gt;Some placeholder content in a paragraph.&lt;/p&gt;
                  &lt;small&gt;And some small print.&lt;/small&gt;
              &lt;/ListGroupItem&gt;
              &lt;ListGroupItem href=&quot;#&quot; actionable class=&quot;py-3&quot;&gt;
                  &lt;div class=&quot;d-flex w-100 justify-content-between&quot;&gt;
                      &lt;h5 class=&quot;mb-1&quot;&gt;List group item heading&lt;/h5&gt;
                      &lt;small class=&quot;text-muted&quot;&gt;3 days ago&lt;/small&gt;
                  &lt;/div&gt;
                  &lt;p class=&quot;mb-1&quot;&gt;Some placeholder content in a paragraph.&lt;/p&gt;
                  &lt;small class=&quot;text-muted&quot;&gt;And some muted small print.&lt;/small&gt;
              &lt;/ListGroupItem&gt;
              &lt;ListGroupItem href=&quot;#&quot; actionable class=&quot;py-3&quot;&gt;
                  &lt;div class=&quot;d-flex w-100 justify-content-between&quot;&gt;
                      &lt;h5 class=&quot;mb-1&quot;&gt;List group item heading&lt;/h5&gt;
                      &lt;small class=&quot;text-muted&quot;&gt;3 days ago&lt;/small&gt;
                  &lt;/div&gt;
                  &lt;p class=&quot;mb-1&quot;&gt;Some placeholder content in a paragraph.&lt;/p&gt;
                  &lt;small class=&quot;text-muted&quot;&gt;And some muted small print.&lt;/small&gt;
              &lt;/ListGroupItem&gt;
          &lt;/ListGroup&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Checkboxes and radios</BlockTitle>
          <BlockText>Place Bootstrap’s checkboxes and radios within list group items and customize as needed. You can use them without <code>label</code></BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ListGroup>
              <ListGroupItem>
                  <input class="form-check-input me-1" type="checkbox" value="">
                  First checkbox
              </ListGroupItem>
              <ListGroupItem>
                  <input class="form-check-input me-1" type="checkbox" value="">
                  Second checkbox
              </ListGroupItem>
              <ListGroupItem>
                  <input class="form-check-input me-1" type="checkbox" value="">
                  Third checkbox
              </ListGroupItem>
              <ListGroupItem>
                  <input class="form-check-input me-1" type="checkbox" value="">
                  Fourth checkbox
              </ListGroupItem>
              <ListGroupItem>
                  <input class="form-check-input me-1" type="checkbox" value="">
                  Fifth checkbox
              </ListGroupItem>
          </ListGroup>
          <p class="mt-4">And if you want <code>label</code> as the <code>ListGroupItem</code> for large hit areas, you can do that, too with <code>tag="label"</code> prop.</p>
          <ListGroup tag="div">
              <ListGroupItem tag="label">
                  <input class="form-check-input me-1" type="checkbox" value="">
                  First checkbox
              </ListGroupItem>
              <ListGroupItem tag="label">
                  <input class="form-check-input me-1" type="checkbox" value="">
                  Second checkbox
              </ListGroupItem>
              <ListGroupItem tag="label">
                  <input class="form-check-input me-1" type="checkbox" value="">
                  Third checkbox
              </ListGroupItem>
              <ListGroupItem tag="label">
                  <input class="form-check-input me-1" type="checkbox" value="">
                  Fourth checkbox
              </ListGroupItem>
              <ListGroupItem tag="label">
                  <input class="form-check-input me-1" type="checkbox" value="">
                  Fifth checkbox
              </ListGroupItem>
          </ListGroup>
        </CardBody>
        <CodePreview title="code example">
          &lt;ListGroup&gt;
              &lt;ListGroupItem&gt;
                  &lt;input class=&quot;form-check-input me-1&quot; type=&quot;checkbox&quot; value=&quot;&quot;&gt;
                  First checkbox
              &lt;/ListGroupItem&gt;
              &lt;ListGroupItem&gt;
                  &lt;input class=&quot;form-check-input me-1&quot; type=&quot;checkbox&quot; value=&quot;&quot;&gt;
                  Second checkbox
              &lt;/ListGroupItem&gt;
              &lt;ListGroupItem&gt;
                  &lt;input class=&quot;form-check-input me-1&quot; type=&quot;checkbox&quot; value=&quot;&quot;&gt;
                  Third checkbox
              &lt;/ListGroupItem&gt;
              &lt;ListGroupItem&gt;
                  &lt;input class=&quot;form-check-input me-1&quot; type=&quot;checkbox&quot; value=&quot;&quot;&gt;
                  Fourth checkbox
              &lt;/ListGroupItem&gt;
              &lt;ListGroupItem&gt;
                  &lt;input class=&quot;form-check-input me-1&quot; type=&quot;checkbox&quot; value=&quot;&quot;&gt;
                  Fifth checkbox
              &lt;/ListGroupItem&gt;
          &lt;/ListGroup&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>JavaScript behavior</BlockTitle>
          <BlockText>Use the tab JavaScript plugin—include it individually or through the compiled <code>bootstrap.js</code> file—to extend our list group to create tabbable panes of local content.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
            <div class="row">
              <div class="col-4">
                  <ListGroup tag="div" id="list-tab">
                      <ListGroupItem actionable active id="list-home-list" data-bs-toggle="list" href="#list-home">
                          Home
                      </ListGroupItem>
                      <ListGroupItem actionable id="list-profile-list" data-bs-toggle="list" href="#list-profile">
                          Profile
                      </ListGroupItem>
                      <ListGroupItem actionable id="list-messages-list" data-bs-toggle="list" href="#list-messages">
                          Messages
                      </ListGroupItem>
                      <ListGroupItem actionable id="list-settings-list" data-bs-toggle="list" href="#list-settings">
                          Settings
                      </ListGroupItem>
                  </ListGroup>
              </div>
              <div class="col-8">
                  <TabContent id="nav-tabContent">
                      <TabPane class="fade show active" id="list-home">
                          Some placeholder content in a paragraph relating to <strong>"Home"</strong>. And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.
                      </TabPane>
                      <TabPane class="fade" id="list-profile">
                          Some placeholder content in a paragraph relating to <strong>"Profile"</strong>. And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.
                      </TabPane>
                      <TabPane class="fade" id="list-messages">
                          Some placeholder content in a paragraph relating to <strong>"Messages"</strong>. And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.
                      </TabPane>
                      <TabPane class="fade" id="list-settings">
                          Some placeholder content in a paragraph relating to <strong>"Settings"</strong>. And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.
                      </TabPane>
                  </TabContent>
              </div>
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;div class=&quot;row&quot;&gt;
              &lt;div class=&quot;col-4&quot;&gt;
                  &lt;ListGroup tag=&quot;div&quot; id=&quot;list-tab&quot;&gt;
                      &lt;ListGroupItem actionable active id=&quot;list-home-list&quot; data-bs-toggle=&quot;list&quot; href=&quot;#list-home&quot;&gt;
                          Home
                      &lt;/ListGroupItem&gt;
                      &lt;ListGroupItem actionable id=&quot;list-profile-list&quot; data-bs-toggle=&quot;list&quot; href=&quot;#list-profile&quot;&gt;
                          Profile
                      &lt;/ListGroupItem&gt;
                      &lt;ListGroupItem actionable id=&quot;list-messages-list&quot; data-bs-toggle=&quot;list&quot; href=&quot;#list-messages&quot;&gt;
                          Messages
                      &lt;/ListGroupItem&gt;
                      &lt;ListGroupItem actionable id=&quot;list-settings-list&quot; data-bs-toggle=&quot;list&quot; href=&quot;#list-settings&quot;&gt;
                          Settings
                      &lt;/ListGroupItem&gt;
                  &lt;/ListGroup&gt;
              &lt;/div&gt;
              &lt;div class=&quot;col-8&quot;&gt;
                  &lt;TabContent id=&quot;nav-tabContent&quot;&gt;
                      &lt;TabPane class=&quot;fade show active&quot; id=&quot;list-home&quot;&gt;
                          Some placeholder content in a paragraph relating to &lt;strong&gt;&quot;Home&quot;&lt;/strong&gt;. And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.
                      &lt;/TabPane&gt;
                      &lt;TabPane class=&quot;fade&quot; id=&quot;list-profile&quot;&gt;
                          Some placeholder content in a paragraph relating to &lt;strong&gt;&quot;Profile&quot;&lt;/strong&gt;. And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.
                      &lt;/TabPane&gt;
                      &lt;TabPane class=&quot;fade&quot; id=&quot;list-messages&quot;&gt;
                          Some placeholder content in a paragraph relating to &lt;strong&gt;&quot;Messages&quot;&lt;/strong&gt;. And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.
                      &lt;/TabPane&gt;
                      &lt;TabPane class=&quot;fade&quot; id=&quot;list-settings&quot;&gt;
                          Some placeholder content in a paragraph relating to &lt;strong&gt;&quot;Settings&quot;&lt;/strong&gt;. And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.
                      &lt;/TabPane&gt;
                  &lt;/TabContent&gt;
              &lt;/div&gt;
          &lt;/div&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Using data attributes</BlockTitle>
          <BlockText>You can activate a list group navigation without writing any JavaScript by simply specifying <code>data-bs-toggle="list"</code> or on an element. Use these data attributes on <code>ListGroupItem</code>.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
            <div role="tabpanel">
              <!-- List group -->
              <ListGroup tag="div" class="mb-4" id="myList">
                  <ListGroupItem actionable active data-bs-toggle="list" href="#home">Home</ListGroupItem>
                  <ListGroupItem actionable data-bs-toggle="list" href="#profile">Profile</ListGroupItem>
                  <ListGroupItem actionable data-bs-toggle="list" href="#messages">Messages</ListGroupItem>
                  <ListGroupItem actionable data-bs-toggle="list" href="#settings">Settings</ListGroupItem>
              </ListGroup>
              <!-- Tab panes -->
              <TabContent>
                  <TabPane class="active" id="home">
                      <strong>Home</strong> dolor sit amet consectetur adipisicing elit. A unde voluptatem repellat tenetur quasi voluptas magnam sed numquam et aliquam possimus qui, nesciunt similique animi quas totam, ratione illo corporis.
                  </TabPane>
                  <TabPane id="profile">
                      <strong>Profile</strong> dolor sit amet consectetur adipisicing elit. A unde voluptatem repellat tenetur quasi voluptas magnam sed numquam et aliquam possimus qui, nesciunt similique animi quas totam, ratione illo corporis.
                  </TabPane>
                  <TabPane id="messages">
                      <strong>Message</strong> dolor sit amet consectetur adipisicing elit. A unde voluptatem repellat tenetur quasi voluptas magnam sed numquam et aliquam possimus qui, nesciunt similique animi quas totam, ratione illo corporis.
                  </TabPane>
                  <TabPane id="settings">
                      <strong>Setting</strong> dolor sit amet consectetur adipisicing elit. A unde voluptatem repellat tenetur quasi voluptas magnam sed numquam et aliquam possimus qui, nesciunt similique animi quas totam, ratione illo corporis.
                  </TabPane>
              </TabContent>
          </div> 
        </CardBody>
        <CodePreview title="code example">
          &lt;div role=&quot;tabpanel&quot;&gt;
              &lt;ListGroup tag=&quot;div&quot; class=&quot;mb-4&quot; id=&quot;myList&quot;&gt;
                  &lt;ListGroupItem actionable active data-bs-toggle=&quot;list&quot; href=&quot;#home&quot;&gt;Home&lt;/ListGroupItem&gt;
                  &lt;ListGroupItem actionable data-bs-toggle=&quot;list&quot; href=&quot;#profile&quot;&gt;Profile&lt;/ListGroupItem&gt;
                  &lt;ListGroupItem actionable data-bs-toggle=&quot;list&quot; href=&quot;#messages&quot;&gt;Messages&lt;/ListGroupItem&gt;
                  &lt;ListGroupItem actionable data-bs-toggle=&quot;list&quot; href=&quot;#settings&quot;&gt;Settings&lt;/ListGroupItem&gt;
              &lt;/ListGroup&gt;
              &lt;TabContent&gt;
                  &lt;TabPane class=&quot;active&quot; id=&quot;home&quot;&gt;
                      &lt;strong&gt;Home&lt;/strong&gt; dolor sit amet consectetur adipisicing elit. A unde voluptatem repellat tenetur quasi voluptas magnam sed numquam et aliquam possimus qui, nesciunt similique animi quas totam, ratione illo corporis.
                  &lt;/TabPane&gt;
                  &lt;TabPane id=&quot;profile&quot;&gt;
                      &lt;strong&gt;Profile&lt;/strong&gt; dolor sit amet consectetur adipisicing elit. A unde voluptatem repellat tenetur quasi voluptas magnam sed numquam et aliquam possimus qui, nesciunt similique animi quas totam, ratione illo corporis.
                  &lt;/TabPane&gt;
                  &lt;TabPane id=&quot;messages&quot;&gt;
                      &lt;strong&gt;Message&lt;/strong&gt; dolor sit amet consectetur adipisicing elit. A unde voluptatem repellat tenetur quasi voluptas magnam sed numquam et aliquam possimus qui, nesciunt similique animi quas totam, ratione illo corporis.
                  &lt;/TabPane&gt;
                  &lt;TabPane id=&quot;settings&quot;&gt;
                      &lt;strong&gt;Setting&lt;/strong&gt; dolor sit amet consectetur adipisicing elit. A unde voluptatem repellat tenetur quasi voluptas magnam sed numquam et aliquam possimus qui, nesciunt similique animi quas totam, ratione illo corporis.
                  &lt;/TabPane&gt;
              &lt;/TabContent&gt;
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
import ListGroup from '@/components/uielements/list/ListGroup.vue';
import ListGroupItem from '@/components/uielements/list/ListGroupItem.vue';
import Badge from '@/components/uielements/badge/Badge.vue';
import TabContent from '@/components/uielements/tab/TabContent.vue';
import TabPane from '@/components/uielements/tab/TabPane.vue';

export default {
  name: 'ListGroupPage', 
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
    ListGroup,
    ListGroupItem,
    Badge,
    TabContent,
    TabPane
},
}
</script>
