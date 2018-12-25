import { Component, OnInit } from '@angular/core';
import { EditorService } from '../shared/editor.service';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State } from '../editor.state';
import { Observable, combineLatest } from 'rxjs';
import { selectPoints, selectLines } from '../editor.selectors';
import { Point, Line } from '../editor.model';

const data = {
  'chart': {
    'caption': 'Yearly sales of iPhone',
    'yaxisname': 'Number of units sold',
    'subcaption': '2007-2016',
    'legendposition': 'Right',
    'drawanchors': '0',
    'showvalues': '0',
    'plottooltext': '<b>$dataValue</b> iPhones sold in $label',
    'theme': 'fusion'
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


@Component({
  selector: 'ofr-prop-panel',
  templateUrl: './prop-panel.component.html',
  styleUrls: ['./prop-panel.component.scss']
})
export class PropPanelComponent implements OnInit {
  width = 500;
  height = 300;
  type = 'area2d';
  dataFormat = 'json';
  dataSource = data;

  points$: Observable<Point[]>;
  lines$: Observable<Line[]>;

  pointsLines$: Observable<[Point[], Line[]]>;
  constructor(private editorService: EditorService, private router: Router, private store: Store<State>) { }

  ngOnInit() {
    this.points$ = this.store.pipe(
      select(selectPoints)
    );

    this.lines$ = this.store.pipe(
      select(selectLines)
    );

    this.pointsLines$ = combineLatest(this.points$, this.lines$);
  }

  exit() {
    this.router.navigate(['/dashboard']);
  }

}
