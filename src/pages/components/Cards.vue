<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
    <BlockHeadContent>
        <BlockTitle tag="h1">Cards</BlockTitle>
        <BlockText>Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.</BlockText>
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
            <div class="row g-gs">
                <div class="col-md-6 col-lg-4">
                    <Card>
                        <Img src="/images/preview/b.jpg" class="card-img-top"/>
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button href="#" variant="primary">Go somewhere</Button>
                        </CardBody>
                    </Card>
                </div>
                <div class="col-md-6 col-lg-4">
                    <Card>
                        <Img src="/images/preview/b.jpg" class="card-img-top"/>
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button href="#" variant="primary">Go somewhere</Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </CardBody>
        <CodePreview title="code example">
            &lt;Card&gt;
                    &lt;Img src=&quot;/images/preview/b.jpg&quot; class=&quot;card-img-top&quot;/&gt;
                    &lt;CardBody&gt;
                        &lt;CardTitle&gt;Card title&lt;/CardTitle&gt;
                        &lt;CardText&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/CardText&gt;
                        &lt;Button href=&quot;#&quot; variant=&quot;primary&quot;&gt;Go somewhere&lt;/Button&gt;
                    &lt;/CardBody&gt;
                &lt;/Card&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Body</BlockTitle>
        <BlockText>The building block of a card is the <code>CardBody</code> component. Use it whenever you need a padded section within a card.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
        <Card>
            <CardBody>
                This is some text within a card body.
            </CardBody>
        </Card>
        </CardBody>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Titles, text, and links</BlockTitle>
        <BlockText>Card titles are used by adding <code>CardTitle</code> to a <code>h*</code> tag. In the same way, links are added and placed next to each other by adding <code>CardLink</code> to an <code>a</code> tag. <br/> Subtitles are used by adding a <code>CardSubtitle</code> to a <code>h*</code> tag. If the <code>CardTitle</code> and the <code>CardSubtitle</code> items are placed in a <code>CardBody</code> item, the card title and subtitle are aligned nicely.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
        <div class="row">
            <div class="col-lg-3">
                <Card>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle class="mb-2 text-muted">Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <CardLink href="#">Card link</CardLink>
                        <CardLink href="#">Another link</CardLink>
                    </CardBody>
                </Card>
            </div>
        </div>
        </CardBody>
        <CodePreview title="code example">
            &lt;Card&gt;
                    &lt;CardBody&gt;
                        &lt;CardTitle&gt;Card title&lt;/CardTitle&gt;
                        &lt;CardSubtitle class=&quot;mb-2 text-muted&quot;&gt;Card subtitle&lt;/CardSubtitle&gt;
                        &lt;CardText&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/CardText&gt;
                        &lt;CardLink href=&quot;#&quot;&gt;Card link&lt;/CardLink&gt;
                        &lt;CardLink href=&quot;#&quot;&gt;Another link&lt;/CardLink&gt;
                    &lt;/CardBody&gt;
                &lt;/Card&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Images</BlockTitle>
        <BlockText><code>.card-img-top</code> places an image to the top of the card. With <code>CardText</code>, text can be added to the card. Text within <code>.card-text</code> can also be styled with the standard HTML tags.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
        <div class="row">
            <div class="col-lg-3">
                <Card>
                    <Img src="/images/preview/b.jpg" class="card-img-top"/>
                    <CardBody>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
        </CardBody>
        <CodePreview title="code example">
            &lt;Card&gt;
                    &lt;Img src=&quot;/images/preview/b.jpg&quot; class=&quot;card-img-top&quot;/&gt;
                    &lt;CardBody&gt;
                        &lt;CardText&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/CardText&gt;
                    &lt;/CardBody&gt;
                &lt;/Card&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>List groups</BlockTitle>
        <BlockText>Create lists of content in a card with a flush list group. use the <code>flush</code> prop</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
        <div class="row g-gs align-items-center">
            <div class="col-md-4">
                <Card>
                    <ListGroup flush>
                        <ListGroupItem>An item</ListGroupItem>
                        <ListGroupItem>A second item</ListGroupItem>
                        <ListGroupItem>A third item</ListGroupItem>
                        <ListGroupItem>A fourth item</ListGroupItem>
                    </ListGroup>
                </Card>
            </div>
            <div class="col-md-4">
                <Card>
                    <CardHeader>
                        Card header
                    </CardHeader>
                    <ListGroup flush>
                        <ListGroupItem>An item</ListGroupItem>
                        <ListGroupItem>A second item</ListGroupItem>
                        <ListGroupItem>A third item</ListGroupItem>
                    </ListGroup>
                </Card>
            </div>
            <div class="col-md-4">
                <Card>
                    <ListGroup flush>
                        <ListGroupItem>An item</ListGroupItem>
                        <ListGroupItem>A second item</ListGroupItem>
                        <ListGroupItem>A third item</ListGroupItem>
                    </ListGroup>
                    <CardFooter>
                        Card footer
                    </CardFooter>
                </Card>
            </div>
        </div>
        </CardBody>
        <CodePreview title="code example">
            &lt;Card&gt;
                    &lt;ListGroup flush&gt;
                        &lt;ListGroupItem&gt;An item&lt;/ListGroupItem&gt;
                        &lt;ListGroupItem&gt;A second item&lt;/ListGroupItem&gt;
                        &lt;ListGroupItem&gt;A third item&lt;/ListGroupItem&gt;
                        &lt;ListGroupItem&gt;A fourth item&lt;/ListGroupItem&gt;
                    &lt;/ListGroup&gt;
                &lt;/Card&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Kitchen sink</BlockTitle>
        <BlockText>Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
        <div class="row">
            <div class="col-md-3">
                <Card>
                    <Img src="/images/preview/b.jpg" class="card-img-top"/>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                    <ListGroup flush>
                        <ListGroupItem>An item</ListGroupItem>
                        <ListGroupItem>A second item</ListGroupItem>
                        <ListGroupItem>A third item</ListGroupItem>
                    </ListGroup>
                    <CardBody>
                        <CardLink href="#">Card link</CardLink>
                        <CardLink href="#">Another link</CardLink>
                    </CardBody>
                </Card>
            </div>
        </div>
        </CardBody>
        <CodePreview title="code example">
            &lt;Card&gt;
                    &lt;Img src=&quot;/images/preview/b.jpg&quot; class=&quot;card-img-top&quot;/&gt;
                    &lt;CardBody&gt;
                        &lt;CardTitle&gt;Card title&lt;/CardTitle&gt;
                        &lt;CardText&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/CardText&gt;
                    &lt;/CardBody&gt;
                    &lt;ListGroup flush&gt;
                        &lt;ListGroupItem&gt;An item&lt;/ListGroupItem&gt;
                        &lt;ListGroupItem&gt;A second item&lt;/ListGroupItem&gt;
                        &lt;ListGroupItem&gt;A third item&lt;/ListGroupItem&gt;
                    &lt;/ListGroup&gt;
                    &lt;CardBody&gt;
                        &lt;CardLink href=&quot;#&quot;&gt;Card link&lt;/CardLink&gt;
                        &lt;CardLink href=&quot;#&quot;&gt;Another link&lt;/CardLink&gt;
                    &lt;/CardBody&gt;
                &lt;/Card&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Header and footer</BlockTitle>
        <BlockText>Add an optional header and/or footer within a card.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
        <div class="row">
            <div class="col-md-6">
                <Card>
                    <CardHeader>
                        Card header
                    </CardHeader>
                    <CardBody>
                        <CardTitle>Special title treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button href="#" variant="primary">Go somewhere</Button>
                    </CardBody>
                </Card>
            </div>
            <div class="col-md-6">
                <Card class="text-center">
                    <CardHeader>
                        Card header
                    </CardHeader>
                    <CardBody>
                        <CardTitle>Special title treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button href="#" variant="primary">Go somewhere</Button>
                    </CardBody>
                    <CardFooter class="text-muted">
                        2 days ago
                    </CardFooter>
                </Card>
            </div>
        </div>
        </CardBody>
        <CodePreview title="code example">
            &lt;Card&gt;
                    &lt;CardHeader&gt;
                        Card header
                    &lt;/CardHeader&gt;
                    &lt;CardBody&gt;
                        &lt;CardTitle&gt;Special title treatment&lt;/CardTitle&gt;
                        &lt;CardText&gt;With supporting text below as a natural lead-in to additional content.&lt;/CardText&gt;
                        &lt;Button href=&quot;#&quot; variant=&quot;primary&quot;&gt;Go somewhere&lt;/Button&gt;
                    &lt;/CardBody&gt;
                &lt;/Card&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Sizing</BlockTitle>
        <BlockText>Cards assume no specific width to start, so they’ll be 100% wide unless otherwise stated. You can change this as needed with custom CSS, grid classes, grid Sass mixins, or utilities.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
            <div class="row g-gs">
                <div class="col-sm-6">
                    <Card>
                        <CardBody>
                            <CardTitle>Special title treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button href="#" variant="primary">Go somewhere</Button>
                        </CardBody>
                    </Card>
                </div>
                <div class="col-sm-6">
                    <Card>
                        <CardBody>
                            <CardTitle>Special title treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button href="#" variant="primary">Go somewhere</Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </CardBody>
        <CodePreview title="code example">
            &lt;div class=&quot;row g-gs&quot;&gt;
            &lt;div class=&quot;col-sm-6&quot;&gt;
                &lt;Card&gt;
                    &lt;CardBody&gt;
                        &lt;CardTitle&gt;Special title treatment&lt;/CardTitle&gt;
                        &lt;CardText&gt;With supporting text below as a natural lead-in to additional content.&lt;/CardText&gt;
                        &lt;Button href=&quot;#&quot; variant=&quot;primary&quot;&gt;Go somewhere&lt;/Button&gt;
                    &lt;/CardBody&gt;
                &lt;/Card&gt;
            &lt;/div&gt;
            &lt;div class=&quot;col-sm-6&quot;&gt;
                &lt;Card&gt;
                    &lt;CardBody&gt;
                        &lt;CardTitle&gt;Special title treatment&lt;/CardTitle&gt;
                        &lt;CardText&gt;With supporting text below as a natural lead-in to additional content.&lt;/CardText&gt;
                        &lt;Button href=&quot;#&quot; variant=&quot;primary&quot;&gt;Go somewhere&lt;/Button&gt;
                    &lt;/CardBody&gt;
                &lt;/Card&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Using utilities</BlockTitle>
        <BlockText>Use our handful of available sizing utilities to quickly set a card’s width.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
        <Card class="w-75 mb-4">
            <CardBody>
                <CardTitle>Special title treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button href="#" variant="primary">Go somewhere</Button>
            </CardBody>
        </Card>
        <Card class="w-50">
            <CardBody>
                <CardTitle>Special title treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button href="#" variant="primary">Go somewhere</Button>
            </CardBody>
        </Card>
        </CardBody>
        <CodePreview title="code example">
            &lt;Card class=&quot;w-75 mb-4&quot;&gt;
            &lt;CardBody&gt;
                &lt;CardTitle&gt;Special title treatment&lt;/CardTitle&gt;
                &lt;CardText&gt;With supporting text below as a natural lead-in to additional content.&lt;/CardText&gt;
                &lt;Button href=&quot;#&quot; variant=&quot;primary&quot;&gt;Go somewhere&lt;/Button&gt;
            &lt;/CardBody&gt;
        &lt;/Card&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Text alignment </BlockTitle>
        <BlockText>You can quickly change the text alignment of any card</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
        <div class="row g-gs">
            <div class="col-lg-3">
                <Card>
                    <CardBody>
                        <CardTitle>Special title treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button href="#" variant="primary">Go somewhere</Button>
                    </CardBody>
                </Card>
            </div>
            <div class="col-lg-3">
                <Card class="text-center">
                    <CardBody>
                        <CardTitle>Special title treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button href="#" variant="primary">Go somewhere</Button>
                    </CardBody>
                </Card>
            </div>
            <div class="col-lg-3">
                <Card class="text-end">
                    <CardBody>
                        <CardTitle>Special title treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button href="#" variant="primary">Go somewhere</Button>
                    </CardBody>
                </Card>
            </div>
        </div>
        </CardBody>
        <CodePreview title="code example">
            &lt;Card class=&quot;text-center&quot;&gt;
                    &lt;CardBody&gt;
                        &lt;CardTitle&gt;Special title treatment&lt;/CardTitle&gt;
                        &lt;CardText&gt;With supporting text below as a natural lead-in to additional content.&lt;/CardText&gt;
                        &lt;Button href=&quot;#&quot; variant=&quot;primary&quot;&gt;Go somewhere&lt;/Button&gt;
                    &lt;/CardBody&gt;
                &lt;/Card&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Navigation</BlockTitle>
        <BlockText>Add some navigation to a card’s header (or block) with Bootstrap’s nav components</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
        <Card class="text-center mb-4">
            <CardHeader>
                <Nav class="nav-tabs card-header-tabs">
                    <NavItem>
                        <NavLink class="active">Active</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink class="disabled">Disabled</NavLink>
                    </NavItem>
                </Nav>
            </CardHeader>
            <CardBody>
                <CardTitle>Special title treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button href="#" variant="primary">Go somewhere</Button>
            </CardBody>
        </Card>
        <Card class="text-center">
            <CardHeader>
                <Nav class="nav-pills card-header-pills">
                    <NavItem>
                        <NavLink class="active">Active</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink class="disabled">Disabled</NavLink>
                    </NavItem>
                </Nav>
            </CardHeader>
            <CardBody>
                <CardTitle>Special title treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button href="#" variant="primary">Go somewhere</Button>
            </CardBody>
        </Card>
        </CardBody>
        <CodePreview title="code example">
           &lt;Card class=&quot;text-center mb-4&quot;&gt;
            &lt;CardHeader&gt;
                &lt;Nav class=&quot;nav-tabs card-header-tabs&quot;&gt;
                    &lt;NavItem&gt;
                        &lt;NavLink class=&quot;active&quot;&gt;Active&lt;/NavLink&gt;
                    &lt;/NavItem&gt;
                    &lt;NavItem&gt;
                        &lt;NavLink&gt;Link&lt;/NavLink&gt;
                    &lt;/NavItem&gt;
                    &lt;NavItem&gt;
                        &lt;NavLink class=&quot;disabled&quot;&gt;Disabled&lt;/NavLink&gt;
                    &lt;/NavItem&gt;
                &lt;/Nav&gt;
            &lt;/CardHeader&gt;
            &lt;CardBody&gt;
                &lt;CardTitle&gt;Special title treatment&lt;/CardTitle&gt;
                &lt;CardText&gt;With supporting text below as a natural lead-in to additional content.&lt;/CardText&gt;
                &lt;Button href=&quot;#&quot; variant=&quot;primary&quot;&gt;Go somewhere&lt;/Button&gt;
            &lt;/CardBody&gt;
        &lt;/Card&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Image caps</BlockTitle>
        <BlockText>Similar to headers and footers, cards can include top and bottom “image caps”—images at the top or bottom of a card.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
        <div class="row">
            <div class="col-lg-3">
                <Card>
                    <Img src="/images/preview/b.jpg" class="card-img-top"/>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <CardText><small class="text-muted">Last updated 3 mins ago</small></CardText>
                    </CardBody>
                </Card>
            </div>
            <div class="col-lg-3">
                <Card>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <CardText><small class="text-muted">Last updated 3 mins ago</small></CardText>
                    </CardBody>
                    <Img src="/images/preview/b.jpg" class="card-img-bottom"/>
                </Card>
            </div>
        </div>
        </CardBody>
        <CodePreview title="code example">
            &lt;div class=&quot;row&quot;&gt;
            &lt;div class=&quot;col-lg-3&quot;&gt;
                &lt;Card&gt;
                    &lt;Img src=&quot;/images/preview/b.jpg&quot; class=&quot;card-img-top&quot;/&gt;
                    &lt;CardBody&gt;
                        &lt;CardTitle&gt;Card title&lt;/CardTitle&gt;
                        &lt;CardText&gt;This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.&lt;/CardText&gt;
                        &lt;CardText&gt;&lt;small class=&quot;text-muted&quot;&gt;Last updated 3 mins ago&lt;/small&gt;&lt;/CardText&gt;
                    &lt;/CardBody&gt;
                &lt;/Card&gt;
            &lt;/div&gt;
            &lt;div class=&quot;col-lg-3&quot;&gt;
                &lt;Card&gt;
                    &lt;CardBody&gt;
                        &lt;CardTitle&gt;Card title&lt;/CardTitle&gt;
                        &lt;CardText&gt;This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.&lt;/CardText&gt;
                        &lt;CardText&gt;&lt;small class=&quot;text-muted&quot;&gt;Last updated 3 mins ago&lt;/small&gt;&lt;/CardText&gt;
                    &lt;/CardBody&gt;
                    &lt;Img src=&quot;/images/preview/b.jpg&quot; class=&quot;card-img-bottom&quot;/&gt;
                &lt;/Card&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Image overlays</BlockTitle>
        <BlockText>Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need additional styles or utilities.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
        <div class="row">
            <div class="col-lg-5">
                <Card>
                    <Img src="/images/preview/b.jpg" class="card-img-top"/>
                    <div class="card-img-overlay">
                        <CardTitle>Card title</CardTitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <CardText>Last updated 3 mins ago</CardText>
                    </div>
                </Card>
            </div>
        </div>
        </CardBody>
        <CodePreview title="code example">
            &lt;Card&gt;
                    &lt;Img src=&quot;/images/preview/b.jpg&quot; class=&quot;card-img-top&quot;/&gt;
                    &lt;div class=&quot;card-img-overlay&quot;&gt;
                        &lt;CardTitle&gt;Card title&lt;/CardTitle&gt;
                        &lt;CardText&gt;This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.&lt;/CardText&gt;
                        &lt;CardText&gt;Last updated 3 mins ago&lt;/CardText&gt;
                    &lt;/div&gt;
                &lt;/Card&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Horizontal</BlockTitle>
        <BlockText>Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with <code>.g-0</code> and use <code>.col-md-*</code> classes to make the card horizontal at the md breakpoint. Further adjustments may be needed depending on your card content.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
        <div class="row">
            <div class="col-lg-6">
                <Card>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="/images/preview/b.jpg" class="h-100 rounded-start"/>
                        </div>
                        <div class="col-md-8">
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <CardText><small class="text-muted">Last updated 3 mins ago</small></CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
        </CardBody>
        <CodePreview title="code example">
            &lt;div class=&quot;row&quot;&gt;
            &lt;div class=&quot;col-lg-6&quot;&gt;
                &lt;Card&gt;
                    &lt;div class=&quot;row g-0&quot;&gt;
                        &lt;div class=&quot;col-md-4&quot;&gt;
                            &lt;img src=&quot;/images/preview/b.jpg&quot; class=&quot;h-100 rounded-start&quot;/&gt;
                        &lt;/div&gt;
                        &lt;div class=&quot;col-md-8&quot;&gt;
                            &lt;CardBody&gt;
                                &lt;CardTitle&gt;Card title&lt;/CardTitle&gt;
                                &lt;CardText&gt;This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.&lt;/CardText&gt;
                                &lt;CardText&gt;&lt;small class=&quot;text-muted&quot;&gt;Last updated 3 mins ago&lt;/small&gt;&lt;/CardText&gt;
                            &lt;/CardBody&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/Card&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Card styles</BlockTitle>
        <BlockText>Cards include various options for customizing their backgrounds, borders, and color. use <code>variant=""</code> prop</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
        <div class="row g-gs">
            <div class="col-lg-3">
                <Card variant="primary">
                    <CardHeader>Header</CardHeader>
                    <CardBody>
                        <CardTitle tag="h5" class="text-white">Primary card title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div class="col-lg-3">
                <Card variant="secondary">
                    <CardHeader>Header</CardHeader>
                    <CardBody>
                        <CardTitle tag="h5" class="text-white">Secondary card title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div class="col-lg-3">
                <Card variant="success">
                    <CardHeader>Header</CardHeader>
                    <CardBody>
                        <CardTitle tag="h5" class="text-white">Success card title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div class="col-lg-3">
                <Card variant="danger">
                    <CardHeader>Header</CardHeader>
                    <CardBody>
                        <CardTitle tag="h5" class="text-white">Danger card title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div class="col-lg-3">
                <Card variant="warning">
                    <CardHeader>Header</CardHeader>
                    <CardBody>
                        <CardTitle tag="h5">Warning card title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div class="col-lg-3">
                <Card variant="info">
                    <CardHeader>Header</CardHeader>
                    <CardBody>
                        <CardTitle tag="h5" class="text-white">Info card title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div class="col-lg-3">
                <Card variant="light">
                    <CardHeader>Header</CardHeader>
                    <CardBody>
                        <CardTitle tag="h5">Light card title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div class="col-lg-3">
                <Card variant="dark">
                    <CardHeader>Header</CardHeader>
                    <CardBody>
                        <CardTitle tag="h5" class="text-white">Dark card title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
        </CardBody>
        <CodePreview title="code example">
            &lt;Card variant=&quot;primary&quot;&gt;
                    &lt;CardHeader&gt;Header&lt;/CardHeader&gt;
                    &lt;CardBody&gt;
                        &lt;CardTitle tag=&quot;h5&quot; class=&quot;text-white&quot;&gt;Primary card title&lt;/CardTitle&gt;
                        &lt;CardText&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/CardText&gt;
                    &lt;/CardBody&gt;
                &lt;/Card&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Border</BlockTitle>
        <BlockText>Use <code>border-variant=""</code> prop to change just the border-color of a card.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
        <div class="row g-gs">
            <div class="col-lg-3">
                <Card border-variant="primary">
                    <CardHeader>Header</CardHeader>
                    <CardBody class="text-primary">
                        <CardTitle tag="h5">Primary card title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div class="col-lg-3">
                <Card border-variant="secondary">
                    <CardHeader>Header</CardHeader>
                    <CardBody class="text-secondary">
                        <CardTitle tag="h5">Secondary card title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div class="col-lg-3">
                <Card border-variant="success">
                    <CardHeader>Header</CardHeader>
                    <CardBody class="text-success">
                        <CardTitle tag="h5">Success card title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div class="col-lg-3">
                <Card border-variant="danger">
                    <CardHeader>Header</CardHeader>
                    <CardBody class="text-danger">
                        <CardTitle tag="h5">Danger card title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div class="col-lg-3">
                <Card border-variant="warning">
                    <CardHeader>Header</CardHeader>
                    <CardBody>
                        <CardTitle tag="h5">Warning card title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div class="col-lg-3">
                <Card border-variant="info">
                    <CardHeader>Header</CardHeader>
                    <CardBody>
                        <CardTitle tag="h5">Info card title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div class="col-lg-3">
                <Card border-variant="light">
                    <CardHeader>Header</CardHeader>
                    <CardBody>
                        <CardTitle tag="h5">Light card title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div class="col-lg-3">
                <Card border-variant="dark">
                    <CardHeader>Header</CardHeader>
                    <CardBody class="text-dark">
                        <CardTitle tag="h5">Dark card title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
        </CardBody>
        <CodePreview title="code example">
            &lt;Card border-variant=&quot;primary&quot;&gt;
                    &lt;CardHeader&gt;Header&lt;/CardHeader&gt;
                    &lt;CardBody class=&quot;text-primary&quot;&gt;
                        &lt;CardTitle tag=&quot;h5&quot;&gt;Primary card title&lt;/CardTitle&gt;
                        &lt;CardText&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/CardText&gt;
                    &lt;/CardBody&gt;
                &lt;/Card&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Mixins utilities</BlockTitle>
        <BlockText>You can also change the borders on the card header and footer as needed, and even remove their <code>background-color</code> with <code>.bg-transparent</code>.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
        <div class="row g-gs">
            <div class="col-lg-3">
                <Card border-variant="success">
                    <CardHeader class="bg-transparent border-success">Header</CardHeader>
                    <CardBody class="text-success">
                        <CardTitle tag="h5" class="text-success">Success card title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                    <CardFooter class="bg-transparent border-success">Footer</CardFooter>
                </Card>
            </div>
        </div>
        </CardBody>
        <CodePreview title="code example">
            &lt;Card border-variant=&quot;success&quot;&gt;
                    &lt;CardHeader class=&quot;bg-transparent border-success&quot;&gt;Header&lt;/CardHeader&gt;
                    &lt;CardBody class=&quot;text-success&quot;&gt;
                        &lt;CardTitle tag=&quot;h5&quot; class=&quot;text-success&quot;&gt;Success card title&lt;/CardTitle&gt;
                        &lt;CardText&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/CardText&gt;
                    &lt;/CardBody&gt;
                    &lt;CardFooter class=&quot;bg-transparent border-success&quot;&gt;Footer&lt;/CardFooter&gt;
                &lt;/Card&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Card layout</BlockTitle>
        <BlockText>In addition to styling the content within cards, Bootstrap includes a few options for laying out series of cards. For the time being, these layout options are not yet responsive.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
        <CardGroup>
            <Card>
                <Img src="/images/preview/b.jpg" class="card-img-top" />
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <CardText><small class="text-muted">Last updated 3 mins ago</small></CardText>
                </CardBody>
            </Card>
            <Card>
                <Img src="/images/preview/b.jpg" class="card-img-top" />
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <CardText><small class="text-muted">Last updated 3 mins ago</small></CardText>
                </CardBody>
            </Card>
            <Card>
                <Img src="/images/preview/b.jpg" class="card-img-top" />
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                    <CardText><small class="text-muted">Last updated 3 mins ago</small></CardText>
                </CardBody>
            </Card>
        </CardGroup>
        <p class="mt-5">When using card groups with footers, their content will automatically line up.</p>
        <CardGroup>
            <Card>
                <Img src="/images/preview/b.jpg" class="card-img-top" />
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <CardText><small class="text-muted">Last updated 3 mins ago</small></CardText>
                </CardBody>
                <CardFooter>
                    <small class="text-muted">Last updated 3 mins ago</small>
                </CardFooter>
            </Card>
            <Card>
                <Img src="/images/preview/b.jpg" class="card-img-top" />
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <CardText><small class="text-muted">Last updated 3 mins ago</small></CardText>
                </CardBody>
                <CardFooter>
                    <small class="text-muted">Last updated 3 mins ago</small>
                </CardFooter>
            </Card>
            <Card>
                <Img src="/images/preview/b.jpg" class="card-img-top" />
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                    <CardText><small class="text-muted">Last updated 3 mins ago</small></CardText>
                </CardBody>
                <CardFooter>
                    <small class="text-muted">Last updated 3 mins ago</small>
                </CardFooter>
            </Card>
        </CardGroup>
        </CardBody>
        <CodePreview title="code example">
            &lt;CardGroup&gt;
            &lt;Card&gt;
                &lt;Img src=&quot;/images/preview/b.jpg&quot; class=&quot;card-img-top&quot; /&gt;
                &lt;CardBody&gt;
                    &lt;CardTitle tag=&quot;h5&quot;&gt;Card title&lt;/CardTitle&gt;
                    &lt;CardText&gt;This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.&lt;/CardText&gt;
                    &lt;CardText&gt;&lt;small class=&quot;text-muted&quot;&gt;Last updated 3 mins ago&lt;/small&gt;&lt;/CardText&gt;
                &lt;/CardBody&gt;
            &lt;/Card&gt;
            &lt;Card&gt;
                &lt;Img src=&quot;/images/preview/b.jpg&quot; class=&quot;card-img-top&quot; /&gt;
                &lt;CardBody&gt;
                    &lt;CardTitle tag=&quot;h5&quot;&gt;Card title&lt;/CardTitle&gt;
                    &lt;CardText&gt;This card has supporting text below as a natural lead-in to additional content.&lt;/CardText&gt;
                    &lt;CardText&gt;&lt;small class=&quot;text-muted&quot;&gt;Last updated 3 mins ago&lt;/small&gt;&lt;/CardText&gt;
                &lt;/CardBody&gt;
            &lt;/Card&gt;
            &lt;Card&gt;
                &lt;Img src=&quot;/images/preview/b.jpg&quot; class=&quot;card-img-top&quot; /&gt;
                &lt;CardBody&gt;
                    &lt;CardTitle tag=&quot;h5&quot;&gt;Card title&lt;/CardTitle&gt;
                    &lt;CardText&gt;This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.&lt;/CardText&gt;
                    &lt;CardText&gt;&lt;small class=&quot;text-muted&quot;&gt;Last updated 3 mins ago&lt;/small&gt;&lt;/CardText&gt;
                &lt;/CardBody&gt;
            &lt;/Card&gt;
        &lt;/CardGroup&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Grid Cards</BlockTitle>
        <BlockText>Use the Bootstrap grid system and its .row-cols classes to control how many grid columns (wrapped around your cards) you show per row. For example, here’s <code>.row-cols-1</code> laying out the cards on one column, and <code>.row-cols-md-2</code> splitting four cards to equal width across multiple rows, from the medium breakpoint up.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
                <Card>
                    <Img src="/images/preview/b.jpg" class="card-img-top"/>
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardText>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div class="col">
                <Card>
                    <Img src="/images/preview/b.jpg" class="card-img-top"/>
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardText>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div class="col">
                <Card>
                    <Img src="/images/preview/b.jpg" class="card-img-top"/>
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardText>This is a longer card with supporting text below as a natural lead-in to additional content.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div class="col">
                <Card>
                    <Img src="/images/preview/b.jpg" class="card-img-top"/>
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardText>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
        <p class="mt-5">Change it to <code>.row-cols-3</code> and you’ll see the fourth card wrap.</p>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <Card>
                    <Img src="/images/preview/b.jpg" class="card-img-top"/>
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardText>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div class="col">
                <Card>
                    <Img src="/images/preview/b.jpg" class="card-img-top"/>
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardText>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div class="col">
                <Card>
                    <Img src="/images/preview/b.jpg" class="card-img-top"/>
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardText>This is a longer card with supporting text below as a natural lead-in to additional content.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div class="col">
                <Card>
                    <Img src="/images/preview/b.jpg" class="card-img-top"/>
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardText>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
        <p class="mt-5">When you need equal height, add <code>.h-100</code> to the cards. If you want equal heights by default, you can set <code>$card-height: 100%</code> in Sass.</p>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <Card class="h-100">
                    <Img src="/images/preview/b.jpg" class="card-img-top"/>
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardText>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div class="col">
                <Card class="h-100">
                    <Img src="/images/preview/b.jpg" class="card-img-top"/>
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardText>This is a short card.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div class="col">
                <Card class="h-100">
                    <Img src="/images/preview/b.jpg" class="card-img-top"/>
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardText>This is a longer card with supporting text below as a natural lead-in to additional content.</CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
        <p class="mt-5">Just like with card groups, card footers will automatically line up.</p>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <Card class="h-100">
                    <Img src="/images/preview/b.jpg" class="card-img-top"/>
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    </CardBody>
                    <CardFooter>
                            <small class="text-muted">Last updated 3 mins ago</small>
                    </CardFooter>
                </Card>
            </div>
            <div class="col">
                <Card class="h-100">
                    <Img src="/images/preview/b.jpg" class="card-img-top"/>
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    </CardBody>
                    <CardFooter>
                            <small class="text-muted">Last updated 3 mins ago</small>
                    </CardFooter>
                </Card>
            </div>
            <div class="col">
                <Card class="h-100">
                    <Img src="/images/preview/b.jpg" class="card-img-top"/>
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                    </CardBody>
                    <CardFooter>
                            <small class="text-muted">Last updated 3 mins ago</small>
                    </CardFooter>
                </Card>
            </div>
        </div>
        </CardBody>
        <CodePreview title="code example">
            &lt;div class=&quot;row row-cols-1 row-cols-md-2 g-4&quot;&gt;
            &lt;div class=&quot;col&quot;&gt;
                &lt;Card&gt;
                    &lt;Img src=&quot;/images/preview/b.jpg&quot; class=&quot;card-img-top&quot;/&gt;
                    &lt;CardBody&gt;
                        &lt;CardTitle tag=&quot;h5&quot;&gt;Card title&lt;/CardTitle&gt;
                        &lt;CardText&gt;This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.&lt;/CardText&gt;
                    &lt;/CardBody&gt;
                &lt;/Card&gt;
            &lt;/div&gt;
            &lt;div class=&quot;col&quot;&gt;
                &lt;Card&gt;
                    &lt;Img src=&quot;/images/preview/b.jpg&quot; class=&quot;card-img-top&quot;/&gt;
                    &lt;CardBody&gt;
                        &lt;CardTitle tag=&quot;h5&quot;&gt;Card title&lt;/CardTitle&gt;
                        &lt;CardText&gt;This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.&lt;/CardText&gt;
                    &lt;/CardBody&gt;
                &lt;/Card&gt;
            &lt;/div&gt;
            &lt;div class=&quot;col&quot;&gt;
                &lt;Card&gt;
                    &lt;Img src=&quot;/images/preview/b.jpg&quot; class=&quot;card-img-top&quot;/&gt;
                    &lt;CardBody&gt;
                        &lt;CardTitle tag=&quot;h5&quot;&gt;Card title&lt;/CardTitle&gt;
                        &lt;CardText&gt;This is a longer card with supporting text below as a natural lead-in to additional content.&lt;/CardText&gt;
                    &lt;/CardBody&gt;
                &lt;/Card&gt;
            &lt;/div&gt;
            &lt;div class=&quot;col&quot;&gt;
                &lt;Card&gt;
                    &lt;Img src=&quot;/images/preview/b.jpg&quot; class=&quot;card-img-top&quot;/&gt;
                    &lt;CardBody&gt;
                        &lt;CardTitle tag=&quot;h5&quot;&gt;Card title&lt;/CardTitle&gt;
                        &lt;CardText&gt;This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.&lt;/CardText&gt;
                    &lt;/CardBody&gt;
                &lt;/Card&gt;
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
import CardTitle from '@/components/uielements/card/CardTitle.vue';
import CardText from '@/components/uielements/card/CardText.vue';
import CodePreview from '@/components/code-preview/CodePreview.vue';
import Button from '@/components/uielements/button/Button.vue';
import Img from '@/components/img/Img.vue';
import CardSubtitle from '@/components/uielements/card/CardSubtitle.vue';
import CardLink from '@/components/uielements/card/CardLink.vue';
import ListGroup from '../../components/uielements/list/ListGroup.vue';
import ListGroupItem from '../../components/uielements/list/ListGroupItem.vue';
import CardHeader from '../../components/uielements/card/CardHeader.vue';
import CardFooter from '../../components/uielements/card/CardFooter.vue';
import Nav from '../../components/uielements/nav/Nav.vue';
import NavItem from '../../components/uielements/nav/NavItem.vue';
import NavLink from '../../components/uielements/nav/NavLink.vue';
import CardGroup from '@/components/uielements/card/CardGroup.vue';

export default {
  name: 'CardsPage', 
  components: {
    Layout,
    Block,
    BlockHead,
    BlockHeadContent,
    BlockTitle,
    BlockText,
    Card,
    CardBody,
    CardTitle,
    CardText,
    CodePreview,
    Button,
    Img,
    CardSubtitle,
    CardLink,
    ListGroup,
    ListGroupItem,
    CardHeader,
    CardFooter,
    Nav,
    NavItem,
    NavLink,
    CardGroup
    },
}
</script>
