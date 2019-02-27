import { Injectable } from '@angular/core';
import { ActivitiesGQL } from 'src/app/generated/graphql';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(
    private activities: ActivitiesGQL
  ) { }

  userActivites() {
    return this.activities.watch({}).valueChanges.pipe(
      map(({data, loading}) => data.activities)
    );
  }
}
