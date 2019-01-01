import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Route } from './routes.model';
import { RouteState } from './routes.state';
import { RouteActions, RouteActionTypes } from './routes.actions';

export const routeAdapter: EntityAdapter<Route> = createEntityAdapter<Route>();

export const initialState: RouteState = routeAdapter.getInitialState({
});

export function routeReducer(state: RouteState = initialState, action: RouteActions): RouteState {
  switch (action.type) {
    case RouteActionTypes.DELETE_ROUTE:
      return routeAdapter.removeOne(action.payload.id, state);
    default:
      return state;
  }
}
