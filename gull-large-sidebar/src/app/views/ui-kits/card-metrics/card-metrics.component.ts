import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { echartStyles } from 'src/app/shared/echart-styles';

@Component({
	selector: 'app-card-metrics',
	templateUrl: './card-metrics.component.html',
	styleUrls: ['./card-metrics.component.scss']
})
export class CardMetricsComponent implements OnInit {

	chartLine1: EChartOption;
	chartLine2: EChartOption;
	chartLine3: EChartOption;
	chartLine4: EChartOption;
	chartPie1: EChartOption;
	chartPie2: EChartOption;
	chartBar1: EChartOption;

	constructor() {
		this.chartLine1 = {
			...echartStyles.defaultOptions, ...{
				series: [{
					data: [30, 40, 20, 50, 40, 80, 90],
					...echartStyles.smoothLine,
					lineStyle: {
						color: '#4CAF50',
						...echartStyles.lineShadow
					},
					itemStyle: {
						color: '#4CAF50'
					}
				}]
			}
		};
		this.chartLine2 = {
			...echartStyles.defaultOptions, ...{
				series: [{
					data: [6, 4, 7, 4, 6, 4, 1],
					...echartStyles.smoothLine,
					lineStyle: {
						color: '#df0029',
						...echartStyles.lineShadow
					},
					itemStyle: {
						color: '#df0029'
					}
				}]
			}
		};
		this.chartLine3 = {
			...echartStyles.defaultOptions, ...{
				series: [{
					data: [2, 2, 7, 4, 6, 4, 8],
					...echartStyles.smoothLine,
					lineStyle: {
						color: '#4CAF50',
						...echartStyles.lineShadow
					},
					itemStyle: {
						color: '#4CAF50'
					}
				}]
			}
		};
		this.chartLine4 = {
			...echartStyles.defaultOptions, ...{
				series: [{
					data: [2, 2, 7, 4, 6, 4, 1],
					...echartStyles.smoothLine,
					lineStyle: {
						color: '#df0029',
						...echartStyles.lineShadow
					},
					itemStyle: {
						color: '#df0029'
					}
				}]
			}
		};

		this.chartPie1 = {
			...echartStyles.defaultOptions, ...{
				series: [{
					type: 'pie',
					itemStyle: echartStyles.pieLineStyle,
					data: [{
						name: 'Email Subscription',
						value: 80,
						...echartStyles.pieLabelOff,
						itemStyle: {
							borderColor: '#4CAF50',
						}
					}, {
						name: 'Registration',
						value: 20,
						...echartStyles.pieLabelOff,
						itemStyle: {
							borderColor: '#df0029',
						}
					}]
				}]
			}
		};
		this.chartPie2 = {
			...echartStyles.defaultOptions, ...{
				series: [{
					type: 'pie',
					itemStyle: echartStyles.pieLineStyle,
					data: [{
						name: 'Running',
						value: 40,
						...echartStyles.pieLabelOff,
						itemStyle: {
							borderColor: '#ff9800',
						}
					}, {
						name: 'Completed',
						value: 60,
						...echartStyles.pieLabelOff,
						itemStyle: {
							borderColor: '#4CAF50',
						}
					}]
				}]
			}
		};
		this.chartBar1 = {
			...echartStyles.defaultOptions, ...{
				series: [{
					type: 'bar',
					barWidth: 6,

					itemStyle: {
						color: '#ff9800',
						...echartStyles.lineShadow
					},
					data: [{
						name: 'Bar 1',
						value: 40
					}, {
						name: 'Bar 2',
						value: 60,
						itemStyle: {
							color: '#4CAF50'
						}
					}, {
						name: 'Bar 3',
						value: 80,
					}, {
						name: 'Bar 4',
						value: 70,
					}, {
						name: 'Bar 5',
						value: 60,
					}, {
						name: 'Bar 6',
						value: 70,
					}, {
						name: 'Bar 7',
						value: 80,
					}, {
						name: 'Bar 8',
						value: 40,
					}, {
						name: 'Bar 9',
						value: 70,
						itemStyle: {
							color: '#4CAF50'
						}
					}]
				}]
			}
		};

	}

	ngOnInit() {

	}

}
