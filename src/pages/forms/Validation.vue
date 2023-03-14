<template>
  <Layout content="container">
    <BlockHead class="nk-page-head wide-md">
    <BlockHeadContent>
        <BlockTitle tag="h1">Validation</BlockTitle>
        <BlockText>Provide valuable, actionable feedback to your users with HTML5 form validation, via browser default behaviors or custom styles and JavaScript.</BlockText>
    </BlockHeadContent>
    </BlockHead>

    <Block>
        <BlockHead>
            <BlockTitle>Form Validation plugin</BlockTitle>
            <BlockText>Validate for with modern and trendy looking feedbacks, with <a target="_blank" href="https://github.com/sha256/Pristine">PristineJS</a> </BlockText>
        </BlockHead>
        <Card>
            <CardBody>
                <form class="js-validate floating-feedbacks" novalidate id="jsValidate">
                    <Row utils="g-3">
                        <Col md="6" lg="4">
                            <FormGroup>
                                <FormLabel for="validationTextField">Text Field</FormLabel>
                                <FormInputWrap>
                                    <FormInput type="text" id="validationTextField" required/>
                                </FormInputWrap>
                            </FormGroup>
                        </Col>
                        <Col md="6" lg="4">
                            <FormGroup>
                            <FormLabel for="validationNumberField">Number Field</FormLabel>
                            <FormInputWrap>
                                <FormInput type="number" id="validationNumberField" required/>
                            </FormInputWrap>
                            </FormGroup>
                        </Col>
                        <Col md="6" lg="4">
                            <FormGroup>
                                <FormLabel for="validationEmailField">Email Field</FormLabel>
                                <FormInputWrap>
                                    <FormInput type="email" id="validationEmailField" required />
                                </FormInputWrap>
                            </FormGroup>
                        </Col>
                        <Col md="6" lg="4">
                            <FormGroup>
                                <FormLabel for="validationSelectField">Select Field</FormLabel>
                                <FormInputWrap>
                                    <FormSelect id="validationSelectField" required>
                                        <FormSelectOption selected value="">Choose...</FormSelectOption>
                                        <FormSelectOption>Option one</FormSelectOption>
                                        <FormSelectOption>Option two</FormSelectOption>
                                        <FormSelectOption>Option three</FormSelectOption>
                                    </FormSelect>
                                </FormInputWrap>
                            </FormGroup>
                        </Col>
                        <Col md="6" lg="4">
                            <FormGroup>
                                <FormLabel for="validationFileField">File Field</FormLabel>
                                <FormInputWrap>
                                    <FormInput type="file" id="validationFileField" required/>
                                </FormInputWrap>
                            </FormGroup>
                        </Col>
                        <Col md="6" lg="4">
                            <FormGroup>
                                <FormLabel for="validationPasswordField">Password Field</FormLabel>
                                <FormInputWrap>
                                    <FormInput type="password" id="validationPasswordField" name="PasswordField" required/>
                                </FormInputWrap>
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <FormLabel for="exampleFormControlInputText7">Multiple Select</FormLabel>
                                <FormInputWrap>
                                    <FormSelect id="exampleFormControlInputText7" multiple required>
                                        <FormSelectOption>Open this select menu</FormSelectOption>
                                        <FormSelectOption value="1">One</FormSelectOption>
                                        <FormSelectOption value="2">Two</FormSelectOption>
                                        <FormSelectOption value="3">Three</FormSelectOption>
                                    </FormSelect>
                                </FormInputWrap>
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <FormLabel for="validationTextareaField">Textarea Field</FormLabel>
                                <FormInputWrap>
                                    <FormTextarea  id="validationTextareaField" rows="3" required></FormTextarea>
                                </FormInputWrap>
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <FormLabel>CheckBox Fields</FormLabel>
                                <FormInputWrap check>
                                    <FormInline class="gap g-3">
                                        <FormCheck>
                                            <FormCheckInput min="1" name="validationCheckbox" type="checkbox" required id="validationCheckboxOne" />
                                            <FormCheckLabel for="validationCheckboxOne">
                                            CheckBox 1
                                            </FormCheckLabel>
                                        </FormCheck>
                                        <FormCheck>
                                            <FormCheckInput min="1" name="validationCheckbox" type="checkbox" required id="validationCheckboxTwo"/>
                                            <FormCheckLabel for="validationCheckboxTwo">
                                            CheckBox 2
                                            </FormCheckLabel>
                                        </FormCheck>
                                        <FormCheck>
                                            <FormCheckInput min="1" name="validationCheckbox" type="checkbox" required id="validationCheckboxThree"/>
                                            <FormCheckLabel for="validationCheckboxThree">
                                            CheckBox 3
                                            </FormCheckLabel>
                                        </FormCheck>
                                    </FormInline>
                                </FormInputWrap>
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <FormLabel>Radio Fields</FormLabel>
                                <FormInputWrap check>
                                    <FormInline class="gap g-3">
                                        <FormCheck>
                                            <FormCheckInput name="validationRadio" type="radio" value="validationRadioOne" id="validationRadioOne" required/>
                                            <FormCheckLabel for="validationRadioOne">
                                            Radio 1
                                            </FormCheckLabel>
                                        </FormCheck>
                                        <FormCheck>
                                            <FormCheckInput name="validationRadio" type="radio" value="validationRadioTwo" id="validationRadioTwo" required/>
                                            <FormCheckLabel for="validationRadioTwo">
                                            Radio 2
                                            </FormCheckLabel>
                                        </FormCheck>
                                        <FormCheck>
                                            <FormCheckInput name="validationRadio" type="radio" value="validationRadioThree" id="validationRadioThree" required/>
                                            <FormCheckLabel for="validationRadioThree">
                                            Radio 3
                                            </FormCheckLabel>
                                        </FormCheck>
                                    </FormInline>
                                </FormInputWrap>
                            </FormGroup>
                        </Col>
                        <Col col="12">
                            <Button variant="primary" type="submit">Submit form</Button>
                        </Col>
                    </Row>
                </form>
                <div class="form-note mt-3">
                    Use <code>required</code> attribute to every form field to enable validation.
                </div>
            </CardBody>
        </Card>
    </Block>

    <Block>
        <BlockHead>
            <BlockTitle>Validation with Bootstrap</BlockTitle>
            <BlockText>Not interested in third party plagin for validation? just use few lines of vanila js and bootstrap class.</BlockText>
        </BlockHead>
        <Card>
            <CardBody>
                <form class="row g-3 form-validate" novalidate>
                    <div class="col-md-4">
                        <FormLabel for="validationCustom01" class="small">First name</FormLabel>
                        <FormInput type="text" id="validationCustom01" value="Mark" required/>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-4">
                        <FormLabel for="validationCustom02" class="small">Last name</FormLabel>
                        <FormInput type="text" id="validationCustom02" value="Otto" required/>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-4">
                        <FormLabel for="validationCustomUsername" class="small">Username</FormLabel>
                        <InputGroup class="has-validation">
                            <InputGroupText id="inputGroupPrepend">@</InputGroupText>
                            <FormInput type="text" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                            <div class="invalid-feedback">
                                Please choose a username.
                            </div>
                        </InputGroup>
                    </div>
                    <div class="col-md-6">
                        <FormLabel for="validationCustom03" class="small">City</FormLabel>
                        <FormInput type="text" id="validationCustom03" required/>
                        <div class="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div class="col-md-3">
                        <FormLabel for="validationCustom04" class="small">State</FormLabel>
                        <FormSelect id="validationCustom04" required>
                            <FormSelectOption selected disabled value="">Choose...</FormSelectOption>
                            <FormSelectOption>Option 1</FormSelectOption>
                            <FormSelectOption>Option 2</FormSelectOption>
                        </FormSelect>
                        <div class="invalid-feedback">
                            Please select a valid state.
                        </div>
                    </div>
                    <div class="col-md-3">
                        <FormLabel for="validationCustom05" class="small">Zip</FormLabel>
                        <FormInput type="text" id="validationCustom05" required/>
                        <div class="invalid-feedback">
                            Please provide a valid zip.
                        </div>
                    </div>
                    <div class="col-12">
                        <FormCheck>
                            <FormCheckInput type="checkbox" value="" id="invalidCheck" required/>
                            <FormCheckLabel for="invalidCheck">
                                Agree to terms and conditions
                            </FormCheckLabel>
                            <div class="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        </FormCheck>
                    </div>
                    <div class="col-12">
                        <Button variant="primary" type="submit">Submit form</Button>
                    </div>
                </form>
                <div class="form-note mt-3">
                    Use <code>.form-validate</code> class to <code>form</code> tag to validate form when submit.
                </div>
            </CardBody>
        </Card>
    </Block>

    <Block>
        <BlockHead>
            <BlockTitle>Browser defaults</BlockTitle>
            <BlockText>Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults.</BlockText>
        </BlockHead>
        <Card>
            <CardBody>
                <form class="row g-3">
                    <div class="col-md-4">
                        <FormLabel for="validationDefault01" class="small">First name</FormLabel>
                        <FormInput type="text" id="validationDefault01" value="Mark" required/>
                    </div>
                    <div class="col-md-4">
                        <FormLabel for="validationDefault02" class="small">Last name</FormLabel>
                        <FormInput type="text" id="validationDefault02" value="Otto" required/>
                    </div>
                    <div class="col-md-4">
                        <FormLabel for="validationDefaultUsername" class="small">Username</FormLabel>
                        <InputGroup>
                            <InputGroupText id="inputGroupPrepend2">@</InputGroupText>
                            <FormInput type="text" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
                        </InputGroup>
                    </div>
                    <div class="col-md-6">
                        <FormLabel for="validationDefault03" class="small">City</FormLabel>
                        <FormInput type="text" id="validationDefault03" required/>
                    </div>
                    <div class="col-md-3">
                        <FormLabel for="validationDefault04" class="small">State</FormLabel>
                        <FormSelect id="validationDefault04" required>
                            <FormSelectOption selected disabled value="">Choose...</FormSelectOption>
                            <FormSelectOption>one</FormSelectOption>
                            <FormSelectOption>two</FormSelectOption>
                            <FormSelectOption>three</FormSelectOption>
                        </FormSelect>
                    </div>
                    <div class="col-md-3">
                        <FormLabel for="validationDefault05" class="small">Zip</FormLabel>
                        <FormInput type="text" id="validationDefault05" required/>
                    </div>
                    <div class="col-12">
                        <FormCheck>
                            <FormCheckInput type="checkbox" value="" id="invalidCheck2" required/>
                            <FormCheckLabel for="invalidCheck2">
                                Agree to terms and conditions
                            </FormCheckLabel>
                        </FormCheck>
                    </div>
                    <div class="col-12">
                        <Button variant="primary" type="submit">Submit form</Button>
                    </div>
                </form>
                <div class="form-note mt-3">
                    Use <code>required</code> attribute to every input tag to validate form when submit.
                </div>
            </CardBody>
        </Card>
    </Block>
  </Layout>
</template>

<script>
import Layout from '@/layout/Index.vue'
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockText } from '@/components/block/Block.vue';
import Card from '@/components/uielements/card/Card.vue';
import CardBody from '@/components/uielements/card/CardBody.vue';
import FormInput from '@/components/forms/input/FormInput.vue';
import FormSelect from '@/components/forms/select/FormSelect.vue';
import FormSelectOption from '@/components/forms/select/FormSelectOption.vue';
import FormLabel from '@/components/forms/form-label/FormLabel.vue';
import FormCheck from '@/components/forms/form-check/FormCheck.vue';
import FormCheckInput from '@/components/forms/form-check/FormCheckInput.vue';
import FormCheckLabel from '@/components/forms/form-check/FormCheckLabel.vue';
import Button from '@/components/uielements/button/Button.vue';
import InputGroupText from '@/components/forms/input-group/InputGroupText.vue';
import InputGroup from '@/components/forms/input-group/InputGroup.vue';
import FormInputWrap from '@/components/forms/input/FormInputWrap.vue';
import FormGroup from '@/components/forms/FormGroup.vue';
import FormInline from '@/components/forms/FormInline.vue';
import FormTextarea from '@/components/forms/textarea/FormTextarea.vue';
import Row from '@/components/layout/Row.vue';
import Col from '@/components/layout/Col.vue';

import Pristine from 'pristinejs';

export default {
    name: 'ValidationPage', 
    components: {
        Layout,
        Row,
        Col,
        Block,
        BlockHead,
        BlockHeadContent,
        BlockTitle,
        BlockText,
        Card,
        CardBody,
        FormInput,
        FormSelect,
        FormSelectOption,
        FormLabel,
        FormCheck,
        FormCheckInput,
        FormCheckLabel,
        Button,
        InputGroupText,
        InputGroup,
        FormInputWrap,
        FormGroup,
        FormInline,
        FormTextarea
    },
    methods: {
        // form validation js
        validate (selector) {
            const forms = document.querySelectorAll(selector);
            Array.from(forms).forEach(form => {
                form.addEventListener('submit', event => {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }
                    form.classList.add('was-validated')
                }, false)
            })
        },
        formValidate(selector){
            let elm = document.querySelectorAll(selector);
            if( elm != 'undefined' && elm != null ){
                elm.forEach(item => {
                    let itemId = item.id;
                    var form = document.getElementById(itemId);

                    var pristine = new Pristine(form, {
                        classTo: 'form-group',
                        errorClass: 'is-invalid',
                        successClass: 'is-valid',
                        errorTextParent: 'form-control-wrap',
                        errorTextTag: 'div',
                        errorTextClass: 'form-error' 
                    });

                    form.addEventListener('submit', function (e) {
                        e.preventDefault();
                        var valid = pristine.validate();
                        form.classList.add('validated');
                        if(valid){
                            form.classList.add('validated-success')
                        }
                    });
                })
            }
        }
    },
    mounted(){
        this.validate('.form-validate');
        this.formValidate('.js-validate')
    }
}
</script>
