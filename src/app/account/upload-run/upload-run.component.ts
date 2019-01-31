import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ofr-upload-run',
  templateUrl: './upload-run.component.html',
  styleUrls: ['./upload-run.component.css']
})
export class UploadRunComponent implements OnInit {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
