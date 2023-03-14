<template>
    <div class="nk-message" :class="[isYou && 'is-you', isMe && 'is-me']">
        <div v-if="avatar" class="nk-message-avatar">
            <Media size="sm" middle shape="circle">
                <Img :src="avatar" alt="user" />
            </Media>
        </div>
        <div class="nk-message-content">
            <slot />
        </div><!-- .nk-message-content -->
    </div><!-- .nk-message -->
</template>

<script>
import Img from '@/components/img/Img.vue';
import Media from '@/components/media/Media.vue';

export default {
    name: 'TheMessage',
    props: {
        avatar: String,
        isYou: Boolean,
        isMe: Boolean,
    },
    components: {
        Img,
        Media
    }
}
</script>
