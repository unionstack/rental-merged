<template>
    <div class="dataTable-wrapper table-responsive">
    <div class="dataTable-top">
        <div class="dataTable-dropdown">
            <label>
            <select class="dataTable-selector">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
            </select> 
            Per page
            </label>
        </div><!-- .dataTable-dropdown -->
        <div class="dataTable-search">
            <input class="dataTable-input" placeholder="Search..." type="text">
        </div>
    </div><!-- .dataTable-top -->
    <div class="dataTable-container">
        <Table class="table-border dataTable-table">
            <TableHead>
                <tr>
                    <th v-for="heading in data.headings" :key="heading" ><OverlineTitle tag="span">{{heading}}</OverlineTitle></th>
                </tr>
            </TableHead>
            <TableBody>
                <tr v-for="data,index in data.data" :key="index">
                    <td v-for="ditem,index in data" :key="index">{{ditem}}</td>
                </tr>
            </TableBody>
        </Table>
    </div>
    <div class="dataTable-bottom">
        <div class="dataTable-info">Showing 1 to 8 of 21 entries</div>
        <nav class="dataTable-pagination">
        <ul class="dataTable-pagination-list">
            <li class="active"><a href="#">1</a></li>
            <li class=""><a href="#">2</a></li>
            <li class=""><a href="#">3</a></li>
            <li class="pager"><a href="#"><em class="icon ni ni-chevron-right"></em></a></li>
        </ul>
        </nav>
    </div><!-- .dataTable-bottom -->

    </div><!-- .dataTable-wrapper -->
</template>

<script>
import Table from '@/components/utilities/table/Table.vue';
import TableHead from '@/components/utilities/table/TableHead.vue';
import TableBody from '@/components/utilities/table/TableBody.vue';
import OverlineTitle from '@/components/misc/OverlineTitle.vue';

export default {
    name: 'NioTable',
    props: {
        data:{
            type: [Object]
        }
    },
    components: {
        Table,
        TableHead,
        TableBody,
        OverlineTitle,
    }
}
</script>