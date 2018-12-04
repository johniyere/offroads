import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { combineLatest } from 'rxjs';
import { CreateRouteGQL, CreateRoute, PointInput, LineInput, CurrentUserRoutes, CurrentUserRoutesGQL } from '../generated/graphql';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  labels$: BehaviorSubject<string> = new BehaviorSubject('0');
  elevationDataset$: Subject<number> = new Subject();

  chartPair$ = combineLatest(this.labels$, this.elevationDataset$);
  constructor(private createRouteGQL: CreateRouteGQL, private currentUserRoutesGQL: CurrentUserRoutesGQL) {
  }

  createRoute(name: string, points: PointInput[], lines: LineInput[]) {
    return this.createRouteGQL.mutate({name, points, lines}).pipe(
      map((result) => result.data.createRoute as CreateRoute.CreateRoute)
    );
  }

  currentUserRoutes() {
    return this.currentUserRoutesGQL.watch({}).valueChanges;
  }
}
