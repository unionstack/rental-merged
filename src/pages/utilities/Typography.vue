<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Typography</BlockTitle>
        <BlockText>Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead>
        <BlockTitle>Headings</BlockTitle>
        <BlockText>All HTML headings, <code>h1</code> through <code>h6</code>, are available.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="table-responsive">
              <table class="table">
                  <thead>
                      <tr>
                          <th>Heading</th>
                          <th>Example</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td><code>&lt;h1&gt;&lt;/h1&gt;</code></td>
                          <td><span class="h1">h1. Bootstrap heading</span></td>
                      </tr>
                      <tr>
                          <td><code>&lt;h2&gt;&lt;/h2&gt;</code></td>
                          <td><span class="h2">h2. Bootstrap heading</span></td>
                      </tr>
                      <tr>
                          <td><code>&lt;h3&gt;&lt;/h3&gt;</code></td>
                          <td><span class="h3">h3. Bootstrap heading</span></td>
                      </tr>
                      <tr>
                          <td><code>&lt;h4&gt;&lt;/h4&gt;</code></td>
                          <td><span class="h4">h4. Bootstrap heading</span></td>
                      </tr>
                      <tr>
                          <td><code>&lt;h5&gt;&lt;/h5&gt;</code></td>
                          <td><span class="h5">h5. Bootstrap heading</span></td>
                      </tr>
                      <tr>
                          <td><code>&lt;h6&gt;&lt;/h6&gt;</code></td>
                          <td><span class="h6">h6. Bootstrap heading</span></td>
                      </tr>
                  </tbody>
              </table>
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;h1&gt;h1. Bootstrap heading&lt;/h1&gt;
          &lt;h2&gt;h2. Bootstrap heading&lt;/h2&gt;
          &lt;h3&gt;h3. Bootstrap heading&lt;/h3&gt;
          &lt;h4&gt;h4. Bootstrap heading&lt;/h4&gt;
          &lt;h5&gt;h5. Bootstrap heading&lt;/h5&gt;
          &lt;h6&gt;h6. Bootstrap heading&lt;/h6&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
        <BlockText><code>.h1</code> through <code>.h6</code> classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <p class="h1">h1. Bootstrap heading</p>
          <p class="h2">h2. Bootstrap heading</p>
          <p class="h3">h3. Bootstrap heading</p>
          <p class="h4">h4. Bootstrap heading</p>
          <p class="h5">h5. Bootstrap heading</p>
          <p class="h6">h6. Bootstrap heading</p>
        </CardBody>
        <CodePreview title="code example">
          &lt;p class=&quot;h1&quot;&gt;h1. Bootstrap heading&lt;/p&gt;
          &lt;p class=&quot;h2&quot;&gt;h2. Bootstrap heading&lt;/p&gt;
          &lt;p class=&quot;h3&quot;&gt;h3. Bootstrap heading&lt;/p&gt;
          &lt;p class=&quot;h4&quot;&gt;h4. Bootstrap heading&lt;/p&gt;
          &lt;p class=&quot;h5&quot;&gt;h5. Bootstrap heading&lt;/p&gt;
          &lt;p class=&quot;h6&quot;&gt;h6. Bootstrap heading&lt;/p&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
        <BlockTitle>Display headings</BlockTitle>
        <BlockText>Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a display heading—a larger, slightly more opinionated heading style.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <h1 class="display-1">Display 1</h1>
          <h1 class="display-2">Display 2</h1>
          <h1 class="display-3">Display 3</h1>
          <h1 class="display-4">Display 4</h1>
          <h1 class="display-5">Display 5</h1>
          <h1 class="display-6">Display 6</h1>
        </CardBody>
        <CodePreview title="code example">
          &lt;h1 class=&quot;display-1&quot;&gt;Display 1&lt;/h1&gt;
          &lt;h1 class=&quot;display-2&quot;&gt;Display 2&lt;/h1&gt;
          &lt;h1 class=&quot;display-3&quot;&gt;Display 3&lt;/h1&gt;
          &lt;h1 class=&quot;display-4&quot;&gt;Display 4&lt;/h1&gt;
          &lt;h1 class=&quot;display-5&quot;&gt;Display 5&lt;/h1&gt;
          &lt;h1 class=&quot;display-6&quot;&gt;Display 6&lt;/h1&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
        <BlockTitle>Lead</BlockTitle>
        <BlockText>Make a paragraph stand out by adding <code>.lead</code>.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <p class="lead">
              This is a lead paragraph. It stands out from regular paragraphs.
          </p>
        </CardBody>
        <CodePreview title="code example">
          &lt;p class=&quot;lead&quot;&gt;
              This is a lead paragraph. It stands out from regular paragraphs.
          &lt;/p&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
        <BlockTitle>Inline text elements</BlockTitle>
        <BlockText>Styling for common inline HTML5 elements.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <p>You can use the mark tag to <mark>highlight</mark> text.</p>
          <p><del>This line of text is meant to be treated as deleted text.</del></p>
          <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
          <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
          <p><u>This line of text will render as underlined.</u></p>
          <p><small>This line of text is meant to be treated as fine print.</small></p>
          <p><strong>This line rendered as bold text.</strong></p>
          <p><em>This line rendered as italicized text.</em></p>
        </CardBody>
        <CodePreview title="code example">
          &lt;p&gt;You can use the mark tag to &lt;mark&gt;highlight&lt;/mark&gt; text.&lt;/p&gt;
          &lt;p&gt;&lt;del&gt;This line of text is meant to be treated as deleted text.&lt;/del&gt;&lt;/p&gt;
          &lt;p&gt;&lt;s&gt;This line of text is meant to be treated as no longer accurate.&lt;/s&gt;&lt;/p&gt;
          &lt;p&gt;&lt;ins&gt;This line of text is meant to be treated as an addition to the document.&lt;/ins&gt;&lt;/p&gt;
          &lt;p&gt;&lt;u&gt;This line of text will render as underlined.&lt;/u&gt;&lt;/p&gt;
          &lt;p&gt;&lt;small&gt;This line of text is meant to be treated as fine print.&lt;/small&gt;&lt;/p&gt;
          &lt;p&gt;&lt;strong&gt;This line rendered as bold text.&lt;/strong&gt;&lt;/p&gt;
          &lt;p&gt;&lt;em&gt;This line rendered as italicized text.&lt;/em&gt;&lt;/p&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
        <BlockTitle>Blockquotes</BlockTitle>
        <BlockText>For quoting blocks of content from another source within your document. Wrap <code>blockquote class="blockquote"</code> around any HTML as the quote.</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <figure>
              <blockquote class="blockquote">
              <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption class="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
          </figure>
        </CardBody>
        <CodePreview title="code example">
          &lt;figure&gt;
              &lt;blockquote class=&quot;blockquote&quot;&gt;
              &lt;p&gt;A well-known quote, contained in a blockquote element.&lt;/p&gt;
              &lt;/blockquote&gt;
              &lt;figcaption class=&quot;blockquote-footer&quot;&gt;
              Someone famous in &lt;cite title=&quot;Source Title&quot;&gt;Source Title&lt;/cite&gt;
              &lt;/figcaption&gt;
          &lt;/figure&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
        <BlockTitle>Alignment</BlockTitle>
        <BlockText>Use text utilities as needed to change the alignment of your blockquote</BlockText>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="mb-5">
              <p class="text-center">Use <code>.text-center</code> class for center alignment.</p>
              <figure class="text-center">
                  <blockquote class="blockquote">
                      <p>A well-known quote, contained in a blockquote element.</p>
                  </blockquote>
                  <figcaption class="blockquote-footer"> Someone famous in <cite title="Source Title">Source Title</cite>
                  </figcaption>
              </figure>
          </div>
          <div>
              <p class="text-end">Use <code>.text-end</code> class for right alignment.</p>
              <figure class="text-end">
                  <blockquote class="blockquote">
                      <p>A well-known quote, contained in a blockquote element.</p>
                  </blockquote>
                  <figcaption class="blockquote-footer"> Someone famous in <cite title="Source Title">Source Title</cite>
                  </figcaption>
              </figure>
          </div>
        </CardBody>
        <CodePreview title="code example">
          &lt;figure class=&quot;text-center&quot;&gt;
                  &lt;blockquote class=&quot;blockquote&quot;&gt;
                      &lt;p&gt;A well-known quote, contained in a blockquote element.&lt;/p&gt;
                  &lt;/blockquote&gt;
                  &lt;figcaption class=&quot;blockquote-footer&quot;&gt; Someone famous in &lt;cite title=&quot;Source Title&quot;&gt;Source Title&lt;/cite&gt;
                  &lt;/figcaption&gt;
              &lt;/figure&gt;
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

export default {
  name: 'TypographyPage', 
  components: {
    Layout,
    Block,
    BlockHead,
    BlockHeadContent,
    BlockTitle,
    BlockText,
    Card,
    CardBody,
    CodePreview
  },
}
</script>
