import { Injectable } from '@angular/core';
import { ExploreRoutesGQL, RecommendUserRoutesGQL } from 'src/app/generated/graphql';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  constructor(private exploreRoutesGQL: ExploreRoutesGQL, private recommendedUserRoutesGQL: RecommendUserRoutesGQL) { }

  routes() {
    return this.exploreRoutesGQL.watch({}).valueChanges.pipe(
      map(({data, loading}) => data.routes)
    );
  }

  recommendedUserRoutes() {
    return this.recommendedUserRoutesGQL.watch({}).valueChanges.pipe(
      map(({data, loading}) => data.routes)
    );
  }
}
