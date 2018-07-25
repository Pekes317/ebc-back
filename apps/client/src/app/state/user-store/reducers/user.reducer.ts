import { auth } from 'firebase-admin';

import { UserActionTypes, UsersActions } from '../actions/user.actions';

export interface State {
  loading: boolean;
  next: string;
  users: Array<auth.UserRecord>;
}

export const initialState: State = {
  loading: false,
  next: '',
  users: []
};

export function reducer(state = initialState, action: UsersActions): State {
  switch (action.type) {
    case UserActionTypes.ClearUsers:
      return initialState;

    case UserActionTypes.ErrorUsers:
      return {
        ...state,
        loading: false
      };

    case UserActionTypes.GetUsers:
      return {
        ...state,
        loading: true
      };

    case UserActionTypes.LoadUsers:
      return {
        ...state,
        loading: false,
        next: action.payload.next,
        users: [...state.users, ...action.payload.users]
      };

    case UserActionTypes.NextUsers:
      return {
        ...state,
        loading: true
      };

    case UserActionTypes.UpdateUser:
      return {
        ...state,
        loading: true
      };

    case UserActionTypes.UpsertUser:
      return {
        ...state,
        loading: false,
        users: [
          ...state.users.map(
            user =>
              user.uid === action.payload.user.uid ? action.payload.user : user
          )
        ]
      };

    default:
      return state;
  }
}
