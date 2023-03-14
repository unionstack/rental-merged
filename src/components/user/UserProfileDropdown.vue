<template>
    <DropdownMenu size="md">
        <DropdownContent class="dropdown-content-x-lg py-3 border-bottom border-light">
            <MediaGroup>
                <Media size="xl" middle shape="circle">
                    <Img src="/images/avatar/a.jpg" alt="" thumbnail />
                </Media>
                <MediaText>
                    <div class="lead-text">Wesley Burland</div>
                    <span class="sub-text">Owner & Founder</span>
                </MediaText>
            </MediaGroup>
        </DropdownContent>
        <DropdownContent class="dropdown-content-x-lg py-3 border-bottom border-light">
            <List class="link-list">
                <ListItem>
                    <router-link to="/profile">
                        <Icon icon="user" /> 
                        <span>My Profile</span>
                    </router-link>
                </ListItem>
                <ListItem>
                    <router-link to="/my-contacts">
                        <Icon icon="contact" /> 
                        <span>My Contacts</span>
                    </router-link>
                </ListItem>
                <ListItem>
                    <router-link to="/profile-settings">
                        <Icon icon="setting-alt" /> 
                        <span>Account Settings</span>
                    </router-link>
                </ListItem>
            </List>
        </DropdownContent>
        <DropdownContent class="dropdown-content-x-lg py-3">
            <List class="link-list">
                <ListItem>
                    <a href="#" @click.prevent="handleSignout">
                        <Icon icon="signout" /> 
                        <span>Log Out</span>
                    </a>
                </ListItem>
            </List>
        </DropdownContent>
    </DropdownMenu>
</template>

<script>
// import components
import DropdownMenu from '@/components/uielements/dropdown/DropdownMenu.vue';
import DropdownContent from '@/components/uielements/dropdown/DropdownContent.vue';
import MediaGroup from '@/components/media/MediaGroup.vue';
import Media from '@/components/media/Media.vue';
import MediaText from '@/components/media/MediaText.vue';
import Icon from '@/components/icon/Icon.vue';
import Img from '@/components/img/Img.vue';
import List from '@/components/list/List.vue';
import ListItem from '@/components/list/ListItem.vue';

export default {
    name: 'UserProfileDropdown',
    methods:{
        handleSignout(){
            localStorage.removeItem('nioBoardAuthenticated');
            this.$router.push('/auths/auth-login');
        }
    },
    components:{
        DropdownMenu,
        DropdownContent,
        MediaGroup,
        Media,
        MediaText,
        Icon,
        Img,
        List,
        ListItem
    }
}
</script>
