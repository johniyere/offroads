import { Injectable } from '@angular/core';
import { CreateRouteGQL, PointInput, LineInput, CreateRoute } from 'src/app/generated/graphql';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  labels$: BehaviorSubject<string> = new BehaviorSubject('0');
  elevationDataset$: Subject<number> = new Subject();
  points$: Subject<PointInput> = new Subject();

  constructor(private createRouteGQL: CreateRouteGQL) { }

  createRoute(name: string, points: PointInput[], lines: LineInput[]) {
    return this.createRouteGQL.mutate({name, points, lines}).pipe(
      map((result) => result.data.createRoute as CreateRoute.CreateRoute)
    );
  }
}
