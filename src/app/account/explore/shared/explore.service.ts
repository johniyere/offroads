import { Injectable } from '@angular/core';
import { ExploreRoutesGQL } from 'src/app/generated/graphql';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  constructor(private exploreRoutesGQL: ExploreRoutesGQL) { }

  routes() {
    return this.exploreRoutesGQL.watch({}).valueChanges.pipe(
      map(({data, loading}) => data.routes)
    );
  }
}
