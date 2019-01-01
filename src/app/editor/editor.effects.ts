import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, mergeMap, map, switchMap, withLatestFrom, catchError } from 'rxjs/operators';
import { EditorService } from './shared/editor.service';
import { GetPointElevation, EditorActionTypes, AddPoint, GetLineToPoint,
  AddNextPointWithLine, CreateNewRoute, CreateNewRouteSuccess, CreateNewRouteFailure } from './editor.actions';
import { Store, select } from '@ngrx/store';
import { State } from './editor.state';
import { selectLastPoint, selectEditor } from './editor.selectors';
import { of } from 'rxjs';
import { Point, LinePoint } from './editor.model';

@Injectable()
export class EditorEffects {
  constructor (
    private actions$: Actions,
    private editorService: EditorService,
    private store: Store<State>,
  ) {}

  @Effect()
  getPointElevation$ = this.actions$.pipe(
    ofType<GetPointElevation>(EditorActionTypes.GetPointElevation),
    mergeMap((action) =>
      this.editorService.getElevationOfPoint(action.payload.coordinates).pipe(
        map((elevationResult) => new AddPoint({...action.payload, elevation: elevationResult.elevation}))
      )
    )
  );

  @Effect()
  getLineToPoint$ = this.actions$.pipe(
    ofType<GetLineToPoint>(EditorActionTypes.GetLineToPoint),
    withLatestFrom(this.store.pipe(select(selectLastPoint))),
    switchMap(([action, lastPoint]) =>
      this.getPath(lastPoint.coordinates, action.payload).pipe(
        map((nextPointWithLine) => new AddNextPointWithLine(nextPointWithLine))
      )
    )
  );

  @Effect()
  createNewRoute$ = this.actions$.pipe(
    ofType<CreateNewRoute>(EditorActionTypes.CreateNewRoute),
    withLatestFrom(this.store.pipe(select(selectEditor))),
    mergeMap(([action, editor]) =>
      this.editorService.createRoute(editor.name, editor.points, editor.lines).pipe(
        map((route) => new CreateNewRouteSuccess(route)),
        catchError((err) => of(new CreateNewRouteFailure(err)))
      )
    )
  );

  @Effect({dispatch: false})
  createNewRouteSuccess$ = this.actions$.pipe(
    ofType<CreateNewRouteSuccess>(EditorActionTypes.CreateNewRouteSuccess),
    tap((route) => console.log(route))
  );

  @Effect({dispatch: false})
  createNewRouteFailure$ = this.actions$.pipe(
    ofType<CreateNewRouteFailure>(EditorActionTypes.CreateNewRouteFailure),
    tap((err) => console.log(err))
  );

  getPath(start: {lat: number, lng: number}, end: Point) {
    return this.editorService.getDirections(start, end.coordinates).pipe(
      map((route) => {
        const path = route.geometry.coordinates.map((coordinate) => {
          return {
            lng: coordinate[0],
            lat: coordinate[1]
          };
        });
        return {path, distanceFromPreviousPoint: route.distance};
      }),
      switchMap((res) =>
        this.editorService.getElevationAlongPath(res.path).pipe(
          map((elevationResults) => {
            const newPointElevation = elevationResults[elevationResults.length - 1].elevation;
            const newPoint = {...end, elevation: newPointElevation, distanceFromPreviousPoint: res.distanceFromPreviousPoint};
            const linePoints: LinePoint[] = res.path.map((point, index) => {
              return {
                coordinates: {...point},
                elevation: elevationResults[index].elevation
              };
            });
            return {point: newPoint, line: { points: linePoints }};
          })
        )
      )
    );
  }
}
