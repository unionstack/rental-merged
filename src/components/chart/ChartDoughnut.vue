<template>
    <canvas :id="id" :data="data"></canvas>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
    name: 'ChartDoughnut',
    props: {
        id: {
            type: String
        },
        data: {
            type: Object
        }
    },
    methods: {
        doughnutChart(){
            let setData = this.data;
            let chartLegend = (typeof setData.legend === 'undefined') ? false : setData.legend;
            let chartData = [];
        
            for (let i = 0; i < setData.datasets.length; i++) {
                chartData.push({
                    label: setData.datasets[i].label,
                    backgroundColor: (typeof setData.datasets[i].backgroundColor === 'undefined') ? 'transparent' : setData.datasets[i].backgroundColor,
                    data: setData.datasets[i].data,
                });
            } 
        
            let canvas = document.getElementById(this.id).getContext("2d");
            let chart = new Chart(canvas, {
                type:'doughnut',
                data:{ 
                    labels : setData.labels,
                    datasets : chartData
                },
                options: {
                    plugins: {
                        legend: {
                            display: chartLegend,
                            position: 'top',
                            labels: {
                                boxWidth: 12,
                                boxHeight: 12,
                                color: this.$Colors.bodyColor,
                                padding: 10,
                            }
                        },
                        tooltip: {
                            enabled: true,
                            padding: 12,
                            boxWidth: 10,
                            boxHeight: 10,
                            boxPadding: 4,
                            backgroundColor: this.$Colors.gray100,
                            titleColor: this.$Colors.dark,
                            bodyColor: this.$Colors.bodyColor,
                            borderColor: this.$Colors.gray200,
                            borderWidth: 1
                        },
                    },
                    responsive: true,
                    maintainAspectRatio:false,
                }
            });
            chart;

        }
    },
    mounted() {
        // initialize chart
        this.doughnutChart();
    }
}
</script>