import { Injectable } from '@angular/core';
import { SearchGQL, FollowGQL, Follow } from 'src/app/generated/graphql';
import { map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

/**
 * Search code adapted from: https://alligator.io/angular/real-time-search-angular-rxjs/
 */
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private searchGQL: SearchGQL,
    private followGQL: FollowGQL
  ) { }

  search(terms: Observable<string>) {
    return terms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => this.persistSearch(term))
    );
  }

  persistSearch(filter: string) {
    return this.searchGQL.watch({ filter }).valueChanges.pipe(
      map(({data, loading}) => data.search)
    );
  }

  follow(userToFollowId: string) {
    return this.followGQL.mutate({ userToFollowId }).pipe(
      map((result) => result.data.follow as Follow.Follow)
    );
  }
}
