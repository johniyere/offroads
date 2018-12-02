import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  labels$: BehaviorSubject<string> = new BehaviorSubject('0');
  elevationDataset$: Subject<number> = new Subject();

  chartPair$ = combineLatest(this.labels$, this.elevationDataset$);
  constructor() {
  }
}
