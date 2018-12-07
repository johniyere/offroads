import { Injectable } from '@angular/core';
import { CreateRouteGQL, PointInput, LineInput, CreateRoute } from 'src/app/generated/graphql';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(private createRouteGQL: CreateRouteGQL) { }

  labels$: BehaviorSubject<string> = new BehaviorSubject('0');
  elevationDataset$: Subject<number> = new Subject();

  createRoute(name: string, points: PointInput[], lines: LineInput[]) {
    return this.createRouteGQL.mutate({name, points, lines}).pipe(
      map((result) => result.data.createRoute as CreateRoute.CreateRoute)
    );
  }
}
