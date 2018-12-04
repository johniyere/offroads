import { Component, OnInit } from '@angular/core';
import { Chart, ChartData, ChartDataSets } from 'chart.js';
import { ChartService } from '../shared/chart.service';
import { Router } from '@angular/router';
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
  constructor(private chartService: ChartService, private router: Router) { }

  ngOnInit() {
    this.chartService.currentUserRoutes()
      .subscribe(({data, loading}) => {
        console.log(data.me.createdRoutes);
      });

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

  createRoute() {
    this.chartService.createRoute('Dance Route', [], [])
      .subscribe((route) => {
        console.log(route);
      });
  }

  exit() {
    this.router.navigate(['/']);
  }

}
