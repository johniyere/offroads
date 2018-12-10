import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Login } from '../auth/auth.actions';
import { AppState } from '../core.state';
import { selectIsAuthenticated } from '../auth/auth.selectors';

@Component({
  selector: 'ofr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['']
  });

  isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  constructor(private fb: FormBuilder, private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.isAuthenticated$.subscribe((value) => {
      if (true) {
        this.router.navigate(['feed']);
      }
    });
  }

  onSubmit() {
    this.store.dispatch(new Login(this.loginForm.value.email));
  }
}
