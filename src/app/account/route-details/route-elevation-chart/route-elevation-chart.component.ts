import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../account.state';
import { Observable } from 'rxjs';
import { Route, Point, Line } from '../../routes/routes.state';
import { selectSelectedRoute, selectSelectedRoutePointsAndLines } from '../../routes/routes.selectors';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'ofr-route-elevation-chart',
  templateUrl: './route-elevation-chart.component.html',
  styleUrls: ['./route-elevation-chart.component.scss']
})
export class RouteElevationChartComponent implements OnInit {

  pointsLines$: Observable<[Point[], Line[]]>;
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
    ]
  };

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.pointsLines$ = this.store.pipe(
      select(selectSelectedRoutePointsAndLines),
      map((val) => val as [Point[], Line[]])
    );

    this.loadChartData();
  }

  loadChartData() {
    this.pointsLines$.subscribe(([points, lines]) => {
      let data = [];
      let distance = 0;
      points.forEach((point, index) => {
        const elevation = Math.round(point.elevation);
        distance += Math.round(point.distanceFromPreviousPoint);

        if (lines.length > 0) {
          const lineIndex = index - 1;
          if (lineIndex > 0 && lines[lineIndex]) {
            const linePoints = lines[lineIndex].points.map((linePoint) => {
            const ele = Math.round(linePoint.elevation);
              return { label: '', value: ele.toString()};
            });
            data = [...data, ...linePoints];
          }
        }
        data = [...data, { label: distance.toString(), value: elevation.toString()}];
      });
      const dataSource = {...this.dataSource, data: data};
      this.dataSource = dataSource;
      console.log(this.dataSource);
    });
  }

}
