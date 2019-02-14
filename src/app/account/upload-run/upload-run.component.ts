import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { State } from '../account.state';
import { FormBuilder } from '@angular/forms';
import { UploadRun } from '../routes/routes.actions';

@Component({
  selector: 'ofr-upload-run',
  templateUrl: './upload-run.component.html',
  styleUrls: ['./upload-run.component.scss']
})
export class UploadRunComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal,
    private store: Store<State>,
    private fb: FormBuilder,
  ) { }

  runForm = this.fb.group({
    title: [null],
    comment: [null]
  });


  ngOnInit() {
  }

  onSubmit() {
    const title = this.runForm.value.title;
    const comment = this.runForm.value.comment;
    this.store.dispatch(new UploadRun({title, comment}));
  }

}
