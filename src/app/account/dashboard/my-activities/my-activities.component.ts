import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from 'src/app/generated/graphql';
import { DashboardService } from '../shared/dashboard.service';
import { Feeds } from '../../feed/shared/feed.service';

@Component({
  selector: 'ofr-my-activities',
  templateUrl: './my-activities.component.html',
  styleUrls: ['./my-activities.component.scss']
})
export class MyActivitiesComponent implements OnInit {

  activities$: Observable<Feeds[]>;
  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.activities$ = this.dashboardService.activities();
  }

}
