import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Route } from 'src/app/account/routes/routes.state';

@Component({
  selector: 'ofr-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  @Input()
  routes$: Observable<Route[]>;

  @Input()
  name: string;
  constructor() { }

  ngOnInit() {
  }

}
