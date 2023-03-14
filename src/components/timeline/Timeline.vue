<template>
    <div class="nk-timeline" :class="center && 'nk-timeline-center'">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TimelineContainer',
    props: {
        center: Boolean
    }
}
</script>
