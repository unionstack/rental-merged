<template>
  <Layout>
    <Row utils="g-gs">
      <Col xxl="12">
        <CardBody class="flex-grow-0 py-2">
          <CardTitleGroup>
            <CardTitle tag="div">
              <h3 class="title">Create Property</h3>
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
                            <label class="form-label">Owner</label>
                            <div class="form-control-wrap">
                                <ChoiceSelect size="sm" id="owner" :cross="false">
                                    <ChoiceSelectOption selected>Search for Owner</ChoiceSelectOption>
                                    <ChoiceSelectOption value="1">Alex (alex@gmail.com)</ChoiceSelectOption>
                                    <ChoiceSelectOption value="2">Marcel (marcel@gmail.com)</ChoiceSelectOption>
                                    <ChoiceSelectOption value="3">Thomas (thomas@gmail.com)</ChoiceSelectOption>
                                </ChoiceSelect>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-label">Property Manager</label>
                            <div class="form-control-wrap">
                                <ChoiceSelect size="sm" id="property_manager" :cross="false">
                                    <ChoiceSelectOption selected>Search for Property Manager</ChoiceSelectOption>
                                    <ChoiceSelectOption value="1">Manager 1</ChoiceSelectOption>
                                    <ChoiceSelectOption value="2">Manager 2</ChoiceSelectOption>
                                    <ChoiceSelectOption value="3">Manager 3</ChoiceSelectOption>
                                </ChoiceSelect>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-label">Bedrooms</label>
                            <div class="form-control-wrap">
                                <ChoiceSelect size="sm" id="bedrooms" :cross="false">
                                    <ChoiceSelectOption selected>Search for Bedrooms</ChoiceSelectOption>
                                    <ChoiceSelectOption value="1">1</ChoiceSelectOption>
                                    <ChoiceSelectOption value="2">2</ChoiceSelectOption>
                                    <ChoiceSelectOption value="3">3</ChoiceSelectOption>
                                </ChoiceSelect>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-label">Project</label>
                            <div class="form-control-wrap">
                                <ChoiceSelect size="sm" id="project" :cross="false">
                                    <ChoiceSelectOption selected>Search for Project</ChoiceSelectOption>
                                    <ChoiceSelectOption value="1">Project 1</ChoiceSelectOption>
                                    <ChoiceSelectOption value="2">Project 2</ChoiceSelectOption>
                                    <ChoiceSelectOption value="3">Project 3</ChoiceSelectOption>
                                </ChoiceSelect>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label  class="form-label">Country</label>
                            <div class="form-control-wrap">
                                <FormInput type="text" placeholder="Enter Country"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label  class="form-label">County</label>
                            <div class="form-control-wrap">
                                <FormInput type="text" placeholder="Enter County"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label  class="form-label">Zip Code</label>
                            <div class="form-control-wrap">
                                <FormInput type="text" placeholder="Enter Zip Code"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label  class="form-label">Address</label>
                            <div class="form-control-wrap">
                                <FormInput type="text" placeholder="Enter Address"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label  class="form-label">Number</label>
                            <div class="form-control-wrap">
                                <FormInput type="text" placeholder="Enter Number"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label  class="form-label">Type</label>
                            <div class="form-control-wrap">
                                <FormInput type="text" placeholder="Enter Type"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label  class="form-label">Area(M2)</label>
                            <div class="form-control-wrap">
                                <FormInput type="number" placeholder="Enter Area"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label  class="form-label">Building</label>
                            <div class="form-control-wrap">
                                <FormInput type="text" placeholder="Enter Building"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label  class="form-label">Floor</label>
                            <div class="form-control-wrap">
                                <FormInput type="number" placeholder="Enter Floor"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label  class="form-label">List Price</label>
                            <div class="form-control-wrap">
                                <FormInput type="number" placeholder="Enter List price"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-label">Currency</label>
                            <div class="form-control-wrap">
                                <ChoiceSelect size="sm" id="currency" :cross="false">
                                    <ChoiceSelectOption selected>Search for Currency</ChoiceSelectOption>
                                    <ChoiceSelectOption selected value="1">EUR</ChoiceSelectOption>
                                    <ChoiceSelectOption value="2">EUR</ChoiceSelectOption>
                                    <ChoiceSelectOption value="3">EUR</ChoiceSelectOption>
                                </ChoiceSelect>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label  class="form-label">Estimated Rent</label>
                            <div class="form-control-wrap">
                                <FormInput type="number" placeholder="Enter Estimated Rent"/>
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
import ChoiceSelect from '@/components/choices/ChoiceSelect.vue';
import ChoiceSelectOption from '@/components/choices/ChoiceSelectOption.vue';
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
    ChoiceSelect,
    ChoiceSelectOption,
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
