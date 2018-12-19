import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, mergeMap, map, catchError, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { EditorService } from './shared/editor.service';
import { GetPointElevation, EditorActionTypes, AddPoint, GetLineToPoint, AddNextPointWithLine } from './editor.actions';
import { Store, select } from '@ngrx/store';
import { State } from './editor.state';
import { selectLastPoint } from './editor.selectors';
import { Line, Point } from './editor.model';

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
      this.editorService.getDirections(lastPoint.coordinates, action.payload.coordinates).pipe(
        switchMap((route) => {
          const path = route.geometry.coordinates.map((coordinate) => {
            return {
              lng: coordinate[0],
              lat: coordinate[1]
            };
          });

          return this.editorService.getElevationAlongPath(path).pipe(
            map((elevationResults) => {
              const newPointElevation = elevationResults[elevationResults.length - 1].elevation;
              const newPoint = {...action.payload, elevation: newPointElevation, distanceFromPreviousPoint: route.distance};
              const linePoints: Point[] = path.map((point, index) => {
                return {
                  coordinates: {...point},
                  elevation: elevationResults[index].elevation
                };
              });
              return new AddNextPointWithLine({point: newPoint, line: { points: linePoints }});
            })
          );
        })
      )
    )
  );
}
