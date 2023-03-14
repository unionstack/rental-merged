<template>
    <li class="nk-timeline-item">
        <div class="nk-timeline-item-inner">
            <div class="nk-timeline-symbol">
                <Media size="md" middle shape="circle" :class="variant ? 'text-bg-' + variant : null">
                    <Icon :icon="symbol" v-if="symbol" />
                    <Img :src="avatar" v-else/>
                </Media>
            </div>
            <div class="nk-timeline-content">
                <slot></slot>
            </div>
        </div>
    </li>
</template>

<script>
import Icon from '@/components/icon/Icon.vue';
import Media from '@/components/media/Media.vue';
import Img from '../img/Img.vue';

export default {
    name: 'TimelineItem',
    components: {
        Icon,
        Media,
        Img
    },
    props: {
        symbol: String,
        variant: String,
        avatar: String,
    }
}
</script>
