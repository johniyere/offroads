import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from './shared/dashboard.service';
import { Observable } from 'rxjs';
import { CurrentUserRoutes } from 'src/app/generated/graphql';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ofr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentUserRoutes$: Observable<CurrentUserRoutes.CreatedRoutes[]>;
  constructor(private router: Router, private dashboardService: DashboardService) { }

  ngOnInit() {
    this.currentUserRoutes$ = this.dashboardService.currentUserRoutes().pipe(
      map(({data, loading}) => data.me.createdRoutes)
    );
  }

  createRoute() {
    this.router.navigate(['/editor']);
  }

}
