import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { DashboardService } from './shared/dashboard.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../account.state';
import { selectAllRoutes } from '../routes/routes.selectors';
import { Route } from '../routes/routes.state';
import { RetrieveDashboardRoutes, ClearRoutes } from '../routes/routes.actions';

@Component({
  selector: 'ofr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  currentUserRoutes$: Observable<Route[]>;
  constructor(
    private router: Router,
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.currentUserRoutes$ = this.store.pipe(
      select(selectAllRoutes)
    );

    this.store.dispatch(new RetrieveDashboardRoutes);
  }

  createRoute() {
    this.router.navigate(['/editor']);
  }

  ngOnDestroy() {
    this.store.dispatch(new ClearRoutes);
  }
}
