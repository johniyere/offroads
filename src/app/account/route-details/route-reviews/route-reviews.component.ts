import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddAReviewComponent } from './add-a-review/add-a-review.component';
import { Review} from '../../routes/routes.state';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../../account.state';
import { selectSelectedRouteRuns, selectSelectedRouteReviews } from '../../routes/routes.selectors';

@Component({
  selector: 'ofr-route-reviews',
  templateUrl: './route-reviews.component.html',
  styleUrls: ['./route-reviews.component.scss']
})
export class RouteReviewsComponent implements OnInit {
  reviews$: Observable<Review[]>;
  constructor(
    private modalService: NgbModal,
    private store: Store<State>,
  ) { }
  ngOnInit() {
    this.reviews$ = this.store.pipe(
      select(selectSelectedRouteReviews)
    );


  }

  open() {
    const modalRef = this.modalService.open(AddAReviewComponent);
  }

}
