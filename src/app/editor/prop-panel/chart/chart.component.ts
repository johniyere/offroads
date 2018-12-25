import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FusionChartsComponent } from 'angular-fusioncharts';
import { Observable, combineLatest } from 'rxjs';
import { Point, Line } from '../../editor.model';
import { Store, select } from '@ngrx/store';
import { State } from '../../editor.state';
import { selectPoints, selectLines } from '../../editor.selectors';
import { mergeMap, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'ofr-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, AfterViewInit {
  width = 500;
  height = 300;
  type = 'area2d';
  dataFormat = 'json';
  dataSource = {
    'chart': {
      'caption': 'Elevation Gain',
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

  pointsLines$: Observable<[Point[], Line[]]>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    const points$ = this.store.pipe(
      select(selectPoints)
    );

    const lines$ = this.store.pipe(
      select(selectLines)
    );

    this.pointsLines$ = points$.pipe(
      switchMap((points) => lines$.pipe(
        map((lines) => [points, lines] as [Point[], Line[]])
      ))
    );
  }

  ngAfterViewInit() {
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
    });
  }
}
