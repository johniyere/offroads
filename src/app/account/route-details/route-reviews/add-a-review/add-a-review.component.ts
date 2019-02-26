import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from 'src/app/account/account.state';
import { AddReview } from 'src/app/account/routes/routes.actions';

@Component({
  selector: 'ofr-add-a-review',
  templateUrl: './add-a-review.component.html',
  styleUrls: ['./add-a-review.component.scss']
})
export class AddAReviewComponent implements OnInit {

  rating = 1;
  constructor(
    public activeModal: NgbActiveModal,
    public fb: FormBuilder,
    private store: Store<State>,
  ) { }


  reviewForm = this.fb.group({
    comment: [null],
  });


  ngOnInit() {
  }

  onSubmit() {
    const comment = this.reviewForm.value.comment;
    const rating = this.rating;
    this.store.dispatch(new AddReview({rating, comment}));
  }

}
