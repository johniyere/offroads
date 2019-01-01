import { Action } from '@ngrx/store';

export enum RouteActionTypes {
  DELETE_ROUTE = '[Route] Delete Route'
}

export class DeleteRoute implements Action {
  readonly type = RouteActionTypes.DELETE_ROUTE;

  constructor (public payload: { id: string }) {}
}

export type RouteActions =
  DeleteRoute
;
