import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Store, select } from '@ngrx/store';
import { selectIsAuthenticated } from './auth.selectors';
import { tap } from 'rxjs/operators';
import { AppState } from '../core.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router, private store: Store<AppState>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
    return this.canActivate(route, state);
  }


  checkLogin(url: string) {
    return this.store.pipe(
      select(selectIsAuthenticated),
      tap((isAuthentcated) => {
        if (!isAuthentcated) {
          this.router.navigate(['login']);
        }
      })
    );
  }
}
