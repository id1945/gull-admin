import { Component, OnInit } from '@angular/core';
import { echartStyles } from 'src/app/shared/echart-styles';

@Component({
	selector: 'app-dashboard-v3',
	templateUrl: './dashboard-v3.component.html',
	styleUrls: ['./dashboard-v3.component.scss']
})
export class DashboardV3Component implements OnInit {
	chartPie1: any;
	chartPie2: any;
	chartBar1: any;

	constructor() { }

	ngOnInit() {
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

}
