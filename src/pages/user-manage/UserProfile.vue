<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead>
        <BlockHeadBetween class="flex-wrap gap g-2 align-items-start">
            <BlockHeadContent>
                <div class="d-flex flex-column flex-md-row align-items-md-center">
                    <Media v-if="user.avatar" middle size="huge" shape="circle">
                        <Img :src="user.avatar" :alt="user.name" thumbnail />
                    </Media>
                    <Media v-if="!user.avatar" middle size="huge" :variant="user.theme" shape="circle">
                        <span class="fw-medium">
                            {{toInitials(user.name)}}
                        </span>
                    </Media>
                    <div class="mt-3 mt-md-0 ms-md-3">
                        <h3 class="title mb-1">{{user.name}}</h3>
                        <span class="small">{{user.role}}</span>
                        <ul class="nk-list-option pt-1">
                            <li><Icon icon="map-pin"></Icon><span class="small">{{user.address}}</span></li>
                            <li><Icon icon="building"></Icon><span class="small">{{user.company}}</span></li>
                        </ul>
                    </div>
                </div>
            </BlockHeadContent>
            <BlockHeadContent>
                <div class="d-flex gap g-3">
                    <div class="gap-col">
                        <BoxDotted class="py-2">
                            <div class="d-flex align-items-center">
                                <div class="h4 mb-0">{{user.followers}}k</div>
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
                                <div class="h4 mb-0">{{user.following}}k</div>
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
    </BlockHead>

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
                    <Button as="RouterLink" :to="`/user-manage/user-edit/${user.id}`" soft variant="primary">
                        <Icon icon="edit"></Icon><span>Edit Profile</span>
                    </Button>
                </li>
                <li class="d-md-none">
                    <Button as="RouterLink" :to="`/user-manage/user-edit/${user.id}`" soft variant="primary" class="btn-icon">
                        <Icon icon="edit"></Icon>
                    </Button>
                </li>
            </ul>
        </div>
    </BlockHeadBetween>

    <Block class="mt-4">
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
                                        <span class="text">45453423</span>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span class="title fw-medium w-40 d-inline-block">Full Name:</span>
                                        <span class="text">{{user.name}}</span>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span class="title fw-medium w-40 d-inline-block">Email:</span>
                                        <span class="text">{{user.email}}</span>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span class="title fw-medium w-40 d-inline-block">Address:</span>
                                        <span class="text">{{user.address}}</span>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span class="title fw-medium w-40 d-inline-block">Joining Date</span>
                                        <span class="text">{{user.joining}}</span>
                                    </ListGroupItem>
                                </ListGroup>
                            </div><!-- .bio-block -->
                            <div class="bio-block">
                                <h4 class="bio-block-title mb-2">Skills</h4>
                                <ul class="d-flex flex-wrap gap gx-1">
                                    <li v-for="(el, index) in user.skills" :key="index">
                                        <Badge href="#" variant="secondary-soft">{{el}}</Badge>
                                    </li>
                                </ul>
                            </div><!-- .bio-block -->
                            <div class="bio-block">
                                <h4 class="bio-block-title mb-3">Social</h4>
                                <ul class="d-flex flex-wrap gap g-2">
                                    <li v-for="(el, index) in user.social" :key="index">
                                        <Media :href="el.link" size="sm" middle :variant="el.variant">
                                            <Icon :icon="el.site"></Icon>
                                        </Media>
                                    </li>
                                </ul>
                            </div><!-- .bio-block -->
                        </CardBody>
                    </div><!-- .card-aside -->
                    <div class="card-content col-sep">
                        <CardBody>
                            <div class="bio-block">
                                <h4 class="bio-block-title">About Me</h4>
                                <div v-html="user.description"></div>
                                <Row utils="g-gs pt-3">
                                    <Col lg="6">
                                        <div class="small">Designation:</div>
                                        <h5 class="small">{{user.designation}}</h5>
                                    </Col>
                                    <Col lg="6">
                                        <div class="small">Website:</div>
                                        <h5 class="small">{{user.website}}</h5>
                                    </Col>
                                </Row>
                            </div><!-- .bio-block -->
                        </CardBody>
                        <CardBody>
                            <div class="bio-block">
                                <h4 class="bio-block-title">Recent Activity</h4>
                                <Schedule class="mt-4">
                                    <ScheduleItem v-for="(item, index) in user.activity" :key="index" symbol="active" 
                                        :contentClass="
                                            item.type === 'file' ? 'nk-schedule-content-no-border' : 
                                            item.type === 'alert' ? 'nk-schedule-content-no-border flex-grow-1' : ''"
                                        >
                                        <span class="smaller">{{item.time}}</span>
                                        <div class="h6">{{item.title}}</div>

                                        <List class="d-flex flex-wrap gap g-2 py-2" v-if="item.images">
                                            <ListItem v-for="(el, index) in item.images" :key="index">
                                                <Media size="xxl">
                                                    <Img :src="el.src" :alt="el.alt" thumbnail/>
                                                </Media>
                                            </ListItem>
                                        </List>

                                        <List tag="div" class="list-group-dotted mt-3" v-if="item.files">
                                            <ListItem tag="div" class="list-group-wrap">
                                                <div class="p-3" v-for="(el, index) in item.files" :key="index">
                                                    <MediaGroup>
                                                        <Media class="rounded-0">
                                                            <Img :src="
                                                                el.type === 'pdf' ? '/images/icon/file-type-pdf.svg' : 
                                                                el.type === 'doc' ? '/images/icon/file-type-doc.svg' : 
                                                                el.type === 'code' ? '/images/icon/file-type-code.svg' : 
                                                                '/images/icon/file-type-pdf.svg'" alt="icon"
                                                            />
                                                        </Media>
                                                        <MediaText class="ms-1">
                                                            <a href="#" class="title">{{el.title}}</a>
                                                            <span class="text smaller">{{el.size}}</span>
                                                        </MediaText>
                                                    </MediaGroup>
                                                </div>
                                            </ListItem>
                                        </List>

                                        <template v-for="(el, index) in item.alerts" :key="index">
                                            <Alert class="mt-2" variant="info" v-if="item.alerts">
                                                <div class="d-flex">
                                                    <Icon class="opacity-75" size="lg" :icon="el.icon" />
                                                    <div class="ms-2 d-flex flex-wrap flex-grow-1 justify-content-between">
                                                        <div>
                                                            <h6 class="alert-heading mb-0">{{el.title}}</h6>
                                                            <span class="smaller d-block my-1">{{el.description}}</span>
                                                        </div>
                                                        <ul class="d-flex gap g-2 pt-1" v-if="el.buttons">
                                                            <li v-for="(btn, index) in el.buttons" :key="index">
                                                                <Button href="#" size="md" :variant="btn.variant">
                                                                    <Icon :icon="btn.icon" />
                                                                    <span>{{btn.text}}</span>
                                                                </Button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Alert>
                                        </template>
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
import Row from '@/components/layout/Row.vue';
import Col from '@/components/layout/Col.vue';
import Schedule from '@/components/schedule/Schedule.vue';
import ScheduleItem from '@/components/schedule/ScheduleItem.vue';
import Alert from '@/components/uielements/alert/Alert.vue';
import List from '@/components/list/List.vue';
import ListItem from '@/components/list/ListItem.vue';
import getInitials from '@/utilities/getInitials.js';
import { users } from '@/store/users';

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
        Row,
        Col,
        Schedule,
        ScheduleItem,
        Alert,
        List,
        ListItem
    },
    data(){
        return {
            user: null
        }
    },
    computed: {
        userId(){
            return this.$route.params.id
        }
    },
    methods: {
        toInitials(name){
            return getInitials(name);
        },
        initData(){
            // grabs the id form the url and loads the corresponding data
            let findUser = users.find((item) => item.id === this.userId);
            this.user = findUser;
        }
    },
    created() {
        this.initData();

        this.$watch(() => this.$route.params, this.initData)
    }
}
</script>
