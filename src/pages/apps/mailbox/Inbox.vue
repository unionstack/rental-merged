<!-- eslint-disable no-unused-vars -->
<template>
    <Layout content="stretch">
      <div class="nk-ibx" data-ibx-collapse="xl" id="ibxWrap">
        <div ref="ibxAside" class="nk-ibx-aside" data-simplebar id="ibxAside" data-overlay>
            <div class="nk-ibx-aside-header">
                <Button variant="primary"><span>Compose</span></Button>
            </div>
            <List class="nk-ibx-menu">
                <ListItem class="active">
                    <a href="#" class="nk-ibx-menu-item">
                        <Icon icon="inbox"></Icon>
                        <span>Inbox</span>
                        <span class="nk-ibx-menu-badge">3</span>
                    </a>
                </ListItem>
                <ListItem>
                    <a href="#" class="nk-ibx-menu-item">
                        <Icon icon="star"></Icon>
                        <span>Starred</span>
                    </a>
                </ListItem>
                <ListItem>
                    <a href="#" class="nk-ibx-menu-item">
                        <Icon icon="clock"></Icon>
                        <span>Snoozed</span>
                    </a>
                </ListItem>
                <ListItem>
                    <a href="#" class="nk-ibx-menu-item">
                        <Icon icon="send-alt"></Icon>
                        <span>Sent</span>
                    </a>
                </ListItem>
                <ListItem>
                    <a href="#" class="nk-ibx-menu-item">
                        <Icon icon="file-check"></Icon>
                        <span>Drafts</span>
                        <span class="nk-ibx-menu-badge">1</span>
                    </a>
                </ListItem>
                <ListItem>
                    <a href="#" class="nk-ibx-menu-item">
                        <Icon icon="caution"></Icon>
                        <span>Spam</span>
                        <span class="nk-ibx-menu-badge">6</span>
                    </a>
                </ListItem>
                <ListItem>
                    <a href="#" class="nk-ibx-menu-item">
                        <Icon icon="trash"></Icon>
                        <span>Trash</span>
                    </a>
                </ListItem>
            </List>
            <div class="nk-aside-heading mt-auto">
                <div class="gap-col">
                    <OverlineTitle>Contact</OverlineTitle>
                </div>
                <div class="gap-col">
                    <Dropdown>
                        <Button size="sm" zoom class="btn-icon me-n1" data-bs-toggle="dropdown">
                          <Icon icon="more-h"></Icon>
                        </Button>
                        <DropdownMenu alignment="end">
                            <div class="dropdown-content py-1">
                                <List class="link-list is-compact">
                                    <ListItem>
                                        <a href="#">
                                            <Icon icon="plus"></Icon>
                                            <span>Add Contact</span>
                                        </a>
                                    </ListItem>
                                    <ListItem>
                                        <a href="#">
                                            <Icon icon="users"></Icon>
                                            <span>All Contact</span>
                                        </a>
                                    </ListItem>
                                </List>
                            </div>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            <List class="nk-ibx-contacts">
                <ListItem>
                    <a href="#">
                        <MediaGroup>
                            <Media size="md" shape="circle" middle>
                                <img src="/images/avatar/a.jpg" alt="">
                            </Media>
                            <MediaText>
                                <span class="title">Timothy Smith</span>
                                <span class="text smaller">timothysmith@gmail.com</span>
                            </MediaText>
                        </MediaGroup>
                    </a>
                </ListItem>
                <ListItem>
                    <a href="#">
                        <MediaGroup>
                            <Media size="md" shape="circle" middle>
                                <img src="/images/avatar/b.jpg" alt="">
                            </Media>
                            <MediaText>
                                <span class="title">Alexis Clarke</span>
                                <span class="text smaller">alexshatov@gmail.com</span>
                            </MediaText>
                        </MediaGroup>
                    </a>
                </ListItem>
                <ListItem>
                    <a href="#">
                        <MediaGroup>
                            <Media size="md" shape="circle" middle variant="success">
                                <span class="smaller">HS</span>
                            </Media>
                            <MediaText>
                                <span class="title">Herbert Stokes</span>
                                <span class="text smaller">herbert@gmail.com</span>
                            </MediaText>
                        </MediaGroup>
                    </a>
                </ListItem>
                <ListItem>
                    <a href="#">
                        <MediaGroup>
                            <Media size="md" shape="circle" middle>
                                <img src="/images/avatar/d.jpg" alt="">
                            </Media>
                            <MediaText>
                                <span class="title">Nancy Martino</span>
                                <span class="text smaller">nancyshatov@gmail.com</span>
                            </MediaText>
                        </MediaGroup>
                    </a>
                </ListItem>
            </List>
        </div><!-- .nk-ibx-aside -->
        <div class="nk-ibx-body">
            <div class="nk-ibx-head">
                <List class="nk-ibx-head-tools">
                    <ListItem>
                        <Media size="md" middle>
                        <FormCheck>
                            <FormCheckInput type="checkbox" value="" id="flexCheckDefault" />
                        </FormCheck>
                        </Media>
                    </ListItem>
                    <ListItem class="d-none d-md-block">
                        <Button size="md" zoom class="btn-icon">
                            <Icon icon="trash"></Icon>
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Button size="md" zoom class="btn-icon">
                            <Icon icon="redo"></Icon>
                        </Button>
                    </ListItem>
                    <ListItem class="d-none d-md-block">
                        <Button size="md" zoom class="btn-icon">
                            <Icon icon="label"></Icon>
                        </Button>
                    </ListItem>
                    <ListItem class="dropdown">
                        <Button size="md" zoom class="btn-icon" data-bs-toggle="dropdown">
                            <Icon icon="more-v"></Icon>
                        </Button>
                        <div class="dropdown-menu dropdown-menu-end">
                            <div class="dropdown-content py-1">
                                <List class="link-list">
                                    <ListItem><a href="#"><Icon icon="forward-arrow"></Icon><span>Move To</span></a></ListItem>
                                    <ListItem><a href="#"><Icon icon="archive"></Icon><span>Archive</span></a></ListItem>
                                    <ListItem><a href="#"><Icon icon="trash"></Icon><span>Delete</span></a></ListItem>
                                </List>
                            </div>
                        </div>
                    </ListItem>
                </List>
                <div class="ms-auto d-flex align-items-center">
                    <div class="nk-ibx-head-search d-none d-md-flex">
                        <div class="form-group">
                            <FormInputWrap>
                                <FormInputIcon position="start" class="text-light md">
                                    <Icon icon="search"></Icon>
                                </FormInputIcon>
                                <FormInput size="md" class="form-control-plaintext" type="text" placeholder="Search Emaill" />
                            </FormInputWrap>
                        </div>
                    </div>
                    <div class="nk-ibx-head-pagination">
                        <div class="nk-ibx-head-info d-none d-xxl-block">
                            1-50 of 2,619
                        </div>
                        <List class="nk-ibx-head-nav">
                            <ListItem>
                                <Button size="md" zoom class="btn-icon">
                                    <Icon icon="chevron-left"></Icon>
                                </Button>
                            </ListItem>
                            <ListItem>
                                <Button size="md" zoom class="btn-icon">
                                    <Icon icon="chevron-right"></Icon>
                                </Button>
                            </ListItem>
                            <ListItem class="dropdown d-md-none">
                                <Button size="md" zoom class="btn-icon" data-bs-toggle="dropdown">
                                    <Icon icon="search"></Icon>
                                </Button>
                                <div class="dropdown-menu dropdown-menu-md dropdown-menu-end">
                                    <div class="px-4 py-1">
                                        <div class="form-group">
                                            <FormInputWrap>
                                                <FormInput class="form-control-plaintext" type="text" placeholder="Search Emaill" />
                                            </FormInputWrap>
                                        </div>
                                    </div>
                                </div>
                            </ListItem>
                            <ListItem class="nk-ibx-toggle">
                                <Button size="md" zoom class="btn-icon toggle-ibx-aside">
                                    <Icon icon="menu-right"></Icon>
                                </Button>
                            </ListItem>
                        </List>
                    </div>
                </div>
            </div><!-- .nk-ibx-head -->
            <div class="nk-ibx-list" data-simplebar>
                <InboxItem v-for="item in inboxItemsData" :key="item.id">
                    <a href="#" ref="toggleIbxView" class="nk-ibx-link toggle-ibx-view"></a>
                    <InboxElement class="nk-ibx-item-check">
                        <FormCheck>
                            <FormCheckInput type="checkbox" value="" :id="`ibx-${item.id}`" />
                        </FormCheck>
                    </InboxElement>
                    <InboxElement class="nk-ibx-item-star">
                        <TheAsterisk />
                    </InboxElement>
                    <InboxElement class="nk-ibx-item-user">
                        <MediaGroup>
                            <Media v-if="item.avatar" size="md" shape="circle" middle>
                                <Img :src="item.avatar" :alt="item.name" />
                            </Media>
                            <Media v-if="!item.avatar" size="md" shape="circle" middle :variant="item.theme">
                                <span>
                                    {{toInitials(item.name)}}
                                </span>
                            </Media>
                            <MediaText>
                                <span class="title">{{item.name}}</span>
                                <span class="text smaller">{{item.email}}</span>
                            </MediaText>
                        </MediaGroup>
                    </InboxElement>
                    <InboxElement class="nk-ibx-item-content">
                        <div class="d-flex flex-column">
                            <div class="nk-ibx-item-title">
                                <div class="nk-ibx-item-subject">{{item.title}}</div>
                                <List class="nk-ibx-item-tags" v-if="item.status">
                                    <ListItem>
                                        <Badge :variant="`${
                                            item.status === 'Promotions' ? 'info-soft' 
                                            : item.status === 'Updates' ? 'warning-soft' 
                                            : item.status === 'Socials' ? 'success-soft' 
                                            : item.status === 'New' ? 'danger-soft' 
                                            : item.status === 'Important' ? 'primary-soft' 
                                            : item.status === 'Project' ? 'pink-soft' 
                                            : 'secondary-soft'}`"
                                            >
                                            {{item.status}}
                                        </Badge>
                                    </ListItem>
                                </List>
                            </div>
                            <div class="nk-ibx-item-message">{{item.description}}</div>
                        </div>
                    </InboxElement>
                    <InboxElement class="nk-ibx-item-meta">
                        <div class="time">{{item.time}}</div>
                    </InboxElement>
                </InboxItem>
            </div><!-- .nk-ibx-list -->
            <div ref="ibxView" class="nk-ibx-view" id="ibxView">
                <div class="nk-ibx-head">
                    <List class="nk-ibx-head-tools">
                        <ListItem>
                            <Button ref="toggleIbxHide" size="md" zoom class="btn-icon toggle-ibx-view">
                                <Icon icon="arrow-left"></Icon>
                            </Button>
                        </ListItem>
                        <ListItem class="d-none d-md-block">
                            <Button size="md" zoom class="btn-icon">
                                <Icon icon="trash"></Icon>
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Button size="md" zoom class="btn-icon">
                                <Icon icon="redo"></Icon>
                            </Button>
                        </ListItem>
                        <ListItem class="d-none d-md-block">
                            <Button size="md" zoom class="btn-icon">
                                <Icon icon="label"></Icon>
                            </Button>
                        </ListItem>
                        <ListItem class="dropdown">
                            <Button size="md" zoom class="btn-icon" data-bs-toggle="dropdown">
                                <Icon icon="more-v"></Icon>
                            </Button>
                            <div class="dropdown-menu dropdown-menu-end">
                                <div class="dropdown-content py-1">
                                    <List class="link-list">
                                        <ListItem><a href="#"><Icon icon="forward-arrow"></Icon><span>Move To</span></a></ListItem>
                                        <ListItem><a href="#"><Icon icon="archive"></Icon><span>Archive</span></a></ListItem>
                                        <ListItem><a href="#"><Icon icon="trash"></Icon><span>Delete</span></a></ListItem>
                                    </List>
                                </div>
                            </div>
                        </ListItem>
                    </List>
                    <div class="ms-auto d-flex align-items-center">
                        <div class="nk-ibx-head-search d-none d-md-flex">
                            <div class="form-group">
                                <FormInputWrap>
                                    <FormInputIcon position="start" class="text-light md">
                                        <Icon icon="search"></Icon>
                                    </FormInputIcon>
                                    <FormInput size="md" class="form-control-plaintext" type="text" placeholder="Search Emaill" />
                                </FormInputWrap>
                            </div>
                        </div>
                        <div class="nk-ibx-head-pagination">
                            <div class="nk-ibx-head-info d-none d-xxl-block">
                                1-50 of 2,619
                            </div>
                            <List class="nk-ibx-head-nav">
                                <ListItem>
                                    <Button size="md" zoom class="btn-icon">
                                        <Icon icon="chevron-left"></Icon>
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    <Button size="md" zoom class="btn-icon">
                                        <Icon icon="chevron-right"></Icon>
                                    </Button>
                                </ListItem>
                                <ListItem class="dropdown d-md-none">
                                    <Button size="md" zoom class="btn-icon" data-bs-toggle="dropdown">
                                        <Icon icon="search"></Icon>
                                    </Button>
                                    <div class="dropdown-menu dropdown-menu-md dropdown-menu-end">
                                        <div class="px-4 py-1">
                                            <div class="form-group">
                                                <FormInputWrap>
                                                    <FormInput class="form-control-plaintext" type="text" placeholder="Search Emaill" />
                                                </FormInputWrap>
                                            </div>
                                        </div>
                                    </div>
                                </ListItem>
                                <ListItem class="nk-ibx-toggle">
                                    <Button size="md" zoom class="btn-icon toggle-ibx-aside">
                                        <Icon icon="menu-right"></Icon>
                                    </Button>
                                </ListItem>
                            </List>
                        </div>
                    </div>
                </div>
                <div class="nk-ibx-reply nk-reply" data-simplebar>
                    <div class="nk-ibx-reply-head">
                        <div class="d-flex gap g-2">
                            <div class="d-flex align-items-center">
                                <h4 class="title">Build prototypes without code</h4>
                            </div>
                            <ul class="nk-ibx-tags">
                                <li><Badge variant="primary-soft">Important</Badge></li>
                            </ul>
                        </div>
                        <ul class="d-flex g-1 me-n1">
                            <li class="d-none d-sm-block">
                                <Button href="#" size="md" zoom class="btn-icon" title="Print">
                                    <Icon icon="printer"></Icon>
                                </Button>
                            </li>
                            <li>
                                <TheAsterisk btnClass="btn btn-zoom btn-icon btn-md"/>
                            </li>
                        </ul>
                    </div>
                    <div class="nk-ibx-reply-group">
                        <div class="nk-ibx-reply-item nk-reply-item">
                            <div class="nk-reply-header nk-ibx-reply-header toggle-reply">
                                <MediaGroup class="nk-reply-desc">
                                    <Media size="md" shape="circle" middle>
                                        <Img src="/images/avatar/a.jpg" alt="" />
                                    </Media>
                                    <MediaText class="nk-reply-info">
                                        <div class="nk-reply-author lead-text">Leslie Alexander <span class="date d-sm-none">14 Jan, 2020</span></div>
                                        <div class="dropdown nk-reply-msg-info">
                                            <a href="#" class="dropdown-toggle sub-text dropdown-indicator" data-bs-toggle="dropdown">to Mildred</a>
                                            <div class="dropdown-menu dropdown-menu-md">
                                                <ul class="nk-reply-msg-meta">
                                                    <li><span class="label">from:</span> <span class="info"><a href="#">info@softnio.com</a></span></li>
                                                    <li><span class="label">to:</span> <span class="info"><a href="#">team@softnio.com</a></span></li>
                                                    <li><span class="label">bcc:</span> <span class="info"><a href="#">team@softnio.com</a></span></li>
                                                    <li><span class="label">mailed-by:</span> <span class="info"><a href="#">softnio.com</a></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="nk-reply-msg-excerpt">I am facing problem as i can not select currency on buy order page. Can you guys let me know what i am doing doing wrong? Please check attached files.</div>
                                    </MediaText>
                                </MediaGroup>
                                <ul class="nk-reply-tools g-1">
                                    <li class="attach-msg d-none d-sm-inline-block"><Icon icon="clip-h"></Icon></li>
                                    <li class="date-msg d-none d-sm-inline-block"><span class="date">14 Jan, 2020</span></li>
                                    <li class="replyto-msg"><Button size="md" zoom href="#" class="btn-icon" title="Reply"><Icon icon="curve-up-left"></Icon></Button></li>
                                    <li class="more-actions">
                                        <div class="dropdown">
                                            <a href="#" class="btn btn-zoom btn-icon btn-md" data-bs-toggle="dropdown"><Icon icon="more-v"></Icon></a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <div class="dropdown-content py-1">
                                                    <ul class="link-list">
                                                        <li><a href="#"><Icon icon="reply-fill"></Icon><span>Reply to</span></a></li>
                                                        <li><a href="#"><Icon icon="forward-arrow-fill"></Icon><span>Forward</span></a></li>
                                                        <li><a href="#"><Icon icon="trash-fill"></Icon><span>Delete this</span></a></li>
                                                        <li><a href="#"><Icon icon="report-fill"></Icon><span>Report Spam</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="nk-reply-body nk-ibx-reply-body">
                                <div class="nk-reply-entry entry wide-md">
                                    <p>Hello team,</p>
                                    <p>I am facing problem as i can not select currency on buy order page. Can you guys let me know what i am doing doing wrong? Please check attached files.</p>
                                    <p>Thank you <br> Leslie</p>
                                </div>
                            </div>
                        </div><!-- .nk-reply-item -->
                        <div class="nk-ibx-reply-item nk-reply-item">
                            <div class="nk-reply-header nk-ibx-reply-header toggle-reply">
                                <MediaGroup class="nk-reply-desc">
                                    <Media size="md" shape="circle" middle variant="info">
                                        <span class="smaller">RE</span>
                                    </Media>
                                    <MediaText class="nk-reply-info">
                                        <div class="nk-reply-author lead-text">Ralph Edwards <span class="date d-sm-none">14 Jan, 2020</span></div>
                                        <div class="dropdown nk-reply-msg-info">
                                            <a href="#" class="dropdown-toggle sub-text dropdown-indicator" data-bs-toggle="dropdown">to Mildred</a>
                                            <div class="dropdown-menu dropdown-menu-md">
                                                <ul class="nk-reply-msg-meta">
                                                    <li><span class="label">from:</span> <span class="info"><a href="#">info@softnio.com</a></span></li>
                                                    <li><span class="label">to:</span> <span class="info"><a href="#">team@softnio.com</a></span></li>
                                                    <li><span class="label">bcc:</span> <span class="info"><a href="#">team@softnio.com</a></span></li>
                                                    <li><span class="label">mailed-by:</span> <span class="info"><a href="#">softnio.com</a></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="nk-reply-msg-excerpt">I am facing problem as i can not select currency on buy order page. Can you guys let me know what i am doing doing wrong? Please check attached files.</div>
                                    </MediaText>
                                </MediaGroup>
                                <ul class="nk-reply-tools g-1">
                                    <li class="attach-msg d-none d-sm-inline-block"><Icon icon="clip-h"></Icon></li>
                                    <li class="date-msg d-none d-sm-inline-block"><span class="date">14 Jan, 2020</span></li>
                                    <li class="replyto-msg"><Button size="md" zoom href="#" class="btn-icon" title="Reply"><Icon icon="curve-up-left"></Icon></Button></li>
                                    <li class="more-actions">
                                        <div class="dropdown">
                                            <a href="#" class="btn btn-zoom btn-icon btn-md" data-bs-toggle="dropdown"><Icon icon="more-v"></Icon></a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <div class="dropdown-content py-1">
                                                    <ul class="link-list">
                                                        <li><a href="#"><Icon icon="reply-fill"></Icon><span>Reply to</span></a></li>
                                                        <li><a href="#"><Icon icon="forward-arrow-fill"></Icon><span>Forward</span></a></li>
                                                        <li><a href="#"><Icon icon="trash-fill"></Icon><span>Delete this</span></a></li>
                                                        <li><a href="#"><Icon icon="report-fill"></Icon><span>Report Spam</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="nk-reply-body nk-ibx-reply-body">
                                <div class="nk-reply-entry entry wide-md">
                                    <p>Hello,</p>
                                    <p>Can you guys let me know what i am doing doing wrong? Please check attached files.</p>
                                    <p>Thank you <br> Ralph Edwards</p>
                                </div>
                            </div>
                        </div><!-- .nk-reply-item -->
                    </div>
                    <div class="nk-ibx-reply-form nk-reply-form">
                        <div class="nk-reply-form-header">
                            <div class="nk-reply-form-title d-sm-none">Reply</div>
                            <div class="form-group form-inline align-items-center flex-nowrap w-100">
                                <label class="label me-3">To</label>
                                <div class="form-control-wrap w-100">
                                    <ChoiceInput class="form-control-plaintext" value="info@softnio.com" type="text"/>
                                </div>
                            </div>
                        </div>
                        <div class="nk-reply-form-editor">
                            <Quill toolbar="minimal" placeholder="Write some awesome text"></Quill>
                        </div><!-- .nk-reply-form-editor -->
                        <div class="nk-reply-form-tools">
                            <ul class="nk-reply-form-actions g-1">
                                <li class="me-2"><Button pill variant="primary" type="submit">Send</Button></li>
                                <li>
                                    <div class="dropdown">
                                        <Button size="sm" class="btn-icon" data-bs-toggle="dropdown" href="#" v-nk-tooltip="'Template'"><Icon icon="hash"></Icon></Button>
                                        <div class="dropdown-menu">
                                            <div class="dropdown-content py-1">
                                                <ul class="link-list is-compact">
                                                    <li><a href="#"><span>Thank you message</span></a></li>
                                                    <li><a href="#"><span>Your issues solved</span></a></li>
                                                    <li><a href="#"><span>Thank you message</span></a></li>
                                                </ul>
                                            </div>
                                            <div class="dropdown-content py-1 border-top border-light">
                                                <ul class="link-list is-compact">
                                                    <li><a href="#"><Icon icon="file-plus"></Icon><span>Save as Template</span></a></li>
                                                    <li><a href="#"><Icon icon="notes-alt"></Icon><span>Manage Template</span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <Button size="sm" class="btn-icon" v-nk-tooltip="'Upload Attachment'" href="#"><Icon icon="clip-v"></Icon></Button>
                                </li>
                                <li>
                                    <Button size="sm" class="btn-icon" v-nk-tooltip="'Upload Images'" href="#"><Icon icon="img"></Icon></Button>
                                </li>
                            </ul>
                            <ul class="nk-reply-form-actions g-1">
                                <li>
                                    <Button zoom href="#" class="btn-icon me-n2"><Icon icon="trash"></Icon></Button>
                                </li>
                            </ul>
                        </div><!-- .nk-reply-form-tools -->
                    </div><!-- .nk-reply-form -->
                </div><!-- .nk-reply -->
            </div><!-- .nk-ibx-view -->
        </div><!-- .nk-ibx-body -->
      </div><!-- .nk-ibx -->
    </Layout>
</template>
  
<script>
import Layout from '@/layout/Index.vue';
import Button from '@/components/uielements/button/Button.vue';
import List from '@/components/list/List.vue';
import ListItem from '@/components/list/ListItem.vue';
import Img from '@/components/img/Img.vue';
import Icon from '@/components/icon/Icon.vue';
import OverlineTitle from '@/components/misc/OverlineTitle.vue';
import Dropdown from '@/components/uielements/dropdown/Dropdown.vue';
import DropdownMenu from '@/components/uielements/dropdown/DropdownMenu.vue';
import MediaGroup from '@/components/media/MediaGroup.vue';
import Media from '@/components/media/Media.vue';
import MediaText from '@/components/media/MediaText.vue';
import FormInput from '@/components/forms/input/FormInput.vue';
import FormInputWrap from '@/components/forms/input/FormInputWrap.vue';
import FormInputIcon from '@/components/forms/input/FormInputIcon.vue';
import InboxItem from '@/components/apps/mailbox/InboxItem.vue';
import InboxElement from '@/components/apps/mailbox/InboxElement.vue';
import FormCheck from '@/components/forms/form-check/FormCheck.vue';
import FormCheckInput from '@/components/forms/form-check/FormCheckInput.vue';
import TheAsterisk from '@/components/misc/TheAsterisk.vue';
import Badge from '@/components/uielements/badge/Badge.vue';

import Quill from '@/components/forms/editors/Quill.vue';
import ChoiceInput from '@/components/choices/ChoiceInput.vue';
import getInitials from '@/utilities/getInitials.js';
import { Break } from '@/utilities/globalProperties.js';

export default {
  name: 'InboxPage', 
  components: {
    Layout,
    Button,
    List,
    ListItem,
    Img,
    Icon,
    OverlineTitle,
    Dropdown,
    DropdownMenu,
    MediaGroup,
    Media,
    MediaText,
    FormInput,
    FormInputWrap,
    FormInputIcon,
    InboxItem,
    InboxElement,
    FormCheck,
    FormCheckInput,
    TheAsterisk,
    Badge,
    Quill,
    ChoiceInput
  },
  data(){
    return {
        inboxItemsData: []
    }
  },
  methods: {
    toInitials(name){
        return getInitials(name);
    },
    removeClasses(){
        let inboxAside = this.$refs.ibxAside;

        // add collapse class to aside
        if(inboxAside){
            if(window.innerWidth < Break.xl){
                setTimeout(() => {
                    inboxAside.classList.add('toggle-collapsed');
                }, 500);
            }else{
                inboxAside.classList.remove('toggle-collapsed');
            }
        }
    }
  },
  mounted(){
    let toggleInboxViewRef = this.$refs.toggleIbxView;
    let inboxViewRef = this.$refs.ibxView;
    let toggleInboxHideRef = this.$refs.toggleIbxHide.$el;
    let toggleReply = document.querySelectorAll('.toggle-reply');
    let toggleInboxAside = document.querySelectorAll('.toggle-ibx-aside');
    let inboxAsideRef = this.$refs.ibxAside;

    // show inbox
    if(toggleInboxViewRef){
        toggleInboxViewRef.forEach(el => (
            el.addEventListener('click', function() {
                el.classList.add('view-active');
                inboxViewRef.classList.add('show-ibx');
            })
        ));
    }

    // close inbox
    if(toggleInboxHideRef){
        toggleInboxHideRef.addEventListener('click', function() {
            toggleInboxViewRef.forEach(el => (
                el.classList.remove('view-active')
            ));
            inboxViewRef.classList.remove('show-ibx');
        });
    }

    // toggle reply
    if(toggleReply){
        toggleReply.forEach(el => {
            el.addEventListener('click', function(e){
                e.preventDefault();
                if(e.delegateTarget === undefined){
                    el.classList.toggle('is-collapsed');
                }
            })
        });
    }

    // toggle aside
    if(toggleInboxAside){
        toggleInboxAside.forEach(el => {
            el.addEventListener('click', function() {
                el.classList.add('toggle-active');
                inboxAsideRef.classList.add('show-aside');
    
                // add overlay
                if(inboxAsideRef.classList.contains('show-aside') && window.innerWidth < Break.xl){
                    inboxAsideRef.insertAdjacentHTML('beforebegin', `<div class="nk-overlay" id="asideOverlay"></div>`);
                }
    
                // remove aside by clicking overlay
                let overlay = document.querySelector('#asideOverlay');
                if(overlay){
                    overlay.addEventListener('click', function(){
                        el.classList.remove('toggle-active');
                        inboxAsideRef.classList.remove('show-aside');
                        overlay.remove();
                    })
                }
    
                if(window.innerWidth < Break.xl){
                    el.classList.contains('toggle-active') ? 
                    inboxAsideRef.classList.add('toggle-collapsed') : 
                    inboxAsideRef.classList.remove('toggle-collapsed')
                }
            });
        })
    }

  },
  created() {
    // inbox data
    this.inboxItemsData = [
        {
            id: 'uid01',
            name: 'Leslie Alexander',
            email: 'leslie@gmail.com',
            avatar: '/images/avatar/a.jpg',
            title: 'Hiya',
            description: 'Nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
            status: 'Promotions',
            time: '12:41 PM'
        },
        {
            id: 'uid02',
            name: 'Theresa Webb',
            email: 'theresa@gmail.com',
            avatar: '/images/avatar/b.jpg',
            title: 'Build prototypes without code',
            description: 'Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
            status: 'Updates',
            time: '12:10 PM'
        },
        {
            id: 'uid03',
            name: 'Albert Flores',
            email: 'albert@gmail.com',
            avatar: '/images/avatar/c.jpg',
            title: 'Web Support Dennis',
            description: 'Duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
            time: '12:01 PM'
        },
        {
            id: 'uid04',
            name: 'Mirko Fisuk',
            email: 'mirko@gmail.com',
            title: "Don't make this bad",
            description: 'Elit aute irure tempor incididunt sint deserunt ut voluptate aute id deserunt nisi.',
            time: '11:41 PM',
            theme: 'info',
        },
        {
            id: 'uid05',
            name: 'Ralph Edwards',
            email: 'ralph@gmail.com',
            avatar: '/images/avatar/d.jpg',
            title: 'Welcome to startmail',
            description: 'Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            status: 'Socials',
            time: '11:15 PM'
        },
        {
            id: 'uid06',
            name: 'Annette Black',
            email: 'annette@gmail.com',
            avatar: '/images/avatar/e.jpg',
            title: 'Your account with us',
            description: 'Pariatur duis deserunt mollit dolore cillum minim tempor enim.',
            status: 'New',
            time: '11:10 PM'
        },
        {
            id: 'uid07',
            name: 'Olga Semklo',
            email: 'olga.s@cool.design',
            avatar: '/images/avatar/f.jpg',
            title: 'Some notes',
            description: 'Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.',
            time: '11:02 PM'
        },
        {
            id: 'uid08',
            name: 'Travus Bruntjen',
            email: 'travus@gmail.com',
            theme: 'danger',
            title: 'Explore jobs similar to your job alert',
            description: 'Qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
            time: '10:55 PM'
        },
        {
            id: 'uid09',
            name: 'Saunder Offner',
            email: 'saunder@gmail.com',
            avatar: '/images/avatar/g.jpg',
            title: 'Share their thoughts on LinkedIn',
            description: 'Duis deserunt mollit dolore cillum minim tempor enim.',
            time: '10:41 PM'
        },
        {
            id: 'uid10',
            name: 'Vladamir Koschek',
            email: 'vladamir@gmail.com',
            avatar: '/images/avatar/h.jpg',
            title: 'Daily proofing digest email 10th September 2022',
            description: 'Nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
            time: '10:34 PM'
        },
        {
            id: 'uid11',
            name: 'Stephen MacGilfoyle',
            email: 'stephen@gmail.com',
            avatar: '/images/avatar/i.jpg',
            title: 'New sign in to your Nioboad account',
            description: 'Nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
            status: 'Important',
            time: '10:23 PM'
        },
        {
            id: 'uid12',
            name: 'Jane Montgomery',
            email: 'jane@gmail.com',
            avatar: '/images/avatar/j.jpg',
            title: 'The most awaited product sale of the year is finally here!',
            description: 'Pariatur duis deserunt mollit dolore cillum minim tempor enim.',
            time: '10:01 PM'
        },
        {
            id: 'uid13',
            name: 'Timothy Smith',
            email: 'timothysmith@gmail.com',
            avatar: '/images/avatar/k.jpg',
            title: 'Build prototypes without code',
            description: 'Nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
            status: 'Project',
            time: '9:41 PM'
        },
        {
            id: 'uid14',
            name: 'Raymond Atkins',
            email: 'raymond@gmail.com',
            avatar: '/images/avatar/l.jpg',
            title: 'Build prototypes without code',
            description: 'Nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
            time: '9:24 PM'
        },
        {
            id: 'uid15',
            name: 'Joshua Mcnair',
            email: 'joshua@gmail.com',
            avatar: '/images/avatar/m.jpg',
            title: 'Be a design visionary',
            description: 'Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
            status: 'Socials',
            time: '9:03 PM'
        }
    ];

    //resize event 
    window.addEventListener('resize', this.removeClasses);
  }
}
</script>
