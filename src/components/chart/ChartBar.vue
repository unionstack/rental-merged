<template>
    <canvas :id="id" :data="data"></canvas>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
    name: 'ChartBar',
    props: {
        id: {
            type: String
        },
        data: {
            type: Object
        }
    },
    methods: {
        barChart (){
            let setData = this.data;
            let chartLegend = (typeof setData.legend === 'undefined') ? false : setData.legend;
            let TicksValue = (typeof setData.ticksValue === 'undefined') ? false : setData.ticksValue;
            let maxTicksLimitValue = setData.maxTicksLimit;

            let borderDashValue = setData.borderDash;
            let stackedValue = (typeof setData.stacked === 'undefined') ? false : setData.stacked;
            let xAxisValue = (typeof setData.xAxis === 'undefined') ? true : setData.xAxis;
            let yAxisValue = (typeof setData.yAxis === 'undefined') ? true : setData.yAxis;

            let xGridColorValue = (typeof setData.xGridColor === 'undefined') ? this.$Colors.gray100 : setData.xGridColor;
            let yGridColorValue = (typeof setData.yGridColor === 'undefined') ? this.$Colors.gray100 : setData.yGridColor;
            let xGridBorderColorValue = (typeof setData.xGridBorderColor === 'undefined') ? this.$Colors.gray100 : setData.xGridBorderColor;
            let yGridBorderColorValue = (typeof setData.yGridBorderColor === 'undefined') ? this.$Colors.gray100 : setData.yGridBorderColor;

            let barPercentageValue = (typeof setData.barPercentage === 'undefined') ? 0.6 : setData.barPercentage;
            let categoryPercentageValue = (typeof setData.categoryPercentage === 'undefined') ? 0.7 : setData.categoryPercentage;
            let barThicknessValue = (typeof setData.barThickness === 'undefined') ? 'flex' : setData.barThickness;

            let chartData = [];
        
            for (let i = 0; i < setData.datasets.length; i++) {
                chartData.push({
                    label: setData.datasets[i].label,
                    backgroundColor: (typeof setData.datasets[i].backgroundColor === 'undefined') ? 'transparent' : setData.datasets[i].backgroundColor,
                    borderWidth: (typeof setData.datasets[i].borderWidth === 'undefined') ? 1 : setData.datasets[i].borderWidth,
                    borderColor: setData.datasets[i].borderColor,
                    data: setData.datasets[i].data,
                    borderRadius: (typeof setData.datasets[i].borderRadius === 'undefined') ? 0 : setData.datasets[i].borderRadius,
                    borderSkipped: false,
                    hoverBackgroundColor: setData.datasets[i].hoverBackgroundColor,
                    type: setData.datasets[i].type,
                    order: setData.datasets[i].order
                });
            } 
        
            let canvas = document.getElementById(this.id).getContext("2d");
            let chart = new Chart(canvas, {
                type:'bar',
                data:{ 
                    labels : setData.labels,
                    datasets : chartData
                },
                options: {
                    categoryPercentage: categoryPercentageValue,
                    barPercentage: barPercentageValue,
                    barThickness: barThicknessValue,
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
                            boxPadding: 6,
                            backgroundColor: this.$Colors.gray100,
                            titleColor: this.$Colors.gray900,
                            bodyColor: this.$Colors.bodyColor,
                            borderColor: this.$Colors.gray200,
                            borderWidth: 1
                        },
                    },
                    interaction: {
                        mode: stackedValue ? 'index' : 'nearest',
                    },
                    responsive: true,
                    maintainAspectRatio:false,
                    scales: {
                        x: {
                            stacked: stackedValue,
                            display: xAxisValue,
                            grid: {
                                color: xGridColorValue,
                                borderColor: xGridBorderColorValue,
                                borderDash: borderDashValue,
                            },
                            ticks: {
                                color: "#9CA3AF", 
                                beginAtZero: true,
                                maxTicksLimit: maxTicksLimitValue,
                                font: {
                                    size: "11px",
                                    weight: "400"
                                }
                            }
                        },
                        y: {
                            stacked: stackedValue,
                            display: yAxisValue,
                            grid: {
                                color: yGridColorValue,
                                borderColor: yGridBorderColorValue,
                                borderDash: borderDashValue,
                            },
                            ticks: {
                                // Include a ticks value in the ticks
                                callback: function(value) {
                                    return value + TicksValue;
                                },
                                color: "#9CA3AF",
                                beginAtZero: true,
                                maxTicksLimit: maxTicksLimitValue,
                                font: {
                                    size: "11px",
                                    weight: "400"
                                }
                            }
                        },
                    },
                }
            });

            chart;
        }
    },
    mounted(){
        // initialize chart
        this.barChart();
    }
}
</script>
