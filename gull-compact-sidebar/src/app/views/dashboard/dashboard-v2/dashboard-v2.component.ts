import { Component, OnInit } from '@angular/core';
import { echartStyles } from 'src/app/shared/echart-styles';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-dashboard-v2',
  templateUrl: './dashboard-v2.component.html',
  styleUrls: ['./dashboard-v2.component.scss']
})
export class DashboardV2Component implements OnInit {
  chartPie1: any;
  chartLineOption3: any;
	products$: any;

  constructor(
		private productService: ProductService
	) { }

  ngOnInit() {
    this.chartPie1 = {
			...echartStyles.defaultOptions, ...{
        legend: {
          show: true,
          bottom: 0,
        },
				series: [{
          type: 'pie',
          ...echartStyles.pieRing,

          label: echartStyles.pieLabelCenterHover,
					data: [{
						name: 'Completed',
						value: 80,
						itemStyle: {
							color: '#663399',
						}
					}, {
						name: 'Pending',
						value: 20,
						itemStyle: {
							color: '#ced4da',
						}
					}]
				}]
			}
    };

    this.chartLineOption3 = {
			...echartStyles.lineNoAxis, ...{
				series: [{
					data: [40, 80, 20, 90, 30, 80, 40],
					lineStyle: {
						color: 'rgba(102, 51, 153, .86)',
						width: 3,
						shadowColor: 'rgba(0, 0, 0, .2)',
						shadowOffsetX: -1,
						shadowOffsetY: 8,
						shadowBlur: 10
					},
					label: { show: true, color: '#212121' },
					type: 'line',
					smooth: true,
					itemStyle: {
						borderColor: 'rgba(69, 86, 172, 0.86)'
					}
				}]
			}
		};
		this.chartLineOption3.xAxis.data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
		this.products$ = this.productService.getProducts();

  }

}
