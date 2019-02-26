import { Action } from '@ngrx/store';
import { Route } from './routes.state';
import { RouteOrderByInput } from 'src/app/generated/graphql';

export enum RouteActionTypes {
  LOAD_ROUTES = '[Routes] Load Routes',
  DELETE_ROUTE = '[Routes] Delete Route',
  RETRIEVE_DASHBOARD_ROUTES = '[Routes] Retrieve Dashboard Routes',
  RETRIEVE_DASHBOARD_ROUTES_FAILURE = '[Routes] Retrieve Dashboard Routes Failure',
  RETRIEVE_ROUTES = '[Routes] Retrieve Routes',
  RETRIEVE_ROUTES_FAILURE = '[Routes] Retrieve Routes Failure',
  RETRIEVE_ROUTE = '[Route] Retrieve Route',
  RETRIEVE_ROUTE_SUCCESS = '[Route] Retrieve Route Success',
  RETRIEVE_ROUTE_FAILURE = '[Route] Retrieve Route Failure',
  CLEAR_ROUTES = '[Routes] Clear Routes',
  CLEAR_SELECTED_ROUTE = '[Routes] Clear Selected Route',
  UPLOAD_RUN = '[Routes] Upload a run',
  UPLOAD_RUN_SUCCESS = '[Routes] Upload a run Sucess',
  UPLOAD_RUN_FAILURE = '[Routes] Upload a run Failure',
  RETRIEVE_RECOMMENDED_USER_ROUTES = '[Routes] Retrieve Recommended User Routes',
  RETRIEVE_RECOMMENDED_USER_ROUTES_FAILURE = '[Routes] Retrieve Recommended User Routes Failure',
  RETRIEVE_POPULAR_ROUTES = '[Routes] Retrieve Popular Routes',
  RETRIEVE_POPULAR_ROUTES_FAILURE = '[Routes] Retrieve Popular Routes Failure',
  RETRIEVE_TOP_RATED_ROUTES = '[Routes] Retrieve Top Rated Routes',
  RETRIEVE_TOP_RATED_ROUTES_FAILURE = '[Routes] Retrieve Top Rated Routes Failure',
  ADD_REVIEW = '[Routes] Add Review',
  ADD_REVIEW_SUCCESS = '[Routes] Add Review Success',
  ADD_REVIEW_FAILURE = '[Routes]  Add Review Failure'
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

export class RetrieveRoutes implements Action {
  readonly type = RouteActionTypes.RETRIEVE_ROUTES;

  constructor (public payload: { orderBy?: RouteOrderByInput }) {}
}

export class RetrieveRoutesFailure implements Action {
  readonly type = RouteActionTypes.RETRIEVE_ROUTES_FAILURE;

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

  constructor(public payload: { title?: string, comment?: string, time: number}) {}
}

export class UploadRunSuccess implements Action {
  readonly type = RouteActionTypes.UPLOAD_RUN_SUCCESS;

  constructor(public payload: {run: any}) {}
}

export class UploadRunFailure implements Action {
  readonly type = RouteActionTypes.UPLOAD_RUN_FAILURE;

  constructor(public payload: { err: any}) {}
}

export class RetrieveRecommendedUserRoutes implements Action {
  readonly type = RouteActionTypes.RETRIEVE_RECOMMENDED_USER_ROUTES;
}

export class RetrieveRecommendedUserRoutesFailure implements Action {
  readonly type = RouteActionTypes.RETRIEVE_RECOMMENDED_USER_ROUTES_FAILURE;

  constructor (public payload: { err: any }) {}
}

export class RetrievePopularRoutes implements Action {
  readonly type = RouteActionTypes.RETRIEVE_POPULAR_ROUTES;
}

export class RetrievePopularRoutesFailure implements Action {
  readonly type = RouteActionTypes.RETRIEVE_POPULAR_ROUTES_FAILURE;

  constructor (public payload: { err: any }) {}
}

export class RetrieveTopRatedRoutes implements Action {
  readonly type = RouteActionTypes.RETRIEVE_TOP_RATED_ROUTES;
}

export class RetrieveTopRatedRoutesFailure implements Action {
  readonly type = RouteActionTypes.RETRIEVE_TOP_RATED_ROUTES_FAILURE;

  constructor (public payload: { err: any }) {}
}

export class AddReview implements Action {
  readonly type = RouteActionTypes.ADD_REVIEW;

  constructor(public payload: { rating: number, comment?: string}) {}
}

export class AddReviewSuccess implements Action {
  readonly type = RouteActionTypes.ADD_REVIEW_SUCCESS;

  constructor(public payload: {review: any}) {}
}

export class AddReviewFailure implements Action {
  readonly type = RouteActionTypes.ADD_REVIEW_FAILURE;

  constructor(public payload: { err: any}) {}
}

export type RouteActions
  = LoadRoutes
  | DeleteRoute
  | RetrieveDashboardRoutes
  | RetrieveDashboardRoutesFailure
  | RetrieveRoutes
  | RetrieveRoutesFailure
  | RetrieveRoute
  | RetrieveRouteSuccess
  | RetrieveRouteFailure
  | ClearRoutes
  | ClearSelectedRoute
  | UploadRun
  | UploadRunSuccess
  | UploadRunFailure
  | RetrieveRecommendedUserRoutes
  | RetrieveRecommendedUserRoutesFailure
  | RetrievePopularRoutes
  | RetrievePopularRoutesFailure
  | RetrieveTopRatedRoutes
  | RetrieveTopRatedRoutesFailure
  | AddReview
  | AddReviewSuccess
  | AddReviewFailure
;
