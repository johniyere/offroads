import { Component, OnInit } from '@angular/core';
import { UsersGQL, Users, RoutesGQL, Routes } from 'src/app/generated/graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ofr-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  users$: Observable<Users.Users[]>;
  routes$: Observable<Routes.Routes[]>;
  constructor(
    private usersGQL: UsersGQL,
    private routesGQL: RoutesGQL
  ) { }

  ngOnInit() {
    this.users$ = this.usersGQL.watch({}).valueChanges.pipe(
      map(({data, loading}) => data.users)
    );

    this.routes$ = this.routesGQL.watch({}).valueChanges.pipe(
      map(({data, loading}) => data.routes)
    );
  }

}
