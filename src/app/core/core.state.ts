import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AuthState } from './auth/auth.state';
import { authReducer } from './auth/auth.reducer';

export interface AppState {

  auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

export const selectAuthState = createFeatureSelector<AppState, AuthState>('auth');
