<template>
  <Layout>
    <Row utils="g-gs">
      <Col xxl="12">
        <CardBody class="flex-grow-0 py-2">
          <CardTitleGroup>
            <CardTitle tag="div">
              <h3 class="title">Create Bedroom</h3>
            </CardTitle>
            <CardTools>
                <Button variant="primary" soft class="mx-1" type="button">Save</Button>
            </CardTools>
          </CardTitleGroup>
        </CardBody>
      </Col>
    </Row>
    <Row utils="g-gs">
      <Col xxl="12">
        <Card class="mb-4">
            <CardBody>
                <CardTitleGroup>
                    <CardTitle tag="div">
                      <h4 class="title mb-3"></h4>
                    </CardTitle>
                </CardTitleGroup>
                <div class="row g-3 gx-gs mb-4">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label  class="form-label">Name</label>
                            <div class="form-control-wrap">
                                <FormInput type="text" placeholder="Enter Bedrooms"/>
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
      </Col>
    </Row>
  </Layout>
</template>

<script>
// @ is an alias to /src
import Layout from '@/layout/Index.vue';
import Row from '@/components/layout/Row.vue';
import Col from '@/components/layout/Col.vue';
import Card from '@/components/uielements/card/Card.vue';
import CardBody from '@/components/uielements/card/CardBody.vue';
import CardTitleGroup from '@/components/uielements/card/CardTitleGroup.vue';
import CardTitle from '@/components/uielements/card/CardTitle.vue';
import Button from '@/components/uielements/button/Button.vue';
import FormInput from '@/components/forms/input/FormInput.vue';

export default {
  name: 'AccountOrder',
  components: {
    Layout,
    Row,
    Col,
    Card,
    CardBody,
    CardTitleGroup,
    CardTitle,
    Button,
    FormInput,
  },
  data(){
    return {
      
    }
  },
  methods: {
    changeDiscountSymbol(sym)
    {
        document.getElementById('discountSymbolBtn').innerHTML=sym;
    }
  }
}
</script>
