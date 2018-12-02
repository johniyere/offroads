import { Injectable } from '@angular/core';
import { LoginGQL, Login } from '../generated/graphql';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private loginGql: LoginGQL) {
  }

  get isAuthenticated() {
    const token = localStorage.getItem('token');
    return Boolean(token);
  }

  login(email: string) {
    return this.loginGql.mutate({email}).pipe(
      map((result) => {
        const data = result.data.login as Login.Login;
        localStorage.setItem('token', data.token);
        return data.user;
      }),
    );
  }


  logout() {
    localStorage.removeItem('token');
  }
}
