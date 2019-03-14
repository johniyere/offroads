import { Component, OnInit } from '@angular/core';
import { Activities, FeedGQL } from 'src/app/generated/graphql';
import { FeedService, Feeds } from './shared/feed.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ofr-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  activites$: Observable<Activities.Activities[]>;
  feed$: Observable<Feeds[]>;
  constructor(
    public feedService: FeedService,
  ) { }

  ngOnInit() {
    this.activites$ = this.feedService.userActivites();

    this.feed$ = this.feedService.feed();
  }

}
