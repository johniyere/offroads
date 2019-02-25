import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddAReviewComponent } from './add-a-review/add-a-review.component';

@Component({
  selector: 'ofr-route-reviews',
  templateUrl: './route-reviews.component.html',
  styleUrls: ['./route-reviews.component.scss']
})
export class RouteReviewsComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
  ) { }
  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(AddAReviewComponent);
  }

}
