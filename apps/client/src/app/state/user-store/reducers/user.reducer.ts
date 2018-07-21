import { Action } from '@ngrx/store';
import { auth } from 'firebase-admin';

import { UserActionTypes, UsersActions } from '../actions/user.actions';

export interface State {
  loaded: boolean;
  next: string;
  users: Array<auth.UserRecord>;
}

export const initialState: State = {
  loaded: true,
  next: '',
  users: []
};

export function reducer(state = initialState, action: UsersActions): State {
  switch (action.type) {
    case UserActionTypes.GetUsers:
      return {
        ...state,
        loaded: false
      };

    case UserActionTypes.LoadUsers:
      return {
        ...state,
        loaded: true,
        next: action.payload.next,
        users: [...state.users, ...action.payload.users]
      };

    case UserActionTypes.NextUsers:
      return {
        ...state,
        loaded: false
      };

    default:
      return state;
  }
}
