import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Route } from './routes.state';
import { RouteState } from './routes.state';
import { RouteActions, RouteActionTypes } from './routes.actions';

export const routeAdapter: EntityAdapter<Route> = createEntityAdapter<Route>();

export const initialState: RouteState = routeAdapter.getInitialState({
  selectedRoute: null
});

export function routeReducer(state: RouteState = initialState, action: RouteActions): RouteState {
  switch (action.type) {
    case RouteActionTypes.DELETE_ROUTE:
      return routeAdapter.removeOne(action.payload.id, state);
    case RouteActionTypes.LOAD_ROUTES:
      return routeAdapter.addAll(action.payload.routes, state);
    case RouteActionTypes.CLEAR_ROUTES:
      return routeAdapter.removeAll({...state});
    case RouteActionTypes.RETRIEVE_ROUTE_SUCCESS:
      return { ...state, selectedRoute: action.payload.route };
    case RouteActionTypes.CLEAR_SELECTED_ROUTE:
      return { ...state, selectedRoute: null};
    default:
      return state;
  }
}
