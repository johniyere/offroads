import { createSelector } from '@ngrx/store';

import { selectAuthState } from '../core.state';
import { AuthState } from './auth.state';

export const selectAuth = createSelector(
  selectAuthState,
  (state: AuthState) => state
);

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (auth) => auth.isAuthenticated
);
