import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from 'src/app/generated/graphql';
import { DashboardService } from '../shared/dashboard.service';

@Component({
  selector: 'ofr-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  following$: Observable<Dashboard.Following[]>;
  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.following$ = this.dashboardService.following();
  }

}
