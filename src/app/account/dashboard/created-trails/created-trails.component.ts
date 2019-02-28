import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from 'src/app/generated/graphql';
import { DashboardService } from '../shared/dashboard.service';

@Component({
  selector: 'ofr-created-trails',
  templateUrl: './created-trails.component.html',
  styleUrls: ['./created-trails.component.css']
})
export class CreatedTrailsComponent implements OnInit {

  routes$: Observable<Dashboard.CreatedRoutes[]>;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.routes$ = this.dashboardService.createdRoutes();
  }

}
