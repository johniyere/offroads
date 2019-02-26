import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Route } from '../../routes/routes.state';
import { Store, select } from '@ngrx/store';
import { State } from '../../account.state';
import { selectAllRoutes } from '../../routes/routes.selectors';
import { RetrieveRecommendedUserRoutes, ClearRoutes, RetrieveTopRatedRoutes } from '../../routes/routes.actions';

@Component({
  selector: 'ofr-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit, OnDestroy {

  routes$: Observable<Route[]>;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.routes$ = this.store.pipe(
      select(selectAllRoutes)
    );

    this.store.dispatch(new RetrieveTopRatedRoutes);
  }

  ngOnDestroy() {
    this.store.dispatch(new ClearRoutes);
  }

}
