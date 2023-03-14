<template>
    <div class="nk-timeline-heading">
        <OverlineTitle class="overline-title">
            <slot></slot>
        </OverlineTitle>
    </div>
</template>

<script>
import OverlineTitle from '@/components/misc/OverlineTitle.vue';

export default {
    name: 'TimelineHeading',
    components: {
        OverlineTitle
    },
}
</script>
