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
                        <NavLink active v-nk-tab="'#overview'" type="button">Overview</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink type="button">Project</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink type="button">Documents</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink type="button">Disabled</NavLink>
                    </NavItem>
                </Nav>
            </div>
            <div class="gap-col">
                <ul class="d-flex">
                    <li class="d-none d-md-block">
                        <Button as="RouterLink" to="/profile-settings" soft variant="primary"><Icon icon="edit"></Icon><span>Edit Profile</span></Button>
                    </li>
                    <li class="d-md-none">
                        <Button as="RouterLink" to="/profile-settings" soft variant="primary" class="btn-icon"><Icon icon="edit"></Icon></Button>
                    </li>
                </ul>
            </div>
        </BlockHeadBetween>
    </BlockHead>

    <Block>
      <TabContent>
        <TabPane fade active id="overview">
            <Card class="card-gutter-md">
                <div class="card-row card-row-lg col-sep col-sep-lg">
                    <div class="card-aside">
                        <CardBody>
                            <div class="bio-block">
                                <h4 class="bio-block-title">Details</h4>
                                <ListGroup borderless class="small">
                                    <ListGroupItem>
                                        <span class="title fw-medium w-40 d-inline-block">Account ID:</span>
                                        <span class="text">ID-45453423</span>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span class="title fw-medium w-40 d-inline-block">Full Name:</span>
                                        <span class="text">Wesley Burland</span>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span class="title fw-medium w-40 d-inline-block">Email:</span>
                                        <span class="text">wesley@gmail.com</span>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span class="title fw-medium w-40 d-inline-block">Address:</span>
                                        <span class="text">California, United States</span>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span class="title fw-medium w-40 d-inline-block">Joining Date</span>
                                        <span class="text">2 Dec 2021</span>
                                    </ListGroupItem>
                                </ListGroup>
                            </div><!-- .bio-block -->
                            <div class="bio-block">
                                <h4 class="bio-block-title mb-2">Skills</h4>
                                <ul class="d-flex flex-wrap gap gx-1">
                                    <li>
                                        <Badge href="#" variant="secondary-soft">Photoshop</Badge>
                                    </li>
                                    <li>
                                        <Badge href="#" variant="secondary-soft">illustrator</Badge>
                                    </li>
                                    <li>
                                        <Badge href="#" variant="secondary-soft">HTML</Badge>
                                    </li>
                                    <li>
                                        <Badge href="#" variant="secondary-soft">CSS</Badge>
                                    </li>
                                    <li>
                                        <Badge href="#" variant="secondary-soft">Javascript</Badge>
                                    </li>
                                    <li>
                                        <Badge href="#" variant="secondary-soft">React</Badge>
                                    </li>
                                    <li>
                                        <Badge href="#" variant="secondary-soft">Vue</Badge>
                                    </li>
                                    <li>
                                        <Badge href="#" variant="secondary-soft">Angular</Badge>
                                    </li>
                                    <li>
                                        <Badge href="#" variant="secondary-soft">Python</Badge>
                                    </li>
                                </ul>
                            </div><!-- .bio-block -->
                            <div class="bio-block">
                                <h4 class="bio-block-title mb-3">Social</h4>
                                <ul class="d-flex flex-wrap gap g-2">
                                    <li>
                                        <Media href="#" size="md" middle variant="dark">
                                            <Icon icon="github-circle"></Icon>
                                        </Media>
                                    </li>
                                    <li>
                                        <Media href="#" size="md" middle variant="danger">
                                            <Icon icon="dribbble"></Icon>
                                        </Media>
                                    </li>
                                    <li>
                                        <Media href="#" size="md" middle variant="info">
                                            <Icon icon="twitter"></Icon>
                                        </Media>
                                    </li>
                                    <li>
                                        <Media href="#" size="md" middle variant="pink">
                                            <Icon icon="linkedin"></Icon>
                                        </Media>
                                    </li>
                                </ul>
                            </div><!-- .bio-block -->
                            <div class="bio-block">
                                <h4 class="bio-block-title mb-3">Suggestions</h4>
                                <ul class="d-flex flex-column gap gy-2">
                                    <li>
                                        <MediaGroup>
                                            <Media size="md" middle shape="circle" href="#">
                                                <Img src="/images/avatar/a.jpg" alt="user" />
                                            </Media>
                                            <MediaText>
                                                <div class="lead-text">Kamran Ahmed</div>
                                                <span class="sub-text">Frontend Developer</span>
                                            </MediaText>
                                            <MediaAction position="end">
                                                <Button size="sm" soft variant="secondary" class="btn-icon"><Icon icon="user-add"></Icon></Button>
                                            </MediaAction>
                                        </MediaGroup>
                                    </li>
                                    <li>
                                        <MediaGroup>
                                            <Media size="md" middle shape="circle" href="#">
                                                <Img src="/images/avatar/b.jpg" alt="user" />
                                            </Media>
                                            <MediaText>
                                                <div class="lead-text">Harriett Adkins</div>
                                                <span class="sub-text">UI/UX Designer</span>
                                            </MediaText>
                                            <MediaAction position="end">
                                                <Button size="sm" soft variant="secondary" class="btn-icon"><Icon icon="user-add"></Icon></Button>
                                            </MediaAction>
                                        </MediaGroup>
                                    </li>
                                    <li>
                                        <MediaGroup>
                                            <Media size="md" middle shape="circle" href="#">
                                                <Img src="/images/avatar/c.jpg" alt="user" />
                                            </Media>
                                            <MediaText>
                                                <div class="lead-text">George Whalen</div>
                                                <span class="sub-text">Backend Developer</span>
                                            </MediaText>
                                            <MediaAction position="end">
                                                <Button size="sm" soft variant="secondary" class="btn-icon"><Icon icon="user-add"></Icon></Button>
                                            </MediaAction>
                                        </MediaGroup>
                                    </li>
                                    <li>
                                        <MediaGroup>
                                            <Media size="md" middle shape="circle" href="#">
                                                <Img src="/images/avatar/d.jpg" alt="user" />
                                            </Media>
                                            <MediaText>
                                                <div class="lead-text">Claudia Chandler</div>
                                                <span class="sub-text">Node.js Developer</span>
                                            </MediaText>
                                            <MediaAction position="end">
                                                <Button size="sm" soft variant="secondary" class="btn-icon"><Icon icon="user-add"></Icon></Button>
                                            </MediaAction>
                                        </MediaGroup>
                                    </li>
                                </ul>
                            </div><!-- .bio-block -->
                            <div class="bio-block">
                                <h4 class="bio-block-title mb-3">Popular Posts</h4>
                                <ul class="d-flex flex-wrap gap gy-3">
                                    <li>
                                        <MediaGroup>
                                            <Media href="#">
                                                <Img src="/images/product/a.jpg" alt="" />
                                            </Media>
                                            <MediaText>
                                                <router-link to="/" class="lead-text">How to get creative in your work</router-link>
                                                <span class="sub-text">15 Dec 2021</span>
                                            </MediaText>
                                        </MediaGroup>
                                    </li>
                                    <li>
                                        <MediaGroup>
                                            <Media href="#">
                                                <Img src="/images/product/b.jpg" alt="" />
                                            </Media>
                                            <MediaText>
                                                <router-link to="/" class="lead-text">Create FureStibe branding logo</router-link>
                                                <span class="sub-text">13 Dec 2021</span>
                                            </MediaText>
                                        </MediaGroup>
                                    </li>
                                    <li>
                                        <MediaGroup>
                                            <Media href="#">
                                                <Img src="/images/product/c.jpg" alt="" />
                                            </Media>
                                            <MediaText>
                                                <router-link to="/" class="lead-text">9 Degree Project Estimation</router-link>
                                                <span class="sub-text">10 Dec 2021</span>
                                            </MediaText>
                                        </MediaGroup>
                                    </li>
                                    <li>
                                        <MediaGroup>
                                            <Media href="#">
                                                <Img src="/images/product/d.jpg" alt="" />
                                            </Media>
                                            <MediaText>
                                                <router-link to="/" class="lead-text">Smartest Applications for Business</router-link>
                                                <span class="sub-text">10 Dec 2021</span>
                                            </MediaText>
                                        </MediaGroup>
                                    </li>
                                    <li>
                                        <MediaGroup>
                                            <Media href="#">
                                                <Img src="/images/product/e.jpg" alt="" />
                                            </Media>
                                            <MediaText>
                                                <router-link to="/" class="lead-text">A well-written bio allows viewers</router-link>
                                                <span class="sub-text">20 Dec 2021</span>
                                            </MediaText>
                                        </MediaGroup>
                                    </li>
                                </ul>
                                <div class="pt-3">
                                    <Button as="RouterLink" to="/" size="sm" soft variant="primary">View All</Button>
                                </div>
                            </div><!-- .bio-block -->
                        </CardBody>
                    </div><!-- .card-aside -->
                    <div class="card-content col-sep">
                        <CardBody>
                            <div class="bio-block">
                                <h4 class="bio-block-title">About Me</h4>
                                <p>I code and design websites worldwide. Mauris varius tellus vitae tristique sagittis. Sed aliquet, est nec auctor aliquet, orci ex vestibulum ex, non pharetra lacus erat ac nulla.</p>
                                <p>Sed vulputate, ligula eget mollis auctor, lectus elit feugiat urna, eget euismod turpis lectus sed ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ut velit finibus, scelerisque sapien vitae, pharetra est. Nunc accumsan ligula vehicula scelerisque vulputate. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, dolore?</p>
                                <Row utils="g-gs">
                                    <Col lg="6">
                                        <div class="small">Designation:</div>
                                        <h5 class="small">Node.js Developer</h5>
                                    </Col>
                                    <Col lg="6">
                                        <div class="small">Website:</div>
                                        <h5 class="small">www.softnio.com</h5>
                                    </Col>
                                </Row>
                            </div><!-- .bio-block -->
                        </CardBody>
                        <CardBody>
                            <div class="bio-block">
                                <h4 class="bio-block-title">Recent Activity</h4>
                                <Schedule class="mt-4">
                                    <ScheduleItem symbol="active">
                                        <span class="smaller">2:12 PM</span>
                                        <div class="h6">Added 3 New Images</div>
                                        <List class="d-flex flex-wrap gap g-2 py-2">
                                            <ListItem>
                                                <Media size="xxl">
                                                    <Img src="/images/product/a.jpg" alt="" thumbnail/>
                                                </Media>
                                            </ListItem>
                                            <ListItem>
                                                <Media size="xxl">
                                                    <Img src="/images/product/b.jpg" alt="" thumbnail/>
                                                </Media>
                                            </ListItem>
                                            <ListItem>
                                                <Media size="xxl">
                                                    <Img src="/images/product/c.jpg" alt="" thumbnail/>
                                                </Media>
                                            </ListItem>
                                        </List>
                                    </ScheduleItem>
                                    <ScheduleItem symbol="active">
                                        <span class="smaller">4:23 PM</span>
                                        <div class="h6">Invitation for creative designs pattern</div>
                                    </ScheduleItem>
                                    <ScheduleItem symbol="active" contentClass="nk-schedule-content-no-border">
                                        <span class="smaller">10:30 PM</span>
                                        <div class="h6">Task report - uploaded weekly reports</div>
                                        <List tag="div" class="list-group-dotted mt-3">
                                            <ListItem tag="div" class="list-group-wrap">
                                                <div class="p-3">
                                                    <MediaGroup>
                                                        <Media class="rounded-0">
                                                            <Img src="/images/icon/file-type-pdf.svg" alt=""/>
                                                        </Media>
                                                        <MediaText class="ms-1">
                                                            <a href="#" class="title">Modern Designs Pattern</a>
                                                            <span class="text smaller">1.6.mb</span>
                                                        </MediaText>
                                                    </MediaGroup>
                                                </div>
                                                <div class="p-3">
                                                    <MediaGroup>
                                                        <Media class="rounded-0">
                                                            <Img src="/images/icon/file-type-doc.svg" alt=""/>
                                                        </Media>
                                                        <MediaText class="ms-1">
                                                            <a href="#" class="title">cPanel Upload Guidelines</a>
                                                            <span class="text smaller">18kb</span>
                                                        </MediaText>
                                                    </MediaGroup>
                                                </div>
                                                <div class="p-3">
                                                    <MediaGroup>
                                                        <Media class="rounded-0">
                                                            <Img src="/images/icon/file-type-code.svg" alt=""/>
                                                        </Media>
                                                        <MediaText class="ms-1">
                                                            <a href="#" class="title">Weekly Finance Reports</a>
                                                            <span class="text smaller">10mb</span>
                                                        </MediaText>
                                                    </MediaGroup>
                                                </div>
                                            </ListItem>
                                        </List>
                                    </ScheduleItem>
                                    <ScheduleItem symbol="active">
                                        <span class="smaller">3:23 PM</span>
                                        <div class="h6">Assigned you to new database design project</div>
                                    </ScheduleItem>
                                    <ScheduleItem symbol="active" contentClass="nk-schedule-content-no-border flex-grow-1">
                                        <span class="smaller">5:05 PM</span>
                                        <div class="h6">You have received a new order</div>
                                        <Alert class="mt-2" variant="info">
                                            <div class="d-flex">
                                                <Icon class="opacity-75" size="lg" icon="file-code" />
                                                <div class="ms-2 d-flex flex-wrap flex-grow-1 justify-content-between">
                                                    <div>
                                                        <h6 class="alert-heading mb-0">Business Template - UI/UX design</h6>
                                                        <span class="smaller d-block my-1">Shared information with your team to understand and contribute to your project.</span>
                                                    </div>
                                                    <div class="d-block mt-1">
                                                        <Button href="#" size="md" variant="info">
                                                            <Icon icon="download" />
                                                            <span>Download</span>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Alert>
                                    </ScheduleItem>
                                    <ScheduleItem symbol="active">
                                        <span class="smaller">2:45 PM</span>
                                        <div class="h6">Project status updated successfully</div>
                                    </ScheduleItem>
                                </Schedule>
                            </div><!-- .bio-block -->
                        </CardBody>
                    </div><!-- .card-content -->
                </div><!-- .card-row -->
            </Card>
        </TabPane>
      </TabContent>
    </Block>
  </Layout>

</template>

<script>
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
import ListGroup from '@/components/uielements/list/ListGroup.vue';
import ListGroupItem from '@/components/uielements/list/ListGroupItem.vue';
import Badge from '@/components/uielements/badge/Badge.vue';
import MediaGroup from '@/components/media/MediaGroup.vue';
import MediaText from '@/components/media/MediaText.vue';
import MediaAction from '@/components/media/MediaAction.vue';
import Row from '@/components/layout/Row.vue';
import Col from '@/components/layout/Col.vue';
import Schedule from '@/components/schedule/Schedule.vue';
import ScheduleItem from '@/components/schedule/ScheduleItem.vue';
import Alert from '@/components/uielements/alert/Alert.vue';
import List from '@/components/list/List.vue';
import ListItem from '@/components/list/ListItem.vue';

export default {
    name: 'UserProfilePage', 
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
        ListGroup,
        ListGroupItem,
        Badge,
        MediaGroup,
        MediaText,
        MediaAction,
        Row,
        Col,
        Schedule,
        ScheduleItem,
        Alert,
        List,
        ListItem
    }
}
</script>
