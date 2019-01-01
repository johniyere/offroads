import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { State } from '../account.state';
import { ExploreService } from '../explore/shared/explore.service';
import { RetrieveExploreRoutes, RouteActionTypes, LoadRoutes, RetrieveExploreRoutesFailure } from './routes.actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class RoutesEffects {
  constructor (
    private actions$: Actions,
    private store: Store<State>,
    private exploreService: ExploreService
  ) {}

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

}
