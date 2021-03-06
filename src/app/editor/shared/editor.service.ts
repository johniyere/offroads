import { Injectable } from '@angular/core';
import { CreateRouteGQL, PointInput, LineInput, CreateRoute } from 'src/app/generated/graphql';
import { map, switchMap } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { ElevationResult } from './ElevationResult';
import { HttpClient } from '@angular/common/http';
import { Directions } from './Directions';
import { environment } from 'src/environments/environment';
import { Line } from '../editor.model';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  elevationService = new google.maps.ElevationService;
  points$: Subject<PointInput> = new Subject();

  constructor(
    private createRouteGQL: CreateRouteGQL,
    private http: HttpClient
  ) { }

  createRoute(name: string, points: PointInput[], lines: LineInput[]) {
    return this.createRouteGQL.mutate({name, points, lines}).pipe(
      map((result) => result.data.createRoute as CreateRoute.CreateRoute)
    );
  }

  getDirections(start: {lat: number, lng: number}, end: {lat: number, lng: number}) {
    const startString = `${start.lng},${start.lat}`;
    const endString = `${end.lng},${end.lat}`;
    // tslint:disable-next-line:max-line-length
    const url = `https://api.mapbox.com/directions/v5/mapbox/walking/${startString};${endString}?geometries=geojson&access_token=${environment.mapbox.accessToken}`;
    return this.http.get<Directions>(url).pipe(
      map((directions) => directions.routes[0])
    );
  }

  getElevationOfPoint(location: {lat: number, lng: number}): Observable<ElevationResult> {
    return Observable.create((observer) => {
      this.elevationService.getElevationForLocations({
        locations: [location]
      }, (results: ElevationResult[], status: string) => {
        if (status === 'OK') {
          observer.next(results[0]);
        } else {
          observer.error(new Error(`Something went wrong because: ${status}`));
        }
      });
    });

  }
  getElevationAlongPath(path: {lat: number, lng: number}[]): Observable<ElevationResult[]> {
    const elevator = new google.maps.ElevationService;
    return Observable.create((observer) => {
      elevator.getElevationAlongPath({
        path,
        samples: path.length
      }, (elevations: ElevationResult[], status: string) => {
        if  (status === 'OK') {
          observer.next(elevations);
        } else {
          observer.error(new Error(`Something went wrong because: ${status}`));
        }
        observer.complete();
      });
    });
  }

  calculateElevationGain(lines: Line[]) {
    return 57;
  }
}
