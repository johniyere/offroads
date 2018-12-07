import { Injectable } from '@angular/core';
import { CurrentUserRoutesGQL } from 'src/app/generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private currentUserRoutesGQL: CurrentUserRoutesGQL) { }

  currentUserRoutes() {
    return this.currentUserRoutesGQL.watch({}).valueChanges;
  }
}
