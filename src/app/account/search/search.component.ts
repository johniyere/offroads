import { Component, OnInit } from '@angular/core';
import { UsersGQL, Users, RoutesGQL, Routes, Search } from 'src/app/generated/graphql';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchService } from './shared/search.service';

@Component({
  selector: 'ofr-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  users$: Observable<Search.Users[]>;
  routes$: Observable<Search.Routes[]>;


  searchResults: Observable<Search.Search>;
  searchTerm$ = new BehaviorSubject<string>('');
  constructor(
    private usersGQL: UsersGQL,
    private routesGQL: RoutesGQL,
    private searchService: SearchService
  ) {
    this.users$ = this.searchService.search(this.searchTerm$).pipe(
      map((search) => search.users)
    );

    this.routes$ = this.searchService.search(this.searchTerm$).pipe(
      map((search) => search.routes)
    );
  }

  ngOnInit() {

  }

  follow(userToFollowId: string) {
    this.searchService.follow(userToFollowId).subscribe((val) => {
      console.log(val);
    });
  }
}
