import { Component, OnInit, Input } from '@angular/core';
import { Route } from '../../routes/routes.state';

@Component({
  selector: 'ofr-route-display',
  templateUrl: './route-display.component.html',
  styleUrls: ['./route-display.component.scss']
})
export class RouteDisplayComponent implements OnInit {

  @Input()
  route: Route;

  @Input()
  bookmarkable: Boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
