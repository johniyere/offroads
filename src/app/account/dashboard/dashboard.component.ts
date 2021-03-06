import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { DashboardService } from './shared/dashboard.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../account.state';
import { selectAllRoutes } from '../routes/routes.selectors';
import { Route } from '../routes/routes.state';
import { RetrieveDashboardRoutes, ClearRoutes } from '../routes/routes.actions';
import { Dashboard, DashboardGQL } from 'src/app/generated/graphql';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ofr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  me$: Observable<Dashboard.Me>;
  constructor(
    private router: Router,
    private store: Store<State>,
    private dashboardGQL: DashboardGQL,
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.me$ = this.dashboardService.me();
  }

  createRoute() {
    this.router.navigate(['/editor']);
  }

  ngOnDestroy() {
  }
}
