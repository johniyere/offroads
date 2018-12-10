import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from './auth.service';
import { Login, AuthActionTypes, LoginSuccess, Logout } from './auth.actions';
import { tap, mergeMap, map } from 'rxjs/operators';


@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}

  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    tap((val) => console.log('val')),
    mergeMap((action) =>
      this.authService.login(action.payload).pipe(
        tap((token) => console.log(token)),
        map((token) => new LoginSuccess(token))
      )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType<LoginSuccess>(AuthActionTypes.LoginSuccess),
    tap((action) => this.authService.setToken(action.payload))
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.Logout),
    tap(() => this.authService.logout())
  );
}
