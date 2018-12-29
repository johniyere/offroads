import { Action } from '@ngrx/store';
import { Point, Line } from './editor.model';

export enum EditorActionTypes {
  GetPointElevation = '[Editor] Get point Elevation',
  GetLineToPoint = '[Editor] Get line to point',
  AddPoint = '[Editor] Add point',
  AddNextPointWithLine = '[Editor] Add Next Point With Line',
  SetRouteName = '[Editor] Set Route Name',
  ClearRoute = '[Editor] Clear Route',
  CreateNewRoute = '[Editor] Create New Route',
  CreateNewRouteSuccess = '[Editor] Create New Route Sucsess',
  CreateNewRouteFailure = '[Editor] Create New Route Failure'
}

export class GetPointElevation implements Action {
  readonly type = EditorActionTypes.GetPointElevation;

  constructor (public payload: Point) {}
}

export class GetLineToPoint implements Action {
  readonly type = EditorActionTypes.GetLineToPoint;

  constructor (public payload: Point) {}
}

export class AddPoint implements Action {
  readonly type = EditorActionTypes.AddPoint;

  constructor (public payload: Point) {}
}

export class AddNextPointWithLine implements Action {
  readonly type = EditorActionTypes.AddNextPointWithLine;

  constructor (public payload: {point: Point, line: Line}) {}
}

export class SetRouteName implements Action {
  readonly type = EditorActionTypes.SetRouteName;

  constructor (public payload: string) {}
}

export class ClearRoute implements Action {
  readonly type = EditorActionTypes.ClearRoute;
}

export class CreateNewRoute implements Action {
  readonly type = EditorActionTypes.CreateNewRoute;
}

export class CreateNewRouteSuccess implements Action {
  readonly type = EditorActionTypes.CreateNewRouteSuccess;

  constructor (public payload: {points: Point[], lines: Line[], name: string}) {}
}

export class CreateNewRouteFailure implements Action {
  readonly type = EditorActionTypes.CreateNewRouteSuccess;

  constructor (public payload: any) {}
}

export type EditorAction
 = GetPointElevation
 | GetLineToPoint
 | AddPoint
 | AddNextPointWithLine
 | SetRouteName
 | ClearRoute
 | CreateNewRoute
 | CreateNewRouteSuccess
 | CreateNewRouteFailure
;
