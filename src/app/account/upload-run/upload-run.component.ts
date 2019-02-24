import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { State } from '../account.state';
import { FormBuilder } from '@angular/forms';
import { UploadRun } from '../routes/routes.actions';

export interface Timer {
  hour: number;
  minute: number;
  second: number;
}
@Component({
  selector: 'ofr-upload-run',
  templateUrl: './upload-run.component.html',
  styleUrls: ['./upload-run.component.scss']
})
export class UploadRunComponent implements OnInit {

  time = {
    hour: 1,
    minute: 30,
    second: 0
  };

  constructor(
    public activeModal: NgbActiveModal,
    private store: Store<State>,
    private fb: FormBuilder,
  ) { }

  runForm = this.fb.group({
    title: [null],
    comment: [null],
    time: [this.time]
  });


  ngOnInit() {
  }

  onSubmit() {
    const title = this.runForm.value.title;
    const comment = this.runForm.value.comment;
    const time = this.toSeconds(this.runForm.value.time);

    this.store.dispatch(new UploadRun({title, comment, time}));
  }

  toSeconds(time: Timer) {
    return (time.hour * 60 * 60) + (time.minute * 60) + time.second;
  }

}
