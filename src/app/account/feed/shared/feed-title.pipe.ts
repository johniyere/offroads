import { Pipe, PipeTransform } from '@angular/core';
import { Feeds, FeedService } from './feed.service';

@Pipe({
  name: 'feedTitle'
})
export class FeedTitlePipe implements PipeTransform {

  constructor (private feedService: FeedService) {}
  transform(value: Feeds, pos: string = 'subtitle'): any {

    const isTitle = pos.toLowerCase() === 'title';
    const isFeedRun = this.feedService.isFeedRun(value);
    if (isTitle) {
      if (isFeedRun) {
        return 'uploaded a run';
      } else {
        return 'created a route';
      }
    } else {
      if (isFeedRun) {
        return 'uploaded at';
      } else {
        return 'created at';
      }
    }
  }

}
