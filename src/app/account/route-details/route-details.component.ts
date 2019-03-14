import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Route } from '../routes/routes.state';
import { Store, select } from '@ngrx/store';
import { State } from '../account.state';
import { selectSelectedRoute } from '../routes/routes.selectors';
import { RetrieveRoute, ClearSelectedRoute } from '../routes/routes.actions';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookmarkTrailGQL } from 'src/app/generated/graphql';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ofr-route-details',
  templateUrl: './route-details.component.html',
  styleUrls: ['./route-details.component.scss']
})
export class RouteDetailsComponent implements OnInit, OnDestroy {

  selectedRoute$: Observable<Route>;
  constructor(
    private store: Store<State>,
    private bookmartTrailGQL: BookmarkTrailGQL
  ) { }

  ngOnInit() {
    this.store.dispatch(new RetrieveRoute);
    this.selectedRoute$ = this.store.pipe(
      select(selectSelectedRoute)
    );

    this.selectedRoute$.subscribe((route) => {
      console.log(route);
    });
  }

  ngOnDestroy() {
    this.store.dispatch(new ClearSelectedRoute);
  }

  bookmarkTrail(routeIdToBookmark: string) {
    this.bookmartTrailGQL.mutate({ routeIdToBookmark })
      .subscribe((result) => console.log(result));
  }
}
