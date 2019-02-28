import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from 'src/app/generated/graphql';
import { DashboardService } from '../shared/dashboard.service';

@Component({
  selector: 'ofr-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  followers$: Observable<Dashboard.Followers[]>;
  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.followers$ = this.dashboardService.followers();
  }
}
