<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead>
        <div class="mb-4">
            <BlockHeadBetween class="flex-wrap gap g-2 align-items-start">
                <BlockHeadContent>
                    <div class="d-flex flex-column flex-md-row align-items-md-center">
                        <Media size="huge" shape="circle">
                            <Img src="/images/avatar/a.jpg" thumbnail alt=""/>
                        </Media>
                        <div class="mt-3 mt-md-0 ms-md-3">
                            <h3 class="title mb-1">Wesley Burland</h3>
                            <span class="small">Owner &amp; Founder</span>
                            <ul class="nk-list-option pt-1">
                                <li><Icon icon="map-pin"></Icon><span class="small">California, United States</span></li>
                                <li><Icon icon="building"></Icon><span class="small">Softnio</span></li>
                            </ul>
                        </div>
                    </div>
                </BlockHeadContent>
                <BlockHeadContent>
                    <div class="d-flex gap g-3">
                        <div class="gap-col">
                            <BoxDotted class="py-2">
                                <div class="d-flex align-items-center">
                                    <div class="h4 mb-0">44.3K</div>
                                    <span class="change up ms-1 small">
                                        <Icon icon="arrow-down"></Icon>
                                    </span>
                                </div>
                                <div class="smaller">Followers</div>
                            </BoxDotted>
                        </div>
                        <div class="gap-col">
                            <BoxDotted class="py-2">
                                <div class="d-flex align-items-center">
                                    <div class="h4 mb-0">4.5k</div>
                                    <span class="change up ms-1 small">
                                        <Icon icon="arrow-up"></Icon>
                                    </span>
                                </div>
                                <div class="smaller">Following</div>
                            </BoxDotted>
                        </div>
                    </div>
                </BlockHeadContent>
            </BlockHeadBetween>
        </div>
        <BlockHeadBetween class="gap g-2">
            <div class="gap-col">
                <Nav pills class="nav-pills-border gap g-3">
                    <NavItem>
                        <NavLink active v-nk-tab="'#account'" type="button">Account</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink v-nk-tab="'#security'" type="button">Security</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink v-nk-tab="'#notifications'" type="button">Notifications</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink v-nk-tab="'#connections'" type="button">Connections</NavLink>
                    </NavItem>
                </Nav>
            </div>
            <div class="gap-col">
                <ul class="d-flex">
                    <li class="d-none d-md-block">
                        <Button as="RouterLink" to="/profile" soft variant="primary"><Icon icon="user"></Icon><span>View Profile</span></Button>
                    </li>
                    <li class="d-md-none">
                        <Button as="RouterLink" to="/profile" soft variant="primary" class="btn-icon"><Icon icon="user"></Icon></Button>
                    </li>
                </ul>
            </div>
        </BlockHeadBetween>
    </BlockHead>

    <Block>
      <TabContent>
        <TabPane active id="account">
            <Card gutter="md">
                <CardBody>
                    <div class="bio-block">
                        <h4 class="bio-block-title mb-4">Edit Profile</h4>
                        <form action="#">
                            <Row utils="g-3">
                                <Col lg="6">
                                    <div class="form-group">
                                        <FormLabel>First Name</FormLabel>
                                        <FormInputWrap>
                                            <FormInput type="text" placeholder="First name" />
                                        </FormInputWrap>
                                    </div>
                                </Col>
                                <Col lg="6">
                                    <div class="form-group">
                                        <FormLabel>Last Name</FormLabel>
                                        <FormInputWrap>
                                            <FormInput type="text" placeholder="Last name" />
                                        </FormInputWrap>
                                    </div>
                                </Col>
                                <Col lg="12">
                                    <div class="form-group">
                                        <FormLabel>Username</FormLabel>
                                        <FormInputWrap>
                                            <FormInput type="text" placeholder="Username" />
                                        </FormInputWrap>
                                    </div>
                                </Col>
                                <Col lg="6">
                                    <div class="form-group">
                                        <FormLabel>Email address</FormLabel>
                                        <FormInputWrap>
                                            <FormInput type="text" placeholder="Email address" />
                                        </FormInputWrap>
                                    </div>
                                </Col>
                                <Col lg="6">
                                    <div class="form-group">
                                        <FormLabel>Company</FormLabel>
                                        <FormInputWrap>
                                            <FormInput type="text" placeholder="Company name" />
                                        </FormInputWrap>
                                    </div>
                                </Col>
                                <Col lg="12">
                                    <div class="form-group">
                                        <FormLabel>Address</FormLabel>
                                        <FormInputWrap>
                                            <FormInput type="text" placeholder="e.g. California, United States" />
                                        </FormInputWrap>
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div class="form-group">
                                        <FormLabel>City</FormLabel>
                                        <FormInputWrap>
                                            <FormInput type="text" placeholder="City" />
                                        </FormInputWrap>
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div class="form-group">
                                        <FormLabel>Country</FormLabel>
                                        <FormInputWrap>
                                            <ChoiceSelect id="country-select" :cross="false">
                                                <ChoiceSelectOption value="">Select a country</ChoiceSelectOption>
                                                <ChoiceSelectOption value="1">Germany</ChoiceSelectOption>
                                                <ChoiceSelectOption value="2">Canada</ChoiceSelectOption>
                                                <ChoiceSelectOption value="3">Usa</ChoiceSelectOption>
                                                <ChoiceSelectOption value="4">Aus</ChoiceSelectOption>
                                            </ChoiceSelect>
                                        </FormInputWrap>
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div class="form-group">
                                        <FormLabel>Postal Code</FormLabel>
                                        <FormInputWrap>
                                            <FormInput type="text" placeholder="Zip code"/>
                                        </FormInputWrap>
                                    </div>
                                </Col>
                                <Col lg="12">
                                    <div class="form-group">
                                        <FormLabel>About Me</FormLabel>
                                        <FormInputWrap>
                                            <FormTextarea rows="3" text="On the other hand, we denounce with righteous indignation"></FormTextarea>
                                        </FormInputWrap>
                                    </div>
                                </Col>
                                <Col lg="12">
                                    <Button variant="primary" type="submit">Update Profile</Button>
                                </Col>
                            </Row>
                        </form>
                    </div><!-- .bio-block -->
                </CardBody>
            </Card>
        </TabPane>
        <TabPane id="security">
            <Card gutter="md" class="col-sep">
                <CardBody>
                    <div class="bio-block">
                        <h4 class="bio-block-title mb-4">Change Password</h4>
                        <form action="#">
                            <Row utils="g-3">
                                <Col lg="4">
                                    <div class="form-group">
                                        <FormLabel>Old Password</FormLabel>
                                        <FormInputWrap>
                                            <FormInputIcon href="oldPassword" class="password-toggle" id="pass-toggle-1" position="end" title="Toggle show/hide password">
                                                <Icon icon="eye-off" class="on"></Icon>
                                                <Icon icon="eye" class="off"></Icon>
                                            </FormInputIcon>
                                            <FormInput type="password" id="oldPassword" placeholder="Old password" />
                                        </FormInputWrap>
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div class="form-group">
                                        <FormLabel>New Password</FormLabel>
                                        <FormInputWrap>
                                            <FormInputIcon href="newPassword" class="password-toggle" position="end" title="Toggle show/hide password">
                                                <Icon icon="eye-off" class="on"></Icon>
                                                <Icon icon="eye" class="off"></Icon>
                                            </FormInputIcon>
                                            <FormInput type="password" id="newPassword" placeholder="New password" />
                                        </FormInputWrap>
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div class="form-group">
                                        <FormLabel>Confirm New Password</FormLabel>
                                        <FormInputWrap>
                                            <FormInputIcon href="confirmPassword" class="password-toggle" position="end" title="Toggle show/hide password">
                                                <Icon icon="eye-off" class="on"></Icon>
                                                <Icon icon="eye" class="off"></Icon>
                                            </FormInputIcon>
                                            <FormInput type="password" id="confirmPassword" placeholder="Confirm New Password" />
                                        </FormInputWrap>
                                    </div>
                                </Col>
                                <Col lg="12">
                                    <div class="d-flex flex-wrap align-items-center gap g-3">
                                        <div class="gap-col">
                                            <Button variant="primary" type="submit">Change Password</Button>
                                        </div>
                                        <div class="gap-col">
                                            <a href="/auths/auth-reset" class="small text-light" target="_blank">Forgot Password?</a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </form>
                    </div><!-- .bio-block -->
                </CardBody>
                <CardBody>
                    <div class="bio-block">
                        <div class="d-flex flex-wrap align-items-center justify-content-between pb-4">
                            <h4 class="bio-block-title">Login History</h4>
                            <a href="#" class="text-light small">All Logout</a>
                        </div>
                        <ul class="gap gy-3">
                            <li>
                                <MediaGroup>
                                    <Media size="md" middle variant="secondary-soft" class="flex-shrink-0">
                                        <Icon icon="mobile"></Icon>
                                    </Media>
                                    <MediaText>
                                        <div class="lead-text">iPhone 12 Pro</div>
                                        <span class="sub-text">Los Angeles, United States - April 18 at 2:47 PM</span>
                                    </MediaText>
                                    <MediaAction position="end">
                                        <Media href="#" size="xs" middle shape="circle" variant="danger-soft" v-nk-tooltip:top="'Logout'">
                                            <Icon icon="cross"></Icon>
                                        </Media>
                                    </MediaAction>
                                </MediaGroup>
                            </li>
                            <li>
                                <MediaGroup>
                                    <Media size="md" middle variant="secondary-soft" class="flex-shrink-0">
                                        <Icon icon="mobile"></Icon>
                                    </Media>
                                    <MediaText>
                                        <div class="lead-text">Apple iPad Pro</div>
                                        <span class="sub-text">Washington, United States - November 06 at 10:43AM</span>
                                    </MediaText>
                                    <MediaAction position="end">
                                        <Media href="#" size="xs" middle shape="circle" variant="danger-soft" v-nk-tooltip:top="'Logout'">
                                            <Icon icon="cross"></Icon>
                                        </Media>
                                    </MediaAction>
                                </MediaGroup>
                            </li>
                            <li>
                                <MediaGroup>
                                    <Media size="md" middle variant="secondary-soft" class="flex-shrink-0">
                                        <Icon icon="mobile"></Icon>
                                    </Media>
                                    <MediaText>
                                        <div class="lead-text">Galaxy S21 Ultra 5G</div>
                                        <span class="sub-text">Washington, United States - November 08 at 10:43AM</span>
                                    </MediaText>
                                    <MediaAction position="end">
                                        <Media href="#" size="xs" middle shape="circle" variant="danger-soft" v-nk-tooltip:top="'Logout'">
                                            <Icon icon="cross"></Icon>
                                        </Media>
                                    </MediaAction>
                                </MediaGroup>
                            </li>
                            <li>
                                <MediaGroup>
                                    <Media size="md" middle variant="secondary-soft" class="flex-shrink-0">
                                        <Icon icon="laptop"></Icon>
                                    </Media>
                                    <MediaText>
                                        <div class="lead-text">Dell Inspiron 14</div>
                                        <span class="sub-text">Washington, United States - November 08 at 10:43AM</span>
                                    </MediaText>
                                    <MediaAction position="end">
                                        <Media href="#" size="xs" middle shape="circle" variant="danger-soft" v-nk-tooltip:top="'Logout'">
                                            <Icon icon="cross"></Icon>
                                        </Media>
                                    </MediaAction>
                                </MediaGroup>
                            </li>
                        </ul>
                    </div><!-- .bio-block -->
                </CardBody>
                <CardBody>
                    <div class="bio-block">
                        <h4 class="bio-block-title mb-4">Delete Account</h4>
                        <Alert variant="warning" class="mt-2" role="alert">
                            <div class="d-flex">
                                <Icon icon="question-alt" size="lg" class="opacity-75"></Icon>
                                <div class="ms-2">
                                    <h6 class="alert-heading mb-1">You Are Deleting Your Account!</h6>
                                    <span class="smaller d-block">For extra security, this requires you to confirm your email or phone number when you reset yousignr password.</span>
                                    <RouterLink class="smaller" to="/">Learn more</RouterLink>
                                </div>
                            </div>
                        </Alert>
                        <FormCheck size="sm">
                            <FormCheckInput type="checkbox" value="" id="confirmAccountDeteting" />
                            <FormCheckLabel class="form-check-label" for="confirmAccountDeteting">
                                I confirm my account deleting!
                            </FormCheckLabel>
                        </FormCheck>
                        <div class="mt-3">
                            <Button variant="danger" @click="accountDeletingConfirm">Delete Account</Button>
                        </div>
                    </div><!-- .bio-block -->
                </CardBody>
            </Card>
        </TabPane>
        <TabPane id="notifications">
            <Card gutter="md">
                <CardBody>
                    <div class="bio-block">
                        <h4 class="bio-block-title">Notifications</h4>
                        <p class="mb-4">You will get only notification what have enabled.</p>
                        <ListGroup borderless>
                            <ListGroupItem class="d-flex align-items-md-center">
                                <div class="flex-grow-1">
                                    <FormCheckLabel for="directMessage" class="ps-0 fw-medium">Direct messages</FormCheckLabel>
                                    <p class="text-light">Messages from people you follow</p>
                                </div>
                                <FormCheck class="form-switch">
                                    <FormCheckInput type="checkbox" role="switch" id="directMessage" checked/>
                                </FormCheck>
                            </ListGroupItem>
                            <ListGroupItem class="d-flex align-items-md-center">
                                <div class="flex-grow-1">
                                    <FormCheckLabel class="ps-0 fw-medium" for="desktopNotification">
                                        Show desktop notifications
                                    </FormCheckLabel>
                                    <p class="text-light">Choose the option you want as your default setting. Block a site: Next to "Not allowed to send notifications," click Add.</p>
                                </div>
                                <FormCheck class="form-switch">
                                    <FormCheckInput type="checkbox" role="switch" id="desktopNotification" checked/>
                                </FormCheck>
                            </ListGroupItem>
                            <ListGroupItem class="d-flex align-items-md-center">
                                <div class="flex-grow-1">
                                    <FormCheckLabel class="ps-0 fw-medium" for="emailNotification">
                                        Show email notifications
                                    </FormCheckLabel>
                                    <p class="text-light">Under Settings, choose Notifications. Under Select an account, choose the account to enable notifications for.</p>
                                </div>
                                <FormCheck class="form-switch">
                                    <FormCheckInput type="checkbox" role="switch" id="emailNotification" checked/>
                                </FormCheck>
                            </ListGroupItem>
                            <ListGroupItem class="d-flex align-items-md-center">
                                <div class="flex-grow-1">
                                    <FormCheckLabel class="ps-0 fw-medium" for="chatNotification">
                                        Show chat notifications
                                    </FormCheckLabel>
                                    <p class="text-light">To prevent duplicate mobile notifications from the Gmail and Chat apps, in settings, turn off Chat notifications.</p>
                                </div>
                                <FormCheck class="form-switch">
                                    <FormCheckInput type="checkbox" role="switch" id="chatNotification"/>
                                </FormCheck>
                            </ListGroupItem>
                            <ListGroupItem class="d-flex align-items-md-center">
                                <div class="flex-grow-1">
                                    <FormCheckLabel class="ps-0 fw-medium" for="purchaseNotification">
                                        Show purchase notifications
                                    </FormCheckLabel>
                                    <p class="text-light">Get real-time purchase alerts to protect yourself from fraudulent charges.</p>
                                </div>
                                <FormCheck class="form-switch">
                                    <FormCheckInput type="checkbox" role="switch" id="purchaseNotification"/>
                                </FormCheck>
                            </ListGroupItem>
                        </ListGroup>
                    </div><!-- .bio-block -->
                </CardBody>
            </Card>
        </TabPane>
        <TabPane id="connections">
            <Card gutter="md" class="col-sep">
                <CardBody>
                    <div class="bio-block">
                        <h4 class="bio-block-title">Connected accounts</h4>
                        <p class="mb-4">Display content from your connected accounts on your site</p>
                        <ListGroup borderless>
                            <ListGroupItem class="d-flex justify-content-between align-items-center">
                                <MediaGroup>
                                    <Media class="flex-shrink-0" middle variant="secondary-soft">
                                        <Img src="/images/icon/d.png" alt=""/>
                                    </Media>
                                    <MediaText>
                                        <span class="title">Google</span>
                                        <span class="text smaller">Calendar and contacts</span>
                                    </MediaText>
                                </MediaGroup>
                                <FormCheck class="form-switch">
                                    <FormCheckInput type="checkbox" role="switch" id="checkboxGoogle" checked/>
                                </FormCheck>
                            </ListGroupItem>
                            <ListGroupItem class="d-flex justify-content-between align-items-center">
                                <MediaGroup>
                                    <Media class="flex-shrink-0" middle variant="secondary-soft">
                                        <Img src="/images/icon/f.png" alt=""/>
                                    </Media>
                                    <MediaText>
                                        <span class="title">Slack</span>
                                        <span class="text smaller">Communication</span>
                                    </MediaText>
                                </MediaGroup>
                                <FormCheck class="form-switch">
                                    <FormCheckInput type="checkbox" role="switch" id="checkboxGoogle"/>
                                </FormCheck>
                            </ListGroupItem>
                            <ListGroupItem class="d-flex justify-content-between align-items-center">
                                <MediaGroup>
                                    <Media class="flex-shrink-0" middle variant="secondary-soft">
                                        <Img src="/images/icon/g.png" alt=""/>
                                    </Media>
                                    <MediaText>
                                        <span class="title">Github</span>
                                        <span class="text smaller">Manage your Git repositories</span>
                                    </MediaText>
                                </MediaGroup>
                                <FormCheck class="form-switch">
                                    <FormCheckInput type="checkbox" role="switch" id="checkboxGoogle" checked/>
                                </FormCheck>
                            </ListGroupItem>
                            <ListGroupItem class="d-flex justify-content-between align-items-center">
                                <MediaGroup>
                                    <Media class="flex-shrink-0" middle variant="secondary-soft">
                                        <Img src="/images/icon/h.png" alt=""/>
                                    </Media>
                                    <MediaText>
                                        <span class="title">Mailchimp</span>
                                        <span class="text smaller">Email marketing service</span>
                                    </MediaText>
                                </MediaGroup>
                                <FormCheck class="form-switch">
                                    <FormCheckInput type="checkbox" role="switch" id="checkboxGoogle" checked/>
                                </FormCheck>
                            </ListGroupItem>
                            <ListGroupItem class="d-flex justify-content-between align-items-center">
                                <MediaGroup>
                                    <Media class="flex-shrink-0" middle variant="secondary-soft">
                                        <Img src="/images/icon/i.png" alt=""/>
                                    </Media>
                                    <MediaText>
                                        <span class="title">Asana</span>
                                        <span class="text smaller">Communication</span>
                                    </MediaText>
                                </MediaGroup>
                                <FormCheck class="form-switch">
                                    <FormCheckInput type="checkbox" role="switch" id="checkboxGoogle" checked/>
                                </FormCheck>
                            </ListGroupItem>
                        </ListGroup>
                    </div><!-- .bio-block -->
                </CardBody>
                <CardBody>
                    <div class="bio-block">
                        <h4 class="bio-block-title">Social accounts</h4>
                        <p class="mb-4">Display content from social accounts on your site</p>
                        <ListGroup borderless>
                            <ListGroupItem class="d-flex justify-content-between align-items-center">
                                <MediaGroup>
                                    <Media class="flex-shrink-0" middle variant="secondary-soft">
                                        <Img src="/images/icon/b.png" alt="" />
                                    </Media>
                                    <MediaText>
                                        <span class="title">Facebook</span>
                                        <span class="text smaller text-success">Connected</span>
                                    </MediaText>
                                </MediaGroup>
                                <Media size="xs" middle shape="circle" href="#" variant="danger-soft" v-nk-tooltip:top="'Disconnect'">
                                    <Icon icon="cross"></Icon>
                                </Media>
                            </ListGroupItem>
                            <ListGroupItem class="d-flex justify-content-between align-items-center">
                                <MediaGroup>
                                    <Media class="flex-shrink-0" middle variant="secondary-soft">
                                        <Img src="/images/icon/e.png" alt="" />
                                    </Media>
                                    <MediaText>
                                        <span class="title">Instagram</span>
                                        <span class="text smaller text-danger">Not Connected</span>
                                    </MediaText>
                                </MediaGroup>
                                <Media size="xs" middle shape="circle" href="#" variant="secondary-soft" v-nk-tooltip:top="'Connect'">
                                    <Icon icon="link-alt"></Icon>
                                </Media>
                            </ListGroupItem>
                            <ListGroupItem class="d-flex justify-content-between align-items-center">
                                <MediaGroup>
                                    <Media class="flex-shrink-0" middle variant="secondary-soft">
                                        <Img src="/images/icon/j.png" alt="" />
                                    </Media>
                                    <MediaText>
                                        <span class="title">Behance</span>
                                        <span class="text smaller text-danger">Not Connected</span>
                                    </MediaText>
                                </MediaGroup>
                                <Media size="xs" middle shape="circle" href="#" variant="secondary-soft" v-nk-tooltip:top="'Connect'">
                                    <Icon icon="link-alt"></Icon>
                                </Media>
                            </ListGroupItem>
                            <ListGroupItem class="d-flex justify-content-between align-items-center">
                                <MediaGroup>
                                    <Media class="flex-shrink-0" middle variant="secondary-soft">
                                        <Img src="/images/icon/k.png" alt="" />
                                    </Media>
                                    <MediaText>
                                        <span class="title">Behance</span>
                                        <span class="text smaller text-danger">Not Connected</span>
                                    </MediaText>
                                </MediaGroup>
                                <Media size="xs" middle shape="circle" href="#" variant="secondary-soft" v-nk-tooltip:top="'Connect'">
                                    <Icon icon="link-alt"></Icon>
                                </Media>
                            </ListGroupItem>
                        </ListGroup>
                    </div><!-- .bio-block -->
                </CardBody>
            </Card>
        </TabPane>
      </TabContent>
    </Block>
  </Layout>

</template>

<script>
import Swal from 'sweetalert2/src/sweetalert2.js';

import Layout from '@/layout/Index.vue';
import { Block, BlockHead, BlockHeadContent, BlockHeadBetween } from '@/components/block/Block.vue';
import Card from '@/components/uielements/card/Card.vue';
import CardBody from '@/components/uielements/card/CardBody.vue';
import Icon from '@/components/icon/Icon.vue';
import Media from '@/components/media/Media.vue';
import Img from '@/components/img/Img.vue';
import BoxDotted from '@/components/box/BoxDotted.vue';
import Nav from '@/components/uielements/nav/Nav.vue';
import NavItem from '@/components/uielements/nav/NavItem.vue';
import NavLink from '@/components/uielements/nav/NavLink.vue';
import TabContent from '@/components/uielements/tab/TabContent.vue';
import TabPane from '@/components/uielements/tab/TabPane.vue';
import Button from '@/components/uielements/button/Button.vue';
import Row from '@/components/layout/Row.vue';
import Col from '@/components/layout/Col.vue';
import FormLabel from '@/components/forms/form-label/FormLabel.vue';
import FormInput from '@/components/forms/input/FormInput.vue';
import FormInputWrap from '@/components/forms/input/FormInputWrap.vue';
import FormTextarea from '@/components/forms/textarea/FormTextarea.vue';
import MediaGroup from '@/components/media/MediaGroup.vue';
import MediaText from '@/components/media/MediaText.vue';
import MediaAction from '@/components/media/MediaAction.vue';
import Alert from '@/components/uielements/alert/Alert.vue';
import FormCheck from '@/components/forms/form-check/FormCheck.vue';
import FormCheckInput from '@/components/forms/form-check/FormCheckInput.vue';
import FormCheckLabel from '@/components/forms/form-check/FormCheckLabel.vue';
import ListGroup from '@/components/uielements/list/ListGroup.vue';
import ListGroupItem from '@/components/uielements/list/ListGroupItem.vue';
import FormInputIcon from '@/components/forms/input/FormInputIcon.vue';
import ChoiceSelect from '@/components/choices/ChoiceSelect.vue';
import ChoiceSelectOption from '@/components/choices/ChoiceSelectOption.vue';

export default {
    name: 'UserEditPage', 
    components: {
        Layout,
        Block,
        BlockHead,
        BlockHeadContent,
        BlockHeadBetween,
        Card,
        CardBody,
        Icon,
        Media,
        Img,
        BoxDotted,
        Nav,
        NavItem,
        NavLink,
        TabContent,
        TabPane,
        Button,
        Row,
        Col,
        FormLabel,
        FormInput,
        FormInputWrap,
        FormTextarea,
        MediaGroup,
        MediaText,
        MediaAction,
        Alert,
        FormCheck,
        FormCheckInput,
        FormCheckLabel,
        ListGroup,
        ListGroupItem,
        FormInputIcon,
        ChoiceSelect,
        ChoiceSelectOption
    },
    methods: {
        accountDeletingConfirm() {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if(result.value) {
                    Swal.fire('Deleted', 'You successfully deleted this account', 'success');
                } else {
                    Swal.fire('Cancelled', 'Your account is still intact', 'info');
                }
            })
        }
    }
}
</script>
