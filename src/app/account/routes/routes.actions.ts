import { Action } from '@ngrx/store';
import { Route } from './routes.state';

export enum RouteActionTypes {
  LOAD_ROUTES = '[Routes] Load Routes',
  DELETE_ROUTE = '[Routes] Delete Route',
  RETRIEVE_DASHBOARD_ROUTES = '[Routes] Retrieve Dashboard Routes',
  RETRIEVE_DASHBOARD_ROUTES_FAILURE = '[Routes] Retrieve Dashboard Routes Failure',
  RETRIEVE_EXPLORE_ROUTES = '[Routes] Retrieve Explore Routes',
  RETRIEVE_EXPLORE_ROUTES_FAILURE = '[Routes] Retrieve Explore Routes Failure',
  CLEAR_ROUTES = '[Routes] Clear Routes'
}

export class LoadRoutes implements Action {
  readonly type = RouteActionTypes.LOAD_ROUTES;

  constructor (public payload: { routes: Route[] }) {}
}

export class DeleteRoute implements Action {
  readonly type = RouteActionTypes.DELETE_ROUTE;

  constructor (public payload: { id: string }) {}
}


export class RetrieveDashboardRoutes implements Action {
  readonly type = RouteActionTypes.RETRIEVE_DASHBOARD_ROUTES;
}

export class RetrieveDashboardRoutesFailure implements Action {
  readonly type = RouteActionTypes.RETRIEVE_DASHBOARD_ROUTES_FAILURE;

  constructor (public payload: { err: any }) {}
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
  | RetrieveDashboardRoutes
  | RetrieveDashboardRoutesFailure
  | RetrieveExploreRoutes
  | RetrieveExploreRoutesFailure
  | ClearRoutes
;
