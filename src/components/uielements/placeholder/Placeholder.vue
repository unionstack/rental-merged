<template>
    <span class="placeholder" :class="[variant && 'bg-'+variant, size && 'placeholder-'+size, col && 'col-'+col]"></span>
</template>

<script>
    export default {
        name: 'placeholderItem',
        props: {
            variant: String,
            size:String,
            col:Number
        },
    }
</script>
