import { Injectable } from '@angular/core';
import { AddAReviewGQL, AddAReview } from 'src/app/generated/graphql';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddAReviewService {

  constructor(private addAReviewGQL: AddAReviewGQL) { }

  addReview(routeId: string, rating: number, comment?: string) {
    return this.addAReviewGQL.mutate({routeId, rating, comment}).pipe(
      map((result) => result.data.addAReview as AddAReview.AddAReview)
    );
  }
}
