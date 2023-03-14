<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Date & Time Picker</BlockTitle>
        <BlockText>Datepicker with <a target="_blank" href="https://mymth.github.io/vanillajs-datepicker">vanillajs-datepicker</a>. and time picker from nioapp custom script</BlockText>
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
              <div class="col-md-6">
                  <div class="form-group">
                      <label for="datePicker1" class="form-label">Datepicker</label>
                      <div class="form-control-wrap">
                          <DatePicker id="date-picker" title="Text" :todayBtn="true" :todayBtnMode="1" :clearBtn="true"/>
                      </div>
                  </div>
              </div><!-- .col -->
              <div class="col-md-6">
                  <div class="form-group">
                      <label for="datePicker1" class="form-label">Daterange Picker</label>
                      <div class="input-group">
                          <DatePicker id="date-range-picker" :rangePicker="true"/>
                      </div>
                  </div>
              </div><!-- .col -->
              <div class="col-12">
                  <div class="form-note">
                    Use <code>:rangePicker="true"</code> prop to <code>DatePicker</code> to enable range date picker.
                    <span class="text-black">Note:</span> You must give a unique id to every <code>DatePicker</code> to initialize datepicker.
                  </div>
              </div><!-- .col -->
              <div class="col-md-6">
                  <div class="form-group">
                      <label for="datePicker1" class="form-label">Datepicker Month View</label>
                      <div class="input-group">
                          <DatePicker id="date-picker-month-view" :startView="1"/>
                      </div>
                  </div>
              </div><!-- .col -->
              <div class="col-md-6">
                  <div class="form-group">
                      <label for="datePicker1" class="form-label">Datepicker Year View</label>
                      <div class="input-group">
                          <DatePicker id="date-picker-year-view" :startView="2"/>
                      </div>
                  </div>
              </div><!-- .col -->
              <div class="col-12">
                  <div class="form-note">
                    Use <code>:startView="1"</code> prop to <code>DatePicker</code> to enable month view, and use <code>:startView="2"</code> prop to <code>DatePicker</code> to enable year view. <br>
                    <span class="text-black">Note:</span> Even though `1` and `2` are static, we need v-bind to tell Vue that this is a JavaScript expression rather than a string.
                  </div>
              </div><!-- .col -->
          </div><!-- .row -->
        </CardBody>
        <CodePreview title="date picker">
          &lt;DatePicker id=&quot;date-picker&quot; title=&quot;Text&quot; :todayBtn=&quot;true&quot; :todayBtnMode=&quot;1&quot; :clearBtn=&quot;true&quot; placeholder=&quot;dd/mm/yyyy&quot;/&gt;
        </CodePreview>
        <CodePreview title="date range picker">
          &lt;DatePicker id=&quot;date-range-picker&quot; :rangePicker=&quot;true&quot; placeholder=&quot;dd/mm/yyyy&quot;/&gt;
        </CodePreview>
      </Card>
    </Block>

    <Block>
      <BlockHead>
        <BlockTitle>Example</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="row g-gs">
              <div class="col-md-6">
                  <div class="form-group">
                      <label class="form-label">Time Picker</label>
                      <div class="form-control-wrap">
                          <TimePicker placeholder="HH:MM" />
                      </div>
                  </div>
              </div><!-- .col -->
              <div class="col-md-6">
                  <div class="form-group">
                      <label class="form-label">Time Picker (24hour)</label>
                      <div class="form-control-wrap">
                          <TimePicker :format="24" placeholder="HH:MM" />
                      </div>
                  </div>
              </div><!-- .col -->
              <div class="col-12">
                  <div class="form-note">
                    Use <code>:format="24"</code> prop to <code>TimePicker</code> to enable 24 hour time formate.
                  </div>
              </div><!-- .col -->
          </div><!-- .row -->
        </CardBody>
        <CodePreview title="time picker">
          &lt;TimePicker placeholder=&quot;HH:MM&quot; /&gt;
        </CodePreview>
        <CodePreview title="time picker (24h)">
          &lt;TimePicker :format=&quot;24&quot; placeholder=&quot;HH:MM&quot; /&gt;
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
import DatePicker from '@/components/forms/date-picker/DatePicker.vue';
import TimePicker from '@/components/forms/time-picker/TimePicker.vue';

export default {
  name: 'DateTimePage',
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
    DatePicker,
    TimePicker
  },
}
</script>
