import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../editor.state';
import { CreateNewRoute } from '../editor.actions';

@Component({
  selector: 'ofr-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
  }

  createRoute() {
    this.store.dispatch(new CreateNewRoute);
  }

}
