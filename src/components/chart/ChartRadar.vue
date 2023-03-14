<template>
    <canvas :id="id" :data="data"></canvas>
</template>

<script>
import Chart from 'chart.js/auto';
import hexRGB from '@/utilities/hexRGB';

export default {
    name: 'ChartRadar',
    props: {
        id: {
            type: String
        },
        data: {
            type: Object
        }
    },
    methods: {
        radar() {
            let setData = this.data;
            let chartLegend = (typeof setData.legend === 'undefined') ? false : setData.legend;
            let chartxAxis = (typeof setData.xAxis === 'undefined') ? true : setData.xAxis;
            let chartyAxis = (typeof setData.yAxis === 'undefined') ? true : setData.yAxis;
            let chartTicksColor = setData.ticksColor;
            let chartTicksFontSize = setData.ticksFontSize;
            let chartTicksFontWeight = setData.ticksFontWeight;
            let chartMaxTicksLimit = setData.maxTicksLimit;
            let chartPointLabels = (typeof setData.pointLabels === 'undefined') ? true : setData.pointLabels;
            let chartTicksNumberLabel = (typeof setData.ticksNumberLabel === 'undefined') ? true : setData.ticksNumberLabel;

            let chartGridColorX = setData.gridColorX;
            let chartGridColorY = setData.gridColorY;
            let chartGridBorderColorX = setData.gridBorderColorX;
            let chartGridBorderColorY = setData.gridBorderColorY;
            let chartGridBorderDash = setData.gridBorderDash;

            let canvas = document.getElementById(this.id).getContext("2d");
            let chartData = [];
            
            for (let i = 0; i < setData.datasets.length; i++) {
                let backgroundColor = (typeof setData.datasets[i].backgroundColor === 'undefined') ? 'transparent' : setData.datasets[i].backgroundColor
                chartData.push({
                    label: setData.datasets[i].label,
                    tension: setData.tension,
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
                });
            } 

            function getGradient(color) {
                let gradient = canvas.createLinearGradient(0, 0, 0, canvas.canvas.clientHeight);
                gradient.addColorStop(0, `${hexRGB(color,0)}`);
                gradient.addColorStop(0.5, `${hexRGB(color,.25)}`);
                gradient.addColorStop(1, `${hexRGB(color,.1)}`);
                return gradient;
            }

            let chart = new Chart(canvas, {
                type:'radar',
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
                            titleColor: this.$Colors.dark,
                            bodyColor: this.$Colors.bodyColor,
                            borderColor: this.$Colors.gray200,
                            borderWidth: 1
                        },
                    },
                    responsive: true,
                    maintainAspectRatio:false,
                    scales:{
                        r: {
                            pointLabels: {
                                display: chartPointLabels // Hides the labels around the radar chart 
                            },
                            ticks: {
                                display: chartTicksNumberLabel // Hides the labels in the middel (numbers)
                            }
                        },
                        y: {
                            display: chartyAxis,
                            grid: {
                                color: chartGridColorY,
                                borderColor: chartGridBorderColorY,
                                borderDash: chartGridBorderDash,
                            },
                            ticks: {
                                color: chartTicksColor, 
                                beginAtZero: true,
                                maxTicksLimit: chartMaxTicksLimit,
                                font: {
                                    size: chartTicksFontSize,
                                    weight: chartTicksFontWeight
                                }
                            }
                        },
                        x: {
                            display: chartxAxis,
                            grid: {
                                color: chartGridColorX,
                                borderColor: chartGridBorderColorX,
                                borderDash: chartGridBorderDash,
                            },
                            ticks: {
                                color: chartTicksColor, 
                                beginAtZero: true,
                                maxTicksLimit: chartMaxTicksLimit,
                                font: {
                                    size: chartTicksFontSize,
                                    weight: chartTicksFontWeight
                                }
                            }
                        }
                    }
                }
            });

            chart;
        }
    },
    mounted() {
        // initialize chart
        this.radar();
    }
}
</script>
