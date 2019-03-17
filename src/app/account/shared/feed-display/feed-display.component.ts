import { Component, OnInit, Input } from '@angular/core';
import { Feeds } from '../../feed/shared/feed.service';

@Component({
  selector: 'ofr-feed-display',
  templateUrl: './feed-display.component.html',
  styleUrls: ['./feed-display.component.scss']
})
export class FeedDisplayComponent implements OnInit {

  @Input()
  feed: Feeds;
  constructor() { }

  ngOnInit() {
  }

}
