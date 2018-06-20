import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromRouter from '@ngrx/router-store';

import { environment } from '../../../environments/environment';
import { RouterState } from '../shared/router-state-util';
import * as formRouteGuard from './route-guard.reducer';

export interface State {
  route: fromRouter.RouterReducerState<RouterState>;
  guard: formRouteGuard.State;
}

export const reducers: ActionReducerMap<State> = {
  route:  fromRouter.routerReducer,
  guard: formRouteGuard.reducer
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger, storeFreeze] : [];

export const getRouter = createFeatureSelector<fromRouter.RouterReducerState<RouterState>>('router');

export const getRouterState = createSelector(
  getRouter,
  (routeState: fromRouter.RouterReducerState<RouterState>) => routeState
);