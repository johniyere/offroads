import { Injectable } from '@angular/core';
import { RecommendedUserRoutesGQL, PopularRoutesGQL, TopRatedRoutesGQL, RoutesGQL, RouteOrderByInput } from 'src/app/generated/graphql';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  constructor(
    private recommendedUserRoutesGQL: RecommendedUserRoutesGQL,
    private popularRoutesGQL: PopularRoutesGQL,
    private topRatedRoutesGQL: TopRatedRoutesGQL,
    private routesGQL: RoutesGQL
  ) { }

  routes(orderBy?: RouteOrderByInput) {
    return this.routesGQL.watch({orderBy}).valueChanges.pipe(
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

  topRatedRoutes() {
    return this.topRatedRoutesGQL.watch({}).valueChanges.pipe(
      map(({data, loading}) => data.topRatedRoutes)
    );
  }
}
