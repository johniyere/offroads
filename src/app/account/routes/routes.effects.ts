import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import {
  RouteActionTypes, LoadRoutes, RetrieveDashboardRoutes, RetrieveDashboardRoutesFailure,
  RetrieveRoute, RetrieveRouteSuccess, RetrieveRouteFailure, UploadRun, UploadRunSuccess,
  UploadRunFailure, RetrieveRecommendedUserRoutes, RetrieveRecommendedUserRoutesFailure,
  RetrievePopularRoutes, RetrievePopularRoutesFailure, RetrieveTopRatedRoutes,
  RetrieveTopRatedRoutesFailure, RetrieveRoutes, RetrieveRoutesFailure, AddReview, AddReviewSuccess, AddReviewFailure,
} from './routes.actions';
import { mergeMap, map, catchError, tap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { DashboardService } from '../dashboard/shared/dashboard.service';
import { State } from '../account.state';
import { ExploreService } from '../explore/shared/explore.service';
import { selectSelectedRouteId } from './routes.selectors';
import { RouteDetailsService } from '../route-details/shared/route-details.service';
import { UploadRunService } from '../route-details/route-leaderboard/upload-run/shared/upload-run.service';
import { AddAReviewService } from '../route-details/route-reviews/add-a-review/shared/add-a-review.service';

@Injectable()
export class RoutesEffects {
  constructor (
    private actions$: Actions,
    private store: Store<State>,
    private dashboardService: DashboardService,
    private exploreService: ExploreService,
    private routeDetailsService: RouteDetailsService,
    private uploadRunService: UploadRunService,
    private addReviewService: AddAReviewService
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
  retrieveRoutes$ = this.actions$.pipe(
    ofType<RetrieveRoutes>(RouteActionTypes.RETRIEVE_ROUTES),
    mergeMap((action) =>
      this.exploreService.routes().pipe(
        map((routes) => new LoadRoutes({ routes })),
        catchError((err) => of(new RetrieveRoutesFailure({err}))
      )
    )
  ));

  @Effect({ dispatch: false })
  retrieveRoutesFailure$ = this.actions$.pipe(
    ofType<RetrieveRoutesFailure>(RouteActionTypes.RETRIEVE_ROUTES_FAILURE),
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

  @Effect()
  uploadRun$ = this.actions$.pipe(
    ofType<UploadRun>(RouteActionTypes.UPLOAD_RUN),
    withLatestFrom(this.store.select(selectSelectedRouteId)),
    mergeMap(([action, routeId]) =>
      this.uploadRunService.uploadRun(action.payload.title, action.payload.comment, action.payload.time, routeId).pipe(
        map((run) => new UploadRunSuccess({ run })),
        catchError((err) => of(new UploadRunFailure({err})))
      )
    )
  );

  @Effect({ dispatch: false })
  uploadRunSuccess$ = this.actions$.pipe(
    ofType<UploadRunSuccess>(RouteActionTypes.UPLOAD_RUN_SUCCESS),
    tap((action) => console.log(action.payload.run))
  );

  @Effect({ dispatch: false })
  uploadRunFailure$ = this.actions$.pipe(
    ofType<UploadRunFailure>(RouteActionTypes.UPLOAD_RUN_FAILURE),
    tap((action) => console.log(action.payload.err))
  );

  @Effect()
  addReview$ = this.actions$.pipe(
    ofType<AddReview>(RouteActionTypes.ADD_REVIEW),
    withLatestFrom(this.store.select(selectSelectedRouteId)),
    mergeMap(([action, routeId]) =>
      this.addReviewService.addReview(routeId, action.payload.rating, action.payload.comment).pipe(
        map((review) => new AddReviewSuccess({review})),
        catchError((err) => of(new AddReviewFailure({err})))
      )
    )
  );

  @Effect({ dispatch: false })
  addReviewSuccess$ = this.actions$.pipe(
    ofType<AddReviewSuccess>(RouteActionTypes.ADD_REVIEW_SUCCESS),
    tap((action) => console.log(action.payload.review))
  );

  @Effect({ dispatch: false })
  addReviewFailure$ = this.actions$.pipe(
    ofType<AddReviewFailure>(RouteActionTypes.ADD_REVIEW_FAILURE),
    tap((action) => console.log(action.payload.err))
  );

  @Effect({})
  retrieveRecommendedUserRoutes$ = this.actions$.pipe(
    ofType<RetrieveRecommendedUserRoutes>(RouteActionTypes.RETRIEVE_RECOMMENDED_USER_ROUTES),
    mergeMap((action) =>
      this.exploreService.recommendedUserRoutes().pipe(
        map((routes) => new LoadRoutes({routes})),
        catchError((err) => of(new RetrieveRecommendedUserRoutesFailure({err})))
      )
    )
  );

  @Effect({ dispatch: false })
  retrieveRecommendedUserRoutesFailure$ = this.actions$.pipe(
    ofType<RetrieveRecommendedUserRoutesFailure>(RouteActionTypes.RETRIEVE_RECOMMENDED_USER_ROUTES_FAILURE),
    tap((action) => console.log(action.payload.err))
  );

  @Effect({})
  retrievePopularRoutes$ = this.actions$.pipe(
    ofType<RetrievePopularRoutes>(RouteActionTypes.RETRIEVE_POPULAR_ROUTES),
    mergeMap((action) =>
      this.exploreService.popularRoutes().pipe(
        map((routes) => new LoadRoutes({routes})),
        catchError((err) => of(new RetrievePopularRoutesFailure({err})))
      )
    )
  );

  @Effect({ dispatch: false })
  retrievePopularRoutesFailure$ = this.actions$.pipe(
    ofType<RetrievePopularRoutesFailure>(RouteActionTypes.RETRIEVE_POPULAR_ROUTES_FAILURE),
    tap((action) => console.log(action.payload.err))
  );

  @Effect({})
  retrieveTopRatedRoutes$ = this.actions$.pipe(
    ofType<RetrieveTopRatedRoutes>(RouteActionTypes.RETRIEVE_TOP_RATED_ROUTES),
    mergeMap((action) =>
      this.exploreService.topRatedRoutes().pipe(
        map((routes) => new LoadRoutes({routes})),
        catchError((err) => of(new RetrieveTopRatedRoutesFailure({err})))
      )
    )
  );

  @Effect({ dispatch: false })
  retrieveTopRatedRoutesFailure$ = this.actions$.pipe(
    ofType<RetrieveTopRatedRoutesFailure>(RouteActionTypes.RETRIEVE_TOP_RATED_ROUTES_FAILURE),
    tap((action) => console.log(action.payload.err))
  );
}
