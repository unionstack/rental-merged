<template>
    <div class="chart-legend" :class="small && 'chart-legend-small'">
        <Dot :variant="dot" />
        <div class="chart-legend-text">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Dot from '@/components/dot/Dot.vue';

export default {
    name: 'ChartLegend',
    components: {
        Dot
    },
    props: {
        dot: String,
        small: Boolean
    }
}
</script>
