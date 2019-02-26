import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Route } from 'src/app/account/routes/routes.state';

enum ViewTypes {
  LIST = 'List',
  MAP = 'Map'
}

@Component({
  selector: 'ofr-display-routes',
  templateUrl: './display-routes.component.html',
  styleUrls: ['./display-routes.component.scss']
})
export class DisplayRoutesComponent implements OnInit {

  viewTypes = ViewTypes;
  viewType = ViewTypes.LIST;
  @Input()
  routes$: Observable<Route[]>;

  @Input()
  name: string;
  constructor() { }

  ngOnInit() {
  }
}
