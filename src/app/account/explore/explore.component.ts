import { Component, OnInit } from '@angular/core';
import { ExploreService } from './shared/explore.service';
import { Observable } from 'rxjs';
import { ExploreRoutes } from 'src/app/generated/graphql';
import { map } from 'rxjs/operators';
import { State } from '../account.state';
import { Store, select } from '@ngrx/store';
import { Route } from '../routes/routes.model';
import { selectAllRoutes } from '../routes/routes.selector';
import { RetrieveExploreRoutes } from '../routes/routes.actions';

@Component({
  selector: 'ofr-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  exploreRoutes$: Observable<Route[]>;
  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.exploreRoutes$ = this.store.pipe(
      select(selectAllRoutes)
    );

    this.store.dispatch(new RetrieveExploreRoutes);
  }

}
