<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Modal</BlockTitle>
        <BlockText>Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.</BlockText>
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
          <Button type="button" variant="primary" v-nk-modal="'#exampleModal'">
              Launch demo modal
          </Button>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button type=&quot;button&quot; variant=&quot;primary&quot; v-nk-modal=&quot;'#exampleModal'&quot;&gt;
              Launch demo modal
          &lt;/Button&gt;

          &lt;!-- Modal --&gt;
        &lt;ModalContainer animation=&quot;fade&quot; id=&quot;exampleModal&quot; tabindex=&quot;-1&quot; aria-labelledby=&quot;exampleModalLabel&quot;&gt;
            &lt;ModalDialog&gt;
                &lt;ModalContent&gt;
                    &lt;ModalHeader&gt;
                        &lt;h5 class=&quot;modal-title&quot; id=&quot;exampleModalLabel&quot;&gt;Modal title&lt;/h5&gt;
                        &lt;ButtonClose dismiss=&quot;modal&quot;&gt;&lt;/ButtonClose&gt;
                    &lt;/ModalHeader&gt;
                    &lt;ModalBody&gt;
                        Woo-hoo, you're reading this text in a modal!
                    &lt;/ModalBody&gt;
                    &lt;ModalFooter&gt;
                        &lt;Button type=&quot;button&quot; size=&quot;sm&quot; variant=&quot;secondary&quot; dismiss=&quot;modal&quot;&gt;Close&lt;/Button&gt;
                        &lt;Button type=&quot;button&quot; size=&quot;sm&quot; variant=&quot;primary&quot;&gt;Save changes&lt;/Button&gt;
                    &lt;/ModalFooter&gt;
                &lt;/ModalContent&gt;
            &lt;/ModalDialog&gt;
        &lt;/ModalContainer&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Static backdrop</BlockTitle>
        <BlockText>When backdrop is set to static, the modal will not close when clicking outside of it.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Button type="button" variant="primary" v-nk-modal="'#staticBackdrop'">
              Launch static backdrop modal
          </Button>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button type=&quot;button&quot; variant=&quot;primary&quot; v-nk-modal=&quot;'#staticBackdrop'&quot;&gt;
              Launch static backdrop modal
          &lt;/Button&gt;

          &lt;ModalContainer animation=&quot;fade&quot; id=&quot;staticBackdrop&quot; backdrop=&quot;static&quot; keyboard=&quot;false&quot; tabindex=&quot;-1&quot; aria-labelledby=&quot;staticBackdropLabel&quot;&gt;
      &lt;ModalDialog&gt;
          &lt;ModalContent&gt;
              &lt;ModalHeader&gt;
                  &lt;h5 class=&quot;modal-title&quot; id=&quot;staticBackdropLabel&quot;&gt;Modal title&lt;/h5&gt;
                  &lt;ButtonClose dismiss=&quot;modal&quot; aria-label=&quot;Close&quot;&gt;&lt;/ButtonClose&gt;
              &lt;/ModalHeader&gt;
              &lt;ModalBody&gt;
                  I will not close if you click outside of me. Don't even try to press escape key.
              &lt;/ModalBody&gt;
              &lt;ModalFooter&gt;
                  &lt;Button type=&quot;button&quot; size=&quot;sm&quot; variant=&quot;secondary&quot; dismiss=&quot;modal&quot;&gt;Close&lt;/Button&gt;
                  &lt;Button type=&quot;button&quot; size=&quot;sm&quot; variant=&quot;primary&quot;&gt;Understood&lt;/Button&gt;
              &lt;/ModalFooter&gt;
          &lt;/ModalContent&gt;
      &lt;/ModalDialog&gt;
  &lt;/ModalContainer&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Scrolling long content</BlockTitle>
        <BlockText>When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Button type="button" variant="primary" v-nk-modal="'#scrollable'">
              Launch static backdrop modal
          </Button>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button type=&quot;button&quot; variant=&quot;primary&quot; v-nk-modal=&quot;'#scrollable'&quot;&gt;
              Launch static backdrop modal
          &lt;/Button&gt;
          &lt;ModalContainer animation=&quot;fade&quot; id=&quot;scrollable&quot; keyboard=&quot;false&quot; tabindex=&quot;-1&quot; aria-labelledby=&quot;scrollableLabel&quot;&gt;
      &lt;ModalDialog scrollable&gt;
          &lt;ModalContent&gt;
              &lt;ModalHeader&gt;
                  &lt;h5 class=&quot;modal-title&quot; id=&quot;scrollableLabel&quot;&gt;Modal title&lt;/h5&gt;
                  &lt;ButtonClose dismiss=&quot;modal&quot; aria-label=&quot;Close&quot;&gt;&lt;/ButtonClose&gt;
              &lt;/ModalHeader&gt;
              &lt;ModalBody&gt;
                  This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
                  This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
                  This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
                  This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
                  This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
                  This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
                  This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
                  This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
                  This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
                  This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
              &lt;/ModalBody&gt;
              &lt;ModalFooter&gt;
                  &lt;Button type=&quot;button&quot; size=&quot;sm&quot; variant=&quot;secondary&quot; dismiss=&quot;modal&quot;&gt;Close&lt;/Button&gt;
                  &lt;Button type=&quot;button&quot; size=&quot;sm&quot; variant=&quot;primary&quot;&gt;Save changes&lt;/Button&gt;
              &lt;/ModalFooter&gt;
          &lt;/ModalContent&gt;
      &lt;/ModalDialog&gt;
  &lt;/ModalContainer&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Vertically centered</BlockTitle>
        <BlockText>Add <code>position="top"</code>, <code>position="bottom"</code> props to <code>ModalDialog</code> to vertically center the modal.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex gap g-3">
              <li> 
                  <Button type="button" variant="primary" v-nk-modal="'#exampleModalTop'">
                      Vertically top
                  </Button>
              </li>
              <li> 
                  <Button type="button" variant="primary" v-nk-modal="'#exampleModalBottom'">
                      Vertically bottom
                  </Button>
              </li>
          </ul>
          
        </CardBody>
        <CodePreview title="code example">
          &lt;Button type=&quot;button&quot; variant=&quot;primary&quot; v-nk-modal=&quot;'#exampleModalTop'&quot;&gt;
              Vertically top
          &lt;/Button&gt;
          &lt;ModalContainer animation=&quot;fade&quot; id=&quot;exampleModalTop&quot; keyboard=&quot;false&quot; tabindex=&quot;-1&quot; aria-labelledby=&quot;scrollableLabel&quot;&gt;
      &lt;ModalDialog position=&quot;top&quot;&gt;
          &lt;ModalContent&gt;
              &lt;ModalHeader&gt;
                  &lt;h5 class=&quot;modal-title&quot; id=&quot;scrollableLabel&quot;&gt;Modal title&lt;/h5&gt;
                  &lt;ButtonClose dismiss=&quot;modal&quot; aria-label=&quot;Close&quot;&gt;&lt;/ButtonClose&gt;
              &lt;/ModalHeader&gt;
              &lt;ModalBody&gt;
                  This is a vertically top modal.
              &lt;/ModalBody&gt;
              &lt;ModalFooter&gt;
                  &lt;Button type=&quot;button&quot; size=&quot;sm&quot; variant=&quot;secondary&quot; dismiss=&quot;modal&quot;&gt;Close&lt;/Button&gt;
                  &lt;Button type=&quot;button&quot; size=&quot;sm&quot; variant=&quot;primary&quot;&gt;Save changes&lt;/Button&gt;
              &lt;/ModalFooter&gt;
          &lt;/ModalContent&gt;
      &lt;/ModalDialog&gt;
  &lt;/ModalContainer&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Toggle between modals</BlockTitle>
        <BlockText>Toggle between multiple modals with some clever placement of the <code>data-bs-target</code> and <code>data-bs-toggle</code> attributes. For example, you could toggle a password reset modal from within an already open sign in modal. Please note multiple modals cannot be open at the same time—this method simply toggles between two separate modals.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Button type="button" variant="primary" v-nk-modal="'#exampleModalToggle'">
              Open first modal
          </Button>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button type=&quot;button&quot; variant=&quot;primary&quot; v-nk-modal=&quot;'#exampleModalToggle'&quot;&gt;
              Open first modal
          &lt;/Button&gt;

          &lt;ModalContainer animation=&quot;fade&quot; id=&quot;exampleModalToggle&quot; aria-labelledby=&quot;exampleModalToggleLabel&quot; tabindex=&quot;-1&quot;&gt;
      &lt;ModalDialog position=&quot;centered&quot;&gt;
          &lt;ModalContent&gt;
              &lt;ModalHeader&gt;
                  &lt;h5 class=&quot;modal-title&quot; id=&quot;exampleModalToggleLabel&quot;&gt;Modal 1&lt;/h5&gt;
                  &lt;ButtonClose dismiss=&quot;modal&quot; aria-label=&quot;Close&quot;&gt;&lt;/ButtonClose&gt;
              &lt;/ModalHeader&gt;
              &lt;ModalBody&gt;
                  Show a second modal and hide this one with the button below.
              &lt;/ModalBody&gt;
              &lt;ModalFooter&gt;
                  &lt;Button v-nk-modal=&quot;'#exampleModalToggle2'&quot;&gt;Open second modal&lt;/Button&gt;
              &lt;/ModalFooter&gt;
          &lt;/ModalContent&gt;
      &lt;/ModalDialog&gt;
  &lt;/ModalContainer&gt;
  
  &lt;ModalContainer animation=&quot;fade&quot; id=&quot;exampleModalToggle2&quot; aria-labelledby=&quot;exampleModalToggleLabel2&quot; tabindex=&quot;-1&quot;&gt;
      &lt;ModalDialog position=&quot;centered&quot;&gt;
          &lt;ModalContent&gt;
              &lt;ModalHeader&gt;
                  &lt;h5 class=&quot;modal-title&quot; id=&quot;exampleModalToggleLabel2&quot;&gt;Modal 2&lt;/h5&gt;
                  &lt;ButtonClose dismiss=&quot;modal&quot; aria-label=&quot;Close&quot;&gt;&lt;/ButtonClose&gt;
              &lt;/ModalHeader&gt;
              &lt;ModalBody&gt;
                  Hide this modal and show the first with the button below.
              &lt;/ModalBody&gt;
              &lt;ModalFooter&gt;
                  &lt;Button v-nk-modal=&quot;'#exampleModalToggle'&quot;&gt;Back to first&lt;/Button&gt;
              &lt;/ModalFooter&gt;
          &lt;/ModalContent&gt;
      &lt;/ModalDialog&gt;
  &lt;/ModalContainer&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Optional sizes</BlockTitle>
        <BlockText>Modals have three optional sizes, available via modifier props to be placed on a <code>ModalDialog</code>. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="table-responsive">
              <table class="table mb-5">
                  <thead>
                      <tr>
                      <th>Size</th>
                      <th>Props</th>
                      <th>Modal max-width</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td class="small">Small</td>
                          <td><code>size="sm"</code></td>
                          <td><code>300px</code></td>
                      </tr>
                      <tr>
                          <td class="small">Default</td>
                          <td><span class="text-muted small">None</span></td>
                          <td><code>500px</code></td>
                      </tr>
                      <tr>
                          <td class="small">Large</td>
                          <td><code>size="lg"</code></td>
                          <td><code>800px</code></td>
                      </tr>
                      <tr>
                          <td class="small">Extra large</td>
                          <td><code>size="xl"</code></td>
                          <td><code>1140px</code></td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <ul class="d-flex gap g-3">
              <li>
                  <Button type="button" variant="primary" v-nk-modal="'#exampleModalXl'">Extra large modal</Button>
              </li>
              <li>
                  <Button type="button" variant="primary" v-nk-modal="'#exampleModalLg'">Large modal</Button>
              </li>
              <li>
                  <Button type="button" variant="primary" v-nk-modal="'#exampleModalSm'">Small modal</Button>
              </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button type=&quot;button&quot; variant=&quot;primary&quot; v-nk-modal=&quot;'#exampleModalXl'&quot;&gt;Extra large modal&lt;/Button&gt;

        &lt;ModalContainer animation=&quot;fade&quot; id=&quot;exampleModalXl&quot; aria-labelledby=&quot;exampleModalXlLabel&quot; tabindex=&quot;-1&quot;&gt;
            &lt;ModalDialog size=&quot;xl&quot;&gt;
                &lt;ModalContent&gt;
                    &lt;ModalHeader&gt;
                        &lt;h5 class=&quot;modal-title&quot; id=&quot;exampleModalXlLabel&quot;&gt;Modal title&lt;/h5&gt;
                        &lt;ButtonClose dismiss=&quot;modal&quot; aria-label=&quot;Close&quot;&gt;&lt;/ButtonClose&gt;
                    &lt;/ModalHeader&gt;
                    &lt;ModalBody&gt;
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In id voluptatem fugiat autem sequi, rem modi earum provident eos corrupti.
                    &lt;/ModalBody&gt;
                &lt;/ModalContent&gt;
            &lt;/ModalDialog&gt;
        &lt;/ModalContainer&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Fullscreen Modal</BlockTitle>
        <BlockText>Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed on a <code>ModalDialog</code>.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="table-responsive">
              <table class="table mb-5">
                  <thead>
                      <tr>
                      <th>Props</th>
                      <th>Availability</th>
                      <th></th>
                      </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td><code>fullscreen</code></td>
                      <td>Always</td>
                      <td></td>
                  </tr>
                  <tr>
                      <td><code>fullscreen="sm"</code></td>
                      <td><code>576px</code></td>
                      <td></td>
                  </tr>
                  <tr>
                      <td><code>fullscreen="md"</code></td>
                      <td><code>768px</code></td>
                      <td></td>
                  </tr>
                  <tr>
                  <td><code>fullscreen="lg"</code></td>
                      <td><code>992px</code></td>
                      <td></td>
                  </tr>
                  <tr>
                      <td><code>fullscreen="xl"</code></td>
                      <td><code>1200px</code></td>
                      <td></td>
                  </tr>
                  <tr>
                      <td><code>fullscreen="xxl"</code></td>
                      <td><code>1400px</code></td>
                      <td></td>
                  </tr>
                  </tbody>
              </table>
          </div>
          <ul class="d-flex gap g-3">
            <li><Button type="button" variant="primary" v-nk-modal="'#exampleModalFullscreen'">Full screen</Button></li>
            <li><Button type="button" variant="primary" v-nk-modal="'#exampleModalFullscreenSm'">Full screen below sm</Button></li>
            <li><Button type="button" variant="primary" v-nk-modal="'#exampleModalFullscreenMd'">Full screen below md</Button></li>
            <li><Button type="button" variant="primary" v-nk-modal="'#exampleModalFullscreenLg'">Full screen below lg</Button></li>
            <li><Button type="button" variant="primary" v-nk-modal="'#exampleModalFullscreenXl'">Full screen below xl</Button></li>
            <li><Button type="button" variant="primary" v-nk-modal="'#exampleModalFullscreenXxl'">Full screen below xxl</Button></li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;Button type=&quot;button&quot; variant=&quot;primary&quot; v-nk-modal=&quot;'#exampleModalFullscreen'&quot;&gt;Full screen&lt;/Button&gt;
          &lt;ModalContainer animation=&quot;fade&quot; id=&quot;exampleModalFullscreen&quot; aria-labelledby=&quot;exampleModalFullscreenLabel&quot; tabindex=&quot;-1&quot;&gt;
      &lt;ModalDialog fullscreen&gt;
        &lt;ModalContent&gt;
          &lt;ModalHeader&gt;
            &lt;h5 class=&quot;modal-title&quot; id=&quot;exampleModalFullscreenLabel&quot;&gt;Modal title&lt;/h5&gt;
            &lt;ButtonClose dismiss=&quot;modal&quot; aria-label=&quot;Close&quot;&gt;&lt;/ButtonClose&gt;
          &lt;/ModalHeader&gt;
          &lt;ModalBody&gt;
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In id voluptatem fugiat autem sequi, rem modi earum provident eos corrupti.
          &lt;/ModalBody&gt;
          &lt;ModalFooter&gt;
              &lt;Button type=&quot;button&quot; size=&quot;sm&quot; variant=&quot;secondary&quot; dismiss=&quot;modal&quot;&gt;Close&lt;/Button&gt;
          &lt;/ModalFooter&gt;
        &lt;/ModalContent&gt;
      &lt;/ModalDialog&gt;
    &lt;/ModalContainer&gt;
        </CodePreview>
      </Card>
    </Block>
  </Layout>

  <!-- Modal -->
  <ModalContainer animation="fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel">
      <ModalDialog>
          <ModalContent>
              <ModalHeader>
                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                  <ButtonClose dismiss="modal"></ButtonClose>
              </ModalHeader>
              <ModalBody>
                  Woo-hoo, you're reading this text in a modal!
              </ModalBody>
              <ModalFooter>
                  <Button type="button" size="sm" variant="secondary" dismiss="modal">Close</Button>
                  <Button type="button" size="sm" variant="primary">Save changes</Button>
              </ModalFooter>
          </ModalContent>
      </ModalDialog>
  </ModalContainer>

  <!-- Modal -->
  <ModalContainer animation="fade" id="staticBackdrop" backdrop="static" keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel">
      <ModalDialog>
          <ModalContent>
              <ModalHeader>
                  <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                  <ButtonClose dismiss="modal" aria-label="Close"></ButtonClose>
              </ModalHeader>
              <ModalBody>
                  I will not close if you click outside of me. Don't even try to press escape key.
              </ModalBody>
              <ModalFooter>
                  <Button type="button" size="sm" variant="secondary" dismiss="modal">Close</Button>
                  <Button type="button" size="sm" variant="primary">Understood</Button>
              </ModalFooter>
          </ModalContent>
      </ModalDialog>
  </ModalContainer>
  
  <!-- Modal -->
  <ModalContainer animation="fade" id="scrollable" keyboard="false" tabindex="-1" aria-labelledby="scrollableLabel">
      <ModalDialog scrollable>
          <ModalContent>
              <ModalHeader>
                  <h5 class="modal-title" id="scrollableLabel">Modal title</h5>
                  <ButtonClose dismiss="modal" aria-label="Close"></ButtonClose>
              </ModalHeader>
              <ModalBody>
                  This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
                  This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
                  This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
                  This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
                  This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
                  This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
                  This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
                  This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
                  This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
                  This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
              </ModalBody>
              <ModalFooter>
                  <Button type="button" size="sm" variant="secondary" dismiss="modal">Close</Button>
                  <Button type="button" size="sm" variant="primary">Save changes</Button>
              </ModalFooter>
          </ModalContent>
      </ModalDialog>
  </ModalContainer>

  <!-- Modal top -->
  <ModalContainer animation="fade" id="exampleModalTop" keyboard="false" tabindex="-1" aria-labelledby="scrollableLabel">
      <ModalDialog position="top">
          <ModalContent>
              <ModalHeader>
                  <h5 class="modal-title" id="scrollableLabel">Modal title</h5>
                  <ButtonClose dismiss="modal" aria-label="Close"></ButtonClose>
              </ModalHeader>
              <ModalBody>
                  This is a vertically top modal.
              </ModalBody>
              <ModalFooter>
                  <Button type="button" size="sm" variant="secondary" dismiss="modal">Close</Button>
                  <Button type="button" size="sm" variant="primary">Save changes</Button>
              </ModalFooter>
          </ModalContent>
      </ModalDialog>
  </ModalContainer>

  <!-- Modal bottom -->
  <ModalContainer animation="fade" id="exampleModalBottom" keyboard="false" tabindex="-1" aria-labelledby="scrollableLabel">
      <ModalDialog position="bottom">
          <ModalContent>
              <ModalHeader>
                  <h5 class="modal-title" id="scrollableLabel">Modal title</h5>
                  <ButtonClose dismiss="modal" aria-label="Close"></ButtonClose>
              </ModalHeader>
              <ModalBody>
                  This is a vertically bottom modal.
              </ModalBody>
              <ModalFooter>
                  <Button type="button" size="sm" variant="secondary" dismiss="modal">Close</Button>
                  <Button type="button" size="sm" variant="primary">Save changes</Button>
              </ModalFooter>
          </ModalContent>
      </ModalDialog>
  </ModalContainer>

  <!-- Toggle Between Modal -->
  <ModalContainer animation="fade" id="exampleModalToggle" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
      <ModalDialog position="centered">
          <ModalContent>
              <ModalHeader>
                  <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
                  <ButtonClose dismiss="modal" aria-label="Close"></ButtonClose>
              </ModalHeader>
              <ModalBody>
                  Show a second modal and hide this one with the button below.
              </ModalBody>
              <ModalFooter>
                  <Button v-nk-modal="'#exampleModalToggle2'">Open second modal</Button>
              </ModalFooter>
          </ModalContent>
      </ModalDialog>
  </ModalContainer>
  
  <ModalContainer animation="fade" id="exampleModalToggle2" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
      <ModalDialog position="centered">
          <ModalContent>
              <ModalHeader>
                  <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
                  <ButtonClose dismiss="modal" aria-label="Close"></ButtonClose>
              </ModalHeader>
              <ModalBody>
                  Hide this modal and show the first with the button below.
              </ModalBody>
              <ModalFooter>
                  <Button v-nk-modal="'#exampleModalToggle'">Back to first</Button>
              </ModalFooter>
          </ModalContent>
      </ModalDialog>
  </ModalContainer>
  <!-- modal xl -->
  <ModalContainer animation="fade" id="exampleModalXl" aria-labelledby="exampleModalXlLabel" tabindex="-1">
      <ModalDialog size="xl">
          <ModalContent>
              <ModalHeader>
                  <h5 class="modal-title" id="exampleModalXlLabel">Modal title</h5>
                  <ButtonClose dismiss="modal" aria-label="Close"></ButtonClose>
              </ModalHeader>
              <ModalBody>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In id voluptatem fugiat autem sequi, rem modi earum provident eos corrupti.
              </ModalBody>
          </ModalContent>
      </ModalDialog>
  </ModalContainer>

  <!-- modal lg -->
  <ModalContainer animation="fade" id="exampleModalLg" aria-labelledby="exampleModalLgLabel" tabindex="-1">
      <ModalDialog size="lg">
          <ModalContent>
              <ModalHeader>
                  <h5 class="modal-title" id="exampleModalLgLabel">Modal title</h5>
                  <ButtonClose dismiss="modal" aria-label="Close"></ButtonClose>
              </ModalHeader>
              <ModalBody>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In id voluptatem fugiat autem sequi, rem modi earum provident eos corrupti.
              </ModalBody>
          </ModalContent>
      </ModalDialog>
  </ModalContainer>

  <!-- modal sm -->
  <ModalContainer animation="fade" id="exampleModalSm" aria-labelledby="exampleModalSmLabel" tabindex="-1">
      <ModalDialog size="sm">
          <ModalContent>
              <ModalHeader>
                  <h5 class="modal-title" id="exampleModalSmLabel">Modal title</h5>
                  <ButtonClose dismiss="modal" aria-label="Close"></ButtonClose>
              </ModalHeader>
              <ModalBody>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In id voluptatem fugiat autem sequi
              </ModalBody>
          </ModalContent>
      </ModalDialog>
  </ModalContainer>

  <!-- modal-fullscreen -->
  <ModalContainer animation="fade" id="exampleModalFullscreen" aria-labelledby="exampleModalFullscreenLabel" tabindex="-1">
      <ModalDialog fullscreen>
        <ModalContent>
          <ModalHeader>
            <h5 class="modal-title" id="exampleModalFullscreenLabel">Modal title</h5>
            <ButtonClose dismiss="modal" aria-label="Close"></ButtonClose>
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In id voluptatem fugiat autem sequi, rem modi earum provident eos corrupti.
          </ModalBody>
          <ModalFooter>
              <Button type="button" size="sm" variant="secondary" dismiss="modal">Close</Button>
          </ModalFooter>
        </ModalContent>
      </ModalDialog>
    </ModalContainer>

  <!-- modal-dialog modal-fullscreen-sm-down -->
  <ModalContainer animation="fade" id="exampleModalFullscreenSm" aria-labelledby="exampleModalFullscreenSmLabel" tabindex="-1">
      <ModalDialog fullscreen="sm">
        <ModalContent>
          <ModalHeader>
            <h5 class="modal-title" id="exampleModalFullscreenSmLabel">Modal title</h5>
            <ButtonClose dismiss="modal" aria-label="Close"></ButtonClose>
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In id voluptatem fugiat autem sequi, rem modi earum provident eos corrupti.
          </ModalBody>
        </ModalContent>
      </ModalDialog>
    </ModalContainer>

  <!-- modal md -->
  <ModalContainer animation="fade" id="exampleModalFullscreenMd" aria-labelledby="exampleModalFullscreenMdLabel" tabindex="-1">
      <ModalDialog fullscreen="md">
        <ModalContent>
          <ModalHeader>
            <h5 class="modal-title" id="exampleModalFullscreenMdLabel">Modal title</h5>
            <ButtonClose dismiss="modal" aria-label="Close"></ButtonClose>
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In id voluptatem fugiat autem sequi
          </ModalBody>
        </ModalContent>
      </ModalDialog>
  </ModalContainer>

  <!-- modal lg -->
  <ModalContainer animation="fade" id="exampleModalFullscreenLg" aria-labelledby="exampleModalFullscreenLgLabel" tabindex="-1">
      <ModalDialog fullscreen="lg">
        <ModalContent>
          <ModalHeader>
            <h5 class="modal-title" id="exampleModalFullscreenLgLabel">Modal title</h5>
            <ButtonClose dismiss="modal" aria-label="Close"></ButtonClose>
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In id voluptatem fugiat autem sequi
          </ModalBody>
        </ModalContent>
      </ModalDialog>
  </ModalContainer>

  <!-- modal xl -->
  <ModalContainer animation="fade" id="exampleModalFullscreenXl" aria-labelledby="exampleModalFullscreenXlLabel" tabindex="-1">
      <ModalDialog fullscreen="xl">
        <ModalContent>
          <ModalHeader>
            <h5 class="modal-title" id="exampleModalFullscreenXlLabel">Modal title</h5>
            <ButtonClose dismiss="modal" aria-label="Close"></ButtonClose>
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In id voluptatem fugiat autem sequi
          </ModalBody>
        </ModalContent>
      </ModalDialog>
  </ModalContainer>

  <!-- modal xxl -->
  <ModalContainer animation="fade" id="exampleModalFullscreenXxl" aria-labelledby="exampleModalFullscreenXxlLabel" tabindex="-1">
      <ModalDialog fullscreen="xxl">
        <ModalContent>
          <ModalHeader>
            <h5 class="modal-title" id="exampleModalFullscreenXxlLabel">Modal title</h5>
            <ButtonClose dismiss="modal" aria-label="Close"></ButtonClose>
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In id voluptatem fugiat autem sequi
          </ModalBody>
        </ModalContent>
      </ModalDialog>
  </ModalContainer>

</template>

<script>
import Layout from '@/layout/Index.vue'
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockText } from '@/components/block/Block.vue';
import Card from '@/components/uielements/card/Card.vue';
import CardBody from '@/components/uielements/card/CardBody.vue';
import CodePreview from '@/components/code-preview/CodePreview.vue';
import Button from '@/components/uielements/button/Button.vue';
import ModalContainer from '@/components/uielements/modal/ModalContainer.vue';
import ModalDialog from '@/components/uielements/modal/ModalDialog.vue';
import ModalContent from '@/components/uielements/modal/ModalContent.vue';
import ModalHeader from '@/components/uielements/modal/ModalHeader.vue';
import ModalBody from '@/components/uielements/modal/ModalBody.vue';
import ModalFooter from '@/components/uielements/modal/ModalFooter.vue';
import ButtonClose from '@/components/uielements/button-close/ButtonClose.vue';

export default {
  name: 'ModalPage', 
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
    ModalContainer,
    ModalDialog,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ButtonClose
  },
}
</script>
