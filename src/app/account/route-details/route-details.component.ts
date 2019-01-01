import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Route } from '../routes/routes.state';
import { Store, select } from '@ngrx/store';
import { State } from '../account.state';
import { tap } from 'rxjs/operators';
import { selectRouterState } from 'src/app/core/core.state';
import { selectSelectedRoute } from '../routes/routes.selectors';
import { RetrieveRoute } from '../routes/routes.actions';

@Component({
  selector: 'ofr-route-details',
  templateUrl: './route-details.component.html',
  styleUrls: ['./route-details.component.css']
})
export class RouteDetailsComponent implements OnInit {

  selectedRoute$: Observable<Route>;
  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.store.dispatch(new RetrieveRoute);
    this.selectedRoute$ = this.store.pipe(
      select(selectSelectedRoute)
    );
  }

}
