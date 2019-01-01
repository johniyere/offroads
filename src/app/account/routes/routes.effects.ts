import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { RouteActionTypes, LoadRoutes, RetrieveDashboardRoutes, RetrieveDashboardRoutesFailure,
  RetrieveExploreRoutes, RetrieveExploreRoutesFailure } from './routes.actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { DashboardService } from '../dashboard/shared/dashboard.service';
import { State } from '../account.state';
import { ExploreService } from '../explore/shared/explore.service';

@Injectable()
export class RoutesEffects {
  constructor (
    private actions$: Actions,
    private store: Store<State>,
    private dashboardService: DashboardService,
    private exploreService: ExploreService
  ) {}

  @Effect()
  retrieveDashboardRoutes$ = this.actions$.pipe(
    ofType<RetrieveDashboardRoutes>(RouteActionTypes.RETRIEVE_DASHBOARD_ROUTES),
    mergeMap((action) =>
      this.dashboardService.currentUserRoutes().pipe(
        map((routes) => new LoadRoutes({ routes })),
        catchError((err) => of(new RetrieveDashboardRoutesFailure({err}))
      )
    )
  ));

  @Effect({ dispatch: false })
  retrieveDashboardRoutesFailure$ = this.actions$.pipe(
    ofType<RetrieveDashboardRoutesFailure>(RouteActionTypes.RETRIEVE_DASHBOARD_ROUTES_FAILURE),
    tap((action) => console.log(action.payload.err))
  );

  @Effect()
  retrieveExploreRoutes$ = this.actions$.pipe(
    ofType<RetrieveExploreRoutes>(RouteActionTypes.RETRIEVE_EXPLORE_ROUTES),
    mergeMap((action) =>
      this.exploreService.routes().pipe(
        map((routes) => new LoadRoutes({ routes })),
        catchError((err) => of(new RetrieveDashboardRoutesFailure({err}))
      )
    )
  ));

  @Effect({ dispatch: false })
  retrieveExploreRoutesFailure$ = this.actions$.pipe(
    ofType<RetrieveExploreRoutesFailure>(RouteActionTypes.RETRIEVE_EXPLORE_ROUTES_FAILURE),
    tap((action) => console.log(action.payload.err))
  );
}
