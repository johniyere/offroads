import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../core/core.state';
import { RouteState } from './routes/routes.state';
import { routeReducer } from './routes/routes.reducer';

export const selectAccount = createFeatureSelector<State, AccountState>(
  'account'
);

export const reducers: ActionReducerMap<AccountState> = {
  routes: routeReducer
};

export interface AccountState {
  routes: RouteState;
}

export interface State extends AppState {
  account: AccountState;
}
