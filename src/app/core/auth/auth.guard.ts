import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
  Router, CanActivateChild, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectIsAuthenticated } from './auth.selectors';
import { tap } from 'rxjs/operators';
import { AppState } from '../core.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {}

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

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    const url = `/${route.path}`;

    return this.checkLogin(url);
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
