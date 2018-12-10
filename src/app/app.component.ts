import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './core/core.state';
import { CheckLogin } from './core/auth/auth.actions';

@Component({
  selector: 'ofr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'offroads';

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new CheckLogin);
  }
}
