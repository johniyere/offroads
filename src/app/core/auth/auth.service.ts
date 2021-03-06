import { Injectable } from '@angular/core';
import { LoginGQL, Login } from '../../generated/graphql';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';

const AUTH_TOKEN_KEY = 'OFR-AUTH';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private loginGql: LoginGQL, private router: Router, private apollo: Apollo) {
  }

  get isAuthenticated() {
    return Boolean(this.authToken);
  }

  get authToken() {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  }

  set authToken(token: string) {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  }

  login(email: string) {
    return this.loginGql.mutate({email}).pipe(
      map((result) => {
        const data = result.data.login as Login.Login;
        return data.token;
      })
    );
  }

  logout() {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    this.apollo.getClient().resetStore();
    this.router.navigate(['/login']);
  }
}
