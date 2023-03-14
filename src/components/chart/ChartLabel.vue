<template>
    <div class="chart-label" :class="small && 'chart-label-small'">
        <div class="title">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChartLabel',
    props: {
        small: Boolean
    }
}
</script>
