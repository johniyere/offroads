import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadRunComponent } from './upload-run/upload-run.component';
import { Observable } from 'rxjs';
import { Route, Run } from '../../routes/routes.state';
import { Store, select } from '@ngrx/store';
import { State } from '../../account.state';
import { selectSelectedRouteRuns } from '../../routes/routes.selectors';

@Component({
  selector: 'ofr-route-leaderboard',
  templateUrl: './route-leaderboard.component.html',
  styleUrls: ['./route-leaderboard.component.scss']
})
export class RouteLeaderboardComponent implements OnInit {

  runs$: Observable<Run[]>;

  constructor(
    private modalService: NgbModal,
    private store: Store<State>,
  ) { }

  ngOnInit() {
    this.runs$ = this.store.pipe(
      select(selectSelectedRouteRuns)
    );
  }

  open() {
    const modalRef = this.modalService.open(UploadRunComponent);
  }
}
