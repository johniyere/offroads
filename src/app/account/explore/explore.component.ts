import { Component, OnInit } from '@angular/core';
import { ExploreService } from './shared/explore.service';
import { Observable } from 'rxjs';
import { ExploreRoutes } from 'src/app/generated/graphql';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ofr-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  exploreRoutes$: Observable<ExploreRoutes.Routes[]>;
  constructor(
    private exploreService: ExploreService
  ) { }

  ngOnInit() {
    this.exploreRoutes$ = this.exploreService.routes().pipe(map(({data, loading}) => data.routes));
  }

}
