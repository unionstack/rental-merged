<!-- eslint-disable no-unused-vars -->
<template>
    <Layout content="stretch">
        <div class="nk-chat profile-shown" id="chatWrap" ref="chatWrap">
            <div class="nk-chat-aside">
                <div class="nk-aside-heading pt-4">
                    <div class="gap-col">
                        <h2 class="title">Chats</h2>
                    </div>
                    <div class="gap-col">
                        <Dropdown>
                            <Button href="#" zoom size="sm" class="btn-icon me-n1" data-bs-toggle="dropdown">
                                <Icon icon="more-h" />
                            </Button>
                            <DropdownMenu alignment="end">
                                <div class="dropdown-content py-1">
                                    <List class="link-list is-compact">
                                        <ListItem>
                                            <a href="#">
                                                <Icon icon="plus"></Icon>
                                                <span>New Chat</span>
                                            </a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="#">
                                                <Icon icon="user"></Icon>
                                                <span>New Contact</span>
                                            </a>
                                        </ListItem>
                                    </List>
                                </div>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
                <div class="nk-chat-aside-scroll" data-simplebar>
                    <div class="nk-aside-content py-2">
                        <div class="form-group">
                            <div class="form-control-wrap">
                                <div class="form-control-icon end">
                                    <Icon icon="search"></Icon>
                                </div>
                                <FormInput pill id="searchChat" placeholder="Search"/>
                            </div>
                        </div>
                    </div>
                    <ChatList>
                        <ChatListItem>
                            <MediaGroup>
                                <Media middle shape="circle">
                                    <Img src="/images/avatar/a.jpg" alt="" />
                                </Media>
                                <MediaText>
                                    <span class="title">
                                        <span>Jessica Drew</span> 
                                        <span class="date">18:30</span>
                                    </span>
                                    <span class="text smaller">
                                        <span>Ok, see you later</span> 
                                        <span class="badge bg-success rounded-pill">2</span>
                                    </span>
                                </MediaText>
                            </MediaGroup>
                        </ChatListItem>
                        <ChatListItem>
                            <MediaGroup>
                                <Media middle shape="circle">
                                    <Img src="/images/avatar/b.jpg" alt="" />
                                </Media>
                                <MediaText>
                                    <span class="title">
                                        <span>David Moore</span> 
                                        <span class="date">18:16</span>
                                    </span>
                                    <span class="text smaller">
                                        <span>You: i don't remember anything 😄 </span>
                                    </span>
                                </MediaText>
                            </MediaGroup>
                        </ChatListItem>
                        <ChatListItem>
                            <MediaGroup>
                                <Media middle shape="circle">
                                    <Img src="/images/avatar/c.jpg" alt="" />
                                </Media>
                                <MediaText>
                                    <span class="title">
                                        <span>Greg James</span> 
                                        <span class="date">18:02</span>
                                    </span>
                                    <span class="text smaller">
                                        <span>I got a job at SpaceX 🎉 🚀</span>
                                    </span>
                                </MediaText>
                            </MediaGroup>
                        </ChatListItem>
                        <ChatListItem>
                            <MediaGroup>
                                <Media middle shape="circle">
                                    <Img src="/images/avatar/d.jpg" alt="" />
                                </Media>
                                <MediaText>
                                    <span class="title">
                                        <span>Emily Dorson</span> 
                                        <span class="date">17:42</span>
                                    </span>
                                    <span class="text smaller">
                                        <span>Table for four, 5PM. Be there.</span>
                                    </span>
                                </MediaText>
                            </MediaGroup>
                        </ChatListItem>
                    </ChatList>
                </div>
            </div><!-- .nk-chat-aside -->
            <div class="nk-chat-body" ref="toggleChatBody" id="chatBody">
                <div class="nk-chat-head">
                    <List class="nk-chat-head-tools me-1 ms-n1 d-md-none">
                        <ListItem>
                            <Button ref="toggleCloseChat" size="sm" zoom class="btn-icon toggle-close-chat">
                                <Icon icon="arrow-left"></Icon>
                            </Button>
                        </ListItem>
                    </List>
                    <MediaGroup>
                        <Media middle shape="circle">
                            <Img src="/images/avatar/c.jpg" alt="" />
                        </Media>
                        <MediaText>
                            <span class="title"><span>David Moore</span></span>
                            <span class="text smaller"><span>Active</span></span>
                        </MediaText>
                    </MediaGroup>
                    <List class="nk-chat-head-tools gap gx-md-2 me-n2">
                        <ListItem>
                            <Button size="md" zoom class="btn-icon">
                                <Icon icon="call"></Icon>
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Button size="md" zoom class="btn-icon">
                                <Icon icon="video"></Icon>
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Button ref="toggleChatProfile" size="md" zoom class="btn-icon active">
                                <Icon icon="info-fill"></Icon>
                            </Button>
                        </ListItem>
                    </List>
                </div><!-- .nk-chat-head -->
                <div class="nk-chat-panel" data-simplebar>
                    <div class="nk-message-wrap">
                        <Message avatar="/images/avatar/a.jpg" isYou>
                            <List class="nk-message-bubbles">
                                <ListItem>
                                    <div class="nk-message-bubble has-media">
                                        <List class="nk-message-media">
                                            <ListItem>
                                                <Img src="/images/avatar/a.jpg" alt="" />
                                            </ListItem>
                                            <ListItem>
                                                <Img src="/images/avatar/c.jpg" alt="" />
                                            </ListItem>
                                        </List>
                                        <List class="nk-message-meta">
                                            <ListItem>15:42</ListItem>
                                            <ListItem>Unread</ListItem>
                                        </List>
                                    </div>
                                    <MessageActions />
                                </ListItem>
                            </List>
                        </Message>
                        <Message isMe>
                            <List class="nk-message-bubbles">
                                <ListItem>
                                    <div class="nk-message-bubble">
                                        <div class="nk-message-text"> Hi, yes, David have found it, ask our concierge 👀 </div>
                                        <List class="nk-message-meta">
                                            <ListItem>15:42</ListItem>
                                            <ListItem>Seen</ListItem>
                                        </List>
                                    </div>
                                    <MessageActions />
                                </ListItem>
                            </List>
                        </Message>
                        <Message avatar="/images/avatar/a.jpg" isYou>
                            <List class="nk-message-bubbles">
                                <ListItem>
                                    <div class="nk-message-bubble">
                                        <div class="nk-message-text"> Hello! Have you seen my backpack anywhere in office?</div>
                                        <List class="nk-message-meta">
                                            <ListItem>15:42</ListItem>
                                        </List>
                                    </div>
                                    <MessageActions />
                                </ListItem>
                            </List>
                        </Message>
                        <Message isMe>
                            <List class="nk-message-bubbles">
                                <ListItem>
                                    <div class="nk-message-bubble">
                                        <div class="nk-message-text"> While you win in love, you continue to win in other things.</div>
                                        <List class="nk-message-meta">
                                            <ListItem>15:42</ListItem>
                                        </List>
                                    </div>
                                    <MessageActions />
                                </ListItem>
                            </List>
                        </Message>
                        <Message avatar="/images/avatar/a.jpg" isYou>
                            <List class="nk-message-bubbles">
                                <ListItem>
                                    <div class="nk-message-bubble">
                                        <div class="nk-message-text"> Didn't I tell you not to put your phone on charge just because it's the weekend?</div>
                                        <List class="nk-message-meta">
                                            <ListItem>12:42</ListItem>
                                        </List>
                                    </div>
                                    <MessageActions />
                                </ListItem>
                                <ListItem>
                                    <div class="nk-message-bubble">
                                        <div class="nk-message-text"> next time you'll be awake at this hour why not now</div>
                                        <List class="nk-message-meta">
                                            <ListItem>12:48</ListItem>
                                        </List>
                                    </div>
                                    <MessageActions />
                                </ListItem>
                            </List>
                        </Message>
                    </div><!-- .nk-message-wrap -->
                </div><!-- .nk-chat-panel -->
                <div class="nk-chat-form">
                    <div class="nk-chat-input">
                        <List class="nk-chat-input-btns">
                            <ListItem>
                                <Button size="sm" zoom class="btn-icon text-light">
                                    <Icon icon="mic"></Icon>
                                </Button>
                            </ListItem>
                            <ListItem>
                                <Button size="sm" zoom class="btn-icon text-light">
                                    <Icon icon="clip"></Icon>
                                </Button>
                            </ListItem>
                        </List>
                        <div class="nk-chat-input-field">
                            <div class="form-control-wrap">
                                <FormInput type="text" placeholder="Start a new message" size="md" class="form-control-plaintext" />
                            </div>
                        </div>
                        <div class="nk-chat-input-send">
                            <Button size="sm" zoom class="btn-icon text-light">
                                <Icon icon="send"></Icon>
                            </Button>
                        </div>
                    </div>
                </div><!-- .nk-chat-form -->
                <div class="nk-chat-profile show-profile" ref="chatProfile" data-simplebar id="chatProfile" data-overlay>
                    <div class="nk-aside-content py-4 border-bottom border-light position-relative">
                        <MediaGroup column class="text-center py-2">
                            <Media size="big" shape="circle" middle>
                                <Img src="/images/avatar/c.jpg" alt="" />
                            </Media>
                            <MediaText>
                                <h3 class="mb-1">David Moore</h3>
                                <span class="text smaller"><span>Product Designer @uikings</span></span>
                            </MediaText>
                        </MediaGroup>
                        <Dropdown class="position-absolute top-0 end-0 p-4">
                            <Button size="sm" zoom class="btn-icon" data-bs-toggle="dropdown">
                                <Icon icon="more-h"></Icon>
                            </Button>
                            <DropdownMenu alignment="end">
                                <div class="dropdown-content py-1">
                                    <List class="link-list is-compact">
                                        <ListItem>
                                            <a href="#"><Icon icon="bell-off"></Icon><span>Mute</span></a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="#"><Icon icon="user-cross"></Icon><span>Block</span></a>
                                        </ListItem>
                                        <ListItem>
                                            <a href="#"><Icon icon="alert"></Icon><span>Report</span></a>
                                        </ListItem>
                                    </List>
                                </div>
                            </DropdownMenu>
                        </Dropdown>
                    </div><!-- .nk-aside-content -->
                    <div class="nk-aside-content py-4">
                        <div class="gap gy-3">
                            <div class="gap-col">
                                <h5 class="title">Options</h5>
                                <List class="link-list link-list-base-light is-compact">
                                    <ListItem>
                                        <a href="#">
                                            <Icon icon="edit"></Icon>
                                            <span>Edit Nickname</span>
                                        </a>
                                    </ListItem>
                                    <ListItem>
                                        <a href="#">
                                            <Icon icon="search"></Icon>
                                            <span>Search In Conversation</span>
                                        </a>
                                    </ListItem>
                                    <ListItem>
                                        <a href="#">
                                            <Icon icon="color-palette"></Icon>
                                            <span>Change Color</span>
                                        </a>
                                    </ListItem>
                                    <ListItem>
                                        <a href="#">
                                            <Icon icon="bell-off"></Icon>
                                            <span>Mute Notifications</span>
                                        </a>
                                    </ListItem>
                                </List>
                            </div>
                            <div class="gap-col">
                                <h5 class="title">Files</h5>
                                <List class="link-list link-list-base-light is-compact">
                                    <ListItem>
                                        <a href="#">
                                            <Icon icon="folder-list"></Icon>
                                            <span>Data_Component.zip</span>
                                        </a>
                                    </ListItem>
                                    <ListItem>
                                        <a href="#">
                                            <Icon icon="file-pdf"></Icon>
                                            <span>Checkout_responsive.pdf</span>
                                        </a>
                                    </ListItem>
                                    <ListItem>
                                        <a href="#">
                                            <Icon icon="img"></Icon>
                                            <span>Commercial.jpeg</span>
                                        </a>
                                    </ListItem>
                                </List>
                            </div>
                            <div class="gap-col">
                                <h5 class="title mb-3">Media</h5>
                                <List class="nk-chat-media-list gap g-2 list4col">
                                    <ListItem>
                                        <a class="nk-chat-media-item" href="#">
                                            <Img src="/images/avatar/a.jpg" alt="" />
                                        </a>
                                    </ListItem>
                                    <ListItem>
                                        <a class="nk-chat-media-item" href="#">
                                            <Img src="/images/avatar/b.jpg" alt="" />
                                        </a>
                                    </ListItem>
                                    <ListItem>
                                        <a class="nk-chat-media-item" href="#">
                                            <Img src="/images/avatar/c.jpg" alt="" />
                                        </a>
                                    </ListItem>
                                    <ListItem>
                                        <a class="nk-chat-media-item" href="#">
                                            <Img src="/images/avatar/d.jpg" alt="" />
                                        </a>
                                    </ListItem>
                                    <ListItem>
                                        <a class="nk-chat-media-item" href="#">
                                            <Img src="/images/avatar/e.jpg" alt="" />
                                        </a>
                                    </ListItem>
                                    <ListItem>
                                        <a class="nk-chat-media-item" href="#">
                                            <Img src="/images/avatar/f.jpg" alt="" />
                                        </a>
                                    </ListItem>
                                    <ListItem>
                                        <a class="nk-chat-media-item" href="#">
                                            <Img src="/images/avatar/g.jpg" alt="" />
                                        </a>
                                    </ListItem>
                                    <ListItem>
                                        <a class="nk-chat-media-item is-video" href="#">
                                            <Img src="/images/avatar/h.jpg" alt="" />
                                            <Icon icon="play-fill"></Icon>
                                        </a>
                                    </ListItem>
                                </List>
                            </div>
                        </div>
                    </div><!-- .nk-aside-content -->
                </div><!-- .nk-chat-profile -->
            </div><!-- .nk-chat-body -->
        </div>
    </Layout>
</template>
  
<script>

import Layout from '@/layout/Index.vue';
import Dropdown from '@/components/uielements/dropdown/Dropdown.vue';
import DropdownMenu from '@/components/uielements/dropdown/DropdownMenu.vue';
import Button from '@/components/uielements/button/Button.vue';
import Icon from '@/components/icon/Icon.vue';
import FormInput from '@/components/forms/input/FormInput.vue';
import ChatList from '@/components/apps/chat/ChatList.vue';
import ChatListItem from '@/components/apps/chat/ChatListItem.vue';
import MediaGroup from '@/components/media/MediaGroup.vue';
import Media from '@/components/media/Media.vue';
import MediaText from '@/components/media/MediaText.vue';
import Img from '@/components/img/Img.vue';
import Message from '@/components/apps/chat/Message.vue';
import MessageActions from '@/components/apps/chat/MessageActions.vue';
import List from '@/components/list/List.vue';
import ListItem from '@/components/list/ListItem.vue';

import { Break } from '@/utilities/globalProperties.js';

export default {
    name: 'ChatsPage', 
    components: {
        Layout,
        Dropdown,
        DropdownMenu,
        Button,
        Icon,
        FormInput,
        ChatList,
        ChatListItem,
        MediaGroup,
        Media,
        MediaText,
        Img,
        Message,
        MessageActions,
        List,
        ListItem
    },
    mounted(){
        let chatClose = this.$refs.toggleCloseChat.$el;
        let chatBodyElm = this.$refs.toggleChatBody;

        let trigger = this.$refs.toggleChatProfile.$el;
        let targetElm = this.$refs.chatProfile;
        let parentElm = this.$refs.chatWrap;
        if(trigger){
            trigger.addEventListener('click', function(){
                !trigger.classList.contains('active') ? trigger.classList.add('active') : trigger.classList.remove('active');
                !targetElm.classList.contains('show-profile') ? targetElm.classList.add('show-profile') : targetElm.classList.remove('show-profile');
                !parentElm.classList.contains('profile-shown') ? parentElm.classList.add('profile-shown') : parentElm.classList.remove('profile-shown');
    
                if(targetElm.classList.contains('show-profile') && window.innerWidth < Break.xxl){
                    targetElm.insertAdjacentHTML('beforebegin', `<div class="nk-overlay" id="profileOverlay"></div>`)
                }
    
                let overlay = document.querySelector('#profileOverlay');
                if(overlay){
                    overlay.addEventListener('click', function(){
                        trigger.classList.remove('active');
                        targetElm.classList.remove('show-profile', 'toggle-visiable');
                        parentElm.classList.remove('profile-shown');
                        overlay.remove();
                    })
                }
    
                if(window.innerWidth < Break.xxl){
                    trigger.classList.contains('active') ? 
                    targetElm.classList.add('toggle-visiable') : 
                    targetElm.classList.remove('toggle-visiable')
                }
            })
        }

        this.hideProfileIfExist();


        //close chat
        if(chatClose){
            chatClose.addEventListener('click', function(e){
                e.preventDefault();
                chatBodyElm.classList.remove('show-chat');
            })
        }

    },
    methods:{
        removeEventHandlerOnResize() {
            if(this.$refs.toggleChatProfile){
                let trigger = this.$refs.toggleChatProfile.$el;
                let targetElm = this.$refs.chatProfile;
                let parentElm = this.$refs.chatWrap;
                let overlay = document.querySelector('#profileOverlay');
    
                if(window.innerWidth <= Break.xxl){
                    setTimeout(() => {
                        targetElm.classList.add('toggle-collapsed');
                    }, 500);
                }else{
                    targetElm.classList.remove('toggle-collapsed');
                }
                if(window.innerWidth >= Break.xxl){
                   overlay && overlay.remove();
                }
                if(!targetElm.classList.contains('toggle-visiable') && window.innerWidth <= Break.xxl){
                    trigger.classList.remove('active');
                    targetElm.classList.remove('show-profile');
                    parentElm.classList.remove('profile-shown');
                    overlay && overlay.remove();
                }
            }
        },
        hideProfileIfExist(){
            let trigger = this.$refs.toggleChatProfile.$el;
            let targetElm = this.$refs.chatProfile;
            let parentElm = this.$refs.chatWrap;
            if(trigger){
                if(window.innerWidth <= Break.xxl){
                    trigger.classList.remove('active');
                    targetElm.classList.remove('show-profile');
                    parentElm.classList.remove('profile-shown');
                    targetElm.classList.add('toggle-collapsed');
                }
            }
        }
    },
    created(){
        //resize event 
        window.addEventListener('resize', this.removeEventHandlerOnResize)
    }
}
</script>
  