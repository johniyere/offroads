import { Injectable } from '@angular/core';
import { ExploreRoutesGQL } from 'src/app/generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  constructor(private exploreRoutesGQL: ExploreRoutesGQL) { }

  routes() {
    return this.exploreRoutesGQL.watch({}).valueChanges;
  }
}
