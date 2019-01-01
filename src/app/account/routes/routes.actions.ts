import { Action } from '@ngrx/store';
import { Route } from './routes.model';

export enum RouteActionTypes {
  LOAD_ROUTES = '[Route] Load Routes',
  DELETE_ROUTE = '[Route] Delete Route',
  RETRIEVE_EXPLORE_ROUTES = '[Route] Retrieve Explore Routes',
  RETRIEVE_EXPLORE_ROUTES_FAILURE = '[Route] Retrieve Explore Routes Failure',
  CLEAR_ROUTES = '[Route] Clear Routes'
}

export class LoadRoutes implements Action {
  readonly type = RouteActionTypes.LOAD_ROUTES;

  constructor (public payload: { routes: Route[] }) {}
}

export class DeleteRoute implements Action {
  readonly type = RouteActionTypes.DELETE_ROUTE;

  constructor (public payload: { id: string }) {}
}

export class RetrieveExploreRoutes implements Action {
  readonly type = RouteActionTypes.RETRIEVE_EXPLORE_ROUTES;
}

export class RetrieveExploreRoutesFailure implements Action {
  readonly type = RouteActionTypes.RETRIEVE_EXPLORE_ROUTES_FAILURE;

  constructor (public payload: { err: any }) {}
}

export class ClearRoutes implements Action {
  readonly type = RouteActionTypes.CLEAR_ROUTES;
}

export type RouteActions
  = LoadRoutes
  | DeleteRoute
  | RetrieveExploreRoutes
  | RetrieveExploreRoutesFailure
  | ClearRoutes
;
