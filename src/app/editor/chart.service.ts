import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { combineLatest } from 'rxjs';
import { CreateRouteGQL, CreateRoute } from '../generated/graphql';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  labels$: BehaviorSubject<string> = new BehaviorSubject('0');
  elevationDataset$: Subject<number> = new Subject();

  chartPair$ = combineLatest(this.labels$, this.elevationDataset$);
  constructor(private createRouteGQL: CreateRouteGQL) {
  }

  createRoute(name: string) {
    return this.createRouteGQL.mutate({name}).pipe(
      map((result) => result.data.createRoute as CreateRoute.CreateRoute)
    );
  }
}
