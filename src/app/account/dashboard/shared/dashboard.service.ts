import { Injectable } from '@angular/core';
import { CurrentUserRoutesGQL, ActivitiesGQL, DashboardGQL } from 'src/app/generated/graphql';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private currentUserRoutesGQL: CurrentUserRoutesGQL,
    private dashboardGQL: DashboardGQL
  ) { }

  currentUserRoutes() {
    return this.currentUserRoutesGQL.watch({}).valueChanges.pipe(
      map(({data, loading}) => data.me.createdRoutes)
    );
  }

  me() {
    return this.dashboardGQL.watch({}).valueChanges.pipe(
      map(({data, loading}) => data.me)
    );
  }

  createdRoutes() {
    return this.me().pipe(
      map((me) => me.createdRoutes)
    );
  }

  followers() {
    return this.me().pipe(
      map((me) => me.followers)
    );
  }

  following() {
    return this.me().pipe(
      map((me) => me.following)
    );
  }

  bookmarkedTrails() {
    return this.me().pipe(
      map((me) => me.bookmarkedTrails)
    );
  }

  activities() {
    return this.me().pipe(
      map((me) => me.runs)
    );
  }
}
