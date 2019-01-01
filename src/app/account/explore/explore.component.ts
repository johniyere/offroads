import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { Route } from '../routes/routes.state';
import { State } from '../account.state';
import { selectAllRoutes } from '../routes/routes.selectors';
import { RetrieveExploreRoutes, ClearRoutes } from '../routes/routes.actions';


@Component({
  selector: 'ofr-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit, OnDestroy {

  routes$: Observable<Route[]>;
  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.routes$ = this.store.pipe(
      select(selectAllRoutes)
    );

    this.store.dispatch(new RetrieveExploreRoutes);
  }

  ngOnDestroy() {
    this.store.dispatch(new ClearRoutes);
  }

}
