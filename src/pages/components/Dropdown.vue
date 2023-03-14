<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <Block class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Dropdowns</BlockTitle>
        <BlockText>Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.</BlockText>
      </BlockHeadContent>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockText><strong class="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component. 
          </BlockText>
          <BlockText>How to import component and use see the <a href="#">docs</a></BlockText>
          <BlockTitle>Example</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex gap g-3">
              <li>
                  <Dropdown>
                      <DropdownToggle type="button" variant="secondary" >Dropdown button</DropdownToggle>
                      <DropdownMenu>
                          <DropdownItem>
                              <DropdownLink href="#">Action</DropdownLink>
                          </DropdownItem>
                          <DropdownItem>
                              <DropdownLink href="#">Another action</DropdownLink>
                          </DropdownItem>
                          <DropdownItem>
                              <DropdownLink href="#">Something else here</DropdownLink>
                          </DropdownItem>
                      </DropdownMenu>
                  </Dropdown>
              </li>
              <li>
                  <Dropdown>
                      <DropdownToggle variant="secondary" href="#">Dropdown link</DropdownToggle>
                      <DropdownMenu>
                          <DropdownItem>
                              <DropdownLink href="#">Action</DropdownLink>
                          </DropdownItem>
                          <DropdownItem>
                              <DropdownLink href="#">Another action</DropdownLink>
                          </DropdownItem>
                          <DropdownItem>
                              <DropdownLink href="#">Something else here</DropdownLink>
                          </DropdownItem>
                      </DropdownMenu>
                  </Dropdown>
              </li>
          </ul>
          <p class="mt-5">The best part is you can do this with any button variant, too:</p>
          <!-- Example single danger button -->
          <Dropdown>
              <DropdownToggle type="button" variant="danger" >Action</DropdownToggle>
              <DropdownMenu>
                  <DropdownItem>
                      <DropdownLink href="#">Action</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                      <DropdownLink href="#">Another action</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                      <DropdownLink href="#">Something else here</DropdownLink>
                  </DropdownItem>
              </DropdownMenu>
          </Dropdown>
        </CardBody>
        <CodePreview title="code example">
          &lt;Dropdown&gt;
              &lt;DropdownToggle type=&quot;button&quot; variant=&quot;secondary&quot; &gt;Dropdown button&lt;/DropdownToggle&gt;
              &lt;DropdownMenu&gt;
                  &lt;DropdownItem&gt;
                      &lt;DropdownLink href=&quot;#&quot;&gt;Action&lt;/DropdownLink&gt;
                  &lt;/DropdownItem&gt;
                  &lt;DropdownItem&gt;
                      &lt;DropdownLink href=&quot;#&quot;&gt;Another action&lt;/DropdownLink&gt;
                  &lt;/DropdownItem&gt;
                  &lt;DropdownItem&gt;
                      &lt;DropdownLink href=&quot;#&quot;&gt;Something else here&lt;/DropdownLink&gt;
                  &lt;/DropdownItem&gt;
              &lt;/DropdownMenu&gt;
          &lt;/Dropdown&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Split button</BlockTitle>
          <BlockText>Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of <code>split</code> prop. for proper spacing around the dropdown caret.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <!-- Example split danger button -->
          <Dropdown as="ButtonGroup">
              <Button type="button" variant="danger">Action</Button>
              <DropdownToggle type="button" split variant="danger"><span class="visually-hidden">Toggle Dropdown</span></DropdownToggle>
              <DropdownMenu>
                  <DropdownItem>
                      <DropdownLink href="#">Action</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                      <DropdownLink href="#">Another action</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                      <DropdownLink href="#">Something else here</DropdownLink>
                  </DropdownItem>
              </DropdownMenu>
          </Dropdown>
        </CardBody>
        <CodePreview title="code example">
          &lt;Dropdown as=&quot;ButtonGroup&quot;&gt;
              &lt;Button type=&quot;button&quot; variant=&quot;danger&quot;&gt;Action&lt;/Button&gt;
              &lt;DropdownToggle type=&quot;button&quot; split variant=&quot;danger&quot;&gt;&lt;span class=&quot;visually-hidden&quot;&gt;Toggle Dropdown&lt;/span&gt;&lt;/DropdownToggle&gt;
              &lt;DropdownMenu&gt;
                  &lt;DropdownItem&gt;
                      &lt;DropdownLink href=&quot;#&quot;&gt;Action&lt;/DropdownLink&gt;
                  &lt;/DropdownItem&gt;
                  &lt;DropdownItem&gt;
                      &lt;DropdownLink href=&quot;#&quot;&gt;Another action&lt;/DropdownLink&gt;
                  &lt;/DropdownItem&gt;
                  &lt;DropdownItem&gt;
                      &lt;DropdownLink href=&quot;#&quot;&gt;Something else here&lt;/DropdownLink&gt;
                  &lt;/DropdownItem&gt;
              &lt;/DropdownMenu&gt;
          &lt;/Dropdown&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Dark dropdowns</BlockTitle>
          <BlockText>Opt into darker dropdowns to match a dark navbar or custom style by adding <code>variant="dark"</code> onto an existing <code>DropdownMenu</code>. No changes are required to the dropdown items.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
            <Dropdown>
                <DropdownToggle type="button" variant="secondary" >Dropdown button</DropdownToggle>
                <DropdownMenu variant="dark">
                    <DropdownItem>
                        <DropdownLink href="#">Action</DropdownLink>
                    </DropdownItem>
                    <DropdownItem>
                        <DropdownLink href="#">Another action</DropdownLink>
                    </DropdownItem>
                    <DropdownItem>
                        <DropdownLink href="#">Something else here</DropdownLink>
                    </DropdownItem>
                    <DropdownItem divider></DropdownItem>
                    <DropdownItem>
                        <DropdownLink href="#">Separated link</DropdownLink>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <p class="mt-5">And putting it to use in a navbar:</p>
            <Navbar class="navbar-expand-lg navbar-dark bg-dark">
              <div class="container-fluid">
                <NavbarBrand/>
                <NavbarToggle/>
                <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                  <NavbarNav>
                    <NavbarNavItem class="dropdown">
                      <NavbarNavLink class="dropdown-toggle" role="button" data-bs-toggle="dropdown">Dropdown</NavbarNavLink>
                      <DropdownMenu variant="dark">
                          <DropdownItem>
                              <DropdownLink href="#">Action</DropdownLink>
                          </DropdownItem>
                          <DropdownItem>
                              <DropdownLink href="#">Another action</DropdownLink>
                          </DropdownItem>
                          <DropdownItem>
                              <DropdownLink href="#">Something else here</DropdownLink>
                          </DropdownItem>
                      </DropdownMenu>
                    </NavbarNavItem>
                  </NavbarNav>
                </div>
              </div>
            </Navbar>
        </CardBody>
        <CodePreview title="code example">
          &lt;Dropdown&gt;
                &lt;DropdownToggle type=&quot;button&quot; variant=&quot;secondary&quot; &gt;Dropdown button&lt;/DropdownToggle&gt;
                &lt;DropdownMenu variant=&quot;dark&quot;&gt;
                    &lt;DropdownItem&gt;
                        &lt;DropdownLink href=&quot;#&quot;&gt;Action&lt;/DropdownLink&gt;
                    &lt;/DropdownItem&gt;
                    &lt;DropdownItem&gt;
                        &lt;DropdownLink href=&quot;#&quot;&gt;Another action&lt;/DropdownLink&gt;
                    &lt;/DropdownItem&gt;
                    &lt;DropdownItem&gt;
                        &lt;DropdownLink href=&quot;#&quot;&gt;Something else here&lt;/DropdownLink&gt;
                    &lt;/DropdownItem&gt;
                    &lt;DropdownItem divider&gt;&lt;/DropdownItem&gt;
                    &lt;DropdownItem&gt;
                        &lt;DropdownLink href=&quot;#&quot;&gt;Separated link&lt;/DropdownLink&gt;
                    &lt;/DropdownItem&gt;
                &lt;/DropdownMenu&gt;
            &lt;/Dropdown&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Directions</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
            <Dropdown direction="dropdown-center">
                <DropdownToggle type="button" variant="secondary" >Centered dropdown</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <DropdownLink href="#">Action</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink href="#">Action two</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink href="#">Action three</DropdownLink>
                  </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </CardBody>
        <CodePreview title="code example">
          &lt;Dropdown direction=&quot;dropdown-center&quot;&gt;
                &lt;DropdownToggle type=&quot;button&quot; variant=&quot;secondary&quot; &gt;Centered dropdown&lt;/DropdownToggle&gt;
                &lt;DropdownMenu&gt;
                  &lt;DropdownItem&gt;
                    &lt;DropdownLink href=&quot;#&quot;&gt;Action&lt;/DropdownLink&gt;
                  &lt;/DropdownItem&gt;
                  &lt;DropdownItem&gt;
                    &lt;DropdownLink href=&quot;#&quot;&gt;Action two&lt;/DropdownLink&gt;
                  &lt;/DropdownItem&gt;
                  &lt;DropdownItem&gt;
                    &lt;DropdownLink href=&quot;#&quot;&gt;Action three&lt;/DropdownLink&gt;
                  &lt;/DropdownItem&gt;
                &lt;/DropdownMenu&gt;
            &lt;/Dropdown&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Dropup</BlockTitle>
          <BlockText>Trigger dropdown menus above elements by adding <code>direction="dropup"</code> prop to the parent element.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
            <ul class="d-flex gap g-3">
                <li>
                  <!-- Default dropup button -->
                    <Dropdown direction="dropup">
                      <DropdownToggle type="button" variant="secondary">Dropup</DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>
                          <DropdownLink href="#">Action</DropdownLink>
                        </DropdownItem>
                        <DropdownItem>
                          <DropdownLink href="#">Action two</DropdownLink>
                        </DropdownItem>
                        <DropdownItem>
                          <DropdownLink href="#">Action three</DropdownLink>
                        </DropdownItem>
                      </DropdownMenu>
                  </Dropdown>
                </li>
                <li>
                  <!-- Split dropup button -->
                  <Dropdown as="ButtonGroup" direction="dropup">
                      <Button type="button" variant="secondary">Split dropup</Button>
                      <DropdownToggle type="button" split variant="secondary" ><span class="visually-hidden">Dropup Split</span></DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>
                          <DropdownLink href="#">Action</DropdownLink>
                        </DropdownItem>
                        <DropdownItem>
                          <DropdownLink href="#">Action two</DropdownLink>
                        </DropdownItem>
                        <DropdownItem>
                          <DropdownLink href="#">Action three</DropdownLink>
                        </DropdownItem>
                      </DropdownMenu>
                  </Dropdown>
                </li>
              </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;Dropdown direction=&quot;dropup&quot;&gt;
              &lt;DropdownToggle type=&quot;button&quot; variant=&quot;secondary&quot;&gt;Dropup&lt;/DropdownToggle&gt;
              &lt;DropdownMenu&gt;
                &lt;DropdownItem&gt;
                  &lt;DropdownLink href=&quot;#&quot;&gt;Action&lt;/DropdownLink&gt;
                &lt;/DropdownItem&gt;
                &lt;DropdownItem&gt;
                  &lt;DropdownLink href=&quot;#&quot;&gt;Action two&lt;/DropdownLink&gt;
                &lt;/DropdownItem&gt;
                &lt;DropdownItem&gt;
                  &lt;DropdownLink href=&quot;#&quot;&gt;Action three&lt;/DropdownLink&gt;
                &lt;/DropdownItem&gt;
              &lt;/DropdownMenu&gt;
          &lt;/Dropdown&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Dropup centered</BlockTitle>
          <BlockText>Make the dropup menu centered above the toggle with <code>direction="dropup dropup-center"</code> prop. on the parent element.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Dropdown direction="dropup dropup-center">
              <DropdownToggle type="button" variant="secondary" >Centered dropup</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <DropdownLink href="#">Action</DropdownLink>
                </DropdownItem>
                <DropdownItem>
                  <DropdownLink href="#">Action two</DropdownLink>
                </DropdownItem>
                <DropdownItem>
                  <DropdownLink href="#">Action three</DropdownLink>
                </DropdownItem>
              </DropdownMenu>
          </Dropdown>
        </CardBody>
        <CodePreview title="code example">
          &lt;Dropdown direction=&quot;dropup dropup-center&quot;&gt;
              &lt;DropdownToggle type=&quot;button&quot; variant=&quot;secondary&quot; &gt;Centered dropup&lt;/DropdownToggle&gt;
              &lt;DropdownMenu&gt;
                &lt;DropdownItem&gt;
                  &lt;DropdownLink href=&quot;#&quot;&gt;Action&lt;/DropdownLink&gt;
                &lt;/DropdownItem&gt;
                &lt;DropdownItem&gt;
                  &lt;DropdownLink href=&quot;#&quot;&gt;Action two&lt;/DropdownLink&gt;
                &lt;/DropdownItem&gt;
                &lt;DropdownItem&gt;
                  &lt;DropdownLink href=&quot;#&quot;&gt;Action three&lt;/DropdownLink&gt;
                &lt;/DropdownItem&gt;
              &lt;/DropdownMenu&gt;
          &lt;/Dropdown&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Dropend</BlockTitle>
          <BlockText>Trigger dropdown menus at the right of the elements by adding <code>direction="dropend"</code> to the parent element.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex gap g-3">
            <li>
                <!-- Default dropend button -->
                <Dropdown direction="dropend">
                  <DropdownToggle type="button" variant="secondary" >Dropend</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <DropdownLink href="#">Action</DropdownLink>
                    </DropdownItem>
                    <DropdownItem>
                      <DropdownLink href="#">Action two</DropdownLink>
                    </DropdownItem>
                    <DropdownItem>
                      <DropdownLink href="#">Action three</DropdownLink>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
            </li>
            <li>
              <!-- Split dropend button -->
                <Dropdown as="ButtonGroup" direction="dropend">
                  <Button type="button" variant="secondary">Split dropend</Button>
                  <DropdownToggle type="button" split variant="secondary" ><span class="visually-hidden">Toggle Dropend</span></DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <DropdownLink href="#">Action</DropdownLink>
                    </DropdownItem>
                    <DropdownItem>
                      <DropdownLink href="#">Action two</DropdownLink>
                    </DropdownItem>
                    <DropdownItem>
                      <DropdownLink href="#">Action three</DropdownLink>
                    </DropdownItem>
                  </DropdownMenu>
              </Dropdown>
            </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;Dropdown direction=&quot;dropend&quot;&gt;
                  &lt;DropdownToggle type=&quot;button&quot; variant=&quot;secondary&quot; &gt;Dropend&lt;/DropdownToggle&gt;
                  &lt;DropdownMenu&gt;
                    &lt;DropdownItem&gt;
                      &lt;DropdownLink href=&quot;#&quot;&gt;Action&lt;/DropdownLink&gt;
                    &lt;/DropdownItem&gt;
                    &lt;DropdownItem&gt;
                      &lt;DropdownLink href=&quot;#&quot;&gt;Action two&lt;/DropdownLink&gt;
                    &lt;/DropdownItem&gt;
                    &lt;DropdownItem&gt;
                      &lt;DropdownLink href=&quot;#&quot;&gt;Action three&lt;/DropdownLink&gt;
                    &lt;/DropdownItem&gt;
                  &lt;/DropdownMenu&gt;
                &lt;/Dropdown&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Dropstart</BlockTitle>
          <BlockText>Trigger dropdown menus at the left of the elements by adding <code>direction="dropstart"</code> to the parent element.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex gap g-3">
            <li>
                <!-- Default dropend button -->
                <Dropdown direction="dropstart">
                  <DropdownToggle type="button" variant="secondary" >Dropstart</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <DropdownLink href="#">Action</DropdownLink>
                    </DropdownItem>
                    <DropdownItem>
                      <DropdownLink href="#">Action two</DropdownLink>
                    </DropdownItem>
                    <DropdownItem>
                      <DropdownLink href="#">Action three</DropdownLink>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
            </li>
            <li>
              <!-- Split dropend button -->
                <Dropdown as="ButtonGroup" direction="dropstart">
                  <Button type="button" variant="secondary">Split dropstart</Button>
                  <DropdownToggle type="button" split variant="secondary" ><span class="visually-hidden">Toggle Dropstart</span></DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <DropdownLink href="#">Action</DropdownLink>
                    </DropdownItem>
                    <DropdownItem>
                      <DropdownLink href="#">Action two</DropdownLink>
                    </DropdownItem>
                    <DropdownItem>
                      <DropdownLink href="#">Action three</DropdownLink>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
            </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;Dropdown direction=&quot;dropstart&quot;&gt;
                  &lt;DropdownToggle type=&quot;button&quot; variant=&quot;secondary&quot; &gt;Dropstart&lt;/DropdownToggle&gt;
                  &lt;DropdownMenu&gt;
                    &lt;DropdownItem&gt;
                      &lt;DropdownLink href=&quot;#&quot;&gt;Action&lt;/DropdownLink&gt;
                    &lt;/DropdownItem&gt;
                    &lt;DropdownItem&gt;
                      &lt;DropdownLink href=&quot;#&quot;&gt;Action two&lt;/DropdownLink&gt;
                    &lt;/DropdownItem&gt;
                    &lt;DropdownItem&gt;
                      &lt;DropdownLink href=&quot;#&quot;&gt;Action three&lt;/DropdownLink&gt;
                    &lt;/DropdownItem&gt;
                  &lt;/DropdownMenu&gt;
                &lt;/Dropdown&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Active</BlockTitle>
          <BlockText>Add <code>.active</code> to items in the dropdown to style them as active.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Dropdown>
            <DropdownToggle type="button" variant="secondary" >Dropdown</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <DropdownLink href="#">Action</DropdownLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownLink class="active" href="#">Another action</DropdownLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownLink href="#">Something else here</DropdownLink>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardBody>
        <CodePreview title="code example">
          &lt;Dropdown&gt;
            &lt;DropdownToggle type=&quot;button&quot; variant=&quot;secondary&quot; &gt;Dropdown&lt;/DropdownToggle&gt;
            &lt;DropdownMenu&gt;
              &lt;DropdownItem&gt;
                &lt;DropdownLink href=&quot;#&quot;&gt;Action&lt;/DropdownLink&gt;
              &lt;/DropdownItem&gt;
              &lt;DropdownItem&gt;
                &lt;DropdownLink class=&quot;active&quot; href=&quot;#&quot;&gt;Another action&lt;/DropdownLink&gt;
              &lt;/DropdownItem&gt;
              &lt;DropdownItem&gt;
                &lt;DropdownLink href=&quot;#&quot;&gt;Something else here&lt;/DropdownLink&gt;
              &lt;/DropdownItem&gt;
            &lt;/DropdownMenu&gt;
          &lt;/Dropdown&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Menu alignment</BlockTitle>
          <BlockText>Add prop <code>alignment="end"</code> to a <code>.dropdown-menu</code> to right align the dropdown menu.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Dropdown>
            <DropdownToggle type="button" variant="secondary" >Right-aligned menu example</DropdownToggle>
            <DropdownMenu alignment="end">
              <DropdownItem>
                <DropdownLink href="#">Action</DropdownLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownLink href="#">Another action</DropdownLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownLink href="#">Something else here</DropdownLink>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <p class="mt-4 small">To align left the dropdown menu with the given breakpoint or larger, add <code>.dropdown-menu-end</code> and <code>.dropdown-menu{-sm|-md|-lg|-xl|-xxl}-start</code>.</p>
          <Dropdown>
            <DropdownToggle type="button" variant="secondary" display="static">Dropdown</DropdownToggle>
            <DropdownMenu alignment="end" alignmentResponsive="lg-start">
              <DropdownItem>
                <DropdownLink href="#">Action</DropdownLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownLink href="#">Another action</DropdownLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownLink href="#">Something else here</DropdownLink>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <p class="small mt-2">Right-aligned but left aligned when large screen</p>
        </CardBody>
        <CodePreview title="code example">
          &lt;Dropdown&gt;
            &lt;DropdownToggle type=&quot;button&quot; variant=&quot;secondary&quot; &gt;Right-aligned menu example&lt;/DropdownToggle&gt;
            &lt;DropdownMenu alignment=&quot;end&quot;&gt;
              &lt;DropdownItem&gt;
                &lt;DropdownLink href=&quot;#&quot;&gt;Action&lt;/DropdownLink&gt;
              &lt;/DropdownItem&gt;
              &lt;DropdownItem&gt;
                &lt;DropdownLink href=&quot;#&quot;&gt;Another action&lt;/DropdownLink&gt;
              &lt;/DropdownItem&gt;
              &lt;DropdownItem&gt;
                &lt;DropdownLink href=&quot;#&quot;&gt;Something else here&lt;/DropdownLink&gt;
              &lt;/DropdownItem&gt;
            &lt;/DropdownMenu&gt;
          &lt;/Dropdown&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Alignment options</BlockTitle>
          <BlockText>Taking most of the options shown above, here’s a small kitchen sink demo of various dropdown alignment options.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex flex-wrap gap g-3">
            <li>
              <Dropdown>
                <DropdownToggle type="button" variant="secondary" >Dropdown</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <DropdownLink href="#">Action</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink href="#">Another action</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink href="#">Something else here</DropdownLink>
                  </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </li>
            <li>
              <Dropdown>
                <DropdownToggle type="button" variant="secondary" >Right-aligned menu</DropdownToggle>
                <DropdownMenu  alignment="end">
                  <DropdownItem>
                    <DropdownLink href="#">Action</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink href="#">Another action</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink href="#">Something else here</DropdownLink>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <Dropdown>
                <DropdownToggle type="button" variant="secondary" display="static">Left-aligned, right-aligned lg</DropdownToggle>
                <DropdownMenu alignmentResponsive="lg-end">
                  <DropdownItem>
                    <DropdownLink href="#">Action</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink href="#">Another action</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink href="#">Something else here</DropdownLink>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <Dropdown>
                <DropdownToggle type="button" variant="secondary" display="static">Right-aligned, left-aligned lg</DropdownToggle>
                <DropdownMenu  alignment="end" alignmentResponsive="lg-start">
                  <DropdownItem>
                    <DropdownLink href="#">Action</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink href="#">Another action</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink href="#">Something else here</DropdownLink>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <Dropdown direction="dropstart">
                <DropdownToggle type="button" variant="secondary" >Dropstart</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <DropdownLink href="#">Action</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink href="#">Another action</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink href="#">Something else here</DropdownLink>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <Dropdown direction="dropend">
                <DropdownToggle type="button" variant="secondary" >Dropend</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <DropdownLink href="#">Action</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink href="#">Another action</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink href="#">Something else here</DropdownLink>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <Dropdown direction="dropup">
                <DropdownToggle type="button" variant="secondary" >Dropup</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <DropdownLink href="#">Action</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink href="#">Another action</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink href="#">Something else here</DropdownLink>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;Dropdown&gt;
                &lt;DropdownToggle type=&quot;button&quot; variant=&quot;secondary&quot; &gt;Dropdown&lt;/DropdownToggle&gt;
                &lt;DropdownMenu&gt;
                  &lt;DropdownItem&gt;
                    &lt;DropdownLink href=&quot;#&quot;&gt;Action&lt;/DropdownLink&gt;
                  &lt;/DropdownItem&gt;
                  &lt;DropdownItem&gt;
                    &lt;DropdownLink href=&quot;#&quot;&gt;Another action&lt;/DropdownLink&gt;
                  &lt;/DropdownItem&gt;
                  &lt;DropdownItem&gt;
                    &lt;DropdownLink href=&quot;#&quot;&gt;Something else here&lt;/DropdownLink&gt;
                  &lt;/DropdownItem&gt;
                &lt;/DropdownMenu&gt;
            &lt;/Dropdown&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Menu content</BlockTitle>
          <BlockText>Add a header to label sections of actions in any dropdown menu.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="row g-gs">
            <div class="col-md-3">
                <h6 class="mb-3">Headers</h6>
                <Dropdown>
                    <DropdownToggle type="button" variant="secondary" >Dropdown</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                          <DropdownHeader>Dropdown header</DropdownHeader>
                        </DropdownItem>
                        <DropdownItem>
                          <DropdownLink href="#">Action</DropdownLink>
                        </DropdownItem>
                        <DropdownItem>
                          <DropdownLink href="#">Another action</DropdownLink>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div class="col-md-3">
                <h6 class="mb-3">Dividers</h6>
                <Dropdown>
                    <DropdownToggle type="button" variant="secondary" >Dropdown</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                          <DropdownLink href="#">Action</DropdownLink>
                        </DropdownItem>
                        <DropdownItem>
                          <DropdownLink href="#">Another action</DropdownLink>
                        </DropdownItem>
                        <DropdownItem>
                          <DropdownLink href="#">Something else here</DropdownLink>
                        </DropdownItem>
                        <DropdownItem divider></DropdownItem>
                        <DropdownItem>
                          <DropdownLink href="#">Separated link</DropdownLink>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div class="col-md-3">
                <h6 class="mb-3">Text</h6>
                <Dropdown>
                    <DropdownToggle type="button" variant="secondary" >Dropdown</DropdownToggle>
                    <DropdownMenu size="md" class="p-4 text-muted">
                        <p>
                          Some example text that's free-flowing within the dropdown menu.
                        </p>
                        <p class="mb-0">
                          And this is more example text.
                        </p>
                    </DropdownMenu>
                </Dropdown>
            </div>
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;Dropdown&gt;
                    &lt;DropdownToggle type=&quot;button&quot; variant=&quot;secondary&quot; &gt;Dropdown&lt;/DropdownToggle&gt;
                    &lt;DropdownMenu&gt;
                        &lt;DropdownItem&gt;
                          &lt;DropdownHeader&gt;Dropdown header&lt;/DropdownHeader&gt;
                        &lt;/DropdownItem&gt;
                        &lt;DropdownItem&gt;
                          &lt;DropdownLink href=&quot;#&quot;&gt;Action&lt;/DropdownLink&gt;
                        &lt;/DropdownItem&gt;
                        &lt;DropdownItem&gt;
                          &lt;DropdownLink href=&quot;#&quot;&gt;Another action&lt;/DropdownLink&gt;
                        &lt;/DropdownItem&gt;
                    &lt;/DropdownMenu&gt;
                &lt;/Dropdown&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Forms</BlockTitle>
          <BlockText>Put a form within a dropdown menu, or make it into a dropdown menu, and use margin or padding utilities to give it the negative space you require.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <DropdownMenu inline>
              <form class="px-4 py-3">
                <div class="mb-3">
                  <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
                </div>
                <div class="mb-3">
                  <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="dropdownCheck">
                    <label class="form-check-label" for="dropdownCheck">
                      Remember me
                    </label>
                  </div>
                </div>
                <Button type="submit" variant="primary">Sign in</Button>
              </form>
              <DropdownItem divider></DropdownItem>
              <DropdownItem>
                <DropdownLink href="#">New around here? Sign up</DropdownLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownLink href="#">Forgot password?</DropdownLink>
              </DropdownItem>
          </DropdownMenu>
          <Dropdown class="mt-4">
            <DropdownToggle type="button" variant="secondary" autoClose="outside">Dropdown form</DropdownToggle>
            <DropdownMenu size="md">
              <form class="px-4 py-3">
                <div class="mb-3">
                  <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
                </div>
                <div class="mb-3">
                  <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="dropdownCheck">
                    <label class="form-check-label" for="dropdownCheck">
                      Remember me
                    </label>
                  </div>
                </div>
                <Button type="submit" variant="primary">Sign in</Button>
              </form>
              <DropdownItem divider></DropdownItem>
              <DropdownItem>
                <DropdownLink href="#">New around here? Sign up</DropdownLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownLink href="#">Forgot password?</DropdownLink>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardBody>
        <CodePreview title="code example">
          &lt;DropdownMenu inline&gt;
              &lt;form class=&quot;px-4 py-3&quot;&gt;
                &lt;div class=&quot;mb-3&quot;&gt;
                  &lt;label for=&quot;exampleDropdownFormEmail1&quot; class=&quot;form-label&quot;&gt;Email address&lt;/label&gt;
                  &lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;exampleDropdownFormEmail1&quot; placeholder=&quot;email@example.com&quot;&gt;
                &lt;/div&gt;
                &lt;div class=&quot;mb-3&quot;&gt;
                  &lt;label for=&quot;exampleDropdownFormPassword1&quot; class=&quot;form-label&quot;&gt;Password&lt;/label&gt;
                  &lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;exampleDropdownFormPassword1&quot; placeholder=&quot;Password&quot;&gt;
                &lt;/div&gt;
                &lt;div class=&quot;mb-3&quot;&gt;
                  &lt;div class=&quot;form-check&quot;&gt;
                    &lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;dropdownCheck&quot;&gt;
                    &lt;label class=&quot;form-check-label&quot; for=&quot;dropdownCheck&quot;&gt;
                      Remember me
                    &lt;/label&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
                &lt;Button type=&quot;submit&quot; variant=&quot;primary&quot;&gt;Sign in&lt;/Button&gt;
              &lt;/form&gt;
              &lt;DropdownItem divider&gt;&lt;/DropdownItem&gt;
              &lt;DropdownItem&gt;
                &lt;DropdownLink href=&quot;#&quot;&gt;New around here? Sign up&lt;/DropdownLink&gt;
              &lt;/DropdownItem&gt;
              &lt;DropdownItem&gt;
                &lt;DropdownLink href=&quot;#&quot;&gt;Forgot password?&lt;/DropdownLink&gt;
              &lt;/DropdownItem&gt;
          &lt;/DropdownMenu&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Dropdown options</BlockTitle>
          <BlockText>Use <code>offset="10,20"</code> prop. or <code>reference="parent</code> to change the location of the dropdown.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex gap g-3">
              <li>
                <Dropdown>
                  <DropdownToggle type="button" variant="secondary" offset="10,20">Offset</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <DropdownLink href="#">Action</DropdownLink>
                    </DropdownItem>
                    <DropdownItem>
                      <DropdownLink href="#">Another action</DropdownLink>
                    </DropdownItem>
                    <DropdownItem>
                      <DropdownLink href="#">Something else here</DropdownLink>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
              <li>
                <Dropdown as="ButtonGroup">
                  <Button type="button" variant="secondary">Reference</Button>
                  <DropdownToggle type="button" split variant="secondary" reference="parent"><span class="visually-hidden">Toggle Dropdown</span></DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <DropdownLink href="#">Action</DropdownLink>
                    </DropdownItem>
                    <DropdownItem>
                      <DropdownLink href="#">Another action</DropdownLink>
                    </DropdownItem>
                    <DropdownItem>
                      <DropdownLink href="#">Something else here</DropdownLink>
                    </DropdownItem>
                    <DropdownItem divider></DropdownItem>
                    <DropdownItem>
                      <DropdownLink href="#">Separated link</DropdownLink>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
            </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;Dropdown&gt;
                  &lt;DropdownToggle type=&quot;button&quot; variant=&quot;secondary&quot; offset=&quot;10,20&quot;&gt;Offset&lt;/DropdownToggle&gt;
                  &lt;DropdownMenu&gt;
                    &lt;DropdownItem&gt;
                      &lt;DropdownLink href=&quot;#&quot;&gt;Action&lt;/DropdownLink&gt;
                    &lt;/DropdownItem&gt;
                    &lt;DropdownItem&gt;
                      &lt;DropdownLink href=&quot;#&quot;&gt;Another action&lt;/DropdownLink&gt;
                    &lt;/DropdownItem&gt;
                    &lt;DropdownItem&gt;
                      &lt;DropdownLink href=&quot;#&quot;&gt;Something else here&lt;/DropdownLink&gt;
                    &lt;/DropdownItem&gt;
                  &lt;/DropdownMenu&gt;
                &lt;/Dropdown&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
          <BlockTitle>Auto close behavior</BlockTitle>
          <BlockText>By default, the dropdown menu is closed when clicking inside or outside the dropdown menu. You can use the autoClose option to change this behavior of the dropdown.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="d-flex gap g-3">
            <li>
              <Dropdown>
                <DropdownToggle type="button" variant="secondary" autoClose="true" >Default dropdown</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <DropdownLink href="#">Menu item</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink href="#">Menu item</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink href="#">Menu item</DropdownLink>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <Dropdown>
                <DropdownToggle type="button" variant="secondary" autoClose="inside">Clickable outside</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <DropdownLink href="#">Menu item</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink href="#">Menu item</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink href="#">Menu item</DropdownLink>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <Dropdown>
                <DropdownToggle type="button" variant="secondary" autoClose="outside">Clickable inside</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <DropdownLink href="#">Menu item</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink href="#">Menu item</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink href="#">Menu item</DropdownLink>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <Dropdown>
                <DropdownToggle type="button" variant="secondary" autoClose="false">Manual close</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <DropdownLink href="#">Menu item</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink href="#">Menu item</DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink href="#">Menu item</DropdownLink>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
          </ul>
        </CardBody>
        <CodePreview title="code example">
          &lt;Dropdown&gt;
                &lt;DropdownToggle type=&quot;button&quot; variant=&quot;secondary&quot; autoClose=&quot;true&quot; &gt;Default dropdown&lt;/DropdownToggle&gt;
                &lt;DropdownMenu&gt;
                  &lt;DropdownItem&gt;
                    &lt;DropdownLink href=&quot;#&quot;&gt;Menu item&lt;/DropdownLink&gt;
                  &lt;/DropdownItem&gt;
                  &lt;DropdownItem&gt;
                    &lt;DropdownLink href=&quot;#&quot;&gt;Menu item&lt;/DropdownLink&gt;
                  &lt;/DropdownItem&gt;
                  &lt;DropdownItem&gt;
                    &lt;DropdownLink href=&quot;#&quot;&gt;Menu item&lt;/DropdownLink&gt;
                  &lt;/DropdownItem&gt;
                &lt;/DropdownMenu&gt;
              &lt;/Dropdown&gt;
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
import Dropdown from '@/components/uielements/dropdown/Dropdown.vue';
import DropdownToggle from '@/components/uielements/dropdown/DropdownToggle.vue';
import DropdownMenu from '@/components/uielements/dropdown/DropdownMenu.vue';
import DropdownItem from '@/components/uielements/dropdown/DropdownItem.vue';
import DropdownLink from '@/components/uielements/dropdown/DropdownLink.vue';
import DropdownHeader from '@/components/uielements/dropdown/DropdownHeader.vue';
import Button from '@/components/uielements/button/Button.vue';
import Navbar from '@/components/uielements/navbar/Navbar.vue';
import NavbarBrand from '@/components/uielements/navbar/NavbarBrand.vue';
import NavbarToggle from '@/components/uielements/navbar/NavbarToggle.vue';
import NavbarNav from '@/components/uielements/navbar/NavbarNav.vue';
import NavbarNavItem from '@/components/uielements/navbar/NavbarNavItem.vue';
import NavbarNavLink from '@/components/uielements/navbar/NavbarNavLink.vue';

export default {
  name: 'CloseButtonPage', 
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
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    DropdownLink,
    Dropdown,
    Navbar,
    NavbarBrand,
    NavbarToggle,
    NavbarNav,
    NavbarNavItem,
    NavbarNavLink,
    DropdownHeader
},
}
</script>
