import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadRunComponent } from '../../upload-run/upload-run.component';

@Component({
  selector: 'ofr-route-leaderboard',
  templateUrl: './route-leaderboard.component.html',
  styleUrls: ['./route-leaderboard.component.scss']
})
export class RouteLeaderboardComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(UploadRunComponent);
  }
}
