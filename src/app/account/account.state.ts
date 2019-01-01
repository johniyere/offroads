import { RouteState } from './routes/routes.state';
import { ActionReducerMap, ActionReducer, createFeatureSelector } from '@ngrx/store';
import { routeReducer } from './routes/routes.reducer';
import { AppState } from 'src/app/core/core.state';


export interface AccountState {
  routes: RouteState;
}

export const reducer: ActionReducerMap<AccountState> = {
  routes: routeReducer
};

export interface State extends AppState {
  account: AccountState;
}

export const selectAccount = createFeatureSelector<State, AccountState>(
  'account'
);
