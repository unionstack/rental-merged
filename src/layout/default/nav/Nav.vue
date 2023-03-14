<template>
    <ul class="nk-nav">
       <!--  <NavList class="has-sub">
            <a href="#" class="nk-nav-link nk-nav-toggle">
                <span class="nk-nav-text">Dashboards</span>
            </a>
            <ul class="nk-nav-sub nk-nav-sub-lg">
                <NavList>
                    <router-link to="/" class="nk-nav-link bg-primary-soft-hover">
                        <MediaGroup class="flex-grow-1">
                            <Media class="media-border" size="md" middle variant="primary-soft-outline">
                                <Icon icon="dashboard-fill"></Icon>
                            </Media>
                            <MediaText class="flex-grow-1">
                                <span class="title">Default</span>
                                <span class="sub-text d-block">Website Analytics</span>
                            </MediaText>
                        </MediaGroup>
                    </router-link>
                </NavList>

                <NavList>
                    <router-link to="/home-ecommerce" class="nk-nav-link bg-secondary-soft-hover">
                        <MediaGroup class="flex-grow-1">
                            <Media class="media-border" size="md" middle variant="secondary-soft-outline">
                                <Icon icon="cart-fill"></Icon>
                            </Media>
                            <MediaText class="flex-grow-1">
                                <span class="title">eCommerce</span>
                                <span class="sub-text d-block">Sales reports</span>
                            </MediaText>
                        </MediaGroup>
                    </router-link>
                </NavList>

                <NavList>
                    <router-link to="/home-project" class="nk-nav-link bg-success-soft-hover">
                        <MediaGroup class="flex-grow-1">
                            <Media class="media-border" size="md" middle variant="success-soft-outline">
                                <Icon icon="link-group"></Icon>
                            </Media>
                            <MediaText class="flex-grow-1">
                                <span class="title">Project Management</span>
                                <span class="sub-text d-block">Tasts, graphs & charts</span>
                            </MediaText>
                        </MediaGroup>
                    </router-link>
                </NavList>

                <NavList>
                    <router-link to="/home-marketing" class="nk-nav-link bg-info-soft-hover">
                        <MediaGroup class="flex-grow-1">
                            <Media class="media-border" size="md" middle variant="info-soft-outline">
                                <Icon icon="growth-fill"></Icon>
                            </Media>
                            <MediaText class="flex-grow-1">
                                <span class="title">Marketing</span>
                                <span class="sub-text d-block">Campaings & conversions</span>
                            </MediaText>
                        </MediaGroup>
                    </router-link>
                </NavList>

                <NavList>
                    <router-link to="/home-nft" class="nk-nav-link bg-danger-soft-hover">
                        <MediaGroup class="flex-grow-1">
                            <Media class="media-border" size="md" middle variant="danger-soft-outline">
                                <Icon icon="img-fill"></Icon>
                            </Media>
                            <MediaText class="flex-grow-1">
                                <span class="title">NFT Marketplace</span>
                                <span class="sub-text d-block">Sell & Create your own NFTs</span>
                            </MediaText>
                        </MediaGroup>
                    </router-link>
                </NavList>
            </ul>
        </NavList>
        <NavList class="has-sub">
            <a href="#" class="nk-nav-link nk-nav-toggle">
                <span class="nk-nav-text">Pages</span>
            </a>
            <ul class="nk-nav-sub">
                <NavList class="has-sub">
                    <a href="#" class="nk-nav-link nk-nav-toggle">
                        Applications
                    </a>
                    <ul class="nk-nav-sub">
                        <NavList>
                            <router-link to="/apps/chats" class="nk-nav-link">Chat</router-link>
                        </NavList>
                        <NavList>
                            <router-link to="/apps/inbox" class="nk-nav-link">Inbox</router-link>
                        </NavList>
                        <NavList>
                            <router-link to="/apps/calendar" class="nk-nav-link">Calendar</router-link>
                        </NavList>
                        <NavList class="has-sub">
                            <a href="#" class="nk-nav-link nk-nav-toggle">
                                Kanban board
                            </a>
                            <ul class="nk-nav-sub">
                                <NavList>
                                    <router-link to="/apps/kanban/basic" class="nk-nav-link">Basic</router-link>
                                </NavList>
                                <NavList>
                                    <router-link to="/apps/kanban/custom" class="nk-nav-link">Custom board</router-link>
                                </NavList>
                            </ul>
                        </NavList>
                        <NavList class="has-sub">
                            <a href="#" class="nk-nav-link nk-nav-toggle">
                                User Management
                            </a>
                            <ul class="nk-nav-sub">
                                <NavList>
                                    <router-link to="/user-manage/user-list" class="nk-nav-link">User lists</router-link>
                                </NavList>
                                <NavList>
                                    <router-link to="/user-manage/user-cards" class="nk-nav-link">User Cards</router-link>
                                </NavList>
                                <NavList>
                                    <router-link to="/user-manage/user-profile/uid01" class="nk-nav-link">User Profile</router-link>
                                </NavList>
                                <NavList>
                                    <router-link to="/user-manage/user-edit/uid01" class="nk-nav-link">User Edit</router-link>
                                </NavList>
                            </ul>
                        </NavList>
                        <NavList class="has-sub">
                            <a href="#" class="nk-nav-link nk-nav-toggle">
                                eCommerce
                            </a>
                            <ul class="nk-nav-sub">
                                <NavList>
                                    <router-link to="/ecommerce/products" class="nk-nav-link">Products</router-link>
                                </NavList>
                                <NavList>
                                    <router-link to="/ecommerce/categories" class="nk-nav-link">Categories</router-link>
                                </NavList>
                                <NavList>
                                    <router-link to="/ecommerce/add-product" class="nk-nav-link">Add Product</router-link>
                                </NavList>
                                <NavList>
                                    <router-link to="/ecommerce/edit-product/uid01" class="nk-nav-link">Edit Product</router-link>
                                </NavList>
                                <NavList>
                                    <router-link to="/ecommerce/add-category" class="nk-nav-link">Add Category</router-link>
                                </NavList>
                                <NavList>
                                    <router-link to="/ecommerce/edit-category/uid01" class="nk-nav-link">Edit Category</router-link>
                                </NavList>
                            </ul>
                        </NavList>
                    </ul>
                </NavList>
                <NavList>
                    <router-link to="/data-tables" class="nk-nav-link">Data tables</router-link>
                </NavList>
                <NavList>
                    <router-link to="/charts" class="nk-nav-link">Charts</router-link>
                </NavList>
                <NavList>
                    <router-link to="/sweetalert" class="nk-nav-link">Sweetalert</router-link>
                </NavList>
                <NavList>
                    <router-link to="/auths/auth-register" class="nk-nav-link">Auth Register</router-link>
                </NavList>
                <NavList>
                    <router-link to="/auths/auth-login" class="nk-nav-link">Auth Login</router-link>
                </NavList>
                <NavList>
                    <router-link to="/auths/auth-reset" class="nk-nav-link">Forgot Password</router-link>
                </NavList>
                <NavList>
                    <router-link to="/error/not-found" class="nk-nav-link">Page 404</router-link>
                </NavList>
            </ul>
        </NavList>

        <NavList class="has-sub">
            <a href="#" class="nk-nav-link nk-nav-toggle">
                <span class="nk-nav-text">Ui Elements</span>
            </a>
            <div class="nk-nav-sub">
                <div class="nk-nav-mega nk-nav-mega-lg">
                    <div class="nk-nav-col">
                        <h6 class="nk-nav-heading">Elements</h6>
                        <ul class="link-list link-list-md link-list-hover-bg-primary">
                            <li>
                                <router-link to="/components/alerts">Alerts</router-link>
                            </li>
                            <li>
                                <router-link to="/components/badge">Badges</router-link>
                            </li>
                            <li>
                                <router-link to="/components/breadcrumb">Breadcrumb</router-link>
                            </li>
                            <li>
                                <router-link to="/components/buttons">Button</router-link>
                            </li>
                            <li>
                                <router-link to="/components/button-group">Button group</router-link>
                            </li>
                            <li>
                                <router-link to="/components/cards">Card</router-link>
                            </li>
                            <li>
                                <router-link to="/components/close-button">Close button</router-link>
                            </li>
                            <li>
                                <router-link to="/components/list-group">List group</router-link>
                            </li>
                            <li>
                                <router-link to="/components/pagination">Pagination</router-link>
                            </li>
                            <li>
                                <router-link to="/components/placeholders">Placeholders</router-link>
                            </li>
                            <li>
                                <router-link to="/components/progress">Progress</router-link>
                            </li>
                            <li>
                                <router-link to="/components/spinners">Spinners</router-link>
                            </li>
                            <li>
                                <router-link to="/components/accordion">Accordion</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="nk-nav-col">
                        <h6 class="nk-nav-heading">Components</h6>
                        <ul class="link-list link-list-md link-list-hover-bg-primary">
                            <li>
                                <router-link to="/components/carousel">Carousel</router-link>
                            </li>
                            <li>
                                <router-link to="/components/collapse">Collapse</router-link>
                            </li>
                            <li>
                                <router-link to="/components/dropdown">Dropdowns</router-link>
                            </li>
                            <li>
                                <router-link to="/components/modal">Modal</router-link>
                            </li>
                            <li>
                                <router-link to="/components/tabs">Tabs</router-link>
                            </li>
                            <li>
                                <router-link to="/components/offcanvas">Offcanvas</router-link>
                            </li>
                            <li>
                                <router-link to="/components/popovers">Popovers</router-link>
                            </li>
                            <li>
                                <router-link to="/components/toasts">Toasts</router-link>
                            </li>
                            <li>
                                <router-link to="/components/tooltips">Tooltips</router-link>
                            </li>
                        </ul>
                        <h6 class="nk-nav-heading">Layout</h6>
                        <ul class="link-list link-list-md link-list-hover-bg-primary">
                            <li>
                                <router-link to="/layout/breakpoints">Breakpoints</router-link>
                            </li>
                            <li>
                                <router-link to="/layout/containers">Containers</router-link>
                            </li>
                            <li>
                                <router-link to="/layout/gutters">Gutters</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="nk-nav-col">
                        <h6 class="nk-nav-heading">Utilities</h6>
                        <ul class="link-list link-list-md link-list-hover-bg-primary">
                            <li>
                                <router-link to="/utilities/background">Background</router-link>
                            </li>
                            <li>
                                <router-link to="/utilities/borders">Borders</router-link>
                            </li>
                            <li>
                                <router-link to="/utilities/colors">Colors</router-link>
                            </li>
                            <li>
                                <router-link to="/utilities/flex">Flex</router-link>
                            </li>
                            <li>
                                <router-link to="/utilities/image">Images</router-link>
                            </li>
                            <li>
                                <router-link to="/utilities/sizing">Sizing</router-link>
                            </li>
                            <li>
                                <router-link to="/utilities/spacing">Spacing</router-link>
                            </li>
                            <li>
                                <router-link to="/utilities/typography">Typography</router-link>
                            </li>
                            <li>
                                <router-link to="/utilities/tables">Tables</router-link>
                            </li>
                            <li>
                                <router-link to="/utilities/misc">Miscellaneous</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="nk-nav-col nk-nav-media">
                        <Img src="/images/thumb/a.jpg" alt="" class="rounded-3" />
                    </div>
                </div>
            </div>
        </NavList> -->
    </ul>
</template>

<script>
// import NavList from '@/layout/default/nav/NavList.vue';
// import MediaGroup from '@/components/media/MediaGroup.vue';
// import Media from '@/components/media/Media.vue';
// import MediaText from '@/components/media/MediaText.vue';
// import Icon from '@/components/icon/Icon.vue';
// import Img from '@/components/img/Img.vue';

import getParents from '@/utilities/getParents';
import slideUp from '@/utilities/slideUp';
import slideDown from '@/utilities/slideDown';

import {createPopper} from '@popperjs/core'

export default {
    name: "NavContainer",
    components: {
        // NavList,
        // MediaGroup,
        // Media,
        // MediaText,
        // Icon,
        // Img
    },
    mounted(){
        let Break = { mb: 420, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1540, any: Infinity };
        let appRoot = document.querySelector('.nk-app-root');
        let Win = { height: window.innerHeight, width: window.innerWidth };

        let navbarVariables = {
            classes: {
                main: 'nk-nav',
                item:'nk-nav-item',
                link:'nk-nav-link',
                toggle: 'nk-nav-toggle',
                sub: 'nk-nav-sub',
                subparent: 'has-sub',
                active: 'active',
                current: 'current-page'
            },
        };

        // dropdown load
        let dropdownLoad = function(elm){
            let parent = elm.parentElement;
            if(!parent.classList.contains(navbarVariables.classes.subparent)){
                parent.classList.add(navbarVariables.classes.subparent);
            }
        }

        // dropdown toggle
        let dropdownToggle = function(elm){
            let parent = elm.parentElement;
            let nextelm = elm.nextElementSibling;
            let speed = nextelm.children.length > 5 ? 400 + nextelm.children.length * 10 : 400;
            if(!parent.classList.contains(navbarVariables.classes.active)){
            parent.classList.add(navbarVariables.classes.active);
                slideDown(nextelm,speed);
            }else{
            parent.classList.remove(navbarVariables.classes.active);
                slideUp(nextelm,speed);
            }
        }

        // dropdown extended
        let dropdownExtended = function(elm){
            let nextelm = elm.nextElementSibling;
            let navbarCollapse = appRoot.dataset.navbarCollapse ? appRoot.dataset.navbarCollapse : Break.lg;
            if(Win.width > eval(`Break.${navbarCollapse}`)){
                elm.addEventListener('mouseenter', () => {
                    let placement = getParents(elm,`.${navbarVariables.classes.main}`,navbarVariables.classes.sub).length > 0 ? 'right-start' : 'bottom-start';
                    createPopper(elm, nextelm, {
                        placement: placement,
                        boundary: '.nk-wrap',
                    });
                });
            }
        }

        // dropdown close siblings
        let closeSiblings = function(elm){
            let parent = elm.parentElement;
            let siblings = parent.parentElement.children;
            Array.from(siblings).forEach(item => {
            if(item !== parent){
                item.classList.remove(navbarVariables.classes.active);
                if(item.classList.contains(navbarVariables.classes.subparent)){
                let subitem = item.querySelectorAll(`.${navbarVariables.classes.sub}`);
                subitem.forEach(child => {
                    child.parentElement.classList.remove(navbarVariables.classes.active);
                    slideUp(child,400);
                })
                }
            }
            });
        }

        let DropdownHeader = function (selector){
            const elm = document.querySelectorAll(selector);
            let active = navbarVariables.classes.active;
            let subparent = navbarVariables.classes.subparent;
            let submenu = navbarVariables.classes.sub;
            let navbarCollapse = appRoot.dataset.navbarCollapse ? appRoot.dataset.navbarCollapse : Break.lg;
            elm.forEach(item => {
                dropdownLoad(item,subparent);
                dropdownExtended(item);
                item.addEventListener("click", function(e){
                    e.preventDefault();
                    if(Win.width < eval(`Break.${navbarCollapse}`)){
                        dropdownToggle(item,active);
                        closeSiblings(item,active,subparent,submenu);
                    }
                });
            })
        }

        DropdownHeader(`.${navbarVariables.classes.toggle}`);

    }
}
</script>
