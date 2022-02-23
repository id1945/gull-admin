import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { echartStyles } from '../../../shared/echart-styles';

@Component({
	selector: 'app-dashboad-default',
	templateUrl: './dashboad-default.component.html',
	styleUrls: ['./dashboad-default.component.css']
})
export class DashboadDefaultComponent implements OnInit {
	chartLineOption1: EChartOption;
	chartLineOption2: EChartOption;
	chartLineOption3: EChartOption;
    salesChartBar: EChartOption;
    salesChartPie: EChartOption;

	constructor() { }

	ngOnInit() {
		this.chartLineOption1 = {
			...echartStyles.lineFullWidth, ...{
				series: [{
					data: [30, 40, 20, 50, 40, 80, 90],
					...echartStyles.smoothLine,
					markArea: {
						label: {
							show: true
						}
					},
					areaStyle: {
						color: 'rgba(102, 51, 153, .2)',
						origin: 'start'
					},
					lineStyle: {
						color: '#663399',
					},
					itemStyle: {
						color: '#663399'
					}
				}]
			}
		};
		this.chartLineOption2 = {
			...echartStyles.lineFullWidth, ...{
				series: [{
					data: [30, 10, 40, 10, 40, 20, 90],
					...echartStyles.smoothLine,
					markArea: {
						label: {
							show: true
						}
					},
					areaStyle: {
						color: 'rgba(255, 193, 7, 0.2)',
						origin: 'start'
					},
					lineStyle: {
						color: '#FFC107'
					},
					itemStyle: {
						color: '#FFC107'
					}
				}]
			}
		};
		this.chartLineOption2.xAxis.data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

		this.chartLineOption3 = {
			...echartStyles.lineNoAxis, ...{
				series: [{
					data: [40, 80, 20, 90, 30, 80, 40, 90, 20, 80, 30, 45, 50, 110, 90, 145, 120, 135, 120, 140],
					lineStyle: {
						color: 'rgba(102, 51, 153, 0.86)',
						width: 3,
						...echartStyles.lineShadow
					},
					label: { show: true, color: '#212121' },
					type: 'line',
					smooth: true,
					itemStyle: {
						borderColor: 'rgba(102, 51, 153, 1)'
					}
				}]
			}
		};
		// this.chartLineOption3.xAxis.data = ['1', '2', '3', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.salesChartBar = {
            legend: {
                borderRadius: 0,
                orient: 'horizontal',
                x: 'right',
                data: ['Online', 'Offline']
            },
            grid: {
                left: '8px',
                right: '8px',
                bottom: '0',
                containLabel: true
            },
            tooltip: {
                show: true,
                backgroundColor: 'rgba(0, 0, 0, .8)'
            },
            xAxis: [{
                type: 'category',
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                axisTick: {
                    alignWithLabel: true
                },
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: true
                }
            }],
            yAxis: [{
                    type: 'value',
                    axisLabel: {
                        formatter: '${value}'
                    },
                    min: 0,
                    max: 100000,
                    interval: 25000,
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        interval: 'auto'
                    }
                }

            ],

            series: [{
                    name: 'Online',
                    data: [35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005],
                    label: { show: false, color: '#0168c1' },
                    type: 'bar',
                    barGap: 0,
                    color: '#bcbbdd',
                    smooth: true,

                },
                {
                    name: 'Offline',
                    data: [45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050],
                    label: { show: false, color: '#639' },
                    type: 'bar',
                    color: '#7569b3',
                    smooth: true
                }

            ]
        };

        this.salesChartPie = {
            color: ['#62549c', '#7566b5', '#7d6cbb', '#8877bd', '#9181bd', '#6957af'],
            tooltip: {
                show: true,
                backgroundColor: 'rgba(0, 0, 0, .8)'
            },

            xAxis: [{
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }

            ],
            yAxis: [{
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [{
                    name: 'Sales by Country',
                    type: 'pie',
                    radius: '75%',
                    center: ['50%', '50%'],
                    data: [
                        { value: 535, name: 'USA' },
                        { value: 310, name: 'Brazil' },
                        { value: 234, name: 'France' },
                        { value: 155, name: 'Germany' },
                        { value: 130, name: 'UK' },
                        { value: 348, name: 'India' }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
	}

}
