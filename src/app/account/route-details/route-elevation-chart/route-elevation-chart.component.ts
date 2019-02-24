import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ofr-route-elevation-chart',
  templateUrl: './route-elevation-chart.component.html',
  styleUrls: ['./route-elevation-chart.component.scss']
})
export class RouteElevationChartComponent implements OnInit {

  width = '1140';
  height = '300';
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
      {
        'label': '2007',
        'value': '1380000'
      },
      {
        'label': '2008',
        'value': '1450000'
      },
      {
        'label': '2009',
        'value': '1610000'
      },
      {
        'label': '2010',
        'value': '1540000'
      },
      {
        'label': '2011',
        'value': '1480000'
      },
      {
        'label': '2012',
        'value': '1573000'
      },
      {
        'label': '2013',
        'value': '2232000'
      },
      {
        'label': '2014',
        'value': '2476000'
      },
      {
        'label': '2015',
        'value': '2832000'
      },
      {
        'label': '2016',
        'value': '3808000'
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
