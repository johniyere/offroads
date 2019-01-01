import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Route } from './routes.state';
import { RouteState } from './routes.state';
import { RouteActions, RouteActionTypes } from './routes.actions';

export const routeAdapter: EntityAdapter<Route> = createEntityAdapter<Route>();

export const initialState: RouteState = routeAdapter.getInitialState({
});

export function routeReducer(state: RouteState = initialState, action: RouteActions): RouteState {
  switch (action.type) {
    case RouteActionTypes.DELETE_ROUTE:
      return routeAdapter.removeOne(action.payload.id, state);
    case RouteActionTypes.LOAD_ROUTES:
      return routeAdapter.addAll(action.payload.routes, state);
    case RouteActionTypes.CLEAR_ROUTES:
      return routeAdapter.removeAll({...state});
    default:
      return state;
  }
}
