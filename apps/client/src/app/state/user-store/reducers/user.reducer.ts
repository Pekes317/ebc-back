import { Action } from '@ngrx/store';
import { auth } from 'firebase-admin'

import { UserActionTypes, UsersActions } from '../actions/user.actions';

export interface State {
  users: Array<auth.UserRecord>;
  next: string;
}

export const initialState: State = {
  users: [],
  next: ''
};

export function reducer(state = initialState, action: UsersActions): State {
  switch (action.type) {
    case UserActionTypes.LoadUsers:
      return {
        ...state,
        users: action.payload.users,
        next: action.payload.next
      }

    default:
      return state;
  }
}
