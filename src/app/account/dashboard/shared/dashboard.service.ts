import { Injectable } from '@angular/core';
import { CurrentUserRoutesGQL } from 'src/app/generated/graphql';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private currentUserRoutesGQL: CurrentUserRoutesGQL) { }

  currentUserRoutes() {
    return this.currentUserRoutesGQL.watch({}).valueChanges.pipe(
      map(({data, loading}) => data.me.createdRoutes)
    );
  }
}
