import { Injectable } from '@angular/core';
import { SearchGQL } from 'src/app/generated/graphql';
import { map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private searchGQL: SearchGQL
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
}
