import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { echartStyles } from 'src/app/shared/echart-styles';

@Component({
  selector: 'app-card-widgets',
  templateUrl: './card-widgets.component.html',
  styleUrls: ['./card-widgets.component.scss']
})
export class CardWidgetsComponent implements OnInit {
  chartOption1: EChartOption;
  chartOption2: EChartOption;
  chartPie1: EChartOption;

  constructor() { }

  ngOnInit() {
    this.chartOption1 = {...echartStyles.lineFullWidth, ...{
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
    }};
    this.chartOption2 = {...echartStyles.lineFullWidth, ...{
      series: [{
        data: [30, 10, 40, 10, 40, 20, 90],
        ...echartStyles.smoothLine,
        markArea: {
          label: {
            show: true
          }
        },
        areaStyle: {
          color: 'rgba(255, 152, 0, 0.2)',
          origin: 'start'
        },
        lineStyle: {
          color: '#ff9800'
        },
        itemStyle: {
          color: '#ff9800'
        }
      }]
    }};
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
							color: '#4CAF50',
						}
					}, {
						name: 'Pending',
						value: 20,
						itemStyle: {
							color: '#df0029',
						}
					}]
				}]
			}
		};
  }

}
