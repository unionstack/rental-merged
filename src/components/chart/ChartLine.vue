<template>
     <canvas :id="id" :data="data"></canvas>
</template>

<script>
import Chart from 'chart.js/auto';
import hexRGB from '@/utilities/hexRGB';

export default {
    name: 'LineChart',
    props: {
        id: {
            type: String
        },
        data: {
            type: Object
        }
    },
    methods: {
        lineChart (){
            let setData = this.data;
            let chartLegend = (typeof setData.legend === 'undefined') ? false : setData.legend;
            let TicksValue = (typeof setData.ticksValue === 'undefined') ? false : setData.ticksValue;
            let maxTicksLimitValue = setData.maxTicksLimit;

            let borderDashValue = setData.borderDash;
            let xAxisValue = (typeof setData.xAxis === 'undefined') ? true : setData.xAxis;
            let yAxisValue = (typeof setData.yAxis === 'undefined') ? true : setData.yAxis;

            let xGridColorValue = (typeof setData.xGridColor === 'undefined') ? this.$Colors.gray100 : setData.xGridColor;
            let yGridColorValue = (typeof setData.yGridColor === 'undefined') ? this.$Colors.gray100 : setData.yGridColor;
            let xGridBorderColorValue = (typeof setData.xGridBorderColor === 'undefined') ? this.$Colors.gray100 : setData.xGridBorderColor;
            let yGridBorderColorValue = (typeof setData.yGridBorderColor === 'undefined') ? this.$Colors.gray100 : setData.yGridBorderColor;

            let canvas = document.getElementById(this.id).getContext("2d");
            let chartData = [];

            for (let i = 0; i < setData.datasets.length; i++) {
                let backgroundColor = (typeof setData.datasets[i].backgroundColor === 'undefined') ? 'transparent' : setData.datasets[i].backgroundColor
                chartData.push({
                    label: setData.datasets[i].label,
                    tension: setData.datasets[i].tension,
                    backgroundColor: setData.datasets[i].backgroundGradient ? getGradient(setData.datasets[i].backgroundGradient) : backgroundColor,
                    borderWidth: setData.datasets[i].borderWidth,
                    borderColor: setData.datasets[i].borderColor,
                    pointBorderColor: setData.datasets[i].pointBorderColor,
                    pointBackgroundColor: setData.datasets[i].pointBackgroundColor,
                    pointHoverBackgroundColor: setData.datasets[i].pointHoverBackgroundColor,
                    pointHoverBorderColor: setData.datasets[i].pointHoverBackgroundColor,
                    pointBorderWidth: setData.datasets[i].pointBorderWidth,
                    pointHoverRadius: setData.datasets[i].pointHoverRadius,
                    pointHoverBorderWidth: setData.datasets[i].pointBorderWidth,
                    pointRadius: setData.datasets[i].pointRadius,
                    pointHitRadius: setData.datasets[i].pointHitRadius,
                    fill: true,
                    data: setData.datasets[i].data,
                    borderDash: setData.datasets[i].borderDash,
                    borderCapStyle: setData.datasets[i].borderCapStyle
                });
            } 

            // gradient color
            function getGradient(color) {
                let gradient = canvas.createLinearGradient(0, 0, 0, canvas.canvas.clientHeight);
                gradient.addColorStop(0, `${hexRGB(color,0)}`);
                gradient.addColorStop(0.5, `${hexRGB(color,.25)}`);
                gradient.addColorStop(1, `${hexRGB(color,.1)}`);
                return gradient;
            }

            let chart = new Chart(canvas, {
                type:'line',
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
                            padding:12,
                            boxWidth:10,
                            boxHeight:10,
                            boxPadding:4,
                            backgroundColor: this.$Colors.gray100,
                            titleColor: this.$Colors.gray900,
                            bodyColor: this.$Colors.bodyColor,
                            borderColor: this.$Colors.gray200,
                            borderWidth: 1
                        },
                    },
                    interaction: {
                        mode: 'nearest',
                    },
                    responsive: true,
                    maintainAspectRatio:false,
                    scales: {
                        x: {
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
                                    weight: "300"
                                }
                            }
                        },
                        y: {
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
        this.lineChart();
    }
}
</script>
