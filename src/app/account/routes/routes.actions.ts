import { Action } from '@ngrx/store';
import { Route } from './routes.state';

export enum RouteActionTypes {
  LOAD_ROUTES = '[Routes] Load Routes',
  DELETE_ROUTE = '[Routes] Delete Route',
  RETRIEVE_DASHBOARD_ROUTES = '[Routes] Retrieve Dashboard Routes',
  RETRIEVE_DASHBOARD_ROUTES_FAILURE = '[Routes] Retrieve Dashboard Routes Failure',
  RETRIEVE_EXPLORE_ROUTES = '[Routes] Retrieve Explore Routes',
  RETRIEVE_EXPLORE_ROUTES_FAILURE = '[Routes] Retrieve Explore Routes Failure',
  RETRIEVE_ROUTE = '[Route] Retrieve Route',
  RETRIEVE_ROUTE_SUCCESS = '[Route] Retrieve Route Success',
  RETRIEVE_ROUTE_FAILURE = '[Route] Retrieve Route Failure',
  CLEAR_ROUTES = '[Routes] Clear Routes',
  CLEAR_SELECTED_ROUTE = '[Routes] Clear Selected Route',
  UPLOAD_RUN = '[Routes] Upload a run',
  UPLOAD_RUN_SUCCESS = '[Routes] Upload a run Sucess',
  UPLOAD_RUN_FAILURE= '[Routes] Upload a run Failure'
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

export class RetrieveRoute implements Action {
  readonly type = RouteActionTypes.RETRIEVE_ROUTE;
}

export class RetrieveRouteSuccess implements Action {
  readonly type = RouteActionTypes.RETRIEVE_ROUTE_SUCCESS;

  constructor (public payload: { route: Route}) {}
}

export class RetrieveRouteFailure implements Action {
  readonly type = RouteActionTypes.RETRIEVE_ROUTE_FAILURE;

  constructor (public payload: { err: any}) {}
}

export class ClearRoutes implements Action {
  readonly type = RouteActionTypes.CLEAR_ROUTES;
}

export class ClearSelectedRoute implements Action {
  readonly type = RouteActionTypes.CLEAR_SELECTED_ROUTE;
}

export class UploadRun implements Action {
  readonly type = RouteActionTypes.UPLOAD_RUN;

  constructor(public payload: { title?: string, comment?: string}) {}
}

export class UploadRunSuccess implements Action {
  readonly type = RouteActionTypes.UPLOAD_RUN_SUCCESS;

  constructor(public payload: {run: any}) {}
}

export class UploadRunFailure implements Action {
  readonly type = RouteActionTypes.UPLOAD_RUN_FAILURE;

  constructor(public payload: { err: any}) {}
}
export type RouteActions
  = LoadRoutes
  | DeleteRoute
  | RetrieveDashboardRoutes
  | RetrieveDashboardRoutesFailure
  | RetrieveExploreRoutes
  | RetrieveExploreRoutesFailure
  | RetrieveRoute
  | RetrieveRouteSuccess
  | RetrieveRouteFailure
  | ClearRoutes
  | ClearSelectedRoute
  | UploadRun
  | UploadRunSuccess
  | UploadRunFailure
;
