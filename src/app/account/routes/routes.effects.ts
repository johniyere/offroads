import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { RouteActionTypes, LoadRoutes, RetrieveDashboardRoutes, RetrieveDashboardRoutesFailure,
  RetrieveExploreRoutes, RetrieveExploreRoutesFailure, RetrieveRoute, RetrieveRouteSuccess, RetrieveRouteFailure } from './routes.actions';
import { mergeMap, map, catchError, tap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { DashboardService } from '../dashboard/shared/dashboard.service';
import { State } from '../account.state';
import { ExploreService } from '../explore/shared/explore.service';
import { selectSelectedRouteId } from './routes.selectors';
import { RouteDetailsService } from '../route-details/shared/route-details.service';

@Injectable()
export class RoutesEffects {
  constructor (
    private actions$: Actions,
    private store: Store<State>,
    private dashboardService: DashboardService,
    private exploreService: ExploreService,
    private routeDetailsService: RouteDetailsService
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
        catchError((err) => of(new RetrieveExploreRoutesFailure({err}))
      )
    )
  ));

  @Effect({ dispatch: false })
  retrieveExploreRoutesFailure$ = this.actions$.pipe(
    ofType<RetrieveExploreRoutesFailure>(RouteActionTypes.RETRIEVE_EXPLORE_ROUTES_FAILURE),
    tap((action) => console.log(action.payload.err))
  );

  @Effect()
  retrieveRoute$ = this.actions$.pipe(
    ofType<RetrieveRoute>(RouteActionTypes.RETRIEVE_ROUTE),
    withLatestFrom(this.store.pipe(select(selectSelectedRouteId))),
    mergeMap(([action, id]) =>
      this.routeDetailsService.retrieveDetails(id).pipe(
        map((route) => new RetrieveRouteSuccess({ route })),
        catchError((err) => of(new RetrieveRouteFailure({err})))
      )
    )
  );

  @Effect({ dispatch: false })
  retrieveRouteFailure$ = this.actions$.pipe(
    ofType<RetrieveRouteFailure>(RouteActionTypes.RETRIEVE_ROUTE_FAILURE),
    tap((action) => console.log(action.payload.err))
  );
}
