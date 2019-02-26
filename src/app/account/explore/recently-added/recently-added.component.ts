import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Route } from '../../routes/routes.state';
import { Store, select } from '@ngrx/store';
import { State } from '../../account.state';
import { selectAllRoutes } from '../../routes/routes.selectors';
import { ClearRoutes, RetrieveRoutes } from '../../routes/routes.actions';
import { RouteOrderByInput } from 'src/app/generated/graphql';
@Component({
  selector: 'ofr-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.scss']
})
export class RecentlyAddedComponent implements OnInit, OnDestroy {

  routes$: Observable<Route[]>;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.routes$ = this.store.pipe(
      select(selectAllRoutes)
    );

    this.store.dispatch(new RetrieveRoutes({orderBy: RouteOrderByInput.CreatedAtDesc}));
  }

  ngOnDestroy() {
    this.store.dispatch(new ClearRoutes);
  }

}
