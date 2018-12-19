import { Action } from '@ngrx/store';
import { Point, Line } from './editor.model';

export enum EditorActionTypes {
  GetPointElevation = '[Editor] Get point Elevation',
  GetLineToPoint = '[Editor] Get line to point',
  AddPoint = '[Editor] Add point',
  AddNextPointWithLine = '[Editor] Add Next Point With Line'
}

export class GetPointElevation implements Action {
  readonly type = EditorActionTypes.GetPointElevation;

  constructor (public payload: Point) {}
}

export class GetLineToPoint implements Action {
  readonly type  = EditorActionTypes.GetLineToPoint;

  constructor (public payload: Point) {}
}

export class AddPoint implements Action {
  readonly type  = EditorActionTypes.AddPoint;

  constructor (public payload: Point) {}
}

export class AddNextPointWithLine implements Action {
  readonly type  = EditorActionTypes.AddNextPointWithLine;

  constructor (public payload: {point: Point, line: Line}) {}
}

export type EditorAction
 = GetPointElevation
 | GetLineToPoint
 | AddPoint
 | AddNextPointWithLine
;
