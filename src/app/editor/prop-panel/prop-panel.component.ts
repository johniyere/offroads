import { Component, OnInit } from '@angular/core';
import { EditorService } from '../shared/editor.service';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State } from '../editor.state';
import { Observable } from 'rxjs';
import { selectPoints, selectLines } from '../editor.selectors';
import { Point, Line } from '../editor.model';
import { switchMap, map } from 'rxjs/operators';
import { FormBuilder, FormControl } from '@angular/forms';
import { SetRouteName, ClearRoute, CreateNewRoute } from '../editor.actions';

@Component({
  selector: 'ofr-prop-panel',
  templateUrl: './prop-panel.component.html',
  styleUrls: ['./prop-panel.component.scss']
})
export class PropPanelComponent implements OnInit {

  name = new FormControl('');

  points$: Observable<Point[]>;
  lines$: Observable<Line[]>;
  pointsLines$: Observable<[Point[], Line[]]>;

  constructor(
    private router: Router,
    private store: Store<State>,
  ) { }

  ngOnInit() {
    this.points$ = this.store.pipe(
      select(selectPoints)
    );

    this.lines$ = this.store.pipe(
      select(selectLines)
    );

    this.pointsLines$ = this.points$.pipe(
      switchMap((points) => this.lines$.pipe(
        map((lines) => [points, lines] as [Point[], Line[]])
      ))
    );

  }

  exit() {
    this.store.dispatch(new ClearRoute);
    this.router.navigate(['/dashboard']);
  }

  setRouteName() {
    this.store.dispatch(new SetRouteName(this.name.value));
  }

  createRoute() {
    this.store.dispatch(new CreateNewRoute);
  }

}
