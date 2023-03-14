<template>
    <List class="nk-message-actions">
        <ListItem class="d-none d-sm-block">
            <Button size="sm" zoom class="btn-icon text-light">
                <Icon icon="reply-fill"></Icon>
            </Button>
        </ListItem>
        <ListItem class="dropdown-center">
            <Button size="sm" zoom class="btn-icon text-light" data-bs-toggle="dropdown" aria-expanded="false">
                <Icon icon="more-v"></Icon>
            </Button>
            <div class="dropdown-menu dropdown-menu-sm">
                <div class="dropdown-content py-1">
                    <List class="link-list is-compact">
                        <ListItem class="d-sm-none">
                            <a href="#">
                                <Icon icon="reply-fill"></Icon>
                                <span>Reply</span>
                            </a>
                        </ListItem>
                        <ListItem>
                            <a href="#">
                                <Icon icon="pen-alt-fill"></Icon>
                                <span>Edit</span>
                            </a>
                        </ListItem>
                        <ListItem>
                            <a href="#">
                                <Icon icon="trash-fill"></Icon>
                                <span>Delete</span>
                            </a>
                        </ListItem>
                    </List>
                </div>
            </div>
        </ListItem>
    </List>
</template>

<script>
import Icon from '@/components/icon/Icon.vue';
import Button from '@/components/uielements/button/Button.vue';
import List from '@/components/list/List.vue'
import ListItem from '@/components/list/ListItem.vue'

export default {
    name: 'MessageActions',
    components: {
        Icon,
        Button,
        List,
        ListItem
    }
}
</script>
