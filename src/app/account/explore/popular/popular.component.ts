import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Route } from '../../routes/routes.state';
import { Store, select } from '@ngrx/store';
import { State } from '../../account.state';
import { selectAllRoutes } from '../../routes/routes.selectors';
import { ClearRoutes, RetrievePopularRoutes } from '../../routes/routes.actions';

@Component({
  selector: 'ofr-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit, OnDestroy {

  routes$: Observable<Route[]>;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.routes$ = this.store.pipe(
      select(selectAllRoutes)
    );

    this.store.dispatch(new RetrievePopularRoutes);
  }

  ngOnDestroy() {
    this.store.dispatch(new ClearRoutes);
  }

}
