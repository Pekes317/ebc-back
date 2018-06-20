import { RouteActionTypes, RouteActions } from '../actions/route.actions';

export interface State {
  routeRoles: Array<string>;
}

export const initialState: State = {
  routeRoles: ['all']
};

export function reducer(state = initialState, action: RouteActions): State {
  switch (action.type) {

    case RouteActionTypes.LoadRoute:
      return {
        ...state,
        routeRoles: action.payload.routeRoles
      }

    default:
      return state;
  }
}
