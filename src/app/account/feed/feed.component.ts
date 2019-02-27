import { Component, OnInit } from '@angular/core';
import { Activities } from 'src/app/generated/graphql';
import { FeedService } from './shared/feed.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ofr-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  activites$: Observable<Activities.Activities[]>;
  constructor(
    private feedService: FeedService
  ) { }

  ngOnInit() {
    this.activites$ = this.feedService.userActivites();
  }

}
