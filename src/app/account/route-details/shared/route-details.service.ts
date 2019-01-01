import { Injectable } from '@angular/core';
import { RouteDetailsGQL } from 'src/app/generated/graphql';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouteDetailsService {

  constructor(
    private routeDetailsGQL: RouteDetailsGQL
  ) { }

  retrieveDetails(id: string) {
    return this.routeDetailsGQL.watch({ id }).valueChanges.pipe(
      map(({data, loading}) => data.route)
    );
  }
}
