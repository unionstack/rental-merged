<template>
    <div :id="id" class="js-svgmap" :class="zoomOff && 'js-svgmap-zoom-off'"></div>
</template>

<script>
import svgMap from 'svgmap';

export default {
    name: 'WorldMap',
    props: {
        id: {
            type: String
        },
        data: {
            type: Object
        },
        zoomOff: Boolean
    },
    methods: {
        worldMap() {
            let itemId = this.id;
            let setData = this.data;
            let map = new svgMap({
                targetElementID: itemId,
                colorMax: setData.colorMax,
                colorMin: setData.colorMin,
                colorNoData: setData.colorNoData,
                data: setData.data
            });

            map;
        }
    },
    mounted(){
        // initialize world map
        this.worldMap();
    }
}
</script>