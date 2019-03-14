import { Injectable } from '@angular/core';
import { ActivitiesGQL, FeedGQL, Feed } from 'src/app/generated/graphql';
import { map } from 'rxjs/operators';

export type Feeds = FeedCreatedRoute | FeedRun;

export type FeedCreatedRoute = Feed.CreatedRoutes & { createdBy: { id: string, name: string}};
export type FeedRun = (Feed.Runs & { createdBy: { id: string, name: string}}) ;
@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(
    private activities: ActivitiesGQL,
    private feedGQL: FeedGQL
  ) { }

  userActivites() {
    return this.activities.watch({}).valueChanges.pipe(
      map(({data, loading}) => data.activities)
    );
  }

  feed() {
    return this.feedGQL.watch({}).valueChanges.pipe(
      map(({data, loading}) => data.me.following),
      map((following) => {
        let feed: Feeds[] = [];

        following.forEach((follow) => {

          follow.createdRoutes.forEach((cr) => {
            feed = [
              ...feed,
              {
                ...cr,
                createdAt: new Date(cr.createdAt),
                createdBy: {
                  id: follow.id,
                  name: follow.name
                }
              },
            ];
          });
          follow.runs.forEach((r) => {
            feed = [
              ...feed,
              {
                ...r,
                createdAt: new Date(r.createdAt),
                createdBy: {
                  id: follow.id,
                  name: follow.name
                }
              }
            ];
          });
        });

        feed.sort((a, b) => a.createdAt.getMilliseconds() - b.createdAt.getMilliseconds());
        return feed;
      })
    );
  }

  isFeedRun(feed: Feeds): feed is FeedRun {
    return (<FeedRun>feed).route !== undefined;
  }
}


