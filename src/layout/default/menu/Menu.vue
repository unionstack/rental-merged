<template>
    <ul class="nk-menu">
        <template v-for="menuItem in menuData" :key="menuItem.id">
            <MenuHeading v-if="menuItem.heading" :title="menuItem.heading"></MenuHeading>
            <MenuList v-if="!menuItem.heading" :url="menuItem.url" :title="menuItem.title" :icon="menuItem.icon" :submenu="menuItem.subMenus">
                <ul class="nk-menu-sub">
                    <template v-for="menuItem in menuItem.subMenus" :key="menuItem.id">
                        <MenuHeading v-if="menuItem.heading" :title="menuItem.heading"></MenuHeading>
                        <MenuList v-if="!menuItem.heading" :url="menuItem.url" :title="menuItem.title" :icon="menuItem.icon" :submenu="menuItem.subMenus">
                            <ul class="nk-menu-sub">
                                <template v-for="menuItem in menuItem.subMenus" :key="menuItem.id">
                                    <MenuHeading v-if="menuItem.heading" :title="menuItem.heading"></MenuHeading>
                                    <MenuList v-if="!menuItem.heading" :url="menuItem.url" :title="menuItem.title" :icon="menuItem.icon" :submenu="menuItem.subMenus">
                                        <ul class="nk-menu-sub">
                                            <template v-for="menuItem in menuItem.subMenus" :key="menuItem.id">
                                                <MenuHeading v-if="menuItem.heading" :title="menuItem.heading"></MenuHeading>
                                                <MenuList v-if="!menuItem.heading" :url="menuItem.url" :title="menuItem.title" :icon="menuItem.icon" :submenu="menuItem.subMenus"></MenuList>
                                            </template>
                                        </ul>
                                    </MenuList>
                                </template>
                            </ul>
                        </MenuList>
                    </template>
                </ul>
            </MenuList>
        </template>
    </ul><!-- .nk-menu -->
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

import MenuHeading from './MenuHeading.vue';
import MenuList from './MenuList.vue';
import getParents from '@/utilities/getParents';
import slideUp from '@/utilities/slideUp';
import slideDown from '@/utilities/slideDown';

var role = JSON.parse(localStorage.role);
var menuData = null;
if (role == "admin") {
    menuData = [
    {
        id: uuidv4(),
        icon: 'grid-alt',
        title: 'Properties',
        url: '/admin/properties',
        // subMenus: [
        //     {
        //         id: uuidv4(),
        //         title: 'Manage Properties',
        //         url: '/admin/properties'
        //     },
        //     {
        //         id: uuidv4(),
        //         title: 'Create Property',
        //         url: '/admin/property/create'
        //     },
        // ]
    },
    {
        id: uuidv4(),
        icon: 'building-fill',
        title: 'Assign Properties',
        url:   '/admin/assign-property',
        // subMenus: [
        //     {
        //         id: uuidv4(),
        //         title: 'Manage Assigned Properties',
        //         url: '/admin/assign-property'
        //     },
        //     {
        //         id: uuidv4(),
        //         title: 'Assign Property',
        //         url: '/admin/assign-property/create'
        //     },
        // ]
    },
    {
        id: uuidv4(),
        icon: 'users',
        title: 'Owners',
        url:   '/admin/users',
        // subMenus: [
        //     {
        //         id: uuidv4(),
        //         title: 'Owners',
        //         url: '/admin/users'
        //     },
        //     {
        //         id: uuidv4(),
        //         title: 'Create Owner',
        //         url: '/admin/user/create'
        //     },
        // ]
    },
    {
        id: uuidv4(),
        icon: 'users',
        title: 'Managers',
        url:   '/admin/managers',
        // subMenus: [
        //     {
        //         id: uuidv4(),
        //         title: 'Managers',
        //         url: '/admin/managers'
        //     },
        //     {
        //         id: uuidv4(),
        //         title: 'Create Manager',
        //         url: '/admin/manager/create'
        //     },
        // ]
    },
    {
        id: uuidv4(),
        icon: 'users',
        title: 'Tenants',
        url:   '/admin/tenants',
    },
    {
        id: uuidv4(),
        icon: 'home-fill',
        title: 'Bedrooms',
        url:   '/admin/bedrooms',
        // subMenus: [
        //     {
        //         id: uuidv4(),
        //         title: 'Manage Bedrooms',
        //         url: '/admin/bedrooms'
        //     },
        //     {
        //         id: uuidv4(),
        //         title: 'Create Bedroom',
        //         url: '/admin/bedroom/create'
        //     },
        // ]
    },
    {
        id: uuidv4(),
        icon: 'coin',
        title: 'Currencies',
        url:   '/admin/currencies',
        // subMenus: [
        //     {
        //         id: uuidv4(),
        //         title: 'Manage Currencies',
        //         url: '/admin/currencies'
        //     },
        //     {
        //         id: uuidv4(),
        //         title: 'Create Currnecy',
        //         url: '/admin/currency/create'
        //     },
        // ]
    },
    {
        id: uuidv4(),
        icon: 'file-docs',
        title: 'Projects',
        url:   '/admin/projects',
        // subMenus: [
        //     {
        //         id: uuidv4(),
        //         title: 'Manage Projects',
        //         url: '/admin/projects'
        //     },
        //     {
        //         id: uuidv4(),
        //         title: 'Create Project',
        //         url: '/admin/project/create'
        //     },
        // ]
    },
    {
        id: uuidv4(),
        icon: 'account-setting-alt',
        title: 'Setting',
        url: '/admin/settings',
    },
    {
        id: uuidv4(),
        icon: 'signout',
        title: 'Logout',
        url:   '/admin/logout',
    }
]    
}else if(role == "manager"){
    menuData = [

    {
        id: uuidv4(),
        icon: 'grid-alt',
        title: 'Dashboard',
        url: '/manager/properties',
    },
    {
        id: uuidv4(),
        icon: 'account-setting-alt',
        title: 'Setting',
        url: '/manager/settings',
    },
    {
        id: uuidv4(),
        icon: 'signout',
        title: 'Logout',
        url:   '/manager/logout',
    }
    // {
    //     id: uuidv4(),
    //     icon: 'chevron-left-round',
    //     title: 'Logout',
    //     url: '/manager/logout',
    // }
]
}
else if(role == "user"){
    menuData = [

    {
        id: uuidv4(),
        icon: 'grid-alt',
        title: 'Dashboard',
        url: '/user/properties',
    },
    {
        id: uuidv4(),
        icon: 'account-setting-alt',
        title: 'Setting',
        url: '/user/settings',
    },
    {
        id: uuidv4(),
        icon: 'signout',
        title: 'Logout',
        url:   '/user/logout',
    }
]
}


export default {
  name: 'MenuContainer',
  components: {
    MenuHeading,
    MenuList
  },
  data () {
    return {
      menuData
    }
  },
  mounted(){
    // variables for Sidebar
    let menu = {
        classes: {
            main: 'nk-menu',
            item:'nk-menu-item',
            link:'nk-menu-link',
            toggle: 'nk-menu-toggle',
            sub: 'nk-menu-sub',
            subparent: 'has-sub',
            active: 'active',
            current: 'current-page'
        },
    };
    // set active class to sidebar element path
    let currentLink = function(selector){
        let elm = document.querySelectorAll(selector);
        elm.forEach(function(item){
            var activeRouterLink = item.classList.contains('router-link-active');
            if (activeRouterLink) {
                let parents = getParents(item,`.${menu.classes.main}`, menu.classes.item);
                parents.forEach(parentElemets =>{
                    parentElemets.classList.add(menu.classes.active, menu.classes.current);
                    let subItem = parentElemets.querySelector(`.${menu.classes.sub}`);
                    subItem !== null && (subItem.style.display = "block")
                })
                item.scrollIntoView({ block: "start"})
                
            } else {
                item.parentElement.classList.remove(menu.classes.active, menu.classes.current);
            }
        })
    } 

    currentLink(`.${menu.classes.link}`);

    // dropdown load
    let dropdownLoad = function(elm){
        let parent = elm.parentElement;
        if(!parent.classList.contains(menu.classes.subparent)){
            parent.classList.add(menu.classes.subparent);
        }
    }

    // dropdown toggle
    let dropdownToggle = function(elm){
        let parent = elm.parentElement;
        let nextelm = elm.nextElementSibling;
        let speed = nextelm.children.length > 5 ? 400 + nextelm.children.length * 10 : 400;
        if(!parent.classList.contains(menu.classes.active)){
        parent.classList.add(menu.classes.active);
            slideDown(nextelm,speed);
        }else{
        parent.classList.remove(menu.classes.active);
            slideUp(nextelm,speed);
        }
    }

    // dropdown close siblings
    let closeSiblings = function(elm){
        let parent = elm.parentElement;
        let siblings = parent.parentElement.children;
        Array.from(siblings).forEach(item => {
        if(item !== parent){
            item.classList.remove(menu.classes.active);
            if(item.classList.contains(menu.classes.subparent)){
            let subitem = item.querySelectorAll(`.${menu.classes.sub}`);
            subitem.forEach(child => {
                child.parentElement.classList.remove(menu.classes.active);
                slideUp(child,400);
            })
            }
        }
        });
    }
    // dropdown init
    let DropdownInit = function (selector){
        const elm = document.querySelectorAll(selector);
        elm.forEach(item => {
            dropdownLoad(item);
            item.addEventListener("click", function(e){
                e.preventDefault();
                dropdownToggle(item);
                closeSiblings(item);
            });
        })
    }

    DropdownInit(`.${menu.classes.toggle}`);

  }
}
</script>

