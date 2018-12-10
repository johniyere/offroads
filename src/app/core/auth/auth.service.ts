import { Injectable } from '@angular/core';
import { LoginGQL, Login } from '../../generated/graphql';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private loginGql: LoginGQL, private router: Router) {
  }

  get isAuthenticated() {
    const token = localStorage.getItem('token');
    return Boolean(token);
  }

  login(email: string) {
    return this.loginGql.mutate({email}).pipe(
      map((result) => {
        const data = result.data.login as Login.Login;
        return data.token;
      }),
    );
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
