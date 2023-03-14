<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Carousel</BlockTitle>
        <BlockText>A slideshow component for cycling through elements—images or slides of text—like a carousel.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead class="wide-md">
        <BlockText><strong class="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component. 
          </BlockText>
          <BlockText>How to import component and use see the <a href="#">docs</a></BlockText>
        <BlockTitle>Slides only</BlockTitle>
        <BlockText>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.w-100</code> on carousel images to prevent browser default image alignment.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Carousel>
              <CarouselInner>
                  <CarouselItem active>
                      <Img src="/images/slider/a.jpg" class="d-block w-100" alt="image"/>
                  </CarouselItem>
                  <CarouselItem>
                      <Img src="/images/slider/a.jpg" class="d-block w-100" alt="image"/>
                  </CarouselItem>
                  <CarouselItem>
                      <Img src="/images/slider/a.jpg" class="d-block w-100" alt="image"/>
                  </CarouselItem>
              </CarouselInner>
          </Carousel>
        </CardBody>
        <CodePreview title="code example">
          &lt;Carousel&gt;
              &lt;CarouselInner&gt;
                  &lt;CarouselItem active&gt;
                      &lt;Img src=&quot;/images/slider/a.jpg&quot; class=&quot;d-block w-100&quot; alt=&quot;image&quot;/&gt;
                  &lt;/CarouselItem&gt;
                  &lt;CarouselItem&gt;
                      &lt;Img src=&quot;/images/slider/a.jpg&quot; class=&quot;d-block w-100&quot; alt=&quot;image&quot;/&gt;
                  &lt;/CarouselItem&gt;
                  &lt;CarouselItem&gt;
                      &lt;Img src=&quot;/images/slider/a.jpg&quot; class=&quot;d-block w-100&quot; alt=&quot;image&quot;/&gt;
                  &lt;/CarouselItem&gt;
              &lt;/CarouselInner&gt;
          &lt;/Carousel&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>With controls</BlockTitle>
        <BlockText>Adding in the previous and next controls. We recommend using <code>CarouselButton</code> elements.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Carousel id="carouselExampleControls" ride="carousel">
              <CarouselInner>
                  <CarouselItem active>
                      <Img src="/images/slider/a.jpg" class="d-block w-100" alt="image"/>
                  </CarouselItem>
                  <CarouselItem>
                      <Img src="/images/slider/a.jpg" class="d-block w-100" alt="image"/>
                  </CarouselItem>
                  <CarouselItem>
                      <Img src="/images/slider/a.jpg" class="d-block w-100" alt="image"/>
                  </CarouselItem>
              </CarouselInner>
              <CarouselButton target="carouselExampleControls" slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
              </CarouselButton>
              <CarouselButton target="carouselExampleControls" slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
              </CarouselButton>
          </Carousel>
        </CardBody>
        <CodePreview title="code example">
          &lt;Carousel id=&quot;carouselExampleControls&quot; ride=&quot;carousel&quot;&gt;
              &lt;CarouselInner&gt;
                  &lt;CarouselItem active&gt;
                      &lt;Img src=&quot;/images/slider/a.jpg&quot; class=&quot;d-block w-100&quot; alt=&quot;image&quot;/&gt;
                  &lt;/CarouselItem&gt;
                  &lt;CarouselItem&gt;
                      &lt;Img src=&quot;/images/slider/a.jpg&quot; class=&quot;d-block w-100&quot; alt=&quot;image&quot;/&gt;
                  &lt;/CarouselItem&gt;
                  &lt;CarouselItem&gt;
                      &lt;Img src=&quot;/images/slider/a.jpg&quot; class=&quot;d-block w-100&quot; alt=&quot;image&quot;/&gt;
                  &lt;/CarouselItem&gt;
              &lt;/CarouselInner&gt;
              &lt;CarouselButton target=&quot;carouselExampleControls&quot; slide=&quot;prev&quot;&gt;
                  &lt;span class=&quot;carousel-control-prev-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
                  &lt;span class=&quot;visually-hidden&quot;&gt;Previous&lt;/span&gt;
              &lt;/CarouselButton&gt;
              &lt;CarouselButton target=&quot;carouselExampleControls&quot; slide=&quot;next&quot;&gt;
                  &lt;span class=&quot;carousel-control-next-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
                  &lt;span class=&quot;visually-hidden&quot;&gt;Next&lt;/span&gt;
              &lt;/CarouselButton&gt;
          &lt;/Carousel&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>With indicators</BlockTitle>
        <BlockText>You can also add the indicators to the carousel, alongside the controls, too.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Carousel id="carouselExampleIndicators" ride="carousel">
              <CarouselIndicators>
                  <CarouselButton target="carouselExampleIndicators" slideTo="0" active></CarouselButton>
                  <CarouselButton target="carouselExampleIndicators" slideTo="1"></CarouselButton>
                  <CarouselButton target="carouselExampleIndicators" slideTo="2"></CarouselButton>
              </CarouselIndicators>
              <CarouselInner>
                  <CarouselItem active>
                      <Img src="/images/slider/a.jpg" class="d-block w-100" alt="image"/>
                  </CarouselItem>
                  <CarouselItem>
                      <Img src="/images/slider/a.jpg" class="d-block w-100" alt="image"/>
                  </CarouselItem>
                  <CarouselItem>
                      <Img src="/images/slider/a.jpg" class="d-block w-100" alt="image"/>
                  </CarouselItem>
              </CarouselInner>
              <CarouselButton target="carouselExampleIndicators" slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
              </CarouselButton>
              <CarouselButton target="carouselExampleIndicators" slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
              </CarouselButton>
          </Carousel>
        </CardBody>
        <CodePreview title="code example">
          &lt;Carousel id=&quot;carouselExampleIndicators&quot; ride=&quot;carousel&quot;&gt;
              &lt;CarouselIndicators&gt;
                  &lt;CarouselButton target=&quot;carouselExampleIndicators&quot; slideTo=&quot;0&quot; active&gt;&lt;/CarouselButton&gt;
                  &lt;CarouselButton target=&quot;carouselExampleIndicators&quot; slideTo=&quot;1&quot;&gt;&lt;/CarouselButton&gt;
                  &lt;CarouselButton target=&quot;carouselExampleIndicators&quot; slideTo=&quot;2&quot;&gt;&lt;/CarouselButton&gt;
              &lt;/CarouselIndicators&gt;
              &lt;CarouselInner&gt;
                  &lt;CarouselItem active&gt;
                      &lt;Img src=&quot;/images/slider/a.jpg&quot; class=&quot;d-block w-100&quot; alt=&quot;image&quot;/&gt;
                  &lt;/CarouselItem&gt;
                  &lt;CarouselItem&gt;
                      &lt;Img src=&quot;/images/slider/a.jpg&quot; class=&quot;d-block w-100&quot; alt=&quot;image&quot;/&gt;
                  &lt;/CarouselItem&gt;
                  &lt;CarouselItem&gt;
                      &lt;Img src=&quot;/images/slider/a.jpg&quot; class=&quot;d-block w-100&quot; alt=&quot;image&quot;/&gt;
                  &lt;/CarouselItem&gt;
              &lt;/CarouselInner&gt;
              &lt;CarouselButton target=&quot;carouselExampleIndicators&quot; slide=&quot;prev&quot;&gt;
                  &lt;span class=&quot;carousel-control-prev-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
                  &lt;span class=&quot;visually-hidden&quot;&gt;Previous&lt;/span&gt;
              &lt;/CarouselButton&gt;
              &lt;CarouselButton target=&quot;carouselExampleIndicators&quot; slide=&quot;next&quot;&gt;
                  &lt;span class=&quot;carousel-control-next-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
                  &lt;span class=&quot;visually-hidden&quot;&gt;Next&lt;/span&gt;
              &lt;/CarouselButton&gt;
          &lt;/Carousel&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>With captions</BlockTitle>
        <BlockText>Add captions to your slides easily with the <code>CarouselCaption</code> element within any <code>CarouselItem</code></BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Carousel id="carouselExampleCaptions" ride="carousel">
              <CarouselIndicators>
                  <CarouselButton target="carouselExampleCaptions" slideTo="0" active></CarouselButton>
                  <CarouselButton target="carouselExampleCaptions" slideTo="1"></CarouselButton>
                  <CarouselButton target="carouselExampleCaptions" slideTo="2"></CarouselButton>
              </CarouselIndicators>
              <CarouselInner>
                  <CarouselItem active>
                      <Img src="/images/slider/a.jpg" class="d-block w-100" alt="image"/>
                      <CarouselCaption>
                          <h5>First slide label</h5>
                          <p>Some representative placeholder content for the first slide.</p>
                      </CarouselCaption>
                  </CarouselItem>
                  <CarouselItem>
                      <Img src="/images/slider/a.jpg" class="d-block w-100" alt="image"/>
                      <CarouselCaption>
                          <h5>Second slide label</h5>
                          <p>Some representative placeholder content for the Second slide.</p>
                      </CarouselCaption>
                  </CarouselItem>
                  <CarouselItem>
                      <Img src="/images/slider/a.jpg" class="d-block w-100" alt="image"/>
                      <CarouselCaption>
                          <h5>Third slide label</h5>
                          <p>Some representative placeholder content for the Third slide.</p>
                      </CarouselCaption>
                  </CarouselItem>
              </CarouselInner>
              <CarouselButton target="carouselExampleCaptions" slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
              </CarouselButton>
              <CarouselButton target="carouselExampleCaptions" slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
              </CarouselButton>
          </Carousel>
        </CardBody>
        <CodePreview title="code example">
          &lt;Carousel id=&quot;carouselExampleCaptions&quot; ride=&quot;carousel&quot;&gt;
              &lt;CarouselIndicators&gt;
                  &lt;CarouselButton target=&quot;carouselExampleCaptions&quot; slideTo=&quot;0&quot; active&gt;&lt;/CarouselButton&gt;
                  &lt;CarouselButton target=&quot;carouselExampleCaptions&quot; slideTo=&quot;1&quot;&gt;&lt;/CarouselButton&gt;
                  &lt;CarouselButton target=&quot;carouselExampleCaptions&quot; slideTo=&quot;2&quot;&gt;&lt;/CarouselButton&gt;
              &lt;/CarouselIndicators&gt;
              &lt;CarouselInner&gt;
                  &lt;CarouselItem active&gt;
                      &lt;Img src=&quot;/images/slider/a.jpg&quot; class=&quot;d-block w-100&quot; alt=&quot;image&quot;/&gt;
                      &lt;CarouselCaption&gt;
                          &lt;h5&gt;First slide label&lt;/h5&gt;
                          &lt;p&gt;Some representative placeholder content for the first slide.&lt;/p&gt;
                      &lt;/CarouselCaption&gt;
                  &lt;/CarouselItem&gt;
                  &lt;CarouselItem&gt;
                      &lt;Img src=&quot;/images/slider/a.jpg&quot; class=&quot;d-block w-100&quot; alt=&quot;image&quot;/&gt;
                      &lt;CarouselCaption&gt;
                          &lt;h5&gt;Second slide label&lt;/h5&gt;
                          &lt;p&gt;Some representative placeholder content for the Second slide.&lt;/p&gt;
                      &lt;/CarouselCaption&gt;
                  &lt;/CarouselItem&gt;
                  &lt;CarouselItem&gt;
                      &lt;Img src=&quot;/images/slider/a.jpg&quot; class=&quot;d-block w-100&quot; alt=&quot;image&quot;/&gt;
                      &lt;CarouselCaption&gt;
                          &lt;h5&gt;Third slide label&lt;/h5&gt;
                          &lt;p&gt;Some representative placeholder content for the Third slide.&lt;/p&gt;
                      &lt;/CarouselCaption&gt;
                  &lt;/CarouselItem&gt;
              &lt;/CarouselInner&gt;
              &lt;CarouselButton target=&quot;carouselExampleCaptions&quot; slide=&quot;prev&quot;&gt;
                  &lt;span class=&quot;carousel-control-prev-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
                  &lt;span class=&quot;visually-hidden&quot;&gt;Previous&lt;/span&gt;
              &lt;/CarouselButton&gt;
              &lt;CarouselButton target=&quot;carouselExampleCaptions&quot; slide=&quot;next&quot;&gt;
                  &lt;span class=&quot;carousel-control-next-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
                  &lt;span class=&quot;visually-hidden&quot;&gt;Next&lt;/span&gt;
              &lt;/CarouselButton&gt;
          &lt;/Carousel&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Crossfade</BlockTitle>
        <BlockText>Add <code>animation="fade"</code> to your carousel to animate slides with a fade transition instead of a slide.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Carousel id="carouselExampleFade" class="slide" animation="fade" ride="carousel">
              <CarouselInner>
                  <CarouselItem active>
                      <Img src="/images/slider/a.jpg" class="d-block w-100" alt="image"/>
                      <CarouselCaption>
                          <h1>Slide 1</h1>
                      </CarouselCaption>
                  </CarouselItem>
                  <CarouselItem>
                      <Img src="/images/slider/a.jpg" class="d-block w-100" alt="image"/>
                      <CarouselCaption>
                          <h1>Slide 2</h1>
                      </CarouselCaption>
                  </CarouselItem>
                  <CarouselItem>
                      <Img src="/images/slider/a.jpg" class="d-block w-100" alt="image"/>
                      <CarouselCaption>
                          <h1>Slide 3</h1>
                      </CarouselCaption>
                  </CarouselItem>
              </CarouselInner>
              <CarouselButton target="carouselExampleFade" slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
              </CarouselButton>
              <CarouselButton target="carouselExampleFade" slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
              </CarouselButton>
          </Carousel>
        </CardBody>
        <CodePreview title="code example">
          &lt;Carousel id=&quot;carouselExampleFade&quot; class=&quot;slide&quot; animation=&quot;fade&quot; ride=&quot;carousel&quot;&gt;
              &lt;CarouselInner&gt;
                  &lt;CarouselItem active&gt;
                      &lt;Img src=&quot;/images/slider/a.jpg&quot; class=&quot;d-block w-100&quot; alt=&quot;image&quot;/&gt;
                      &lt;CarouselCaption&gt;
                          &lt;h1&gt;Slide 1&lt;/h1&gt;
                      &lt;/CarouselCaption&gt;
                  &lt;/CarouselItem&gt;
                  &lt;CarouselItem&gt;
                      &lt;Img src=&quot;/images/slider/a.jpg&quot; class=&quot;d-block w-100&quot; alt=&quot;image&quot;/&gt;
                      &lt;CarouselCaption&gt;
                          &lt;h1&gt;Slide 2&lt;/h1&gt;
                      &lt;/CarouselCaption&gt;
                  &lt;/CarouselItem&gt;
                  &lt;CarouselItem&gt;
                      &lt;Img src=&quot;/images/slider/a.jpg&quot; class=&quot;d-block w-100&quot; alt=&quot;image&quot;/&gt;
                      &lt;CarouselCaption&gt;
                          &lt;h1&gt;Slide 3&lt;/h1&gt;
                      &lt;/CarouselCaption&gt;
                  &lt;/CarouselItem&gt;
              &lt;/CarouselInner&gt;
              &lt;CarouselButton target=&quot;carouselExampleFade&quot; slide=&quot;prev&quot;&gt;
                  &lt;span class=&quot;carousel-control-prev-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
                  &lt;span class=&quot;visually-hidden&quot;&gt;Previous&lt;/span&gt;
              &lt;/CarouselButton&gt;
              &lt;CarouselButton target=&quot;carouselExampleFade&quot; slide=&quot;next&quot;&gt;
                  &lt;span class=&quot;carousel-control-next-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
                  &lt;span class=&quot;visually-hidden&quot;&gt;Next&lt;/span&gt;
              &lt;/CarouselButton&gt;
          &lt;/Carousel&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Individual <code>CarouselItem</code> interval</BlockTitle>
        <BlockText>Add <code>interval=""</code> to a <code>CarouselItem</code> to change the amount of time to delay between automatically cycling to the next item.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Carousel id="carouselExampleInterval" ride="carousel">
              <CarouselInner>
                  <CarouselItem active interval="10000">
                      <Img src="/images/slider/a.jpg" class="d-block w-100" alt="image"/>
                      <CarouselCaption>
                          <h1>Slide 1</h1>
                      </CarouselCaption>
                  </CarouselItem>
                  <CarouselItem interval="2000">
                      <Img src="/images/slider/a.jpg" class="d-block w-100" alt="image"/>
                      <CarouselCaption>
                          <h1>Slide 2</h1>
                      </CarouselCaption>
                  </CarouselItem>
                  <CarouselItem>
                      <Img src="/images/slider/a.jpg" class="d-block w-100" alt="image"/>
                      <CarouselCaption>
                          <h1>Slide 3</h1>
                      </CarouselCaption>
                  </CarouselItem>
              </CarouselInner>
              <CarouselButton target="carouselExampleInterval" slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
              </CarouselButton>
              <CarouselButton target="carouselExampleInterval" slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
              </CarouselButton>
          </Carousel>
        </CardBody>
        <CodePreview title="code example">
          &lt;Carousel id=&quot;carouselExampleInterval&quot; ride=&quot;carousel&quot;&gt;
              &lt;CarouselInner&gt;
                  &lt;CarouselItem active interval=&quot;10000&quot;&gt;
                      &lt;Img src=&quot;/images/slider/a.jpg&quot; class=&quot;d-block w-100&quot; alt=&quot;image&quot;/&gt;
                      &lt;CarouselCaption&gt;
                          &lt;h1&gt;Slide 1&lt;/h1&gt;
                      &lt;/CarouselCaption&gt;
                  &lt;/CarouselItem&gt;
                  &lt;CarouselItem interval=&quot;2000&quot;&gt;
                      &lt;Img src=&quot;/images/slider/a.jpg&quot; class=&quot;d-block w-100&quot; alt=&quot;image&quot;/&gt;
                      &lt;CarouselCaption&gt;
                          &lt;h1&gt;Slide 2&lt;/h1&gt;
                      &lt;/CarouselCaption&gt;
                  &lt;/CarouselItem&gt;
                  &lt;CarouselItem&gt;
                      &lt;Img src=&quot;/images/slider/a.jpg&quot; class=&quot;d-block w-100&quot; alt=&quot;image&quot;/&gt;
                      &lt;CarouselCaption&gt;
                          &lt;h1&gt;Slide 3&lt;/h1&gt;
                      &lt;/CarouselCaption&gt;
                  &lt;/CarouselItem&gt;
              &lt;/CarouselInner&gt;
              &lt;CarouselButton target=&quot;carouselExampleInterval&quot; slide=&quot;prev&quot;&gt;
                  &lt;span class=&quot;carousel-control-prev-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
                  &lt;span class=&quot;visually-hidden&quot;&gt;Previous&lt;/span&gt;
              &lt;/CarouselButton&gt;
              &lt;CarouselButton target=&quot;carouselExampleInterval&quot; slide=&quot;next&quot;&gt;
                  &lt;span class=&quot;carousel-control-next-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
                  &lt;span class=&quot;visually-hidden&quot;&gt;Next&lt;/span&gt;
              &lt;/CarouselButton&gt;
          &lt;/Carousel&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Disable touch swiping</BlockTitle>
        <BlockText>Carousels support swiping left/right on touchscreen devices to move between slides. This can be disabled using the <code>data-bs-touch</code> attribute. The example below also does not include the <code>ride</code> attribute and has <code>data-bs-interval="false"</code> so it doesn’t autoplay.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Carousel id="carouselExampleControlsNoTouching" data-bs-touch="false" data-bs-interval="false" >
              <CarouselInner>
                  <CarouselItem active>
                      <Img src="/images/slider/a.jpg" class="d-block w-100" alt="image"/>
                      <CarouselCaption>
                          <h1>Slide 1</h1>
                      </CarouselCaption>
                  </CarouselItem>
                  <CarouselItem>
                      <Img src="/images/slider/a.jpg" class="d-block w-100" alt="image"/>
                      <CarouselCaption>
                          <h1>Slide 2</h1>
                      </CarouselCaption>
                  </CarouselItem>
                  <CarouselItem>
                      <Img src="/images/slider/a.jpg" class="d-block w-100" alt="image"/>
                      <CarouselCaption>
                          <h1>Slide 3</h1>
                      </CarouselCaption>
                  </CarouselItem>
              </CarouselInner>
              <CarouselButton target="carouselExampleControlsNoTouching" slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
              </CarouselButton>
              <CarouselButton target="carouselExampleControlsNoTouching" slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
              </CarouselButton>
          </Carousel>
        </CardBody>
        <CodePreview title="code example">
          &lt;Carousel id=&quot;carouselExampleControlsNoTouching&quot; data-bs-touch=&quot;false&quot; data-bs-interval=&quot;false&quot; &gt;
              &lt;CarouselInner&gt;
                  &lt;CarouselItem active&gt;
                      &lt;Img src=&quot;/images/slider/a.jpg&quot; class=&quot;d-block w-100&quot; alt=&quot;image&quot;/&gt;
                      &lt;CarouselCaption&gt;
                          &lt;h1&gt;Slide 1&lt;/h1&gt;
                      &lt;/CarouselCaption&gt;
                  &lt;/CarouselItem&gt;
                  &lt;CarouselItem&gt;
                      &lt;Img src=&quot;/images/slider/a.jpg&quot; class=&quot;d-block w-100&quot; alt=&quot;image&quot;/&gt;
                      &lt;CarouselCaption&gt;
                          &lt;h1&gt;Slide 2&lt;/h1&gt;
                      &lt;/CarouselCaption&gt;
                  &lt;/CarouselItem&gt;
                  &lt;CarouselItem&gt;
                      &lt;Img src=&quot;/images/slider/a.jpg&quot; class=&quot;d-block w-100&quot; alt=&quot;image&quot;/&gt;
                      &lt;CarouselCaption&gt;
                          &lt;h1&gt;Slide 3&lt;/h1&gt;
                      &lt;/CarouselCaption&gt;
                  &lt;/CarouselItem&gt;
              &lt;/CarouselInner&gt;
              &lt;CarouselButton target=&quot;carouselExampleControlsNoTouching&quot; slide=&quot;prev&quot;&gt;
                  &lt;span class=&quot;carousel-control-prev-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
                  &lt;span class=&quot;visually-hidden&quot;&gt;Previous&lt;/span&gt;
              &lt;/CarouselButton&gt;
              &lt;CarouselButton target=&quot;carouselExampleControlsNoTouching&quot; slide=&quot;next&quot;&gt;
                  &lt;span class=&quot;carousel-control-next-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
                  &lt;span class=&quot;visually-hidden&quot;&gt;Next&lt;/span&gt;
              &lt;/CarouselButton&gt;
          &lt;/Carousel&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead class="wide-md">
        <BlockTitle>Dark variant</BlockTitle>
        <BlockText>Add <code>variant="dark"</code> to the <code>Carousel</code> for darker controls, indicators, and captions. Controls have been inverted from their default white fill with the filter CSS property. Captions and controls have additional Sass variables that customize the color and background-color.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <Carousel variant="dark" id="carouselExampleDark" ride="carousel">
              <CarouselIndicators>
                  <CarouselButton target="carouselExampleDark" slideTo="0" active></CarouselButton>
                  <CarouselButton target="carouselExampleDark" slideTo="1"></CarouselButton>
                  <CarouselButton target="carouselExampleDark" slideTo="2"></CarouselButton>
              </CarouselIndicators>
              <CarouselInner>
                  <CarouselItem active>
                      <Img src="/images/slider/a.jpg" class="d-block w-100" alt="image"/>
                      <CarouselCaption>
                          <h5>First slide label</h5>
                          <p>Some representative placeholder content for the first slide.</p>
                      </CarouselCaption>
                  </CarouselItem>
                  <CarouselItem>
                      <Img src="/images/slider/a.jpg" class="d-block w-100" alt="image"/>
                      <CarouselCaption>
                          <h5>Second slide label</h5>
                          <p>Some representative placeholder content for the Second slide.</p>
                      </CarouselCaption>
                  </CarouselItem>
                  <CarouselItem>
                      <Img src="/images/slider/a.jpg" class="d-block w-100" alt="image"/>
                      <CarouselCaption>
                          <h5>Third slide label</h5>
                          <p>Some representative placeholder content for the third slide.</p>
                      </CarouselCaption>
                  </CarouselItem>
              </CarouselInner>
              <CarouselButton target="carouselExampleDark" slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
              </CarouselButton>
              <CarouselButton target="carouselExampleDark" slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
              </CarouselButton>
          </Carousel>
        </CardBody>
        <CodePreview title="code example">
          &lt;Carousel variant=&quot;dark&quot; id=&quot;carouselExampleDark&quot; ride=&quot;carousel&quot;&gt;
              &lt;CarouselIndicators&gt;
                  &lt;CarouselButton target=&quot;carouselExampleDark&quot; slideTo=&quot;0&quot; active&gt;&lt;/CarouselButton&gt;
                  &lt;CarouselButton target=&quot;carouselExampleDark&quot; slideTo=&quot;1&quot;&gt;&lt;/CarouselButton&gt;
                  &lt;CarouselButton target=&quot;carouselExampleDark&quot; slideTo=&quot;2&quot;&gt;&lt;/CarouselButton&gt;
              &lt;/CarouselIndicators&gt;
              &lt;CarouselInner&gt;
                  &lt;CarouselItem active&gt;
                      &lt;Img src=&quot;/images/slider/a.jpg&quot; class=&quot;d-block w-100&quot; alt=&quot;image&quot;/&gt;
                      &lt;CarouselCaption&gt;
                          &lt;h5&gt;First slide label&lt;/h5&gt;
                          &lt;p&gt;Some representative placeholder content for the first slide.&lt;/p&gt;
                      &lt;/CarouselCaption&gt;
                  &lt;/CarouselItem&gt;
                  &lt;CarouselItem&gt;
                      &lt;Img src=&quot;/images/slider/a.jpg&quot; class=&quot;d-block w-100&quot; alt=&quot;image&quot;/&gt;
                      &lt;CarouselCaption&gt;
                          &lt;h5&gt;Second slide label&lt;/h5&gt;
                          &lt;p&gt;Some representative placeholder content for the Second slide.&lt;/p&gt;
                      &lt;/CarouselCaption&gt;
                  &lt;/CarouselItem&gt;
                  &lt;CarouselItem&gt;
                      &lt;Img src=&quot;/images/slider/a.jpg&quot; class=&quot;d-block w-100&quot; alt=&quot;image&quot;/&gt;
                      &lt;CarouselCaption&gt;
                          &lt;h5&gt;Third slide label&lt;/h5&gt;
                          &lt;p&gt;Some representative placeholder content for the third slide.&lt;/p&gt;
                      &lt;/CarouselCaption&gt;
                  &lt;/CarouselItem&gt;
              &lt;/CarouselInner&gt;
              &lt;CarouselButton target=&quot;carouselExampleDark&quot; slide=&quot;prev&quot;&gt;
                  &lt;span class=&quot;carousel-control-prev-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
                  &lt;span class=&quot;visually-hidden&quot;&gt;Previous&lt;/span&gt;
              &lt;/CarouselButton&gt;
              &lt;CarouselButton target=&quot;carouselExampleDark&quot; slide=&quot;next&quot;&gt;
                  &lt;span class=&quot;carousel-control-next-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
                  &lt;span class=&quot;visually-hidden&quot;&gt;Next&lt;/span&gt;
              &lt;/CarouselButton&gt;
          &lt;/Carousel&gt;
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
import Carousel from '@/components/uielements/carousel/Carousel.vue';
import CarouselInner from '@/components/uielements/carousel/CarouselInner.vue';
import CarouselItem from '@/components/uielements/carousel/CarouselItem.vue';
import Img from '@/components/img/Img.vue';
import CarouselButton from '../../components/uielements/carousel/CarouselButton.vue';
import CarouselIndicators from '../../components/uielements/carousel/CarouselIndicators.vue';
import CarouselCaption from '../../components/uielements/carousel/CarouselCaption.vue';

export default {
  name: 'CarouselPage', 
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
    Carousel,
    CarouselInner,
    CarouselItem,
    Img,
    CarouselButton,
    CarouselIndicators,
    CarouselCaption
},
}
</script>
