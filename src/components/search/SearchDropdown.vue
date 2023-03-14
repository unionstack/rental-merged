<template>
    <DropdownMenu size="lg">
        <DropdownContent class="dropdown-content-x-lg py-1">
            <SearchInline>
                <FormInputWrap class="flex-grow-1">
                    <FormInputPlaintext type="text" placeholder="Type Query" />
                </FormInputWrap>
                <Icon icon="search" size="sm" />
            </SearchInline>
        </DropdownContent>
        <div class="dropdown-divider m-0"></div>
        <DropdownContent class="dropdown-content-x-lg py-3">
            <DropdownTitle class="pb-2">
                <h5 class="title">Recent searches</h5>
            </DropdownTitle>
            <List class="dropdown-list gap gy-2">
                <ListItem>
                    <MediaGroup>
                        <Media middle size="md" variant="light" shape="circle">
                            <Icon icon="clock" />
                        </Media>
                        <MediaText>
                            <div class="lead-text">Styled Doughnut Chart</div>
                            <span class="sub-text">1 days ago</span>
                        </MediaText>
                        <MediaAction position="end">
                            <Button size="md" zoom class="btn-icon me-n1">
                                <Icon icon="trash" />
                            </Button>
                        </MediaAction>
                    </MediaGroup>
                </ListItem>
                <ListItem>
                    <MediaGroup>
                        <Media middle size="md" variant="light" shape="circle">
                            <Icon icon="clock" />
                        </Media>
                        <MediaText>
                            <div class="lead-text">Custom Select Inpu</div>
                            <span class="sub-text">7 Aug</span>
                        </MediaText>
                        <MediaAction position="end">
                            <Button size="md" zoom class="btn-icon me-n1">
                                <Icon icon="trash" />
                            </Button>
                        </MediaAction>
                    </MediaGroup>
                </ListItem>
                <ListItem>
                    <MediaGroup>
                        <Media middle size="md" variant="light" shape="circle">
                            <Img src="/images/avatar/a.jpg" alt="" />
                        </Media>
                        <MediaText>
                            <div class="lead-text">Wesley Burland</div>
                            <span class="sub-text">Owner & Founder</span>
                        </MediaText>
                        <MediaAction position="end">
                            <Button size="md" zoom class="btn-icon me-n1">
                                <Icon icon="trash" />
                            </Button>
                        </MediaAction>
                    </MediaGroup>
                </ListItem>
            </List>
        </DropdownContent>
    </DropdownMenu>
</template>

<script>
// import components
import DropdownMenu from '@/components/uielements/dropdown/DropdownMenu.vue';
import DropdownContent from '@/components/uielements/dropdown/DropdownContent.vue';
import SearchInline from './SearchInline.vue';
import FormInputWrap from '@/components/forms/input/FormInputWrap.vue';
import FormInputPlaintext from '@/components/forms/input/FormInputPlaintext.vue';
import Icon from '@/components/icon/Icon.vue';
import DropdownTitle from '@/components/uielements/dropdown/DropdownTitle.vue';
import List from '@/components/list/List.vue';
import ListItem from '@/components/list/ListItem.vue';
import MediaGroup from '@/components/media/MediaGroup.vue';
import Media from '@/components/media/Media.vue';
import MediaText from '@/components/media/MediaText.vue';
import MediaAction from '@/components/media/MediaAction.vue';
import Button from '@/components/uielements/button/Button.vue';
import Img from '@/components/img/Img.vue';

export default {
    name: 'SearchDropdown',
    components: {
        DropdownMenu,
        DropdownContent,
        SearchInline,
        FormInputWrap,
        FormInputPlaintext,
        Icon,
        DropdownTitle,
        List,
        ListItem,
        MediaGroup,
        Media,
        MediaText,
        MediaAction,
        Button,
        Img
    }
}
</script>
