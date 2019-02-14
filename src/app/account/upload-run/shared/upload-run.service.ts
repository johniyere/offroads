import { Injectable } from '@angular/core';
import { UploadRunGQL, UploadRun } from 'src/app/generated/graphql';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadRunService {

  constructor(private uploadRunGQL: UploadRunGQL) { }

  uploadRun(title: string, comment: string, routeId: string) {
    return this.uploadRunGQL.mutate({title, comment, routeId}).pipe(
      map((result) => result.data.uploadRun as UploadRun.UploadRun)
    );
  }
}
