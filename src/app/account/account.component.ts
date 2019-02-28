import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../core/core.state';
import { Logout } from '../core/auth/auth.actions';

@Component({
  selector: 'ofr-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new Logout);
  }

}
