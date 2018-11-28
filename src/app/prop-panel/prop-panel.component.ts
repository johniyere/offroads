import { Component, OnInit } from '@angular/core';
import { Chart, ChartData, ChartDataSets } from 'chart.js';
import { ChartService } from '../core/chart.service';
@Component({
  selector: 'ofr-prop-panel',
  templateUrl: './prop-panel.component.html',
  styleUrls: ['./prop-panel.component.scss']
})
export class PropPanelComponent implements OnInit {

  chart: Chart;
  chartData: ChartData = {
    labels: [],
    datasets: [
      {
        data: [],
        borderColor: '#3cba9f',
        fill: 'origin'
      },
    ]
  };
  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.chart = new Chart('myChart', {
      type: 'line',
      data: this.chartData,
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true,
          }]
        }
      }
    });

    this.chartService.labels$.subscribe((val) => {
      const labels = [...this.chartData.labels, val];
      this.chartData = {...this.chartData, labels: labels};
      this.chart.update();
    });

    this.chartService.elevationDataset$.subscribe((val) => {
      const data = [...this.chartData.datasets[0].data as number[], val];
      const dataset = {...this.chartData.datasets[0], data: data};
      this.chartData = {...this.chartData, datasets: [dataset]};
      this.chart.data = this.chartData;
      this.chart.update();
    });
  }

}
