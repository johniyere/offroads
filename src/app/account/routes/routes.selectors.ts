import { routeAdapter } from './routes.reducer';
import { createSelector } from '@ngrx/store';
import { AccountState, selectAccount } from '../account.state';

const { selectAll, selectEntities } = routeAdapter.getSelectors();

export const selectRoutes = createSelector(
  selectAccount,
  (state: AccountState) => state.routes
);

export const selectAllRoutes = createSelector(
  selectRoutes,
  selectAll
);
export const selectRoutesEntities = createSelector(
  selectRoutes,
  selectEntities
);
