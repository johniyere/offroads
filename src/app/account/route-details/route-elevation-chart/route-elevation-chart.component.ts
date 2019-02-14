import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ofr-route-elevation-chart',
  templateUrl: './route-elevation-chart.component.html',
  styleUrls: ['./route-elevation-chart.component.css']
})
export class RouteElevationChartComponent implements OnInit {

  width = 500;
  height = 300;
  type = 'area2d';
  dataFormat = 'json';
  dataSource = {
    'chart': {
      'caption': 'Elevation',
      'legendposition': 'Right',
      'drawanchors': '0',
      'showvalues': '0',
      'plottooltext': '<b>$dataValue</b>',
      'theme': 'fusion',
      'showlabels': '0',
      'numberSuffix': 'm'
    },
    'data': [
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
