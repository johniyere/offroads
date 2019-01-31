import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Route } from '../routes/routes.state';
import { Store, select } from '@ngrx/store';
import { State } from '../account.state';
import { selectSelectedRoute } from '../routes/routes.selectors';
import { RetrieveRoute, ClearSelectedRoute } from '../routes/routes.actions';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadRunComponent } from '../upload-run/upload-run.component';

@Component({
  selector: 'ofr-route-details',
  templateUrl: './route-details.component.html',
  styleUrls: ['./route-details.component.css']
})
export class RouteDetailsComponent implements OnInit, OnDestroy {

  selectedRoute$: Observable<Route>;
  constructor(
    private store: Store<State>,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.store.dispatch(new RetrieveRoute);
    this.selectedRoute$ = this.store.pipe(
      select(selectSelectedRoute)
    );
  }

  ngOnDestroy() {
    this.store.dispatch(new ClearSelectedRoute);
  }

  open() {
    const modalRef = this.modalService.open(UploadRunComponent);
    modalRef.componentInstance.name = 'World';
  }

}
