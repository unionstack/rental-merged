<template>
    <div class="chart-label-group" :class="justify ? 'justify-content-' + justify : null">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ChartLabelGroup',
    props: {
        justify: String
    }
}
</script>
