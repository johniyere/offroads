import { Injectable } from '@angular/core';
import { ExploreRoutesGQL, RecommendedUserRoutesGQL, PopularRoutesGQL } from 'src/app/generated/graphql';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  constructor(
    private exploreRoutesGQL: ExploreRoutesGQL,
    private recommendedUserRoutesGQL: RecommendedUserRoutesGQL,
    private popularRoutesGQL: PopularRoutesGQL
  ) { }

  routes() {
    return this.exploreRoutesGQL.watch({}).valueChanges.pipe(
      map(({data, loading}) => data.routes)
    );
  }

  recommendedUserRoutes() {
    return this.recommendedUserRoutesGQL.watch({}).valueChanges.pipe(
      map(({data, loading}) => data.recommendedUserRoutes)
    );
  }

  popularRoutes() {
    return this.popularRoutesGQL.watch({}).valueChanges.pipe(
      map(({data, loading}) => data.popularRoutes)
    );
  }
}
