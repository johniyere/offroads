import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../shared/dashboard.service';
import { Observable } from 'rxjs';
import { Dashboard } from 'src/app/generated/graphql';

@Component({
  selector: 'ofr-bookmarked-trails',
  templateUrl: './bookmarked-trails.component.html',
  styleUrls: ['./bookmarked-trails.component.scss']
})
export class BookmarkedTrailsComponent implements OnInit {

  bookmarkedTrails$: Observable<Dashboard.BookmarkedTrails[]>;
  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.bookmarkedTrails$ = this.dashboardService.bookmarkedTrails();
  }

}
