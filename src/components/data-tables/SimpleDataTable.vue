<template>
    <Table :id="id" class="table">
        <slot></slot>
    </Table>
</template>

<script>
import {DataTable} from "simple-datatables";
import Table from '@/components/utilities/table/Table.vue';

export default {
    name: 'DataTable',
    props: {
        id: {
            type: String
        }
    },
    components: {
        Table,
    },
    methods: {
        jsDataTable () {
            let elem = document.getElementById(this.id);
            let dataTables = new DataTable(elem, {
                labels: {
                    perPage: "{select} Per page",
                },
                perPage: 10,
                prevText: `<em class="icon ni ni-chevron-left"></em>`,
                nextText: `<em class="icon ni ni-chevron-right"></em>`,
                lastText: `<em class="icon ni ni-chevrons-right"></em>`,
            });
            dataTables;
        }
    },
    mounted(){
       this.jsDataTable();
    }
}
</script>
