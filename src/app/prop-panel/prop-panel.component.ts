import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'ofr-prop-panel',
  templateUrl: './prop-panel.component.html',
  styleUrls: ['./prop-panel.component.scss']
})
export class PropPanelComponent implements OnInit {

  chart: Chart;
  constructor() { }

  ngOnInit() {

    this.chart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: ['0.2', '0.4', '0.6', '0.7', '1.0', '1.2'],
        datasets: [
          {
            data: [100, 110, 150, 160, 155, 135],
            borderColor: '#3cba9f',
            fill: 'origin'
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    });

  }

}
