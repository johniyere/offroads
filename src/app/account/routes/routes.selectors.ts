import { routeAdapter } from './routes.reducer';
import { createSelector } from '@ngrx/store';
import { AccountState, selectAccount } from '../account.state';
import { selectRouterState } from 'src/app/core/core.state';

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

export const selectSelectedRouteId = createSelector(
  selectRouterState,
  (routerState) => routerState && routerState.state.params.id as string
);

export const selectSelectedRoute = createSelector(
  selectRoutes,
  (routes) => routes.selectedRoute
);

export const selectSelectedRouteRuns = createSelector(
  selectSelectedRoute,
  (route) => route.runs
);

export const selectSelectedRouteReviews = createSelector(
  selectSelectedRoute,
  (route) => route.reviews
);

export const selectSelectedRoutePointsAndLines = createSelector(
  selectSelectedRoute,
  (route) => [ route.points, route.lines]
);
