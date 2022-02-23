import { Component, OnInit } from '@angular/core';
import { echartStyles } from 'src/app/shared/echart-styles';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
	selector: 'app-dashboard-v4',
	templateUrl: './dashboard-v4.component.html',
	styleUrls: ['./dashboard-v4.component.scss']
})
export class DashboardV4Component implements OnInit {
	lineChart1;
	chartLineSmall1: any;
	products$: any;

	constructor(
		private productService: ProductService
	) { }

	ngOnInit() {
		this.chartLineSmall1 = {
			...echartStyles.defaultOptions, ...{
				grid: echartStyles.gridAlignLeft,
				series: [{
					data: [30, 40, 20, 50, 40, 80, 90, 40],
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
		this.lineChart1 = {
			...echartStyles.lineFullWidth, ...{
				series: [{
					data: [80, 40, 90, 20, 80, 30, 90, 30, 80, 10, 70, 30, 90],
					...echartStyles.smoothLine,
					markArea: {
						label: {
							show: true
						}
					},
					areaStyle: {
						color: 'rgba(102, 51, 153, .15)',
						origin: 'start'
					},
					lineStyle: {
						// width: 1,
						color: 'rgba(102, 51, 153, 0.68)',
					},
					itemStyle: {
						color: '#663399'
					}
				}, {
					data: [20, 80, 40, 90, 20, 80, 30, 90, 30, 80, 10, 70, 30],
					...echartStyles.smoothLine,
					markArea: {
						label: {
							show: true
						}
					},
					areaStyle: {
						color: 'rgba(255, 152, 0, 0.15)',
						origin: 'start'
					},
					lineStyle: {
						// width: 1,
						color: 'rgba(255, 152, 0, .6)',
					},
					itemStyle: {
						color: 'rgba(255, 152, 0, 1)'
					}
				}]
			}
		};
		this.products$ = this.productService.getProducts();

	}

}
